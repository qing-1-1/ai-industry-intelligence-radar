"""Export Horizon's selected items as a static, date-indexed radar archive."""
import json
from datetime import datetime
from pathlib import Path
from zoneinfo import ZoneInfo

LABELS = {'radar-router': '模型路由与 AI 网关', 'radar-token': '运营商 Token 与模型服务', 'radar-compute': '运营商算力与智算', 'radar-platform': '运营商 AI 产品与应用', 'radar-policy': '政策、采购与招投标', 'radar-finance': '财报与经营', 'radar-industry': '其他 AI 行业新闻'}

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
        records.append({'title': artifact.title if artifact else item.title, 'url': str(item.url),
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
    for method, source in [('Google News', config.sources.google_news), ('GDELT', config.sources.gdelt)]:
        if source:
            queries = getattr(source, 'queries', None) or [source.query]
            sources.extend({'name':q,'method':method+' 搜索发现','category':'综合','enabled':source.enabled} for q in queries)
    failures = [{'source':o.source_name,'error':o.error} for o in (report.outcomes if report else []) if o.error]
    data={'date':now.date().isoformat(),'updated_at':now.isoformat(),'collected':collected,'selected':len(records),'sources':sources,'failures':failures,'items':records}
    (directory / f'{data["date"]}.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
    dates=sorted((p.stem for p in directory.glob('????-??-??.json')),reverse=True)
    (directory/'index.json').write_text(json.dumps({'dates':dates},ensure_ascii=False),encoding='utf-8')
    return data
