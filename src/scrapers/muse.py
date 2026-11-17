"""Import externally discovered news through a validated, local JSON inbox."""
import hashlib
import json
import re
from datetime import datetime, timezone
from pathlib import Path

from .base import BaseScraper, FetchResult
from ..models import ContentItem, SourceType
from ..radar_content import image_url
from ..url_security import validate_http_url


class MuseScraper(BaseScraper):
    def __init__(self, config, http_client):
        super().__init__({}, http_client)
        self.muse = config

    async def fetch(self, since):
        result = FetchResult()
        try:
            payload = json.loads(Path(self.muse.path).read_text(encoding="utf-8-sig"))
            if not isinstance(payload, dict) or not isinstance(payload.get("items"), list):
                raise ValueError("expected a JSON object containing an items array")
        except (OSError, ValueError) as exc:
            result.fail("Muse 文件", exc)
            return result
        result.successful = 1
        for index, row in enumerate(payload["items"], 1):
            try:
                if not isinstance(row, dict):
                    raise ValueError("item must be an object")
                title, url, source, published = (row.get(k) for k in ("title", "url", "source", "published_at"))
                if not all(isinstance(v, str) and v.strip() for v in (title, url, source, published)):
                    raise ValueError("title, url, source and published_at are required")
                url = validate_http_url(url.strip())
                moment = datetime.fromisoformat(published.strip().replace("Z", "+00:00"))
                if moment.tzinfo is None or not re.search(r"T\d{2}:\d{2}", published):
                    raise ValueError("published_at must include time and timezone")
                if moment < since or moment > datetime.now(timezone.utc):
                    continue
                summary = row.get("summary", "")
                if not isinstance(summary, str):
                    raise ValueError("summary must be text")
                meta = {"feed_name": source.strip(), "discovery_source": "Muse", "material_status": "search_excerpt" if summary.strip() else "title_only"}
                if preview := image_url(row.get("image_url"), url):
                    meta["image_url"] = preview
                result.items.append(ContentItem(
                    id="rss:muse:" + hashlib.sha256(url.encode()).hexdigest()[:20],
                    source_type=SourceType.RSS, title=title.strip(), url=url,
                    content=summary.strip() or None, published_at=moment,
                    profile=self.muse.profile, metadata=meta,
                ))
            except (ValueError, TypeError) as exc:
                result.fail(f"Muse 第 {index} 条", exc)
        return result
