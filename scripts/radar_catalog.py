"""Generate the public source catalog directly from the runtime configuration."""
import json
from pathlib import Path

config = json.loads(Path('data/config.radar.json').read_text(encoding='utf-8'))['sources']
sources = [{'name': s['name'], 'method': 'RSS', 'category': s.get('category', '综合'), 'enabled': s.get('enabled', True)} for s in config.get('rss', [])]
sources += [{'name': f"{s['owner']}/{s['repo']}", 'method': 'GitHub Releases', 'category': '开源', 'enabled': s.get('enabled', True)} for s in config.get('github', [])]
sources += [{'name': s['name'], 'method': '热榜发现', 'category': '热榜', 'enabled': s.get('enabled', True)} for s in config.get('hot_boards', [])]
for key, method in [('google_news','Google News'), ('gdelt','GDELT')]:
    s=config.get(key)
    if s:
        sources += [{'name': q, 'method': method+' 搜索发现', 'category':'综合', 'enabled': s.get('enabled',False)} for q in s.get('queries',[]) or [s['query']]]
output=Path('docs/radar-data/sources.json'); output.parent.mkdir(parents=True,exist_ok=True)
output.write_text(json.dumps(sources,ensure_ascii=False,indent=2),encoding='utf-8')
