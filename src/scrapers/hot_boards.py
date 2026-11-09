"""Discover ranked items, retaining only articles with a verifiable recent timestamp."""
import hashlib
import os
import re
from datetime import datetime, timezone
from zoneinfo import ZoneInfo
from urllib.parse import urlsplit

from bs4 import BeautifulSoup
from .base import BaseScraper, FetchResult
from .rss import RSSScraper
from ..extractors import ExtractorRegistry
from ..models import ContentItem, SourceType


class HotBoardScraper(BaseScraper):
    def __init__(self, board, http_client):
        super().__init__({}, http_client)
        self.board = board

    async def fetch(self, since):
        result = FetchResult()
        await result.collect(self.board.name, self._fetch_items(since))
        return result

    async def _fetch_items(self, since):
        headers = {'User-Agent': 'Mozilla/5.0 Horizon/1.0'}
        params = {}
        if self.board.kind == 'zhihu':
            secret = os.environ.get(self.board.api_key_env or '', '').strip()
            if not secret:
                raise ValueError('Zhihu access secret is not configured')
            headers.update({'Authorization': f'Bearer {secret}', 'X-Request-Timestamp': str(int(datetime.now(timezone.utc).timestamp()))})
            params['Limit'] = self.board.fetch_limit
        response = await self.client.get(str(self.board.url), params=params, headers=headers, follow_redirects=False)
        response.raise_for_status()
        if self.board.kind == 'zhihu':
            payload = response.json()
            if payload.get('Code') != 0:
                raise ValueError('Zhihu API returned an error code: ' + str(payload.get('Code')))
            rows = [(x.get('Title', ''), x.get('Url', ''), x.get('Summary', '')) for x in payload.get('Data', {}).get('Items', [])[:self.board.fetch_limit]]
        else:
            soup = BeautifulSoup(response.text, 'html.parser')
            rows = []
            for row in soup.select('table tbody tr')[:self.board.fetch_limit]:
                link = row.select_one('a[itemid]')
                if link:
                    rows.append((link.get_text(' ', strip=True), link.get('href', ''), ''))
        items = []
        extractor = ExtractorRegistry({}).get('trafilatura')
        for title, url, summary in rows:
            if not title or (self.board.include_keywords and not RSSScraper._matches_keywords(title + ' ' + summary, self.board.include_keywords)):
                continue
            host = urlsplit(url).hostname or ''
            permitted = {'zhihu': ('zhihu.com',), 'tophub': ('thepaper.cn', '36kr.com', 'huxiu.com')}
            if urlsplit(url).scheme != 'https' or not any(host == x or host.endswith('.' + x) for x in permitted[self.board.kind]):
                continue
            try:
                article = await self.client.get(url, headers={'User-Agent': 'Mozilla/5.0 Horizon/1.0'}, follow_redirects=False, timeout=12)
                article.raise_for_status()
                html = BeautifulSoup(article.text, 'html.parser')
                published = None
                for tag in html.find_all('meta'):
                    if (tag.get('property') or tag.get('name') or '').lower() in ('article:published_time', 'pubdate', 'publishdate', 'datepublished', 'publish_time'):
                        value = tag.get('content', '')
                        if not re.search(r'\d{2}:\d{2}', value):
                            continue
                        try:
                            published = datetime.fromisoformat(value.replace('Z', '+00:00'))
                            if published.tzinfo is None:
                                published = published.replace(tzinfo=ZoneInfo('Asia/Shanghai'))
                            break
                        except ValueError:
                            continue
                if not published or published < since or published > datetime.now(timezone.utc):
                    continue
                full = await extractor.extract(url, self.client)
            except Exception:
                continue
            items.append(ContentItem(id='rss:hot:' + hashlib.sha256(url.encode()).hexdigest()[:20],
                source_type=SourceType.RSS, title=title, url=url, content=full or summary or None,
                published_at=published, profile=self.board.profile,
                metadata={'feed_name': self.board.name, 'material_status': 'article_extracted' if full else ('search_excerpt' if summary else 'title_only'), 'category': '热榜发现'}))
        return items
