"""Bounded, best-effort enrichment of directly linked news articles."""
from urllib.parse import urlsplit

import httpx

from .extractors import ExtractorRegistry
from .models import SourceType


async def expand_selected_articles(items, limit, *, extractor=None, client=None):
    """Expand direct GDELT links only; Google News links remain search excerpts."""
    extractor = extractor or ExtractorRegistry({}).get('trafilatura')
    candidates = [item for item in items if item.source_type == SourceType.GDELT
                  and urlsplit(str(item.url)).scheme in ('http', 'https')
                  and not urlsplit(str(item.url)).path.lower().endswith('.pdf')][:limit]
    if not candidates:
        return

    async def process(http):
        for item in candidates:
            item.metadata['material_status'] = 'search_excerpt'
            try:
                text = await extractor.extract(str(item.url), http)
            except Exception:
                continue
            if text and len(text.strip()) >= 200:
                item.content = text
                item.metadata['material_status'] = 'article_extracted'

    if client is not None:
        await process(client)
    else:
        async with httpx.AsyncClient(timeout=15.0) as http:
            await process(http)
