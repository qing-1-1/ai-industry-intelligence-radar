import asyncio
import json
from datetime import datetime, timezone
from pathlib import Path
from types import SimpleNamespace

import pytest

from src.ai.enricher import ContentEnricher
from src.models import ClassificationResult, Config, ContentAnalysis, ContentItem, ProcessingResult
from src.processing.profiles import ProfileRegistry
from src.radar_export import export_radar


@pytest.mark.parametrize(('profile','label','headings'), [
    ('radar-token', '运营商 Token 与模型服务', ('业务动态', '产品与计费', '适用范围')),
    ('radar-compute', '运营商算力与智算', ('算力动态', '资源与技术', '部署及进展')),
    ('radar-router', '模型路由与 AI 网关', ('事件概览', '路由与能力', '适用与限制')),
    ('radar-platform', '运营商 AI 产品与应用', ('产品动态', '能力与场景', '落地与合作')),
    ('radar-policy', '政策、采购与招投标', ('事件概览', '采购或政策要点', '时间与进展')),
])
def test_operator_profile_to_export(profile, label, headings, tmp_path):
    config = Config.model_validate_json(Path('data/config.radar.json').read_text(encoding='utf-8'))
    profiles = ProfileRegistry.load(Path('profiles'), config.processing.default_profile)
    item = ContentItem(id='rss:test:1', source_type='rss', title='运营商新闻', url='https://example.com/news',
        content='来源材料包含可验证的业务、细节和时间信息。', published_at=datetime.now(timezone.utc),
        metadata={'feed_name': '示例来源', 'material_status': 'article_extracted'},
        processing=ProcessingResult(classification=ClassificationResult(profile=profile, method='source_override'),
            analysis=ContentAnalysis(score=8, reason='相关', summary='业务动态', tags=['运营商'])))
    async def complete(**kwargs):
        assert headings[0] in kwargs['system']
        return json.dumps({'title':'运营商新闻', 'blocks':[
            {'id':key, 'title':heading, 'content':'来源提供的具体事实。', 'source_refs':[]}
            for key,heading in zip(('summary','details','context'),headings)]}, ensure_ascii=False)
    asyncio.run(ContentEnricher(SimpleNamespace(complete=complete), profiles, ['zh'])._enrich_item(item))
    exported = export_radar(config, [item], 1, None, tmp_path)['items'][0]
    assert exported['category'] == label
    assert exported['material_status'] == 'article_extracted'
    assert [section['title'] for section in exported['sections']] == list(headings)
