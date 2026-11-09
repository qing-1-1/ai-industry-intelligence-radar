"""Print a compact, secret-free report for manual dry runs."""
import json
import os
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

path = Path('docs/radar-data') / f"{datetime.now(ZoneInfo('Asia/Shanghai')).date()}.json"
marker = Path(os.environ['RUNNER_TEMP']) / 'radar-run-start'
if not path.exists() or path.stat().st_mtime < marker.stat().st_mtime:
    print('No daily archive was generated.')
else:
    data = json.loads(path.read_text(encoding='utf-8'))
    print(f"Collected: {data['collected']}; selected: {data['selected']}")
    for item in data['items']:
        print('Item:', item['category'], '|', item.get('material_status'), '|', item['title'])
        print('  Sections:', ', '.join(section['title'] for section in item.get('sections', [])))
