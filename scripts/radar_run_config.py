"""Prepare a runtime configuration with an optional candidate cap."""
import json
import os
from pathlib import Path

raw_limit = os.environ.get("RADAR_MAX_CANDIDATES", "").strip()
limit = int(raw_limit) if raw_limit else None
if limit is not None and limit < 1:
    raise ValueError("RADAR_MAX_CANDIDATES must be a positive integer or empty")
config = json.loads(Path("data/config.radar.json").read_text(encoding="utf-8"))
config["collection"]["candidate_limit"] = limit
Path(os.environ["RUNNER_TEMP"], "radar-config.json").write_text(
    json.dumps(config, ensure_ascii=False, indent=2), encoding="utf-8"
)
