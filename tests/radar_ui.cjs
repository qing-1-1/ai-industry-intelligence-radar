const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const elements = new Map();
const element = (id) => {
  if (!elements.has(id)) elements.set(id, {
    value: id === 'date' ? 'all' : '', innerHTML: '', textContent: '', listeners: {},
    addEventListener(event, handler) { this.listeners[event] = handler; },
    querySelectorAll() { return []; },
    scrollIntoView() {},
  });
  return elements.get(id);
};

const source = { name: '来源', method: 'RSS', enabled: true, category: '综合' };
const day = (date, title, url, score) => ({
  date, updated_at: date + 'T08:00:00+08:00', sources: [source], failures: [],
  items: [{
    title, url, source: '来源', published_at: date + 'T07:00:00+08:00',
    summary: '内容', category: '算力租赁', score, tags: [],
  }],
});
const days = {
  '2026-11-05': day('2026-11-05', '昨天的芯片', 'https://example.com/1', 8),
  '2026-11-04': day('2026-11-04', '历史算力', 'https://example.com/2', 9),
  '2026-11-01': day('2026-11-01', '较旧情报', 'https://example.com/3', 10),
};
days['2026-11-04'].items[0].sections = [{ title: '关键数据', content: '安全 <script> 测试' }];
days['2026-11-04'].items[0].tags = ['测试标签'];
const fetch = async (url) => ({
  ok: true,
  json: async () => url.endsWith('index.json') ? { dates: Object.keys(days) } :
    url.endsWith('sources.json') ? [source] : days[url.match(/(\d{4}-\d{2}-\d{2})\.json/)[1]],
});
const location = { hash: '' };
const handlers = {};
const window = { addEventListener(name, handler) { handlers[name] = handler; } };
const document = { getElementById: element, querySelectorAll: () => [] };
vm.runInNewContext(fs.readFileSync('docs/assets/js/radar.js', 'utf8'), { document, fetch, URL, location, window });

async function run() {
  await new Promise((resolve) => setImmediate(resolve));
  const articles = element('articles');
  assert(articles.innerHTML.includes('昨天的芯片'));
  assert(!articles.innerHTML.includes('历史算力'));
  assert(element('categoryTabs').innerHTML.includes('运营商 Token 与模型服务'));
  element('categoryTabs').listeners.click({
    target: { closest: () => ({ dataset: { category: '运营商算力与智算' } }) },
  });
  assert.equal(articles.innerHTML, '');

  location.hash = '#hot';
  await handlers.hashchange();
  assert(articles.innerHTML.indexOf('历史算力') < articles.innerHTML.indexOf('昨天的芯片'));
  assert(!articles.innerHTML.includes('较旧情报'));
  assert(element('archiveFilter').hidden);

  location.hash = '#archive';
  await handlers.hashchange();
  assert(articles.innerHTML.includes('本期目录'));
  assert(articles.innerHTML.includes('较旧情报'));
  assert(!element('archiveFilter').hidden);
  element('search').value = '历史';
  element('search').listeners.input();
  assert(articles.innerHTML.includes('历史算力'));
  assert(articles.innerHTML.includes('关键数据'));
  assert(articles.innerHTML.includes('&lt;script&gt;'));
  assert(articles.innerHTML.includes('测试标签'));
  assert(!articles.innerHTML.includes('<script>'));
  assert(!articles.innerHTML.includes('昨天的芯片'));
  element('search').value = '';
  element('date').value = '2026-11-05';
  await element('date').listeners.change();
  assert(articles.innerHTML.includes('昨天的芯片'));
  assert(!articles.innerHTML.includes('历史算力'));

  location.hash = '#sources';
  await handlers.hashchange();
  assert(!element('sourcePanel').hidden);
  assert(element('sourceList').innerHTML.includes('RSS'));
  console.log('精选分类、热点排序、历史搜索及信息源验证通过');
}
run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
