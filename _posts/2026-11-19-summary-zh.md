---
layout: default
title: "Horizon Summary: 2026-11-19 (ZH)"
date: 2026-11-19
lang: zh
---

> 从 147 条内容中筛选出 19 条重要资讯。

---

**运营商算力与智算**
1. [全国首个升腾 950DT 词元出海算力集群在汕头启用](#item-radar-compute-1) ⭐️ 9.0/10

**模型路由与 AI 网关**
1. [BerriAI 发布 LiteLLM v1.109.2 稳定分支补丁](#item-radar-router-1) ⭐️ 6.0/10

**运营商 AI 产品与应用**
1. [联通数智自主规划智能体获信通院 OSCAR 尖峰实践奖，已支撑中国联通 AI 原生客服 31 省落地](#item-radar-platform-1) ⭐️ 8.0/10
2. [中国电信星辰 AGI 实验室发布 Xing 4 大模型技术报告：全程基于升腾 910C 训练](#item-radar-platform-2) ⭐️ 8.0/10
3. [中国电信与中兴通讯部署 Super Agent Crew 自进化无线网络运维智能体系统](#item-radar-platform-3) ⭐️ 8.0/10

**政策、采购与招投标**
1. [工信部复函同意 8 省（市）开展 6G 创新发展部省协同试点，期限原则上 3 年](#item-radar-policy-1) ⭐️ 8.0/10

**其他 AI 行业新闻**
1. [跑分狂飙，实测翻车，刚发的 GPT-6.2 暴露了 OpenAI 的软肋](#item-radar-industry-1) ⭐️ 9.0/10
2. [黄仁勋辞任英伟达 CEO 后，33 年创业旧访谈被重新解读](#item-radar-industry-2) ⭐️ 8.0/10
3. [GitHub Agentic Workflows 正式可用：单次默认预算 10 美元，沙箱隔离与安全边界并存](#item-radar-industry-3) ⭐️ 8.0/10
4. [腾讯混元开源 Hy4 flash 系列模型](#item-radar-industry-4) ⭐️ 8.0/10
5. [Palo Alto Networks 拟以 45 亿美元收购前 OpenAI 员工创办的 AI 初创公司 Applied Compute](#item-radar-industry-5) ⭐️ 8.0/10
6. [AWS SageMaker AI 无服务器模型定制新增全量微调（FFT）能力](#item-radar-industry-6) ⭐️ 7.0/10
7. [Sashiko: Lessons from building an agentic code review system for Linux](#item-radar-industry-7) ⭐️ 7.0/10
8. [Genesis AI 完成 5 亿美元 A 轮融资，英伟达与 AMD 首次联手投资具身智能公司](#item-radar-industry-8) ⭐️ 7.0/10
9. [业务本体：面向 AI 与数据分析，统一规范业务概念与指标口径 ｜ 技术趋势](#item-radar-industry-9) ⭐️ 7.0/10
10. [Uber 构建 MCP Gateway：以微服务模式统一 800+ MCP 服务器与 5000+ 工具的智能体调用](#item-radar-industry-10) ⭐️ 7.0/10
11. [纳德拉回应微软自愿离职方案：Claude Code 半年动摇二十年 IDE 优势](#item-radar-industry-11) ⭐️ 7.0/10
12. [腾讯 Q3 财报：WorkBuddy 日活超千万，云收入同比增长 35%](#item-radar-industry-12) ⭐️ 7.0/10
13. [Cerebras 推出解耦推理架构，将 GPU 与晶圆级芯片配对](#item-radar-industry-13) ⭐️ 7.0/10

---

## 运营商算力与智算

<a id="item-radar-compute-1"></a>
### [全国首个升腾 950DT 词元出海算力集群在汕头启用](https://app.qudong.com/article/530010.html) ⭐️ 9.0/10

全国首个基于华为升腾 950DT 芯片的词元出海算力集群于 11 月 13 日在广东汕头启用，汕头市人民政府门户网站 11 月 16 日公布。集群由中国电信汕头分公司、广东天亿马和华为联合建设：中国电信提供网络通信资源和机房基础设施，华为提供算力设备，天亿马负责投资建设与市场化运营。集群依托中国电信汕头国际海缆登陆站提供跨境网络连接，在本地完成 AI 模型推理和词元生成后，经国际海缆向东南亚等海外市场交付智能服务。

rss · 驱动中国 · 11月18日 14:30

**「资源与技术」** 升腾 950DT 采用第三代达芬奇架构，配备 144GB 显存，单卡 FP8 算力达 1P。当地词元出海业务日均调用量已从今年 4 月的约 1 亿增长至 1000 亿。

**标签**: `#中国电信`, `#华为升腾950DT`, `#词元出海算力集群`, `#国际海缆`, `#汕头`

---

## 模型路由与 AI 网关

<a id="item-radar-router-1"></a>
### [BerriAI 发布 LiteLLM v1.109.2 稳定分支补丁](https://github.com/BerriAI/litellm/releases/tag/v1.109.2) ⭐️ 6.0/10

BerriAI 于 2026 年 11 月 19 日发布 LiteLLM v1.109.2，这是 stable/1.109.x 稳定分支的例行补丁版本，将 16 项已合并的修复回移至该分支。本次更新主要涉及认证限流、用量消费统计、Responses API 流式重试行为以及提示缓存等问题的修复，同时包含依赖锁定与测试用例更新。发布方同时提供了基于 cosign 的 Docker 镜像签名验证方式（镜像 ghcr.io/berriai/litellm:v1.109.2）。

github · litellm-release\[bot\] · 11月19日 02:38

**「路由与能力」** 本次补丁中与网关路由及能力相关的修复包括：

\- 认证限流：将 pre-body 限流检查中的当前团队限额（current team limits）回移至 stable/1.109.x（PR \#52310，回移 \#52169）。
\- 用量统计：恢复用户聚合路由上的按用户消费明细（per-user spend breakdown，PR \#51044，对应 \#49464），并回移 \#50253（PR \#52418）。
\- Responses 流式重试：路由器在输出项已送达客户端后不再重试 Responses 流（PR \#52561，回移 \#52461）。
\- 提示缓存：恢复 1.109 稳定分支上 GPT-6.2 的提示缓存（PR \#52664）。
\- Responses 系统提示：仅在 store 为 false 时才将系统提示桥接进 input（PR \#52707）。
\- 代理与镜像：回移 \#52005 及精简版 UI 镜像（slim UI image）至 stable/1.109.x（PR \#52684）。

此外还包含依赖锁定（在 Python 3.11+ 上锁定 filelock 4.2.1；对齐 next、soupsieve、msal-node）以及多项测试用例修正（tzdata 与 rc 版本单元测试、关闭两个过期 Responses 回退测试中的同组重试、更新系统提示测试预期等）。

**「适用与限制」** 该版本面向使用 LiteLLM 稳定分支 1.109.x 的部署，属于补丁级回移更新，完整变更可参考 v1.109.1...v1.109.2 的对比记录。来源未提供运营商或企业级规模、定价、容量或招标相关信息，也未给出这些修复在生产环境中的量化影响数据。

**标签**: `#LLM gateway`, `#LiteLLM`, `#provider routing`, `#patch release`, `#open source`

---

## 运营商 AI 产品与应用

<a id="item-radar-platform-1"></a>
### [联通数智自主规划智能体获信通院 OSCAR 尖峰实践奖，已支撑中国联通 AI 原生客服 31 省落地](https://finance.sina.com.cn/tech/roll/2026-11-16/doc-iniyxpwz2382379.shtml) ⭐️ 8.0/10

联通数智申报的《基于自主规划智能体的中国联通 AI 原生客服重构实践》在 2026 OSCAR 开源产业大会上获中国信通院 2026 OSCAR“人工智能+软件”尖峰实践——智能化软件产品奖。该实践以“自主规划智能体”重构中国联通 AI 原生客服，据联通数智披露，上线后已支撑中国联通 AI 原生客服在全国 31 省落地应用。

rss · 运营商财经网 · 11月16日 17:51

**「能力与场景」** 据联通数智介绍，其“自主规划智能体”以大模型自主规划替代人工硬编码流程，通过统一调度中枢实现复杂诉求一站式闭环；同时采用“文档即技能”模式，让客服运营人员用自然语言业务说明文档即可上线新服务。效果方面，上线后回复准确率稳定在 96%以上，较原系统提升 14 个百分点；上线周期从数周缩短至 1 天。

**「落地与合作」** 该实践已支撑中国联通 AI 原生客服在全国 31 省落地应用，获奖信息来自中国信通院 2026 OSCAR“人工智能+软件”尖峰实践评选。来源未提供更多关于部署节奏、各省覆盖进度或客户侧运营数据的细节。

**标签**: `#China Unicom`, `#联通数智`, `#AI customer service`, `#autonomous planning agent`, `#CAICT OSCAR`

---

<a id="item-radar-platform-2"></a>
### [中国电信星辰 AGI 实验室发布 Xing 4 大模型技术报告：全程基于升腾 910C 训练](https://blockchain.news/news/xing-4-advancing-large-language-models-ascend-chips) ⭐️ 8.0/10

中国电信旗下星辰 AGI 实验室发布星辰 Xing 4 系列大模型技术报告，该报告于 11 月 17 日发表于 arXiv（编号 2611.22115）。Xing 4 延续 TeleChat 产品路线，包含旗舰 285B-A17B 模型与开源 29B-A4B 模型。据该技术报告，两款模型全程在 8192 张升腾 910C 芯片上、使用升思 MindSpore HyperParallel 框架完成训练，不依赖 GPU 与 CUDA。上述信息来自区块链.news 对该 arXiv 报告的转述，中国电信官方发布渠道的原文未在本次来源中提供。

rss · Blockchain.News · 11月18日 14:36

**「能力与场景」** 根据技术报告内容，Xing 4 系列在模型架构与推理效率上采用多项技术组合：多头潜在注意力（MLA）、DeepSeek 稀疏注意力、IndexShare，以及 DSpark 推测解码。上下文能力方面，该系列支持 256K 至 1M 的上下文长度。此外，报告引入 TeleGym 智能体统一执行平台，用于推理与智能体后训练。开源的 29B-A4B 为该系列中的小参数量模型，旗舰 285B-A17B 为最大规格版本。

**「落地与合作」** 本次发布主体为中国电信星辰 AGI 实验室，Xing 4 系列定位为该实验室 TeleChat 大模型产品线的延续。技术报告明确训练全程基于升腾 910C 芯片与升思 MindSpore 框架，未使用 GPU 与 CUDA，体现了对国产芯片训练生态的适配。来源未提供该系列在运营商政企业务中的具体落地项目、客户案例或商用时间表。

**标签**: `#China Telecom`, `#Xing 4 / TeleChat`, `#Ascend 910C`, `#MindSpore`, `#LLM`

---

<a id="item-radar-platform-3"></a>
### [中国电信与中兴通讯部署 Super Agent Crew 自进化无线网络运维智能体系统](https://www.theregister.com/networks/2026/11/18/partner-content/5310694) ⭐️ 8.0/10

中国电信与中兴通讯联合部署 Super Agent Crew 自进化无线网络运维智能体系统，已在陕西和上海现网运行，服务超过 500 万用户。系统以中兴网络大模型为底座，由网络优化、故障处理、能效管理等多个专业智能体协同工作。

rss · The Register · 11月18日 17:05

**「能力与场景」** 操作人员用自然语言下达目标后由智能体自动执行，全部自主操作须经人工批准且全程可追溯。陕西侧重网络优化与节能，上海侧重差异化业务保障，包括上海迪士尼等高流量场景。

**标签**: `#China Telecom`, `#ZTE`, `#AI agents`, `#wireless network operations`, `#network large model`

---

## 政策、采购与招投标

<a id="item-radar-policy-1"></a>
### [工信部复函同意 8 省（市）开展 6G 创新发展部省协同试点，期限原则上 3 年](https://finance.sina.cn/2026-11-17/detail-inizaitx2074517.d.html) ⭐️ 8.0/10

工业和信息化部复函同意北京、河北、上海、江苏、浙江、安徽、湖北、广东 8 个省（市）开展 6G 创新发展部省协同试点工作，试点实施期限原则上为 3 年。复函明确，试点省市在实施 6G 相关项目过程中，涉及 6G 商业应用的企业须依规取得电信业务经营许可，未获许可前不得开展商业化应用场景探索。

rss · 新浪财经 · 11月17日 23:29

**「采购或政策要点」** 复函明确试点将围绕新型终端、关键器件、操作系统、卫星互联网等产业，面向沉浸式通信、工业制造、具身智能、低空经济、智慧海洋等场景探索 6G 应用。涉及 6G 商业应用的企业须依规取得电信业务经营许可，未获许可前不得开展商业化应用场景探索。来源未提供具体资金安排、采购金额或算力规模等细节。

**「时间与进展」** 该复函为工信部对 8 个省（市）开展 6G 创新发展部省协同试点的正式同意，试点实施期限原则上为 3 年。来源未提供各试点省市的后续实施进度或具体项目安排。

**标签**: `#6G`, `#MIIT`, `#telecom policy`, `#pilot program`, `#satellite internet`

---

## 其他 AI 行业新闻

<a id="item-radar-industry-1"></a>
### [跑分狂飙，实测翻车，刚发的 GPT-6.2 暴露了 OpenAI 的软肋](http://www.geekpark.net/news/374175) ⭐️ 9.0/10

OpenAI released GPT-6.2 Astra and Sol with a 20% API price cut and strong benchmark scores, but faced immediate criticism from prominent developers and academics over real-world stability and performance.

rss · 极客公园 · 11月18日 13:40

**标签**: `#OpenAI`, `#GPT-6.2`, `#model release`, `#pricing`, `#Artificial Analysis`

---

<a id="item-radar-industry-2"></a>
### [黄仁勋辞任英伟达 CEO 后，33 年创业旧访谈被重新解读](https://www.infoq.cn/article/e7Gtfwy4TI26o5elxRwT?utm_source=rss&amp;utm_medium=article) ⭐️ 8.0/10

11 月 12 日，英伟达宣布黄仁勋辞去 CEO、总裁及董事职务。此后一份支持他回归的在线请愿书获得超过 17 万个签名，马斯克等科技行业人士公开声援。据《金融时报》11 月 15 日报道，黄仁勋已与亲信讨论重返英伟达 CEO 职位的可能性，部分硅谷高管也在筹划向董事会施压。与此同时，InfoQ 编译的一篇人物访谈重新回顾了他 33 年创办英伟达的历程，以及他此前“绝不愿再创办一次英伟达”的表态。

rss · InfoQ 中文 · 11月18日 13:50

**「创业历程关键事实」** 1993 年，即将年满 30 岁的黄仁勋离开 LSI Logic，与 Chris Malachowsky 和 Curtis Priem 共同创办英伟达。第一款芯片 NV1 采用正向纹理映射，与逐渐成为主流的逆向纹理映射及微软 DirectX 不兼容，卖出的约 25 万块芯片几乎全部被退回。英伟达随后放弃与世嘉价值约 1200 万美元的合同，并请求世嘉将剩余约 500 万美元转为投资，公司因此避免立即倒闭，但被迫裁掉约三分之二的员工（当时团队约 250 人）。为缩短研发周期，黄仁勋花掉公司剩余资金的一半购入一台硬件仿真器，最终推动 RIVA 128 完成开发。2006 年前后英伟达推出 CUDA，并将其集成到 GeForce 游戏显卡中以扩大装机量，一度拖累毛利率；2006 年至 2012 年公司经历股价下跌与长期低迷。2012 年 AlexNet 在 ImageNet 竞赛中借助 GPU 取得显著领先，2013 年前后黄仁勋向公司内部发邮件，明确提出英伟达正在向 AI 公司转变。

**「访谈背景」** 今年 4 月，黄仁勋接受《How I Built This》主持人 Guy Raz 采访。节目最初于 5 月以音频形式发布，11 月 12 日（黄仁勋宣布离职当天）重新推出这场长达 87 分钟的访谈视频。Guy Raz 在新引言中表示，对话内容并未涉及黄仁勋近期的风波。在访谈中，黄仁勋谈到错过孩子成长的重要时刻、妻子 Lori 承担家庭事务，并表示“我几乎用尽一生的时间，试图忘掉昨天”。

**标签**: `#NVIDIA`, `#Jensen Huang`, `#AI chips`, `#leadership change`, `#InfoQ`

---

<a id="item-radar-industry-3"></a>
### [GitHub Agentic Workflows 正式可用：单次默认预算 10 美元，沙箱隔离与安全边界并存](https://www.infoq.cn/article/lMs1bM1muspglUjMr1l3?utm_source=rss&amp;utm_medium=article) ⭐️ 8.0/10

GitHub 宣布 GitHub Agentic Workflows 正式可用。该开源项目可在 GitHub Actions 中运行编码智能体，处理 Issue 分类、CI 故障分析等代码仓库任务。智能体启动时仅拥有只读权限，其提出的更改由持有独立写入令牌的作业应用。定价方面，AI Credit（AIC）每个 0.01 美元，单次运行上限 1000 AIC（即 10 美元）。该项目于 2026 年 6 月进入公开预览阶段，现面向 github.com 上的 GitHub Free、Team 和 Enterprise 用户开放。

rss · InfoQ 中文 · 11月18日 08:00

**「关键数据与产品变化」** 定价与默认限制：AIC 每个 0.01 美元；每次运行上限 1000 AIC（10 美元）；每天 5000 AIC；每次威胁检测运行 400 AIC；智能体步骤最多运行 20 分钟。组织可覆盖这些设置。已结束实验阶段的 gh aw forecast 命令可估算每月 AIC 支出，含威胁检测费用。

产品变化：公开预览以来新增对 Actions Runner Controller（ARC）的支持。ARC 是 GitHub 面向自托管 Runner 的 Kubernetes Operator，可配合 Docker-in-Docker（DinD）使用，DinD 在 Runner Pod 内运行 Docker 守护进程，使智能体能够启动自己的沙箱容器。

使用方式：开发者用自然语言 Markdown 描述任务，通过 YAML Front Matter 配置，项目将其编译成标准 Actions 工作流，复用现有 Runner 组和策略限制；团队既可用 Copilot，也可接入其他编码智能体。默认使用的 Copilot CLI 引擎需要 Copilot 许可证。

**「安全边界与适用范围」** 安全机制与局限：智能体运行在由 Agent Workflow Firewall 保护的沙箱容器中，威胁检测作业会在应用修改前扫描智能体提出的变更。但项目常见问题指出，这些保护不会自动覆盖直接授予的写入权限，也不适用于工作流作者自行添加的自定义作业，安全性取决于具体配置。作者可添加 GitHub Environment 保护规则，要求写入作业运行前经审核人员批准。项目指南指出，ARC 默认以特权容器方式运行 DinD Sidecar，意味着一个特权组件与采用最小权限设计的智能体运行在同一环境。

适用范围：GitHub 常见问题指出，对可复现的构建和测试，传统 Actions 仍是更合适的选择；智能体工作流适用于需要理解或生成内容的任务。

相关方观点：埃森哲高级经理 Ben Alton 在公告中称一位负责人估计每周在开发工作上节省 29 小时，公告未解释测量方式。参与测试的 freenet 中间件团队负责人 Sascha Mirow-Stanitzok 认为默认预算对 Issue 分类过于宽松，将其限制为每次运行 100 AIC、15 轮交互和 10 分钟；他表示仅要求智能体忽略 Issue 文本中的指令并不能真正保护工作流，对会修改代码或创建 Pull Request 的工作流不会采用同样模式。GitLab 的 Duo Agent Platform Flow 采用不同方案：以复合身份在 Runner 上运行，将服务账户与发起请求的人类用户绑定，触发操作必须由人类发起，且一个 Flow 无法启动另一个 Flow。

**标签**: `#GitHub`, `#Microsoft`, `#AI 智能体`, `#GitHub Actions`, `#AI 基础设施`, `#定价`

---

<a id="item-radar-industry-4"></a>
### [腾讯混元开源 Hy4 flash 系列模型](https://news.google.com/rss/articles/CBMiXkFVX3lxTFB4S0JvcDJWLVViczBEeHB6S0ZRVDZTMHhvNllpQXE2UkRrREhmZFRwU1FyYXNrMmRTSnhlVnJNWjRpdkdYUDh2LU5LREc0NHVPS2ZKTmhyUXNvSVdSX1E?oc=5) ⭐️ 8.0/10

据 SmartHey 报道，腾讯混元开源了 Hy4 flash 系列大模型，该系列具备 224B 参数和百万 token 级上下文能力，并在性价比方面有所提升。目前可获取的信息仅限于该报道标题，具体的模型规格、开源许可、发布渠道及基准表现等细节尚未在材料中披露。

google\_news · SmartHey · 11月18日 04:39

**标签**: `#腾讯`, `#混元`, `#Hy4 flash`, `#开源模型`, `#大模型`

---

<a id="item-radar-industry-5"></a>
### [Palo Alto Networks 拟以 45 亿美元收购前 OpenAI 员工创办的 AI 初创公司 Applied Compute](https://news.google.com/rss/articles/CBMidkFVX3lxTE0yQk54YzFQZWltQ3ZPQ1M1UVptWEtES2lkOC13ZHRpOWdNRFExYjY5X01qOEhBdUdqQVZ2d2lRdGNIaGJyOVhTZ2phdU1reUdqR0ljSzlUVXYzYUhNU2hzaEV3b2lpdXZ0d09LMVdHbzdObFFxWFE?oc=5) ⭐️ 8.0/10

Palo Alto Networks 宣布计划以 45 亿美元收购 AI 初创公司 Applied Compute，该公司由前 OpenAI 员工创办。此项交易是 Palo Alto Networks 深入企业级 AI 领域战略的一部分。

google\_news · BigGo Finance · 11月19日 02:35

**「交易细节」** 多家来源指出，这笔 45 亿美元的收购为全股票交易。SiliconANGLE 报道称，该收购消息与 Palo Alto Networks 财报超出预期一同公布。

**「背景」** Applied Compute 由前 OpenAI 员工创办。Palo Alto Networks 是一家网络安全公司，此次收购被视为其进军企业级 AI 业务的举措。

**标签**: `#Palo Alto Networks`, `#OpenAI`, `#enterprise AI`, `#M&amp;A`, `#$4.5 billion acquisition`

---

<a id="item-radar-industry-6"></a>
### [AWS SageMaker AI 无服务器模型定制新增全量微调（FFT）能力](https://aws.amazon.com/blogs/machine-learning/full-fine-tuning-fft-on-sagemaker-ai-serverless-model-customization/) ⭐️ 7.0/10

AWS 于 2026 年 11 月 19 日发布技术博客，宣布 Amazon SageMaker AI Serverless Model Customization（无服务器模型定制）现已支持全量微调（Full Fine-Tuning, FFT）。该能力允许企业在无需自行管理 GPU 供给、集群搭建或分布式训练配置的前提下，对预训练大语言模型进行全参数更新，以在复杂任务上获得优于 LoRA 等参数高效微调（PEFT）方法的模型质量。博客作者为 Sandeep Raveesh-Babu。

rss · AWS Machine Learning · 11月19日 00:15

**「关键数据与实验设置」** 博客以 Qwen3-4B 基座模型为实验对象，在 SageMaker AI Studio 内使用监督微调（SFT）技术，分别以 LoRA 和 FFT 两种方式在 SageMaker AI 无服务器模型定制上完成训练，两种方法使用相同的提示、目标与评估代码。

训练数据为 Magicoder-Evol-Instruct-110K 数据集，包含 110,000 条代码指令—回复对，覆盖算法设计、调试、数据结构与系统编程。数据按 90/5/5 划分：99,000 条用于训练，5,500 条用于验证以监控收敛与训练损失，5,500 条作为留出测试集用于无偏评估。

评估采用三种内置方法：LLM-as-Judge（以 Amazon Nova Pro 作为自动评判模型，判断生成代码的逻辑正确性）、PRIMECODE（使用 BLEU、ROUGE-1/2/L、F1 等确定性文本相似度指标衡量与参考解的匹配度）以及 MMLU（通用知识保留）。

博客给出的基准结果显示：在 100K+ 训练样本规模下，FFT 在代码生成任务的 LLM-as-Judge 语义正确性上达到 90.0%；雷达图显示 FFT 在 BLEU 与 ROUGE-2 等维度上相对 LoRA 优势尤为明显。

在 SageMaker Python SDK 中，从 FFT 切换到 LoRA 仅需将 TrainingType.FULL 改为 TrainingType.LORA，其余代码保持一致。

**「技术背景」** LoRA 通过冻结预训练权重、仅向模型层注入小规模低秩矩阵来减少可训练参数量，从而降低 GPU 资源需求。博客指出，低秩结构本身限制了微调模型的表示能力：随着任务复杂度提升、数据集规模扩大到数万条以上，LoRA 会进入精度平台期，此时提高秩（即增加可训练参数）也无法弥合与标准全量微调之间的差距。FFT 则同时更新全部模型参数，以权重矩阵的完整表示能力进行均匀调整，从而克服低秩限制。

**标签**: `#AWS`, `#SageMaker AI`, `#Fine-Tuning`, `#LLM`, `#Serverless Model Customization`

---

<a id="item-radar-industry-7"></a>
### [Sashiko: Lessons from building an agentic code review system for Linux](https://cloud.google.com/blog/products/application-development/lessons-from-building-sashiko-an-agentic-code-review-system/) ⭐️ 7.0/10

Google engineers detail lessons from building Sashiko, an agentic code review system designed to help Linux kernel maintainers handle AI-generated patches.

rss · Google Cloud AI · 11月18日 17:00

**标签**: `#Google`, `#Sashiko`, `#agentic AI`, `#code review`, `#Linux kernel`

---

<a id="item-radar-industry-8"></a>
### [Genesis AI 完成 5 亿美元 A 轮融资，英伟达与 AMD 首次联手投资具身智能公司](https://www.qbitai.com/2026/11/510821.html) ⭐️ 7.0/10

美国具身智能公司 Genesis AI 完成 5 亿美元 A 轮融资，投后估值达 35 亿美元。投资方包括 NVIDIA、AMD、前谷歌 CEO Eric Schmidt、Zoom 创始人袁征和雅虎创始人 Jerry Yang，其中这是 NVIDIA 与 AMD 首次联手投资一家具身智能公司。公司同时披露其具身基础模型 GENE-26.5 及全栈研发体系，并表示本轮融资将主要用于推动机器人产品 Eno 的大规模量产和部署。

rss · 量子位 · 11月18日 04:28

**「关键数据与产品细节」** Genesis AI 创立于 2025 年 3 月，总部横跨美国和法国，由华人学者周衔与 Théophile Gervet 联合创立。GENE-26.5 于 2026 年 5 月发布，绝大部分操作依赖同一套共享权重的模型，而非多个专用小模型堆砌。在一段四分钟未经加速的厨房视频中，机器人完成了超过 20 个子任务，包括磕鸡蛋、切番茄、使用打蛋器、盐磨和锅铲；在实验室场景中可自主完成移液、密封试管并放入离心机。

数据方面，公司采用「人手—数据手套—灵巧手」的 1:1:1 全链路映射方案，数据手套使用电磁场（EMF）手指追踪与高密度触觉传感，灵巧手拥有 20 个自由度。截至 2026 年 5 月，GENE 已使用超过 20 万小时多模态数据，目前数据量已达百万小时规模。

仿真平台 Genesis World 可将原本需要一名操作员和一台机器人连续工作超过 200 小时的数万次测试，在不到半小时内完成；官方对照实验中，仿真评测与真实机器人测试结果的 Pearson 相关系数为 0.8996。公司自研了渲染引擎 Nyx、跨平台编译器 Quadrants 和统一物理引擎。

产品 Eno 采用轮式底座和可升降躯干设计，刚获得德国设计大奖金奖，并被福布斯杂志称为「机器人的 iPhone 时刻」。

**「量产与落地计划」** Genesis 表示，本轮融资将主要用于推动 Eno 在真实世界的大规模量产和部署。公司计划在 2026 年底前开始生产和客户部署，首先进入制造业、物流和实验室等工业环境，随后扩展到酒店、医院等服务行业，最后进入消费级家庭和户外应用。CEO 周衔在融资声明中表示，公司使命是消除人类抱负在物理世界受到的限制，为此需要智能、硬件以及训练和测试所需的一切作为一个整体系统协同运转。

**标签**: `#Genesis AI`, `#NVIDIA`, `#AMD`, `#embodied AI`, `#Series A funding`, `#GENE-26.5`

---

<a id="item-radar-industry-9"></a>
### [业务本体：面向 AI 与数据分析，统一规范业务概念与指标口径 ｜ 技术趋势](https://www.infoq.cn/article/GSGpEUU4dCdppTCmaOSy?utm_source=rss&amp;utm_medium=article) ⭐️ 7.0/10

Snowflake 推出 Business Ontology，为 AI 智能体提供统一受治理的业务概念与指标口径层。

rss · InfoQ 中文 · 11月18日 18:23

**标签**: `#Snowflake`, `#Business Ontology`, `#Horizon Context`, `#Cortex Sense`, `#Semantic Views`

---

<a id="item-radar-industry-10"></a>
### [Uber 构建 MCP Gateway：以微服务模式统一 800+ MCP 服务器与 5000+ 工具的智能体调用](https://www.infoq.cn/article/FrDlAvNIwkr8ttdvWMCC?utm_source=rss&amp;utm_medium=article) ⭐️ 7.0/10

Uber 构建了一套 MCP Gateway，用于规范内部 AI 智能体发现和调用服务的方式，以解决集成碎片化、基础设施重复建设和安全实践不一致等问题。该平台支持 800 多个 MCP 服务器和 5000 多个工具，为服务发现、协议转换、授权和执行提供统一层。Uber 工程师将该方案描述为一种微服务架构，可以把现有 API 公开为 MCP 工具，而无需修改底层服务。

rss · InfoQ 中文 · 11月18日 14:00

**「架构与关键能力」** 整体架构将作为控制平面的 MCP Registry 与负责运行时执行的 Proxy Gateway 分离：Registry 维护工具定义、Schema、所有权和启用设置；Proxy 将 MCP 请求转换为 HTTP、gRPC 或 TChannel 调用，再把响应转换回兼容 MCP 的结果。

工具自动发现由 AutoCrawler 借助 Cadence 完成：它扫描内部接口定义语言（IDL）注册表，从 Protocol Buffers 和 Thrift Schema 中提取 API 定义，生成兼容 MCP 的 Schema，并使用大语言模型生成工具描述。新发现的工具默认保持禁用状态，直到所属团队审核并明确启用；配置变更可直接传播到数据平面，无需重启服务或重新部署。

安全方面，网关通过 Uber 内部访问控制系统在服务器和工具两个层级执行授权，并支持对工具响应中的个人身份信息（PII）及其他敏感数据脱敏。对于 Jira、Google 等第三方集成，一项独立服务会将内部用户 Token 交换为相应的第三方身份验证 Token。

为应对工具目录扩张带来的上下文低效问题，Uber 开发了 Omni MCP，支持渐进式发现，让智能体搜索服务器、发现相关工具、获取单个 Schema 并按需调用；Response Projection 允许智能体只指定需要的响应字段而不接收完整载荷；aifx 命令行界面支持编码智能体发现和调用工具，并将结果写入文件以便选择性查看。

**「行业反应」** 该架构被拿来与成熟的 API 网关模式比较。Microsoft CoreAI 首席软件工程师 Ajay Sharma 在 LinkedIn 帖子中回复称，Azure API Gateway 早就在做这件事，这是一套将大语言模型带来的混乱重新整理为秩序的方法。Pipe17 总裁 Kelly Goetsch 指出，Uber 的新 MCP 网关看起来与过去几十年里为 API、后来又为 GraphQL 构建的网关完全相同。Tamir Dresher 强调，安全、服务发现、可观测性和治理等传统分布式系统问题在今天仍然具有重要意义。

**标签**: `#Uber`, `#MCP Gateway`, `#AI agents`, `#inference infrastructure`, `#tool calling`

---

<a id="item-radar-industry-11"></a>
### [纳德拉回应微软自愿离职方案：Claude Code 半年动摇二十年 IDE 优势](https://www.infoq.cn/article/zUC0vHq9xm3BFHSqQlw3?utm_source=rss&amp;utm_medium=article) ⭐️ 7.0/10

2026 年 11 月 16 日，微软 CEO Satya Nadella 在《The Pragmatic Engineer》播客中承认，Anthropic 的 Claude Code 在约六个月内动摇了微软积累二十多年的开发工具优势，使 IDE 在某种程度上“淡出了人们的视野”。这一表态恰逢微软于 10 月 26 日推出新的自愿离职方案，并与组织重构同步进行。

rss · InfoQ 中文 · 11月18日 13:55

**「关键表态与进展」** Nadella 表示，真正让微软受到冲击的是 Anthropic 在模型能力上的重大进展，这些进展使命令行界面（CLI）成为可行的产品形态，开发者可以直接把完整编程任务交给模型处理。他认为 IDE 不会永久消失，随着“决策引擎模型”出现，IDE 甚至可能迎来复兴。

关于自愿离职方案，Nadella 没有承诺一切照旧，称未来团队规模、工作流程和岗位配置都会不同，微软 20 万名员工需要以新的方式重新组织。对于初级工程师招聘放缓，他表示现在断言其为长期趋势还为时过早，企业需先建立新的“软件工厂”、重新安排人员和 Token 资源后，才能决定需要怎样的工程师。

Nadella 提出的方向是“软件工厂”：人负责规格、意图和验证，Agent 承担越来越多的执行；在代码生成成本变低的世界里，真正困难的事变成验证。他还强调企业应掌控自己的 AI 基础设施与学习循环，上下文、记忆、Harness 与模型应可分离替换。

**「竞争背景」** 过去二十多年，微软通过 Visual Studio、VS Code 和 GitHub 构建了开发工具优势，并凭借 GitHub Copilot 率先进入 AI 编程市场。2023 年 Cursor 出现后，竞争仍发生在微软熟悉的编辑器生态中，Cursor 本身基于 VS Code 构建。播客主持人 Gergely Orosz 认为，Claude Code 的崛起改变了竞争方式，对微软和 JetBrains 都造成了措手不及的冲击，并预计微软内部还会出现更密集的组织调整与岗位变化。

**标签**: `#Microsoft`, `#Anthropic`, `#Claude Code`, `#VS Code`, `#AI coding tools`

---

<a id="item-radar-industry-12"></a>
### [腾讯 Q3 财报：WorkBuddy 日活超千万，云收入同比增长 35%](https://news.google.com/rss/articles/CBMiYEFVX3lxTE5LZUJJelFWU292dmdPRnZ6TXZkSmxZWVBKSndyWHdWWloxNFRhaktOSWMtRTdTX011NEk1UGhKcG9IbDVyVlE0NUJqVW5NYzFlSTVuX19ZWjVDSlgxMElVcQ?oc=5) ⭐️ 7.0/10

据粤港澳都市网报道，腾讯发布 2026 年第三季度财报，旗下 AI 产品 WorkBuddy 日活跃用户超过 1000 万，云业务收入同比增长 35%，公司定位为迈向 AI 引领的科技公司。

google\_news · 粤港澳都市网 · 11月18日 09:03

**「关键数据」** WorkBuddy 日活跃用户超过 1000 万；云业务收入同比增长 35%（同比口径，财报未在材料中给出绝对金额）。

**标签**: `#Tencent`, `#cloud revenue`, `#WorkBuddy`, `#AI`, `#Q3 earnings`

---

<a id="item-radar-industry-13"></a>
### [Cerebras 推出解耦推理架构，将 GPU 与晶圆级芯片配对](https://news.google.com/rss/articles/CBMiqgFBVV95cUxObjd6TU1wYzlzWi15bjJWRU84ZjlJcnE1blVMOHc2S1pPbk5UZWd4ejdlWFVpWXFQYnZNVlZzRVpWSjBmZmxub3lRNDdKR2ZBZWMxMzQ3ZlBxNEJEMDFrMm5nejZ5NzFPTk5YcGlHZzh4SHphV09OU0hJZHlXZXNTY0RkZWRpSzZHakJ5QW5fYWZhYkdLdWNmUzdzSWQ4M0czQW55dE05a094QQ?oc=5) ⭐️ 7.0/10

Cerebras 推出了一项解耦推理（disaggregated inference）架构，将 GPU 与其晶圆级芯片配对使用。该消息来自新闻聚合站点 news.lavx.hu 的标题报道，发布时间为 2026 年 11 月 18 日。由于来源仅提供标题，具体技术细节、产品名称与可用条件未披露。

google\_news · news.lavx.hu · 11月18日 09:52

**标签**: `#Cerebras`, `#disaggregated inference`, `#wafer-scale`, `#AI infrastructure`, `#GPUs`

---