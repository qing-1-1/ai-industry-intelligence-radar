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
