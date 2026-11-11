import asyncio
from datetime import datetime, timedelta, timezone
import httpx
from src.models import HotBoardConfig
from src.scrapers.hot_boards import HotBoardScraper


def test_tophub_limit_dated_articles_and_operator_filter(monkeypatch):
    now = datetime.now(timezone.utc)
    rows = ''.join(f'<tr><td><a itemid="{n}" href="https://www.thepaper.cn/{n}">{title}</a></td></tr>' for n,title in [(1,'中国移动人工智能'),(2,'中国电信算力'),(3,'无关'),(4,'中国联通大模型')])
    seen=[]
    def respond(req):
        seen.append(str(req.url))
        if req.url.host == 'tophub.today': return httpx.Response(200,text='<table><tbody>'+rows+'</tbody></table>')
        if req.url.path == '/2': return httpx.Response(200,text='<meta name="pubdate" content="2020-01-01 09:00:00">')
        return httpx.Response(200,text=f'<meta property="article:published_time" content="{now.isoformat()}">')
    class Extractor:
        async def extract(self,url,client): return '正文内容'
    monkeypatch.setattr('src.scrapers.hot_boards.ExtractorRegistry',lambda _:type('R',(),{'get':lambda self,name:Extractor()})())
    async def run():
        async with httpx.AsyncClient(transport=httpx.MockTransport(respond)) as client:
            board=HotBoardConfig(name='澎湃',kind='tophub',url='https://tophub.today/n/x',fetch_limit=3,include_keywords=['中国移动','中国电信','中国联通'])
            return await HotBoardScraper(board,client).fetch(now-timedelta(hours=25))
    result=asyncio.run(run())
    assert result.status=='success' and len(result.items)==1
    assert result.items[0].title=='中国移动人工智能'
    assert result.items[0].metadata['material_status']=='article_extracted'
    assert not any(x.endswith('/4') for x in seen)


def test_zhihu_missing_secret_is_reported_without_request(monkeypatch):
    monkeypatch.delenv('ZHIHU_ACCESS_SECRET',raising=False)
    async def run():
        async with httpx.AsyncClient(transport=httpx.MockTransport(lambda _: httpx.Response(500))) as client:
            board=HotBoardConfig(name='知乎',kind='zhihu',url='https://developer.zhihu.com/api/v1/content/hot_list',api_key_env='ZHIHU_ACCESS_SECRET')
            return await HotBoardScraper(board,client).fetch(datetime.now(timezone.utc))
    result=asyncio.run(run())
    assert result.status=='failure'
    assert 'not configured' in result.failures['知乎']


def test_zhihu_official_api_request_and_recent_item(monkeypatch):
    now = datetime.now(timezone.utc)
    monkeypatch.setenv('ZHIHU_ACCESS_SECRET', 'test-secret')
    def respond(req):
        if req.url.host == 'developer.zhihu.com':
            assert req.headers['Authorization'] == 'Bearer test-secret'
            assert req.url.params['Limit'] == '20'
            return httpx.Response(200,json={'Code':0,'Data':{'Items':[{'Title':'中国移动算力','Url':'https://www.zhihu.com/question/123','Summary':'运营商业务'}]}})
        return httpx.Response(200,text=f'<meta property="article:published_time" content="{now.isoformat()}">')
    class Extractor:
        async def extract(self,url,client): return None
    monkeypatch.setattr('src.scrapers.hot_boards.ExtractorRegistry',lambda _:type('R',(),{'get':lambda self,name:Extractor()})())
    async def run():
        async with httpx.AsyncClient(transport=httpx.MockTransport(respond)) as client:
            board=HotBoardConfig(name='知乎',kind='zhihu',url='https://developer.zhihu.com/api/v1/content/hot_list',api_key_env='ZHIHU_ACCESS_SECRET',fetch_limit=20,include_keywords=['中国移动'])
            return await HotBoardScraper(board,client).fetch(now-timedelta(hours=25))
    result=asyncio.run(run())
    assert result.status=='success' and len(result.items)==1
    assert result.items[0].metadata['material_status']=='search_excerpt'


def test_tophub_no_limit_reads_all_returned_rows(monkeypatch):
    now = datetime.now(timezone.utc)
    rows = ''.join(f'<tr><td><a itemid="{n}" href="https://www.thepaper.cn/{n}">中国移动 {n}</a></td></tr>' for n in range(35))
    def respond(req):
        if req.url.host == 'tophub.today':
            return httpx.Response(200, text='<table><tbody>' + rows + '</tbody></table>')
        return httpx.Response(200, text=f'<meta property="article:published_time" content="{now.isoformat()}">')
    class Extractor:
        async def extract(self, url, client): return None
    monkeypatch.setattr('src.scrapers.hot_boards.ExtractorRegistry', lambda _: type('R', (), {'get': lambda self, name: Extractor()})())
    async def run():
        async with httpx.AsyncClient(transport=httpx.MockTransport(respond)) as client:
            board = HotBoardConfig(name='澎湃', kind='tophub', url='https://tophub.today/n/x', fetch_limit=None)
            return await HotBoardScraper(board, client).fetch(now-timedelta(hours=25))
    assert len(asyncio.run(run()).items) == 35
