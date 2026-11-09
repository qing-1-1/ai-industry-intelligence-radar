# AI 行业情报雷达：部署与运行

本项目基于 [Thysrael/Horizon](https://github.com/Thysrael/Horizon)，保留原始 MIT 许可证和 Profile、采集、摘要、日报、RSS、Webhook 能力。自定义配置位于 `data/config.radar.json`，五个运营商主题 Profile 位于 `profiles/radar-token`、`radar-compute`、`radar-router`、`radar-platform`、`radar-policy`，网页读取 `docs/radar-data/` 的按日 JSON。

## 本地运行

1. 安装 Python 3.11+ 和 uv，执行 `uv sync --extra dev`。
2. 通过环境变量或未提交的 `.env` 设置 `SENSENOVA_API_KEY`。默认使用商汤接口 `https://token.sensenova.cn/v1`，主模型 `sensenova-6.8-flash`，接口报错或返回空内容时依次切换同一接口的 `deepseek-flash`、`deepseek-v4-flash`、`glm-5.3`、`glm-5.2`、`kimi-k3`；模型名称和账号权限需以商汤控制台及实际调用为准。
3. 飞书推送目前关闭。不要提交密钥。
4. `uv run horizon --config data/config.radar.json --hours 25`。结果存于 `data/summaries/`、`docs/_posts/`、`docs/radar-data/`。启动静态 HTTP 服务并访问 `docs/` 可预览看板；Jekyll 页面需 Jekyll 构建。

## GitHub Pages

将仓库推送至自己的 GitHub 仓库，在 Settings → Secrets and variables → Actions 配置 `SENSENOVA_API_KEY`，Settings → Pages 选择 GitHub Actions。Actions 中手动运行 Radar daily 验证；此后每天 UTC 00:17（北京时间 08:17）计划触发，GitHub 可能延迟。工作流在发布分支恢复历史后生成并部署，互斥执行。确认 Actions 允许写入仓库。默认分支上的 Deploy Docs 可独立发布站点；不要将上游仓库设为自己的 push remote。

## 来源与限制

来源以 `data/config.radar.json` 为准。2026-11-06 在当前环境探测到 NVIDIA、AWS Machine Learning、Google Cloud AI、vLLM、Portkey、量子位、极客公园 RSS 返回 200 并有条目；是否有近期条目、完整字段及可用性会变化。LiteLLM 和 vLLM 使用 GitHub Releases。Google News 与 GDELT 是关键词搜索发现，不是官方原文监控，可能受网络或地区限制。IT之家连接超时；36氪和机器之心测试响应不是可确认的有效 XML；OpenRouter 与 Azure 探测地址返回 404，未启用。阿里云、火山引擎、腾讯云、百度智能云、三大运营商、工信部、中国信通院、中国政府采购网的官方源暂未直接接入。已增加三大运营商官方域名限定 Google News 搜索，属于搜索发现而非直接监控，不能保证收录。当前网络测试中国电信新闻页返回 HTTP 412，中国联通连接中断，中国移动上市公司新闻稿页面可访问但未发现有效 RSS。财报 PDF、价格页未直接监控。

RSS 缺少可解析日期时 Horizon 跳过条目；Google News 可能提供聚合跳转而非原文 URL。候选上限是 URL 去重后 120 条、按时间截断，并非语义预过滤；Horizon 对入选新闻还有二次中文摘要调用。25 小时窗口有一小时重叠，只减少重复，不能保证跨日不重复调用；跨日模型缓存、官方优先的跨转载去重、每篇详情页尚未实现。选择“全部历史”可搜索已归档的标题、摘要、来源和标签；没有抓取或索引外部文章全文。网站显示的来源数量包含启用的搜索查询；本次采集数量指去重前条目数。请人工核对财报口径和原文。归档按北京时间，原版 Markdown 日报名称按 UTC，午夜附近日期可能不同。

## 运营商情报来源与正文（2026-11-09）

主题为运营商 Token 与模型服务、运营商算力与智算、模型路由与 AI 网关、运营商 AI 产品与应用、政策采购与招投标。单纯财报或股价新闻不作为目标。旧日报保留其原分类。

RSS 可用 `max_items` 控制每源上限，`include_keywords` 对标题预过滤（适合招采，不支持正则），`content_extractor: trafilatura` 尝试提取原文正文，失败保留 RSS 原始内容。RSS 来源的发布日期由原 RSS 提供，不能保证等于原网站核实日期。第三方糖果梦聚合的中国电信、联通招采 RSS 经访问和解析验证，链接指向官方采购平台；它们不是直接抓取或官方 RSS。中国移动招采聚合源最近更新为 11 月 2 日，暂时停用；待源恢复再启用。运营商及国内媒体官网域名搜索属于 Google News 发现，不保证收录。36氪、机器之心原始候选 RSS 测试不能解析；第三方热榜 RSS 未提供条目发布时间，未启用，避免把采集时间冒充发布时间。

入选的 GDELT 直达文章最多尝试提取 12 篇，Google News 聚合跳转不在这一步解析或绕过限制。页面展示“已提取原文正文／RSS 内容／搜索摘要”等来源材料状态；只有摘要或标题时无法保证内容完整。提取受网络、反爬、登录和版式影响。已实测 InfoQ、量子位、AWS 的样本可以提取正文，但不保证所有文章都可以。

手动运行可勾选 `dry_run`，只测试生成、不覆盖线上日报；`max_candidates` 可设 1–120。日常定时运行仍会正常发布。模型调用依然可能超时或触发速率限制，请关注工作流记录及额度。
