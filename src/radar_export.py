"""Export Horizon's selected items as a static, date-indexed radar archive."""
import json
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo
from urllib.parse import parse_qsl, urlencode, urlsplit, urlunsplit

LABELS = {'radar-router': '模型路由与 AI 网关', 'radar-token': '运营商 Token 与模型服务', 'radar-compute': '运营商算力与智算', 'radar-platform': '运营商 AI 产品与应用', 'radar-policy': '政策、采购与招投标', 'radar-finance': '财报与经营', 'radar-industry': '其他 AI 行业新闻'}

def _article_key(record):
    raw = str(record.get("url") or "")
    parts = urlsplit(raw)
    query = urlencode([(k, v) for k, v in parse_qsl(parts.query, keep_blank_values=True)
                       if not k.lower().startswith("utm_") and k.lower() not in {"gclid", "fbclid"}])
    return urlunsplit((parts.scheme.lower(), parts.netloc.lower(), parts.path, query, ""))


def export_radar(config, items, collected, report, directory=Path('docs/radar-data')):
    now = datetime.now(ZoneInfo('Asia/Shanghai'))
    directory.mkdir(parents=True, exist_ok=True)
    records = []
    for item in items:
        processing = item.processing
        if not processing or not processing.analysis:
            continue
        artifact = processing.artifacts.get('zh')
        block = next((b for b in artifact.blocks if b.primary or b.id == 'summary'), None) if artifact else None
        sections = [{'title': b.title, 'content': b.content} for b in artifact.blocks if b.content.strip()] if artifact else []
        profile = processing.classification.profile
        records.append({'title': item.metadata.get('title_zh') or (artifact.title if artifact else item.title),
            'original_title': item.title, 'image_url': item.metadata.get('image_url'), 'url': str(item.url),
            'briefing': 'ai' if profile in {'radar-industry', 'radar-router'} else 'operator',
            'source': item.metadata.get('feed_name') or item.metadata.get('source_name') or item.metadata.get('repo') or item.author or item.source_type.value,
            'published_at': item.published_at.isoformat(), 'fetched_at': item.fetched_at.isoformat(),
            'category': LABELS.get(processing.classification.profile, processing.classification.profile),
            'tags': processing.analysis.tags, 'score': processing.analysis.score,
            'material_status': item.metadata.get('material_status') or ('search_excerpt' if item.source_type.value in ('google_news', 'gdelt') else 'source_content'),
            'sections': sections, 'summary': block.content if block else processing.analysis.summary})
    sources = []
    for source in config.sources.rss:
        sources.append({'name':source.name,'method':'RSS','category':source.category or '综合','enabled':source.enabled})
    for source in config.sources.github:
        sources.append({'name':f'{source.owner}/{source.repo}','method':'GitHub Releases','category':'开源','enabled':source.enabled})
    sources.extend({'name':s.name,'method':'热榜发现','category':'热榜','enabled':s.enabled} for s in config.sources.hot_boards)
    for method, source in [('Google News', config.sources.google_news), ('GDELT', config.sources.gdelt)]:
        if source:
            queries = getattr(source, 'queries', None) or [source.query]
            sources.extend({'name':q,'method':method+' 搜索发现','category':'综合','enabled':source.enabled} for q in queries)
    failures = [{'source':o.source_name,'error':o.error} for o in (report.outcomes if report else []) if o.error]
    # A Muse push and a scheduled run may both publish on the same day.
    # Preserve the existing edition, replacing only articles seen again.
    archive = directory / f"{now.date().isoformat()}.json"
    if archive.exists():
        prior = json.loads(archive.read_text(encoding="utf-8"))
        new_keys = {_article_key(record) for record in records if record.get("url")}
        records.extend(record for record in prior.get("items", [])
                       if record.get("url") and _article_key(record) not in new_keys)
    data={'date':now.date().isoformat(),'updated_at':now.isoformat(),'collected':collected,'selected':len(records),'sources':sources,'failures':failures,'items':records}
    (directory / f'{data["date"]}.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
    paths = sorted(directory.glob('????-??-??.json'), reverse=True)
    briefings = {'operator': [], 'ai': []}
    for path in paths:
        try:
            day = data if path.stem == data['date'] else json.loads(path.read_text(encoding='utf-8'))
        except (OSError, json.JSONDecodeError):
            continue
        sections = {'ai' if item.get('category') in (LABELS['radar-industry'], LABELS['radar-router'])
                    else (item.get('briefing') or 'operator') for item in day.get('items', [])}
        for name in briefings.keys() & sections:
            briefings[name].append(path.stem)
    (directory/'index.json').write_text(json.dumps({'dates': [path.stem for path in paths], 'briefings': briefings}, ensure_ascii=False), encoding='utf-8')
    return data
