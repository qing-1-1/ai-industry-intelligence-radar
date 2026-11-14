---
layout: default
title: "Horizon Summary: 2026-11-14 (ZH)"
date: 2026-11-14
lang: zh
---

> 从 151 条内容中筛选出 15 条重要资讯。

---

**运营商算力与智算**
1. [中国电信在 2026 人工智能+大会期间宣布扩容智算集群](#item-radar-compute-1) ⭐️ 6.0/10

**模型路由与 AI 网关**
1. [AWS 发布在 Amazon Bedrock 上用 NVIDIA NeMo Switchyard 路由编码代理请求的技术方案](#item-radar-router-1) ⭐️ 6.0/10

**其他 AI 行业新闻**
1. [黄仁勋辞任英伟达 CEO，克雷斯出任临时 CEO，公司首设董事会主席](#item-radar-industry-1) ⭐️ 9.0/10
2. [高难盲测超越 GPT-6-Astra 与 Opus-5！无界前沿开源 Fx-Bio-1031，把 RSI 带进生命科学](#item-radar-industry-2) ⭐️ 8.0/10
3. [LMSYS Org 联合 NVIDIA、AMD、Google 与 Meta 成立 SGLang 联盟](#item-radar-industry-3) ⭐️ 8.0/10
4. [Amazon Bedrock AgentCore runtime V2 通过快照机制加速会话启动](#item-radar-industry-4) ⭐️ 7.0/10
5. [OpenFold3-preview 现可在 Amazon SageMaker JumpStart 部署](#item-radar-industry-5) ⭐️ 7.0/10
6. [中国机器人学会隔墙“递眼色”！成功率从 0 飙到 100%，组队干活不烧心](#item-radar-industry-6) ⭐️ 7.0/10
7. [奥运史上第一次，一朵云整体留给了举办国](#item-radar-industry-7) ⭐️ 7.0/10
8. [燧原科技登陆科创板](#item-radar-industry-8) ⭐️ 7.0/10
9. [Fractile 融资 7 亿美元，目标将 AI 推理速度提高 100 倍](#item-radar-industry-9) ⭐️ 7.0/10
10. [本地大模型推理工具 Ollama 发布 1.0 正式版](#item-radar-industry-10) ⭐️ 7.0/10
11. [Kimi、DeepSeek、智谱占美国企业开源 AI 支出近九成，中国厂商寻求超越纯 API 销售](#item-radar-industry-11) ⭐️ 7.0/10
12. [Salesforce 开源 ASR 新模型，错误率 2.28% 登顶开放权重榜单](#item-radar-industry-12) ⭐️ 7.0/10
13. [MiniMax 开源新图像生成模型：约 10 秒生成 4K 图](#item-radar-industry-13) ⭐️ 7.0/10

---

## 运营商算力与智算

<a id="item-radar-compute-1"></a>
### [中国电信在 2026 人工智能+大会期间宣布扩容智算集群](https://news.google.com/rss/articles/CBMijgFBVV95cUxPMGVfbTFxenZBdG0xcXZWT003SUlxWmVyaWFfT2FaZVFvQTdIZ1hCLS02LS1JSXZibi15eHpIX1RUenQ2SEVwWVBZZ3F0RXM1N3hZOGFiM1htb2pyMFNwMllnY3VQakQ0SUN4NWE4YlktM3AzZzNiWUVybmE3WVlOQWRjVFlMbXAyVVhFYnVn?oc=5) ⭐️ 6.0/10

据手机新浪网报道，在 2026 人工智能+大会期间，中国电信宣布扩容智算集群，以推动产业落地。该报道标题将大会议题锚定在智算方向，并提及中国电信的智算集群扩容动作。来源仅提供标题信息，未给出扩容的具体容量规模、投资金额、时间节点、技术方案或官方声明细节，来源未提供更多细节。

google\_news · 手机新浪网 · 11月13日 23:58

**标签**: `#中国电信`, `#智算集群`, `#算力扩容`, `#人工智能+大会`, `#运营商AI基础设施`

---

## 模型路由与 AI 网关

<a id="item-radar-router-1"></a>
### [AWS 发布在 Amazon Bedrock 上用 NVIDIA NeMo Switchyard 路由编码代理请求的技术方案](https://aws.amazon.com/blogs/machine-learning/route-coding-agent-requests-to-the-right-model-on-amazon-bedrock-with-nvidia-nemo-switchyard/) ⭐️ 6.0/10

AWS 在机器学习博客发布技术文章，演示如何用 AWS CDK 在自有 AWS 账户中部署开源 LLM 网关 LiteLLM 及 NVIDIA NeMo Switchyard 路由插件，由 LiteLLM 通过 Amazon Bedrock 调用模型，为编码代理（如 Claude Code、OpenAI Codex CLI）的请求在多个模型间做路由，并用示例基准脚本测量“每个已解决任务的成本”（cost per solved task）。文章明确该示例安装 switchyard-server 0.3.0（来自 crates.io）并运行 LiteLLM v1.102.0 镜像，属于非生产用途的示例代码。

rss · AWS Machine Learning · 11月13日 22:30

**「路由与能力」** Switchyard 的 LiteLLM 集成提供两种路由策略：Stage 路由读取请求历史中最近的工具活动与结果，在“能力较强模型”和“低成本高效模型”两个候选间选择；Random 路由从配置的模型池中按可选权重选取，用于流量切分和 A/B 对比。两种策略都不调用裁判模型（judge model）。文章提到 LiteLLM 近期也发布了内置的 Switchyard stage 路由器作为 auto-router 策略。

架构上，LiteLLM 与 Switchyard 插件运行在同一容器镜像中，部署在 Amazon ECS（AWS Fargate）私有子网。请求流程：编码代理发送 OpenAI 兼容请求，model 字段设为 switchyard，Authorization 头携带共享网关密钥；经 Route 53 解析到负载均衡器，AWS WAF 按 IP 信誉、已知恶意输入和单 IP 限速过滤；应用负载均衡器仅放行 /v1/chat/completions、/v1/models 和 /health/liveliness，其余路径返回 404；LiteLLM 校验密钥后调用插件选模型，再通过 Amazon Bedrock Converse 或 ConverseStream API、经 Bedrock Runtime 接口端点在 AWS 网络内完成推理；响应经 x-litellm-model-name 头标明实际应答模型，响应体 model 字段保持 switchyard。

成本测量方面，文章主张以“运行总成本除以测试通过的运行数”评估路由，而非单看每 token 价格，因为任务总成本取决于轮数、每轮重放的历史量以及重试和未完成任务的次数。基准脚本可对比路由模型组与单模型基线组，并提示：先看 SOLVED 数量再看 COST/SOLVED；单独分析困难任务；增加重复次数并用统计检验（如 Fisher 精确检验）判断差距；注意 --max-turns 和 max\_tokens 上限对结果的影响；成本为基于 token 用量和 PRICES 表的估算，需与 Bedrock 定价和 AWS Cost and Usage Reports 核对。

**「适用与限制」** 文章将 switchyard-server 0.3.0 定位为演示与评估组件，其配置可能在版本间变化；所用的 Switchyard LiteLLM 集成为实验性，配置和 API 可能在版本间变化。该示例为非生产用途的示例代码，AWS 建议部署前与安全和法务团队确认组织的安全、监管与合规要求，并在非生产账户中先行测试。部署要求自有域名和 Route 53 公共托管区（或改用已有 ACM 证书并自建 CNAME），且必须设置 allowedCidr 限制访问来源，堆栈拒绝在无 allowedCidr、使用 0.0.0.0/0 或 IPv6 段时合成。本地 Docker Compose 方式仍会调用 Amazon Bedrock 并产生计费。清理时 CloudFormation 会无恢复窗口地删除主密钥。文章未提供运营商侧的部署案例、定价或容量数据。

**标签**: `#AI model routing`, `#LLM gateway`, `#Amazon Bedrock`, `#NVIDIA NeMo Switchyard`, `#cost optimization`

---

## 其他 AI 行业新闻

<a id="item-radar-industry-1"></a>
### [黄仁勋辞任英伟达 CEO，克雷斯出任临时 CEO，公司首设董事会主席](https://www.qbitai.com/2026/11/509995.html) ⭐️ 9.0/10

当地时间 2026 年 11 月 12 日，英伟达宣布黄仁勋即日起辞去公司总裁、首席执行官及董事会成员职务，即刻生效。现任执行副总裁兼 CFO Colette Kress（克雷斯）出任临时 CEO，并继续兼任原有职务，直至正式继任者获任命。公司同时任命 Harvey C. Jones（哈维·C·琼斯）为英伟达历史上首位董事会主席，并已启动永久 CEO 遴选，将同时考虑内部和外部候选人。黄仁勋于 1993 年联合创办英伟达，掌舵公司 33 年。

rss · 量子位 · 11月13日 09:02

**「关键数据与人事细节」** 消息公布后，英伟达盘前股价一度跌至 150.13 美元，较前一交易日收盘下跌约 13.58%；开盘后跌幅仍超 10%，截止发稿前跌幅收窄至-4.63%。作为参照，2025 年 1 月 27 日英伟达曾因 DeepSeek 引发的市场重估单日收跌约 17%，市值蒸发约 5930 亿美元。临时 CEO 克雷斯已在英伟达工作超过 13 年，2013 年 9 月加入并一直担任执行副总裁兼 CFO；加入英伟达前，她曾在思科任业务技术与运营财务部门高级副总裁兼 CFO，更早在微软工作 13 年（其中四年任服务器与工具部门 CFO），并在德州仪器担任多个财务职位。新任董事会主席琼斯曾担任新思科技 CEO 和执行董事长。英伟达确认将按原定安排于 11 月 17 日公布 2027 财年第三季度业绩并召开财报电话会议。

**「治理结构变化与相关背景」** 英伟达此前未设董事长，采用独立首席董事（Lead Director）制度，董事会议程由首席独立董事与黄仁勋共同确定；首任董事长到位后，决策结构转为“董事长+CEO”的双头结构。公告未披露董事会是否曾就罢免表决，最终以黄仁勋“辞去”全部职务的方式收场。报道同时提及若干外部背景：沃伦与库恩斯两位参议员要求保存对华芯片出口相关文件并就国家安全风险向国会作简报；特朗普此前曾公开支持黄仁勋留任，其政府据报早已知悉董事会可能撤换黄仁勋的计划，但最终未公开介入阻止。英伟达在公告中表示，董事会预计公司运营、客户承诺及产品路线图将继续推进，不受中断。

**标签**: `#NVIDIA`, `#Jensen Huang`, `#Colette Kress`, `#CEO transition`, `#AI infrastructure`

---

<a id="item-radar-industry-2"></a>
### [高难盲测超越 GPT-6-Astra 与 Opus-5！无界前沿开源 Fx-Bio-1031，把 RSI 带进生命科学](https://www.qbitai.com/2026/11/509663.html) ⭐️ 8.0/10

无界前沿 open-sourced Fx-Bio-1031, a bioinformatics RSI model claiming to beat GPT-6-Astra and Claude Opus-5 on the BioMysteryBench difficult subset.

rss · 量子位 · 11月13日 07:06

**标签**: `#无界前沿`, `#Fx-Bio-1031`, `#bioinformatics AI model`, `#open-source model release`, `#BioMysteryBench`

---

<a id="item-radar-industry-3"></a>
### [LMSYS Org 联合 NVIDIA、AMD、Google 与 Meta 成立 SGLang 联盟](https://news.google.com/rss/articles/CBMirAFBVV95cUxPTjFqZ0Z2T1otQ0huUWtTZDRPVWhUZUJjdVI3Y1JkVm5hQ2IyZkEtUVJPNC1uaW11cFMxZTZLRzE4dDY3QU9EU05LVEkwRW51cC1ObEZIMWE2UWJYMDZ4enk0T0l0SXEycjU3RHJkYV9sbXNOTVlmdXEwRmMydmVMWTEzMW1WaXd4cDExalJNMlRGc1FjUkl4bjMxMHA5QU9NRDl1UUN3cTByUV9Y?oc=5) ⭐️ 8.0/10

据 HPCwire 报道，LMSYS Org 已与 NVIDIA、AMD、Google 和 Meta 共同成立 SGLang 联盟，以推动这一开源大语言模型推理框架的发展。报道未披露联盟的具体范围、资金安排或技术细节。

google\_news · HPCwire · 11月13日 19:45

**标签**: `#LMSYS Org`, `#SGLang`, `#NVIDIA`, `#AMD`, `#Google`, `#Meta`, `#LLM inference infrastructure`

---

<a id="item-radar-industry-4"></a>
### [Amazon Bedrock AgentCore runtime V2 通过快照机制加速会话启动](https://aws.amazon.com/blogs/machine-learning/architecture-patterns-for-fast-session-startup-on-amazon-bedrock-agentcore-runtime/) ⭐️ 7.0/10

AWS 于 2026 年 11 月 13 日发布技术博客，介绍 Amazon Bedrock AgentCore runtime 在 platformVersion 设为 &quot;V2&quot; 时的会话启动架构模式。V2 不再为每个会话初始化容器，而是预先构建并冻结环境快照，新会话通过恢复快照启动，从而缩短并稳定会话启动时间，同时回收会话未使用的内存。博客给出四种加速模式，涵盖代码调整、build hook 以及在用户交互前预热会话。

rss · AWS Machine Learning · 11月13日 22:02

**「关键数据与产品变化」** V2 快照构建流程：创建或更新 runtime 时，AgentCore 在全新 microVM 中启动容器，等待首次健康检查 GET /ping（须在 120 秒内到达），随后清除操作系统文件缓存以保持快照精简，冻结 microVM 并将内存与磁盘存为快照。与 V1 不同，每次创建或更新现在需要几分钟来构建快照。

V1 与 V2 的差异：V1 每个会话都要从 Amazon ECR 拉取容器镜像、启动容器并运行初始化代码，镜像拉取占主导，冷启动随镜像体积增长；V2 将这些工作一次性完成。

博客给出的三条机制事实：快照时进程持有的内存内容（含 /dev/shm 等 RAM 文件系统）在恢复后以内存速度可用；文件缓存在冻结前被清除，init 期间读过的文件在恢复会话中不会变快；镜像文件按首次读取懒加载，首个块来自快照存储，之后缓存在更靠近主机处。

可观测性指标（AWS/Bedrock-AgentCore 命名空间下的 CloudWatch 指标）：Latency 为首字节时间（TTFB），OverheadLatency 为平台开销（如启动 microVM 与恢复快照），二者之差为代码耗时；init 时间不计入请求指标，仅影响 create/update 达到 READY 的时长。

博客列出的模式选择：新会话约 2 秒可接受时，切换到 V2 并把初始化放在 app.run\(\) 之前；agent 早期需要大文件、CLI 或浏览器且无法常驻进程时，添加 build hook 在快照构建期间加载预热；需要亚秒级且用户在首次请求前有交互（如打开应用或聊天窗口）时，在用户交互时后台启动会话。

**「背景」** AgentCore runtime 为 agent 提供全托管无服务器环境：每个会话运行在独立隔离的 microVM 中，无任务时平台可缩容到零，按会话实际消耗的资源计费。博客面向的使用场景包括代码审查、理赔处理、长时间无人值守运行，以及有人等待首次响应的交互式体验。博客还提到，对于聊天和语音体验，即使 2 秒也可能过慢；并指出熟悉 AWS Lambda SnapStart 的读者可参考 SnapStart 加载快照与预热策略的相关资料作为背景。

**标签**: `#Amazon Bedrock`, `#AgentCore`, `#AWS`, `#inference infrastructure`, `#serverless agents`

---

<a id="item-radar-industry-5"></a>
### [OpenFold3-preview 现可在 Amazon SageMaker JumpStart 部署](https://aws.amazon.com/blogs/machine-learning/openfold3-on-amazon-sagemaker-jumpstart-predict-biomolecular-structures/) ⭐️ 7.0/10

OpenFold3-preview，一个由 OpenFold Consortium 与哥伦比亚大学 AlQuraishi Lab 开发的开源生物分子结构预测模型，现已可通过 Amazon SageMaker JumpStart 部署。用户只需少量代码即可将其部署到自己的 AWS 账户中，用于预测蛋白质、DNA、RNA、小分子配体及其复合物的 3D 结构。该端点以网络隔离方式运行，可帮助将用户序列保留在其 AWS 账户内。

rss · AWS Machine Learning · 11月13日 21:53

**「关键数据与产品细节」** 模型版本为 OpenFold3 0.4.1（检查点 of3-p2-155kcheckpoint），采用 Apache 2.0 许可证发布代码与模型权重，JumpStart 模型 ID 为 huggingface-proteinfolding-openfold3。模型输入为蛋白质、DNA、RNA 序列，小分子配体以 SMILES 形式提供；输出为 mmCIF 格式的预测结构，附带 pLDDT、PAE、PDE 置信度指标。支持的实例类型为 ml.g6.2xlarge、ml.g6.4xlarge（默认）和 ml.g6.12xlarge。OpenFold3 在 JumpStart 上运行于 SageMaker 异步推理端点，调用超时上限为 1 小时，支持内部请求排队、多 GPU 实例并行预测，并可在队列空闲时缩容至零实例。开发者将 OpenFold3-preview 描述为研究预览版。

**「为何采用异步推理」** 大多数 JumpStart 模型（如大语言模型和嵌入模型）部署到实时端点，而实时端点的单次请求响应上限为 60 秒。结构预测的折叠时间随查询中链的数量和长度增长，真实世界的蛋白质和复合物往往需要数分钟。因此 OpenFold3 在 JumpStart 上采用 SageMaker 异步推理：用户将请求上传至 Amazon S3 并调用 InvokeEndpointAsync，端点排队处理后把结果或错误详情写入用户指定的 S3 位置，可通过轮询或 Amazon SNS 通知获取结果。

**标签**: `#OpenFold3`, `#Amazon SageMaker`, `#AWS`, `#OpenFold Consortium`, `#AlQuraishi Lab`

---

<a id="item-radar-industry-6"></a>
### [中国机器人学会隔墙“递眼色”！成功率从 0 飙到 100%，组队干活不烧心](https://www.qbitai.com/2026/11/509614.html) ⭐️ 7.0/10

星尘智能 released CoMind \(Be My Eye\), a decentralized multi-robot collaboration framework that shares compressed task-critical information, cutting data transmission ~80% while raising success rates on occluded-view cooperative tasks.

rss · 量子位 · 11月13日 06:29

**标签**: `#星尘智能`, `#CoMind`, `#多机器人协同`, `#具身智能`, `#去中心化决策`

---

<a id="item-radar-industry-7"></a>
### [奥运史上第一次，一朵云整体留给了举办国](https://www.infoq.cn/article/7Wih8vL541W3vkq1WAHi?utm_source=rss&amp;utm_medium=article) ⭐️ 7.0/10

Alibaba Cloud built the first proprietary Olympic cloud for the 2026 Dakar Youth Olympic Games and will transfer it entirely to Senegal as a sovereign cloud, marking a shift in Chinese cloud overseas strategy from selling resources to delivering capability.

rss · InfoQ 中文 · 11月13日 14:21

**标签**: `#Alibaba Cloud`, `#Senegal`, `#sovereign cloud`, `#Youth Olympic Games`, `#Chinese cloud overseas`

---

<a id="item-radar-industry-8"></a>
### [燧原科技登陆科创板](https://news.google.com/rss/articles/CBMiSEFVX3lxTE9LejlGV1BnSG8yekRnNXZvWUNGZ3otblROQjNUcHdPZVNNYllkbWIyRnZJRkxGMUxRbjlETEhRZk5fZnBPWVJnTQ?oc=5) ⭐️ 7.0/10

据财联社报道，国产 AI 芯片公司燧原科技在科创板上市。报道将其描述为补强 DSA 架构算力布局、AI 算力产业集群成型的一个标志。具体募资金额、估值、发行细节及技术参数，来源材料未披露。

google\_news · 财联社 · 11月13日 17:50

**标签**: `#燧原科技`, `#科创板`, `#DSA架构`, `#AI芯片`, `#A股IPO`

---

<a id="item-radar-industry-9"></a>
### [Fractile 融资 7 亿美元，目标将 AI 推理速度提高 100 倍](https://news.google.com/rss/articles/CBMiUEFVX3lxTE9EYWxicHg1d0RuTEZuUUpzQzZ2UjdPLU1vaDI5aENRRGVFeEJLTXVybTVpVE52eG5zdTY5TGxNUklST2owaTNoZE1XQ1hjcDA4?oc=5) ⭐️ 7.0/10

据 36Kr 报道，AI 推理基础设施公司 Fractile 完成了一笔 7 亿美元的融资，其目标是把 AI 推理速度提高 100 倍。除融资金额与该性能目标外，报道未披露投资方、估值、资金用途或技术路线等细节。

google\_news · 36Kr · 11月13日 11:54

**标签**: `#Fractile`, `#AI inference`, `#funding`, `#inference infrastructure`, `#$700M`

---

<a id="item-radar-industry-10"></a>
### [本地大模型推理工具 Ollama 发布 1.0 正式版](https://news.google.com/rss/articles/CBMiTEFVX3lxTFBfS3N6RXJxeEp5UjVpak5sWnJZOFp5TzRXamJUOEhKUkE2X0tiSjYzVmlabFFsQ1Mzb3RwN0l0R3RhVVNycjRkS19BQW0?oc=5) ⭐️ 7.0/10

据凤凰网科技 2026 年 11 月 14 日报道，流行的本地大模型推理工具 Ollama 发布了 1.0 正式版。该工具被描述为本地 AI 领域最受欢迎的&quot;基石神器&quot;之一，可在断网环境下于本地运行完整规模的大模型。

google\_news · 凤凰网科技 · 11月14日 00:20

**「背景」** Ollama 是一款用于在本地设备上离线运行大语言模型的开源工具，此次为其首次发布 1.0 正式版本。报道来源为二手媒体，未披露 1.0 版本的具体技术细节、新增功能或性能变化。

**标签**: `#Ollama`, `#local LLM inference`, `#open-source AI tool`, `#inference infrastructure`, `#Phoenix Tech`

---

<a id="item-radar-industry-11"></a>
### [Kimi、DeepSeek、智谱占美国企业开源 AI 支出近九成，中国厂商寻求超越纯 API 销售](https://news.google.com/rss/articles/CBMiSEFVX3lxTE1RQUExMGlNX3ZIREduNV9DblAteS1KNFozZUpMQU1Cb3g0VFdUNHNyak52OTJ1dG10ajFVUmNfQ2ZHaGF0dm1LVA?oc=5) ⭐️ 7.0/10

据财联社报道，Kimi（月之暗面）、DeepSeek 和智谱三家中国模型厂商合计占美国企业开源 AI 支出的近九成；同时报道指出，这些中国模型提供商正寻求超越单纯的 API 销售模式。报道未在所提供内容中披露该占比数据的统计口径、时间区间或测算方法。

google\_news · 财联社 · 11月13日 07:04

**「关键数据」** 占比数字：Kimi、DeepSeek、智谱合计约占美国企业开源 AI 支出的近九成（约 90%）。该数字来自财联社报道标题及摘要，所提供内容中未包含底层方法论、样本范围或统计期间，尚未经独立核实。

**标签**: `#DeepSeek`, `#Moonshot AI \(Kimi\)`, `#Zhipu AI`, `#open-source AI`, `#US enterprise AI spending`

---

<a id="item-radar-industry-12"></a>
### [Salesforce 开源 ASR 新模型，错误率 2.28% 登顶开放权重榜单](https://news.google.com/rss/articles/CBMiakFVX3lxTFAwYTVpYVl0Z0REVzZUY3MxZV9kcFVBVlhnYzBwYmt3eDBpbEp2XzZvZzBjRGl3dzJqSUdlU2FReHJYamo2bmNmSEJTQ0lma1BkdGRWUHl0M3NwWld2YXVBRjN2UHJHOU9KVHc?oc=5) ⭐️ 7.0/10

据 53AI 报道，Salesforce 于报道前一日夜间开源了一款新的自动语音识别（ASR）模型，该模型错误率为 2.28%，并登顶开放权重榜单。除标题信息外，来源未披露模型名称、参数规模、评测数据集、许可证及具体榜单口径等细节。

google\_news · 53AI · 11月14日 03:19

**标签**: `#Salesforce`, `#ASR`, `#open-source model`, `#speech recognition`, `#benchmark`

---

<a id="item-radar-industry-13"></a>
### [MiniMax 开源新图像生成模型：约 10 秒生成 4K 图](https://news.google.com/rss/articles/CBMibkFVX3lxTE1zN3cwWDB3Q3RYVUJ2cnVwYlhhVXVyWFRXQmNDMEtSYWFuM21ZcEt3SUNFQVRGSE9OblJXTUhzQ04teVJCVkc0cW5fVEZWdk5ZV3ZkQnNidE1FVmM5by12czFIeFBjU1c2bDVqTFNR?oc=5) ⭐️ 7.0/10

据 CSDN 博客报道，MiniMax 开源了一款新的图像生成模型，该模型被称为开源 SOTA（当前最优），可在约 10 秒内生成 4K 分辨率图像。

google\_news · CSDN博客 · 11月13日 07:55

**「关键数据」** 生成速度约为 10 秒；输出分辨率为 4K；模型以开源形式发布。

**标签**: `#MiniMax`, `#open-source`, `#image generation`, `#4K`, `#SOTA`

---