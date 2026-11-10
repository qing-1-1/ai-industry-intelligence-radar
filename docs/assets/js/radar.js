'use strict';

const $ = (id) => document.getElementById(id);
const categories = [
  '运营商 Token 与模型服务', '运营商算力与智算', '模型路由与 AI 网关',
  '运营商 AI 产品与应用', '政策、采购与招投标',
];
const viewInfo = {
  featured: ['精选', '聚焦运营商 AI 业务和产业动态', '本期情报'],
  operator: ['运营商简报', '跟踪模型服务、智算、应用落地与政策招采。', ''],
  ai: ['AI 简报', '关注通用 AI 模型、产品、开源与行业进展。', ''],
  sources: ['信息源', '运营商情报的采集渠道与最近采集异常。'],
};
const materialLabels = {
  article_extracted: '已提取原文正文', rss_content: 'RSS 内容', title_only: '仅标题',
  search_excerpt: '搜索摘要', source_content: '来源内容',
};
const periodNames = { daily: '日报', weekly: '周报', monthly: '月报' };
const beijingDate = () => dateKey(new Date(Date.now() + 8 * 3600000));
const categoryLabels = ['Token 与模型', '算力与智算', '路由与网关', 'AI 应用', '政策招采'];
const dayLabel = new Intl.DateTimeFormat('zh-CN', {
  timeZone: 'UTC', month: 'long', day: 'numeric', weekday: 'short',
});
const clockLabel = new Intl.DateTimeFormat('zh-CN', {
  timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
});
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
let period = 'daily';
let editions = [];
let loadedDays = [];
let loadNotice = '';
let legacyDisplay = {};
let briefingDates = { operator: [], ai: [] };
const isBriefing = (view = currentView) => view === 'operator' || view === 'ai';
const briefingOf = (item) => item.briefing || (item.category === '其他 AI 行业新闻' ? 'ai' : 'operator');

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

function articleUrlKey(value) {
  try {
    const url = new URL(value);
    url.hash = '';
    for (const key of [...url.searchParams.keys()]) {
      if (/^(utm_|gclid$|fbclid$)/i.test(key)) url.searchParams.delete(key);
    }
    return url.href;
  } catch {
    return value;
  }
}

function records(days) {
  const urls = new Set();
  const titles = new Set();
  return days.flatMap((day) => day.items.flatMap((item, i) => {
    if (isBriefing() && briefingOf(item) !== currentView) return [];
    const legacy = legacyDisplay[item.url] || {};
    return [{ ...item, title: legacy.title || item.title, image_url: item.image_url || legacy.image_url,
      archiveDate: day.date, anchor: 'story-' + day.date + '-' + i }];
  })).filter((item) => {
    const url = articleUrlKey(item.url);
    const title = item.title?.normalize('NFKC').replace(/\s+/g, '').toLowerCase();
    if ((url && urls.has(url)) || (title && titles.has(title))) return false;
    if (url) urls.add(url);
    if (title) titles.add(title);
    return true;
  });
}

function contentLink(anchor) {
  const base = '#' + currentView + (isBriefing() ? '/' + period + '/' + $('date').value : '');
  return base + '/' + anchor;
}

function story(item, lead = false) {
  const url = externalUrl(item.url);
  const preview = isBriefing() && /^https:\/\//i.test(item.image_url || '') ? externalUrl(item.image_url) : '';
  const figure = preview ? '<figure class="story-image"><img src="' + preview +
    '" alt="" loading="lazy" decoding="async" referrerpolicy="no-referrer"></figure>' : '';
  const sections = item.sections || [];
  const summary = item.summary || sections[0]?.content;
  const detailSections = isBriefing()
    ? sections
    : sections.filter((section) => section.content !== summary);
  const detail = detailSections.map((section) =>
    '<section class="section"><h4>' + escape(section.title || '详情') + '</h4><p>' + escape(section.content) + '</p></section>'
  ).join('');
  const tags = (item.tags || []).map((tag) => '<li>' + escape(tag) + '</li>').join('');
  const facts = [item.source, currentView === 'featured' ? '' : formatTime(item.published_at),
    materialLabels[item.material_status]].filter(Boolean);
  const time = new Date(item.published_at || NaN);
  const timestamp = currentView === 'featured'
    ? '<time class="timeline-time" title="' + escape(formatTime(item.published_at)) + '">' +
      escape(Number.isNaN(+time) ? '—' : clockLabel.format(time)) + '</time>'
    : '';
  const meta = '<div class="meta"><span class="category">' + escape(item.category) + '</span>' +
    facts.map((fact) => '<span>' + escape(fact) + '</span>').join('') +
    (item.score == null ? '' : '<span class="score">重要性 ' + escape(item.score) + '/10</span>') + '</div>';
  const copy = (summary && (!isBriefing() || !detail) ? '<p class="summary">' + escape(summary) + '</p>' : '') +
    (isBriefing() ? detail : detail ? '<details><summary>展开情报详情</summary>' + detail + '</details>' : '');
  const original = url ? '<a class="original" href="' + url +
    '" target="_blank" rel="noopener noreferrer">查看原文 <svg class="icon" aria-hidden="true"><use href="#i-external"/></svg></a>' : '';

  return '<article class="story" id="' + escape(item.anchor) + '" tabindex="-1">' + timestamp +
    (lead ? '' : meta) +
    '<h3' + (item.original_title && item.original_title !== item.title
      ? ' title="' + escape(item.original_title) + '"' : '') + '>' + escape(item.title) + '</h3>' +
    '<div class="story-body' + (lead && figure ? ' with-image' : '') + '">' +
    '<div class="story-copy">' + copy + '</div>' + figure + '</div>' +
    (tags ? '<ul class="tags">' + tags + '</ul>' : '') +
    (lead ? '<footer class="lead-byline">' + meta + original + '</footer>' : original) +
    '</article>';
}

function linkList(list) {
  return '<ol>' + list.map((item) =>
    '<li><a href="' + escape(contentLink(item.anchor)) + '">' + escape(item.title) + '</a></li>'
  ).join('') + '</ol>';
}

function dateKey(date) {
  return date.toISOString().slice(0, 10);
}

function periodRange(day, kind) {
  if (kind === 'daily') return { start: day, end: day };
  const date = new Date(day + 'T00:00:00Z');
  if (kind === 'weekly') {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 6) % 7);
    return { start: dateKey(date), end: dateKey(new Date(+date + 6 * DAY_MS)) };
  }
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  return { start: day.slice(0, 7) + '-01', end: dateKey(new Date(Date.UTC(year, month + 1, 0))) };
}

function editionLabel(edition) {
  if (period === 'daily') return dayLabel.format(new Date(edition.start + 'T00:00:00Z'));
  if (period === 'monthly') return edition.start.slice(0, 7);
  return edition.start + ' 至 ' + edition.end.slice(5);
}

function updateEditions() {
  const grouped = new Map();
  for (const day of briefingDates[currentView]) {
    const range = periodRange(day, period);
    if (!grouped.has(range.start)) grouped.set(range.start, { ...range, days: [] });
    grouped.get(range.start).days.push(day);
  }
  editions = [...grouped.values()];
  $('date').innerHTML = editions.map((edition) =>
    '<option value="' + edition.start + '">' + escape(editionLabel(edition)) + '</option>'
  ).join('') + (period === 'daily' ? '<option value="all">全部历史</option>' : '');
  $('date').value = editions[0]?.start || '';
  for (const tab of $('reportTabs').querySelectorAll('button')) {
    tab.setAttribute('aria-pressed', String(tab.dataset.period === period));
  }
}

function renderEditionRail() {
  const groups = new Map();
  for (const edition of editions) {
    const month = edition.start.slice(0, 7);
    if (!groups.has(month)) groups.set(month, []);
    groups.get(month).push(edition);
  }
  $('editionList').innerHTML = [...groups].map(([month, entries], i) =>
    '<details class="edition-month"' + (i === 0 || entries.some((entry) => entry.start === $('date').value) ? ' open' : '') + '>' +
    '<summary>' + month + ' <small>' + entries.length + ' 期</small></summary>' +
    entries.map((edition) => '<button type="button" data-edition="' + edition.start + '"' +
      (edition.start === $('date').value ? ' aria-current="true"' : '') + '>' +
      escape(editionLabel(edition)) + '</button>').join('') + '</details>'
  ).join('');
}

const aiSections = [
  ['模型发布与更新', /大模型|语言模型|模型发布|模型更新|开源模型|\b(?:llm|gpt|claude|gemini|qwen|llama)\b/i],
  ['算力与基础设施', /算力|智算|推理|基础设施|数据中心|显卡|\b(?:gpu|tpu|inference|sagemaker)\b/i],
  ['产品与应用', /产品|平台|智能体|应用|agent|bedrock|应用权限/i],
  ['研究与技术', /研究|论文|评测|基准|算法|\b(?:research|paper|benchmark)\b/i],
  ['政策与行业', /政策|监管|招标|采购|产业|行业|\b(?:policy|regulation)\b/i],
];

function reportCategory(item) {
  if (briefingOf(item) !== 'ai' || !['其他 AI 行业新闻', 'AI 行业新闻', 'AI 资讯'].includes(item.category)) {
    return item.category || '其他情报';
  }
  const text = [item.title, ...(item.tags || [])].join(' ');
  return aiSections.find(([, pattern]) => pattern.test(text))?.[0] || '其他 AI 动态';
}

function reportPaper(list, edition, covered) {
  const [lead, ...rest] = list;
  const groups = new Map();
  for (const item of rest) {
    const name = reportCategory(item);
    if (!groups.has(name)) groups.set(name, []);
    groups.get(name).push(item);
  }
  const sectionOrder = currentView === 'ai' ? aiSections.map(([name]) => name) : categories;
  const order = [...sectionOrder.filter((name) => groups.has(name)),
    ...[...groups.keys()].filter((name) => !sectionOrder.includes(name))];
  const sources = new Set(list.map((item) => item.source).filter(Boolean));
  const range = edition.start === edition.end ? edition.start : edition.start + ' 至 ' + edition.end;
  const incomplete = period !== 'daily' && edition.end >= beijingDate();
  const countByTopic = new Map();
  for (const item of list) {
    const name = reportCategory(item);
    countByTopic.set(name, (countByTopic.get(name) || 0) + 1);
  }
  const topicSummary = [...countByTopic].sort((a, b) => b[1] - a[1]).slice(0, 3)
    .map(([name, count]) => name + ' ' + count + ' 条').join('，');
  const reportKey = 'report-' + edition.start;
  const layout = order.length
    ? '<nav class="report-layout" aria-label="本期版面"><h3 class="rubric">本期版面</h3><ol>' +
      order.map((name, i) => '<li><a href="' + escape(contentLink(reportKey + '-section-' + i)) + '">' +
        '<span class="report-number">' + String(i + 1).padStart(2, '0') + '</span><span>' + escape(name) +
        '</span><small>' + groups.get(name).length + ' 条</small></a></li>').join('') + '</ol></nav>'
    : '';
  const picks = rest.length
    ? '<section class="report-picks"><h3 class="rubric">本期看点</h3><ol>' +
      rest.slice(0, 3).map((item, i) => '<li><a href="' + escape(contentLink(item.anchor)) + '">' +
        '<span class="report-number">' + (i + 1) + '</span><span>' + escape(item.title) +
        (item.source ? '<small>' + escape(item.source) + '</small>' : '') + '</span></a></li>').join('') +
      '</ol></section>'
    : '';
  const body = order.map((name, i) =>
    '<section class="report-section" id="' + reportKey + '-section-' + i + '" tabindex="-1">' +
      '<h3><span>' + String(i + 1).padStart(2, '0') + '</span>' + escape(name) + '</h3>' +
      '<div class="report-columns">' + groups.get(name).map((item) => story(item)).join('') + '</div></section>'
  ).join('');
  return '<div class="report-group">' +
    '<header class="report-mast"><p>' + escape(range) + '</p><h2>' + (currentView === 'ai' ? 'AI ' : '运营商情报') + periodNames[period] + '</h2>' +
    '</header><div class="report-stats"><span><b>' + list.length + '</b> 条情报</span>' +
    '<span><b>' + sources.size + '</b> 个来源</span>' +
    (period === 'daily' ? '' : '<span>汇编自 ' + covered + ' 期日报</span>') +
    (incomplete ? '<span>本期仍在更新</span>' : '') + '</div>' +
    '<div class="report-spotlight' + (picks || layout ? ' has-index' : '') + '">' +
    '<div class="report-lead"><p class="rubric">本期头条</p>' + story(lead, true) +
    (topicSummary ? '<p class="report-intro"><strong>本期导读</strong> ' + escape(topicSummary) + '。</p>' : '') +
    '</div>' + (picks || layout ? '<aside class="report-index">' + picks + layout + '</aside>' : '') + '</div>' +
    '<details class="contents"' + (period === 'daily' && list.length <= 8 ? ' open' : '') +
    '><summary>本期目录</summary>' + linkList(list) + '</details>' + body + '<footer class="report-end">本期完 · 资料来自运营商情报归档</footer></div>';
}

function renderArchive(list) {
  const edition = editions.find((entry) => entry.start === $('date').value);
  if (edition) {
    const index = editions.indexOf(edition);
    const adjacent = [editions[index + 1], editions[index - 1]];
    const pager = adjacent.map((entry, i) => entry
      ? '<button type="button" data-edition="' + entry.start + '">' +
        (i === 0 ? '← 上一期 · ' : '下一期 → · ') + escape(editionLabel(entry)) + '</button>'
      : '<span></span>').join('');
    return reportPaper(list, edition, loadedDays.length) + '<div class="report-pager">' + pager + '</div>';
  }
  return loadedDays.map((day) => {
    const entries = list.filter((item) => item.archiveDate === day.date);
    return entries.length ? reportPaper(entries, periodRange(day.date, 'daily'), 1) : '';
  }).join('');
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
  }).sort(sort === 'date' ? byDate : byScore);

  $('resultCount').textContent = list.length + ' 条';
  $('status').textContent = loadNotice || (list.length ? '' : '当前条件下没有情报。');
  $('articles').innerHTML = list.length ? '<div class="story-list' +
    (currentView === 'featured' ? ' timeline' : '') + '">' +
    (isBriefing() ? renderArchive(list) : list.map((item) => story(item)).join('')) +
    '</div>' : '';
  if (currentView === 'featured' && loadedDays.length) {
    $('listTitle').textContent = dayLabel.format(new Date(loadedDays[0].date + 'T00:00:00Z'));
  }
  const highlights = $('featuredHighlights');
  highlights.hidden = currentView !== 'featured' || Boolean(query || source || activeCategory) || !list.length;
  if (!highlights.hidden) {
    highlights.innerHTML = '<header><h2>本期重点</h2><a href="#operator">查看简报</a></header>' +
      linkList([...list].sort(byScore).slice(0, 3));
  }
}

function setFilters() {
  const names = Array.from(new Set(items.map((item) => item.category).filter(Boolean)));
  const tabs = ['', ...(currentView === 'ai' ? names : [...categories, ...names.filter((name) => !categories.includes(name))])];
  $('categoryTabs').innerHTML = tabs.map((name) =>
    '<button type="button" data-category="' + escape(name) + '" aria-pressed="' + (name === activeCategory) + '">' +
    escape(categoryLabels[categories.indexOf(name)] || name || '全部') + '</button>'
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
  loadNotice = '';
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
    if (isBriefing(view)) {
      const edition = editions.find((entry) => entry.start === $('date').value);
      requested = edition?.days || briefingDates[view];
      renderEditionRail();
      if (!requested.length) {
        $('status').textContent = '这个简报还没有已发布的情报。';
        return;
      }
    }
    const results = await Promise.allSettled(requested.map(getDay));
    if (version !== loadVersion) return;
    const days = results.filter((result) => result.status === 'fulfilled').map((result) => result.value);
    if (!days.length) throw new Error('No readable issues');
    loadedDays = days;
    const latest = days[0];
    $('editionDate').textContent = isBriefing(view) && days.length > 1
      ? days.length + ' 期日报'
      : '发布于 ' + formatTime(latest.updated_at);
    items = records(days);
    if (isBriefing(view) && period !== 'daily') {
      items = items.sort(byScore).slice(0, period === 'weekly' ? 20 : 30);
    }
    if (activeCategory && !categories.includes(activeCategory) && !items.some((item) => item.category === activeCategory)) {
      activeCategory = '';
    }
    const missing = requested.length - days.length;
    if (missing) loadNotice = '有 ' + missing + ' 期暂时无法读取，结果可能不完整。';
    setFilters();
    render();
    scrollToArticle();
  } catch {
    if (version === loadVersion) $('status').textContent = '情报读取失败，请刷新页面重试。';
  }
}

function scrollToArticle() {
  const anchor = location.hash.split('/').pop();
  const article = /^(story|report)-/.test(anchor) && $(anchor);
  if (article) {
    article.focus({ preventScroll: true });
    article.scrollIntoView({ block: 'start' });
  }
}

function navigate() {
  if (location.hash === '#content') return;
  const candidate = location.hash.slice(1).split('/')[0];
  const next = candidate === 'archive' ? 'operator' : Object.prototype.hasOwnProperty.call(viewInfo, candidate) ? candidate : 'featured';
  const [, routePeriod, routeEdition] = location.hash.split('/');
  const newIssue = isBriefing(next) && routeEdition && (period !== routePeriod || $('date').value !== routeEdition);
  if (next === currentView && !newIssue) {
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
  $('archiveFilter').hidden = !isBriefing(next);
  $('reportRail').hidden = !isBriefing(next);
  document.querySelector('.shell')?.classList.toggle('is-archive', isBriefing(next));
  if (isBriefing(next)) {
    period = 'daily';
    const parts = location.hash.split('/');
    if (Object.prototype.hasOwnProperty.call(periodNames, parts[1])) {
      period = parts[1];
      updateEditions();
      if (editions.some((entry) => entry.start === parts[2]) || (period === 'daily' && parts[2] === 'all')) {
        $('date').value = parts[2];
      }
    } else {
      const anchorDate = /^story-(\d{4}-\d{2}-\d{2})-/.exec(parts[1] || '')?.[1];
      updateEditions();
      if (briefingDates[next].includes(anchorDate)) $('date').value = anchorDate;
    }
  }
  $('search').value = '';
  $('source').value = '';
  $('sort').value = next === 'featured' ? 'date' : 'score';
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
$('reportTabs').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-period]');
  if (!button || period === button.dataset.period) return;
  period = button.dataset.period;
  updateEditions();
  return loadView();
});
function selectEdition(event) {
  const button = event.target.closest('button[data-edition]');
  if (!button) return;
  $('date').value = button.dataset.edition;
  return loadView();
}
$('editionList').addEventListener('click', selectEdition);
$('articles').addEventListener('click', selectEdition);
$('articles').addEventListener('error', (event) => {
  const figure = event.target.closest?.('.story-image');
  if (figure) figure.hidden = true;
}, true);

async function init() {
  let index;
  try {
    index = await readJson('radar-data/index.json');
    dates = [...new Set(index.dates)].filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(date)).sort().reverse();
  } catch {
    $('status').textContent = '日报索引读取失败，请刷新页面重试。';
    return;
  }
  const missingIndex = !index.briefings;
  const [supplements, loaded] = await Promise.all([
    readJson('assets/data/legacy-display.json').catch(() => ({})),
    missingIndex ? Promise.allSettled(dates.map(getDay)) : [],
  ]);
  legacyDisplay = supplements;
  for (const view of ['operator', 'ai']) {
    briefingDates[view] = missingIndex
      ? loaded.filter((entry) => entry.status === 'fulfilled' &&
          entry.value.items.some((item) => briefingOf(item) === view)).map((entry) => entry.value.date)
      : dates.filter((date) => index.briefings[view]?.includes(date));
  }
  window.addEventListener('hashchange', navigate);
  return navigate();
}
init();
