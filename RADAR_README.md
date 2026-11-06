# AI 行业情报雷达：部署与运行

本项目基于 [Thysrael/Horizon](https://github.com/Thysrael/Horizon)，保留原始 MIT 许可证和 Profile、采集、摘要、日报、RSS、Webhook 能力。自定义配置位于 `data/config.radar.json`，五个 Profile 位于 `profiles/radar-*`，网页读取 `docs/radar-data/` 的按日 JSON。

## 本地运行

1. 安装 Python 3.11+ 和 uv，执行 `uv sync --extra dev`。
2. 通过环境变量或未提交的 `.env` 设置 `DEEPSEEK_API_KEY`。默认示例使用 `deepseek-chat`；可按 `docs/configuration.md` 修改提供商、模型和密钥变量名。
3. 可选设置 `HORIZON_WEBHOOK_URL` 为飞书自定义机器人 Webhook。未设置时跳过投递；不要提交密钥。
4. `uv run horizon --config data/config.radar.json --hours 48`。结果存于 `data/summaries/`、`docs/_posts/`、`docs/radar-data/`。启动静态 HTTP 服务并访问 `docs/` 可预览看板；Jekyll 页面需 Jekyll 构建。

## GitHub Pages

将仓库推送至自己的 GitHub 仓库，在 Settings → Secrets and variables → Actions 配置 `DEEPSEEK_API_KEY`，可选配置 `HORIZON_WEBHOOK_URL`。Settings → Pages 选择从 `gh-pages` 分支部署。Actions 中手动运行 Radar daily 验证；此后每天 UTC 00:00（北京时间 08:00）计划触发，GitHub 可能延迟。工作流在发布分支恢复历史后生成并部署，互斥执行。确认 Actions 允许写入仓库。默认分支上的 Deploy Docs 可独立发布站点；不要将上游仓库设为自己的 push remote。

## 来源与限制

来源以 `data/config.radar.json` 为准。2026-11-06 在当前环境探测到 NVIDIA、AWS Machine Learning、Google Cloud AI、vLLM、Portkey、量子位、极客公园 RSS 返回 200 并有条目；是否有近期条目、完整字段及可用性会变化。LiteLLM 和 vLLM 使用 GitHub Releases。Google News 与 GDELT 是关键词搜索发现，不是官方原文监控，可能受网络或地区限制。IT之家连接超时；36氪和机器之心测试响应不是可确认的有效 XML；OpenRouter 与 Azure 探测地址返回 404，未启用。阿里云、火山引擎、腾讯云、百度智能云、三大运营商、工信部、中国信通院、中国政府采购网的官方源暂未直接接入，搜索可能发现相关报道，但不保证覆盖。财报 PDF、价格页未直接监控。

RSS 缺少可解析日期时 Horizon 跳过条目；Google News 可能提供聚合跳转而非原文 URL。候选上限是 URL 去重后 120 条、按时间截断，并非语义预过滤；Horizon 对入选新闻还有二次中文摘要调用。跨日模型缓存、官方优先的跨转载去重、每篇详情页与跨日期全文检索尚未实现。网站显示的来源数量包含启用的搜索查询；本次采集数量指去重前条目数。请人工核对财报口径和原文。归档按北京时间，原版 Markdown 日报名称按 UTC，午夜附近日期可能不同。
