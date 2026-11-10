'use strict';

const $ = (id) => document.getElementById(id);
const categories = [
  '运营商 Token 与模型服务', '运营商算力与智算', '模型路由与 AI 网关',
  '运营商 AI 产品与应用', '政策、采购与招投标',
];
const viewInfo = {
  featured: ['精选', '聚焦运营商 AI 业务和产业动态', '本期情报'],
  hot: ['热点榜', '最近一期发布前 48 小时内的入选情报，按 AI 重要性评分和发布时间排序。', '重要性排行'],
  archive: ['AI 日报', '按日期浏览，或跨期搜索结构化情报。', '历史简报'],
  sources: ['信息源', '运营商情报的采集渠道与最近采集异常。'],
};
const materialLabels = {
  article_extracted: '已提取原文正文', rss_content: 'RSS 内容', title_only: '仅标题',
  search_excerpt: '搜索摘要', source_content: '来源内容',
};
const shanghai = new Intl.DateTimeFormat('zh-CN', {
  timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit',
  hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
});
const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);

const cache = new Map();
let dates = [];
let currentView;
let activeCategory = '';
let items = [];
let loadVersion = 0;

async function readJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(path);
  return response.json();
}

function getDay(date) {
  if (!cache.has(date)) {
    cache.set(date, readJson('radar-data/' + encodeURIComponent(date) + '.json').catch((error) => {
      cache.delete(date);
      throw error;
    }));
  }
  return cache.get(date);
}

function externalUrl(value) {
  try {
    const url = new URL(value);
    if (['http:', 'https:'].includes(url.protocol)) return escape(url.href);
  } catch {
    return '';
  }
  return '';
}

function formatTime(value) {
  const date = new Date(value || NaN);
  return Number.isNaN(+date) ? '时间未知' : shanghai.format(date);
}

function byScore(a, b) {
  return (b.score ?? -1) - (a.score ?? -1) || byDate(a, b);
}

function byDate(a, b) {
  return Date.parse(b.published_at) - Date.parse(a.published_at);
}

function records(days) {
  const seen = new Set();
  return days.flatMap((day) => day.items.map((item, i) => ({
    ...item, archiveDate: day.date, anchor: 'story-' + day.date + '-' + i,
  }))).filter((item) => {
    const key = item.url || item.title;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function storyLink(item) {
  return '#' + currentView + '/' + item.anchor;
}

function story(item, rank) {
  const url = externalUrl(item.url);
  const sections = item.sections || [];
  const summary = item.summary || sections[0]?.content;
  const detailSections = currentView === 'archive'
    ? sections
    : sections.filter((section) => section.content !== summary);
  const detail = detailSections.map((section) =>
    '<section class="section"><h4>' + escape(section.title || '详情') + '</h4><p>' + escape(section.content) + '</p></section>'
  ).join('');
  const tags = (item.tags || []).map((tag) => '<li>' + escape(tag) + '</li>').join('');
  const facts = [item.source, formatTime(item.published_at), materialLabels[item.material_status]].filter(Boolean);
  return '<article class="story" id="' + escape(item.anchor) + '" tabindex="-1">' +
    '<div class="meta"><span class="category">' + escape(item.category) + '</span>' +
    facts.map((fact) => '<span>' + escape(fact) + '</span>').join('') +
    (item.score == null ? '' : '<span class="score">重要性 ' + escape(item.score) + '/10</span>') + '</div>' +
    '<div class="story-head">' + (rank ? '<span class="rank">' + rank + '</span>' : '') +
    '<h3>' + escape(item.title) + '</h3></div>' +
    (summary && (currentView !== 'archive' || !detail) ? '<p class="summary">' + escape(summary) + '</p>' : '') +
    (currentView === 'archive' ? detail : detail ? '<details><summary>展开情报详情</summary>' + detail + '</details>' : '') +
    (tags ? '<ul class="tags">' + tags + '</ul>' : '') +
    (url ? '<a class="original" href="' + url + '" target="_blank" rel="noopener noreferrer">查看原文 ↗</a>' : '') +
    '</article>';
}

function linkList(list) {
  return '<ol>' + list.map((item) =>
    '<li><a href="' + escape(storyLink(item)) + '">' + escape(item.title) + '</a></li>'
  ).join('') + '</ol>';
}

function renderArchive(list) {
  const editions = new Map();
  for (const item of list) {
    if (!editions.has(item.archiveDate)) editions.set(item.archiveDate, []);
    editions.get(item.archiveDate).push(item);
  }
  return Array.from(editions).sort(([a], [b]) => b.localeCompare(a)).map(([date, entries]) =>
    '<div class="report-group"><h3>' + escape(date) + ' · ' + entries.length + ' 条</h3>' +
    '<details class="contents" open><summary>本期目录</summary>' + linkList(entries) + '</details>' +
    entries.map((item) => story(item)).join('') + '</div>'
  ).join('');
}

function render() {
  const query = $('search').value.trim().toLowerCase();
  const source = $('source').value;
  const sort = $('sort').value;
  const list = items.filter((item) => {
    if (activeCategory && item.category !== activeCategory) return false;
    if (source && item.source !== source) return false;
    const searchable = [item.title, item.summary, item.source, item.category, ...(item.tags || []),
      ...(item.sections || []).flatMap((section) => [section.title, section.content])];
    return !query || searchable.join(' ').toLowerCase().includes(query);
  }).sort(currentView !== 'hot' && sort === 'date' ? byDate : byScore);

  $('resultCount').textContent = list.length + ' 条';
  $('status').textContent = list.length ? '' : '当前条件下没有情报。';
  $('articles').innerHTML = list.length ? '<div class="story-list">' +
    (currentView === 'archive' ? renderArchive(list) : list.map((item, i) => story(item, currentView === 'hot' ? i + 1 : 0)).join('')) +
    '</div>' : '';
  const highlights = $('featuredHighlights');
  highlights.hidden = currentView !== 'featured' || Boolean(query || source || activeCategory) || !list.length;
  if (!highlights.hidden) {
    highlights.innerHTML = '<header><h2>本期重点</h2><a href="#hot">完整榜单 ↗</a></header>' +
      linkList([...list].sort(byScore).slice(0, 3));
  }
}

function setFilters() {
  const names = Array.from(new Set(items.map((item) => item.category).filter(Boolean)));
  const tabs = ['', ...categories, ...names.filter((name) => !categories.includes(name))];
  $('categoryTabs').innerHTML = tabs.map((name) =>
    '<button type="button" data-category="' + escape(name) + '" aria-pressed="' + (name === activeCategory) + '">' +
    escape(name || '全部') + '</button>'
  ).join('');
  const previous = $('source').value;
  const sources = Array.from(new Set(items.map((item) => item.source).filter(Boolean))).sort();
  $('source').innerHTML = '<option value="">全部来源</option>' + sources.map((name) =>
    '<option value="' + escape(name) + '">' + escape(name) + '</option>'
  ).join('');
  $('source').value = sources.includes(previous) ? previous : '';
}

function renderSources(sources, failures) {
  $('sourceList').innerHTML = sources.map((source) =>
    '<div class="source-item">' + escape(source.name) + '<small>' +
    escape(source.category) + ' · ' + escape(source.method) + ' · ' + (source.enabled ? '已配置' : '已停用') +
    '</small></div>'
  ).join('');
  $('failures').innerHTML = failures.map((failure) =>
    '<p class="notice">最近采集异常 · ' + escape(failure.source) + ' · ' + escape(failure.error) + '</p>'
  ).join('');
}

const DAY_MS = 86400000;
async function loadView() {
  const version = ++loadVersion;
  const view = currentView;
  $('status').textContent = '正在读取情报…';
  $('resultCount').textContent = '';
  $('articles').innerHTML = '';
  $('featuredHighlights').hidden = true;
  try {
    if (view === 'sources') {
      const [catalog, latest] = await Promise.allSettled([
        readJson('radar-data/sources.json'), dates.length ? getDay(dates[0]) : Promise.resolve(null),
      ]);
      if (version !== loadVersion) return;
      const day = latest.value;
      renderSources(catalog.value || day?.sources || [], day?.failures || []);
      if (!catalog.value && !day) $('failures').textContent = '暂时无法读取来源列表。';
      return;
    }
    if (!dates.length) {
      $('status').textContent = '暂时没有已发布的日报。';
      return;
    }
    let requested = [dates[0]];
    if (view === 'archive') {
      requested = $('date').value === 'all' ? dates : [$('date').value];
    } else if (view === 'hot') {
      requested = dates.filter((date) => Date.parse(dates[0]) - Date.parse(date) <= 2 * DAY_MS);
    }
    const results = await Promise.allSettled(requested.map(getDay));
    if (version !== loadVersion) return;
    const days = results.filter((result) => result.status === 'fulfilled').map((result) => result.value);
    if (!days.length) throw new Error('No readable issues');
    const latest = days[0];
    $('editionDate').textContent = view === 'archive' && days.length > 1
      ? days.length + ' 期日报'
      : '发布于 ' + formatTime(latest.updated_at);
    items = records(days);
    if (view === 'hot') {
      const cutoff = Date.parse(latest.updated_at) - 2 * DAY_MS;
      items = items.filter((item) => item.score != null && Date.parse(item.published_at) >= cutoff);
    }
    setFilters();
    render();
    const missing = requested.length - days.length;
    if (missing) {
      $('status').textContent = '有 ' + missing + ' 期暂时无法读取，结果可能不完整。';
    }
    scrollToArticle();
  } catch {
    if (version === loadVersion) $('status').textContent = '情报读取失败，请刷新页面重试。';
  }
}

function scrollToArticle() {
  const anchor = location.hash.split('/')[1];
  const article = anchor && $(anchor);
  if (article) {
    article.focus({ preventScroll: true });
    article.scrollIntoView({ block: 'start' });
  }
}

function navigate() {
  if (location.hash === '#content') return;
  const candidate = location.hash.slice(1).split('/')[0];
  const next = Object.prototype.hasOwnProperty.call(viewInfo, candidate) ? candidate : 'featured';
  if (next === currentView) {
    scrollToArticle();
    return;
  }
  currentView = next;
  const [title, description, listTitle] = viewInfo[next];
  $('viewTitle').textContent = title;
  $('viewDescription').textContent = description;
  $('listTitle').textContent = listTitle || '';
  $('editionDate').textContent = '';
  $('stories').hidden = next === 'sources';
  $('sourcePanel').hidden = next !== 'sources';
  $('archiveFilter').hidden = next !== 'archive';
  $('sort').hidden = next === 'hot';
  $('search').value = '';
  $('source').value = '';
  $('sort').value = 'score';
  activeCategory = '';
  items = [];
  setFilters();
  for (const link of document.querySelectorAll('nav [data-view]')) {
    if (link.dataset.view === next) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  return loadView();
}

$('categoryTabs').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-category]');
  if (!button) return;
  activeCategory = button.dataset.category;
  for (const tab of $('categoryTabs').querySelectorAll('button')) {
    tab.setAttribute('aria-pressed', String(tab === button));
  }
  render();
});
for (const id of ['search', 'source', 'sort']) $(id).addEventListener('input', render);
$('date').addEventListener('change', loadView);

async function init() {
  try {
    const index = await readJson('radar-data/index.json');
    dates = [...new Set(index.dates)].filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(date)).sort().reverse();
  } catch {
    $('status').textContent = '日报索引读取失败，请刷新页面重试。';
    return;
  }
  $('date').innerHTML = '<option value="all">全部历史</option>' +
    dates.map((date) => '<option>' + date + '</option>').join('');
  window.addEventListener('hashchange', navigate);
  return navigate();
}
init();
