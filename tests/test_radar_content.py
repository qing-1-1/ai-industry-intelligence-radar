import asyncio
from datetime import datetime, timezone
from unittest.mock import AsyncMock

from src.models import ContentItem
from src.radar_content import expand_selected_articles


def item(kind, url, content='short'):
    return ContentItem(id=kind, source_type=kind, title='test', url=url, content=content, published_at=datetime.now(timezone.utc))


def test_expand_is_bounded_and_only_follows_direct_gdelt():
    gdelt = item('gdelt', 'https://example.com/news')
    second = item('gdelt', 'https://example.com/another')
    google = item('google_news', 'https://news.google.com/rss/articles/abc')
    extractor = AsyncMock()
    extractor.extract.return_value = '可核实的正文' * 60
    asyncio.run(expand_selected_articles([gdelt, second, google], 1, extractor=extractor, client=object()))
    assert gdelt.metadata['material_status'] == 'article_extracted'
    assert gdelt.content.startswith('可核实')
    assert second.content == 'short' and google.content == 'short'
    assert extractor.extract.await_count == 1


def test_expand_failure_keeps_original_excerpt():
    news = item('gdelt', 'https://example.com/news')
    extractor = AsyncMock()
    extractor.extract.side_effect = RuntimeError('not accessible')
    asyncio.run(expand_selected_articles([news], 1, extractor=extractor, client=object()))
    assert news.content == 'short'
    assert news.metadata['material_status'] == 'search_excerpt'


def test_chinese_title_fallback_only_translates_unlocalized_titles():
    from src.radar_content import localize_radar_titles

    foreign = item('gdelt', 'https://example.com/news')
    chinese = item('rss', 'https://example.com/local')
    chinese.title = '运营商发布新平台'
    client = AsyncMock()
    client.complete.return_value = '{"0": "运营商发布测试平台"}'
    asyncio.run(localize_radar_titles([foreign, chinese], client))
    assert foreign.metadata['title_zh'] == '运营商发布测试平台'
    assert 'title_zh' not in chinese.metadata
    assert client.complete.await_count == 1


def test_article_image_uses_https_source_metadata():
    from src.radar_content import article_image

    html = '<meta property="og:image" content="/cover.jpg">'
    assert article_image(html, 'https://example.com/post') == 'https://example.com/cover.jpg'
    assert article_image(html, 'http://example.com/post') is None
