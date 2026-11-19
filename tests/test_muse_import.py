import asyncio
import json
from datetime import datetime, timedelta, timezone

import httpx

from src.models import MuseSourceConfig
from src.scrapers.muse import MuseScraper


def test_muse_reads_entire_file_and_reports_invalid(tmp_path):
    now = datetime.now(timezone.utc)
    file = tmp_path / "news.json"
    file.write_text(json.dumps({"items": [
        {"title": "移动算力", "url": "https://example.com/a", "source": "来源", "published_at": now.isoformat(), "summary": "可核验的信息"},
        {"title": "旧闻", "url": "https://example.com/old", "source": "来源", "published_at": (now-timedelta(hours=26)).isoformat()},
        {"title": "未来新闻", "url": "https://example.com/future", "source": "来源", "published_at": (now+timedelta(days=1)).isoformat()},
        {"title": "缺少时区", "url": "https://example.com/b", "source": "来源", "published_at": "2026-11-17T08:00:00"},
        {"title": "无效地址", "url": "file:///tmp/a", "source": "来源", "published_at": now.isoformat()},
    ]}, ensure_ascii=False), encoding="utf-8")
    async def run():
        async with httpx.AsyncClient() as client:
            return await MuseScraper(MuseSourceConfig(enabled=True, path=str(file), profile=["radar-token"]), client).fetch(now-timedelta(hours=25))
    result = asyncio.run(run())
    assert result.status == "partial_failure"
    assert len(result.items) == 2
    assert [item.title for item in result.items] == ["移动算力", "旧闻"]
    assert result.items[0].title == "移动算力"
    assert result.items[0].metadata["discovery_source"] == "Muse"
    assert result.items[0].metadata["material_status"] == "search_excerpt"
    assert result.items[0].profile == ["radar-token"]
    assert len(result.failures) == 2


def test_bad_json_reports_failure(tmp_path):
    file = tmp_path / "news.json"
    file.write_text("not json", encoding="utf-8")
    async def run():
        async with httpx.AsyncClient() as client:
            return await MuseScraper(MuseSourceConfig(path=str(file)), client).fetch(datetime.now(timezone.utc))
    result = asyncio.run(run())
    assert result.status == "failure"
    assert "Muse 文件" in result.failures
