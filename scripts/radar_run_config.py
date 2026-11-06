"""Prepare a bounded runtime configuration without changing tracked settings."""
import json
import os
from pathlib import Path

limit = int(os.environ.get("RADAR_MAX_CANDIDATES", "120"))
if not 1 <= limit <= 120:
    raise ValueError("RADAR_MAX_CANDIDATES must be between 1 and 120")
config = json.loads(Path("data/config.radar.json").read_text(encoding="utf-8"))
config["collection"]["candidate_limit"] = limit
Path(os.environ["RUNNER_TEMP"], "radar-config.json").write_text(
    json.dumps(config, ensure_ascii=False, indent=2), encoding="utf-8"
)
