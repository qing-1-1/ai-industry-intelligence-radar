import json
from datetime import datetime, timezone
from types import SimpleNamespace

from src.models import Config, ContentItem, ContentAnalysis, ContentArtifact, ContentBlock, ClassificationResult, ProcessingResult
from src.radar_export import export_radar


def test_radar_exports_real_items_and_preserves_archive(tmp_path):
    config = Config.model_validate(json.loads(open('data/config.radar.json', encoding='utf-8').read()))
    moment = datetime(2026, 1, 1, tzinfo=timezone.utc)
    item = ContentItem(id='rss:test:1', source_type='rss', title='Original', url='https://example.com/a',
        published_at=moment, fetched_at=moment, metadata={'feed_name': 'Example'},
        processing=ProcessingResult(classification=ClassificationResult(profile='radar-router', method='source_override'),
            analysis=ContentAnalysis(score=8, reason='relevant', summary='fallback', tags=['Gateway']),
            artifacts={'zh': ContentArtifact(language='zh', title='模型网关', blocks=[ContentBlock(id='summary', title='摘要', content='实际摘要', primary=True), ContentBlock(id='details', title='关键数据', content='实际数字')])}))
    (tmp_path / '2025-12-31.json').write_text('{}', encoding='utf-8')
    report = SimpleNamespace(outcomes=[SimpleNamespace(source_name='GDELT', error='timeout')])
    data = export_radar(config, [item], 5, report, tmp_path)
    assert data['collected'] == 5 and data['selected'] == 1
    assert data['items'][0]['category'] == 'AI Model Router'
    assert data['items'][0]['summary'] == '实际摘要'
    assert data['items'][0]['sections'] == [{'title': '摘要', 'content': '实际摘要'}, {'title': '关键数据', 'content': '实际数字'}]
    assert data['items'][0]['fetched_at'] == moment.isoformat()
    assert data['failures'][0]['source'] == 'GDELT'
    assert '2025-12-31' in json.loads((tmp_path / 'index.json').read_text(encoding='utf-8'))['dates']
    assert (tmp_path / '2025-12-31.json').exists()


def test_radar_config_has_bounded_candidates_and_distinct_searches():
    config = Config.model_validate(json.loads(open('data/config.radar.json', encoding='utf-8').read()))
    assert config.collection.time_window_hours == 25
    assert config.collection.candidate_limit == 120
    assert len(config.sources.google_news.queries) >= 5
    assert all(not s.content_extractor for s in config.sources.rss)


def test_same_endpoint_model_fallback(monkeypatch):
    import asyncio
    from src.ai import client as module
    calls = []
    class Fake:
        def __init__(self, config): self.config = config
        async def complete(self, *args):
            calls.append((self.config.model, self.config.base_url, self.config.api_key_env))
            if len(calls) == 1: raise RuntimeError("unavailable")
            return "ok"
    monkeypatch.setattr(module, "_create_single_client", Fake)
    config = Config.model_validate(json.loads(open("data/config.radar.json", encoding="utf-8").read()))
    assert asyncio.run(module.create_ai_client(config.ai).complete("system", "user")) == "ok"
    assert [x[0] for x in calls] == ["sensenova-6.8-flash", "deepseek-flash"]
    assert calls[0][1:] == calls[1][1:]
