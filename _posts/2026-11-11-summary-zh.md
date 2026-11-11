---
layout: default
title: "Horizon Summary: 2026-11-11 (ZH)"
date: 2026-11-11
lang: zh
---

> 从 138 条内容中筛选出 21 条重要资讯。

---

**运营商 Token 与模型服务**
1. [江西宜春首个 Token 工厂建成投用 汇聚 300 余款大模型](#item-radar-token-1) ⭐️ 6.0/10

**模型路由与 AI 网关**
1. [LiteLLM 发布 v1.106.8：修复 FLAC 转录成本计算并调整按秒计费口径](#item-radar-router-1) ⭐️ 6.0/10

**运营商 AI 产品与应用**
1. [报道标题显示深度智联以 AI 智能体重构云网运营](#item-radar-platform-1) ⭐️ 6.0/10

**政策、采购与招投标**
1. [中国电信发布远安县智慧化监管平台项目单一来源采购公告](#item-radar-policy-1) ⭐️ 6.0/10

**其他 AI 行业新闻**
1. [Kimi K3.1 Pro Highspeed 上线 Amazon Bedrock](#item-radar-industry-1) ⭐️ 9.0/10
2. [Anthropic 启动 IPO 路演：最高募资 643.5 亿美元，七家科技巨头同期私募投资 260 亿美元](#item-radar-industry-2) ⭐️ 9.0/10
3. [英伟达在 CoRL 发布机器人基础模型 GR00T 2，宣布陆续开源模型、数据与仿真环境](#item-radar-industry-3) ⭐️ 9.0/10
4. [谷歌旗舰模型 Gemini 4 Carbon 宣布全球开放](#item-radar-industry-4) ⭐️ 8.0/10
5. [阿里发布 Qwen Code 1.0：Qoder 与 Qwen Code Harness 融合开源](#item-radar-industry-5) ⭐️ 8.0/10
6. [MiniMax 开源 H3 Image 图像生成模型](#item-radar-industry-6) ⭐️ 8.0/10
7. [Google Cloud 发布 Gemini for healthcare 行业解决方案](#item-radar-industry-7) ⭐️ 8.0/10
8. [蚂蚁灵波开源触觉基础模型 LingBot-Touch](#item-radar-industry-8) ⭐️ 8.0/10
9. [高端 8 卡 GPU 服务器价格一年涨至 2000 万元以上，中介层层加价](#item-radar-industry-9) ⭐️ 7.0/10
10. [美团发布视觉版开源权重编程模型 LongCat-2.5，采用 MIT 许可证](#item-radar-industry-10) ⭐️ 7.0/10
11. [当美国无法建设数据中心，会对 AI 产生怎样的冲击](#item-radar-industry-11) ⭐️ 7.0/10
12. [Build a daily dependency watcher with LangGraph and Amazon Bedrock AgentCore web search](#item-radar-industry-12) ⭐️ 7.0/10
13. [微软研究检测隐藏在 AI 模型神经元中的休眠代理](#item-radar-industry-13) ⭐️ 7.0/10
14. [Google Cloud 推出 TPU Sync 以加速 AI 推理](#item-radar-industry-14) ⭐️ 7.0/10
15. [Momenta 与上汽成立合资公司，投资 3 亿元深化自动驾驶合作](#item-radar-industry-15) ⭐️ 7.0/10
16. [Fireworks AI 确认第二次数据泄露事件](#item-radar-industry-16) ⭐️ 7.0/10
17. [达卯科技与浦东环保能源战略合作，黎明智算中心算电协同平台启动](#item-radar-industry-17) ⭐️ 7.0/10

---

## 运营商 Token 与模型服务

<a id="item-radar-token-1"></a>
### [江西宜春首个 Token 工厂建成投用 汇聚 300 余款大模型](https://news.google.com/rss/articles/CBMiekFVX3lxTFBKcEF5VHlQd2xGNV8zeXc1MVlhMmF1bnpkQWlxTVEtTWNfeklFN0lNbklZVFdINFlJeHlXbzJHTlU5MXM0Umg4d2Z6dFI5a2NPcjhjY2JMN2F5Q1k4R08xdkxONkxSTkJnVVRZNE9FZmRmSXZlV2d2SDV3?oc=5) ⭐️ 6.0/10

据央视网报道，江西宜春首个 Token 工厂已建成投用，汇聚 300 余款大模型。来源仅提供标题信息，未说明该 Token 工厂的运营主体、是否涉及通信运营商、模型服务方式、计量与配额规则或容量规模等具体细节，来源未提供更多细节。

google\_news · 央视网 · 11月10日 08:52

**标签**: `#Token工厂`, `#MaaS`, `#大模型`, `#江西宜春`, `#央视网`

---

## 模型路由与 AI 网关

<a id="item-radar-router-1"></a>
### [LiteLLM 发布 v1.106.8：修复 FLAC 转录成本计算并调整按秒计费口径](https://github.com/BerriAI/litellm/releases/tag/v1.106.8) ⭐️ 6.0/10

BerriAI 于 2026-11-11 发布 LiteLLM v1.106.8，这是一个小型补丁版本，共包含 2 个 PR（1 项修复、1 项变更），均集中在转录（transcription）成本追踪与计费口径上。官方说明升级无需额外操作（No action needed to upgrade）。该版本为 \#50861 的 backport，相关改动同时出现在 v1.108.5 中。

github · litellm-release\[bot\] · 11月11日 03:23

**「路由与能力」** 本版本的两项改动均属于「成本追踪与定价（Cost tracking and pricing）」范畴：

\1. 修复部分 FLAC 文件转录成本计算错误的问题，该错误可能导致某个 key 超出其预算上限（PR \#50842，同时包含在 v1.108.5）。
\2. 将按秒计费的转录改为按供应商上报的 usage.seconds 计费，而非此前使用的实测时长（PR \#50727，同时包含在 v1.108.5）。

来源未提供这两项改动之外的其他功能或路由能力变化。

**「适用与限制」** 官方提供 cosign 验证方式，可对 ghcr.io/berriai/litellm:v1.106.8 镜像进行签名校验，litellm-database、litellm-non\_root 以及 docker.io/litellm/\* 镜像使用相同命令验证。来源未说明该补丁是否引入破坏性变更，仅标注升级无需额外操作。社区评论暂无。

**标签**: `#LLM gateway`, `#LiteLLM`, `#cost tracking`, `#provider routing`, `#release`

---

## 运营商 AI 产品与应用

<a id="item-radar-platform-1"></a>
### [报道标题显示深度智联以 AI 智能体重构云网运营](https://news.google.com/rss/articles/CBMiiAFBVV95cUxOVzczZHBCRVNqOEwwY0gyVXNnQVRCeVQycHZoS2hZZjMyaWVudlpRRVE5SVlkVFdMUzZkRF9IblgyMWxBS0ExbzA1aXFBSUpzQVdYN205VTBLSUoxbmtTU19Zb1d4X3Z6bHozWTRLb2xXWWlsSjliWXFRbEMyTE9CY1VucmNpWnpG?oc=5) ⭐️ 6.0/10

Sohu 发布一篇标题为《“智改”进行时｜硅基员工批量上岗后 深度智联重构云网运营》的报道，内容指向通过部署 AI 智能体（“硅基员工”）重构云网运营的智能化转型举措。来源仅提供标题与链接，未提供涉及主体、部署规模、能力指标或落地结果的更多细节，相关事实无法核实。

google\_news · Sohu · 11月10日 09:39

**标签**: `#carrier cloud-network operations`, `#AI agents`, `#intelligent transformation`, `#China Unicom`, `#operational automation`

---

## 政策、采购与招投标

<a id="item-radar-policy-1"></a>
### [中国电信发布远安县智慧化监管平台项目单一来源采购公告](https://caigou.chinatelecom.com.cn/DeclareDetails?id=193515674653498&amp;type=6&amp;docTypeCode=PurchaseAnnounceBasic&amp;securityViewCode=9ce8ce536bd882d7b7ee1bba61a26d3b) ⭐️ 6.0/10

中国电信阳光采购网发布一则单一来源采购公告，项目为“湖北公众信息产业有限责任公司远安县科技经信局 2026 年智慧化监管平台视频存储、AI 分析、接入服务项目”。公告涉及视频存储、AI 分析及接入服务，采购主体关联湖北公众信息产业有限责任公司与远安县科技经信局。来源仅提供公告标题及“单一来源采购公告”的简要说明，未披露采购内容明细、预算金额、服务期限或供应商信息。

rss · 中国电信招采（第三方糖果梦聚合） · 11月11日 11:26

**「采购或政策要点」** 来源未提供更多细节。已知信息仅限于：采购方式为单一来源采购；项目内容涵盖视频存储、AI 分析、接入服务；项目名称标注为 2026 年智慧化监管平台项目，落地于湖北远安县。金额、技术指标、容量规模及合同条款均未在来源中给出。

**标签**: `#China Telecom`, `#AI analysis`, `#video storage`, `#single-source procurement`, `#smart supervision platform`

---

## 其他 AI 行业新闻

<a id="item-radar-industry-1"></a>
### [Kimi K3.1 Pro Highspeed 上线 Amazon Bedrock](https://aws.amazon.com/blogs/machine-learning/introducing-kimi-k3-1-pro-on-amazon-bedrock/) ⭐️ 9.0/10

Moonshot AI 的 Kimi K3.1 Pro Highspeed 模型现已在 Amazon Bedrock 上提供。该模型属于 K3.1 系列，是 Kimi K3 的后训练版本，保留相同的 3T 级开放权重架构和 100 万 token 上下文窗口，但使用了更多后训练算力。据 Moonshot AI 称，额外训练针对长程智能体任务、减少事实错误，并改进金融建模、办公文档等专业任务，以及游戏引擎、3D 场景和 CAD 脚本的编码能力。该模型生成 token 的速度更快，Moonshot AI 报告其速度为 Kimi K3.1 Pro 的 2–3 倍。

rss · AWS Machine Learning · 11月11日 01:07

**「产品变化与关键细节」** Kimi K3.1 Pro Highspeed 使用与 Kimi K3 在 Amazon Bedrock 上相同的端点、API 和功能，已有 Kimi K3 用户只需更改代码中的模型 ID 即可试用。模型支持工具调用、结构化输出、可配置推理、图像输入和流式传输，并始终在回答前进行推理，通过 reasoning\_effort 可设为 low、high 或 max（默认 max）。

模型通过跨区域推理配置文件提供：global.moonshotai.kimi-k3.1（路由到任意受支持的商业 AWS 区域，每 token 成本更低，推荐大多数工作负载）、us.moonshotai.kimi-k3.1（仅限美国区域）、in.moonshotai.kimi-k3.1（仅限印度区域，用于数据驻留需求）。可通过 OpenAI 兼容的 Chat Completions 和 Responses API，以及 Amazon Bedrock Converse 和 Invoke API 调用。

成本与性能优化方面：Flex 层以标准价格的一半提供服务，代价是响应时间可能更长，适合模型评估、内容摘要和智能体工作流中的后台任务，按请求选择层级，按需配额在 Standard、Priority 和 Flex 层之间共享。显式提示缓存适用于 Chat Completions、Responses 和 Invoke API（不适用于 Converse），breakpoint 前需至少 256 token 的稳定内容，缓存内容保留至少 30 分钟，缓存写入计费高于标准输入，缓存读取按折扣计费且不计入输入 token 每分钟配额。

**「数据与安全边界」** 采用 Kimi K3.1 Pro Highspeed 无需更改安全态势。数据在 AWS 数据边界内处理，不与 Moonshot AI 共享，也不用于训练模型。推理请求始终启用零数据保留，且在零操作员访问下，AWS 操作员无法在推理期间查看提示和补全内容。

**标签**: `#Moonshot AI`, `#Amazon Bedrock`, `#Kimi K3.1 Pro`, `#model release`, `#AWS`

---

<a id="item-radar-industry-2"></a>
### [Anthropic 启动 IPO 路演：最高募资 643.5 亿美元，七家科技巨头同期私募投资 260 亿美元](http://www.geekpark.net/news/373796) ⭐️ 9.0/10

Anthropic 已正式启动首次公开募股（IPO）的投资者路演。公司计划发行 8.25 亿股股票，每股发行价区间为 70 至 78 美元，最高募资规模可达 643.5 亿美元；若按区间上限定价，其完全稀释估值将接近 1.4 万亿美元。除公开募股外，Google、英伟达、AMD、微软、博通、美光和台积电伙伴公司还将通过单独的私募配售合计投资 260 亿美元。招股书同时披露，七名联合创始人将在 IPO 中合计出售价值 17.5 亿美元的股票。

rss · 极客公园 · 11月11日 00:34

**「关键数据」** 本次发行包括公司新发行的 8.01351354 亿股，以及现有股东出售的 2364.8646 万股；公司不会从老股出售中获得任何收益。承销商还获得一项为期 30 天的选择权，可额外认购 1.2375 亿股。私募配售中，Google 与英伟达各出资 100 亿美元领投，AMD 投入 25 亿美元，微软、博通和美光各投资 10 亿美元，台积电伙伴公司追加 5 亿美元。按每股 74 美元的中间价计算，IPO 与私募配售合计将带来约 846 亿美元的净募资额。经营数据方面，2026 年前九个月公司实现营收 332 亿美元，去年同期为 25 亿美元；同期净亏损 1040 亿美元，其中 943 亿美元来自可转换债券及其他金融工具的公允价值变动，属非经营性账面影响，该期间经营亏损实际为 13 亿美元。七名联合创始人合计出售价值 17.5 亿美元的股票，按发行价区间中点计算每人拟出售约 2.5 亿美元。

**「背景」** Anthropic 于今年 6 月秘密提交美国 IPO 申请，10 月 26 日正式公开提交招股书，计划在纳斯达克挂牌，股票代码为“ANT”。在路演启动前，公司曾于当地时间 11 月 9 日向多家银行发送一份定价文件，显示以每股 70 至 80 美元发行约 8.67 亿股、最高募资约 693 亿美元，但随后撤回该文件并称定价细节不准确。市场对 Anthropic 的估值预期近期持续下调：部分投资者早前一度预计上市估值可达 2 万亿美元，10 月中旬讨论降至约 1.5 万亿美元，11 月初部分潜在买家讨论的估值进一步降至 1.2 万亿至 1.3 万亿美元，甚至有人考虑低至 1.1 万亿美元。

**标签**: `#Anthropic`, `#Google`, `#NVIDIA`, `#IPO`, `#AI funding`

---

<a id="item-radar-industry-3"></a>
### [英伟达在 CoRL 发布机器人基础模型 GR00T 2，宣布陆续开源模型、数据与仿真环境](https://www.qbitai.com/2026/11/509032.html) ⭐️ 9.0/10

在奥斯汀举行的 CoRL 大会上，英伟达 GEAR 团队负责人朱玉可与 Jim Fan 发布新一代世界动作模型 GR00T 2。该模型可同时预测未来画面与机器人动作，官方 1 分半的 demo 中完成了拿剪刀裁标签、安装显卡、擦火柴、切香蕉做早餐、擦咖啡、收桌子、卖爆米花等任务。朱玉可透露，GR00T 2 的模型、数据、仿真环境和数据采集硬件将陆续开源，目前 10 万小时人类数据已率先开放。英伟达还开放了 WAM API，使推理模型可将物理技能执行交给 GR00T 2。

rss · 量子位 · 11月10日 10:35

**「关键数据」** X-Adapt 跨本体技能迁移展示了三条路径：人类动捕示范迁移到双五指手 Dexter，20 次试验成功率 65%；手持 UMI 夹爪示范迁移到 YAM 机械臂，完成最长约四分钟的玩具自卸卡车组装，成功率 60%；DexUMI 手部外骨骼示范迁移到机器人灵巧手，用于制作香蕉酸奶、舀取麦片等早餐任务。

在 Dexter-50 评测中，模型零样本平均成功率 40%；每项任务提供一次示范后升至 71%；提供五次示范后达到 95%。这五次示范合计不足三分钟，随后在单张 RTX 5090 上约 30 分钟 LoRA 微调即可适配任务。

GR00T 2 预训练混合三类数据：402,730 小时人类第一视角视频、10,184 小时手持 UMI 演示（覆盖 2,897 项任务）、23,500 小时机器人遥操作数据。规模实验中，随着人类视频数据从无增加到全部，模型在 72 项 Dexter 任务上的真实机器人平均任务进度从 50%提高到 70%。

执行端，Turbo 在 G1 机载 Jetson Thor 上单次预测耗时 124 毫秒；SONIC 运行在另一块 Jetson Orin 上，以 50Hz 进行全身控制。

**「配套工具链与现场表态」** 围绕 GR00T 2，英伟达搭建了覆盖数据采集、处理、训练、仿真验证与部署的工具链：采集端为 UMI、DexUMI 等设备；数据端包括 Human-1M（首批 10 万小时子集已公开）与支持标注和自动评估的 Flora；仿真端 SimFoundry 可从真实场景重建任务环境；执行端由 ASPIRE（任务执行与错误恢复）、Turbo 与 SONIC 等组件分工完成。

Jim Fan 在 CoRL 现场演讲中表示：&quot;Astra 没有打碎我们的梦想，它打破的是我们的围墙。&quot;&quot;这不是寒冬，这是机器人的夏天。&quot;

同日发布的 Claude Fable 5.2 在 Anthropic 公布的 RoboDojo Sim 仿真双臂测试中，采用相同运行框架与各模型最高可用推理强度，得分 64.9%，GPT-6 Astra 为 29.8%。

**标签**: `#英伟达`, `#GR00T 2`, `#机器人基础模型`, `#开源`, `#CoRL`, `#Jim Fan`, `#朱玉可`

---

<a id="item-radar-industry-4"></a>
### [谷歌旗舰模型 Gemini 4 Carbon 宣布全球开放](https://www.36kr.com/p/4064527178208130) ⭐️ 8.0/10

据新智元文章（36 氪授权发布）报道，谷歌正式官宣新一代旗舰模型 Gemini 4 Carbon 面向全球开放。报道称，付费 API 开发者、企业以及 Google AI Ultra 用户现在可在 AI Studio、Gemini 应用与 Antigravity 平台上手体验该模型。

rss · 今日热榜 · 36氪 · 11月11日 14:23

**「关键数据与产品变化」** 以下均为该报道引述谷歌或第三方评测的说法，未经独立核实：

榜单与评测：报道称 Gemini 4 Carbon 曾以 59 分登顶 Artificial Analysis 榜首；在 GraphWalks 测试中得 96.2%；在 CursorBench 4.0、Perplexity WANDR 与 Zapier 三项生产评测中包揽第一；在谷歌联合 Artificial Analysis 发布的多模态知识 Agent 基准 MKA 中以 54.3% 位列全球第二；在 Nim 语言之父 Dominik Picheta 的独立测试 KillSwitch-Bench 中与 Fable 5.2 并列第一；在对冲基金 Balyasny 涵盖 23 个模型的真实金融投研测试中拿下第一。报道还称云安全公司 Wiz 用其扫描两大 SaaS 服务商，不到 2 小时发现真实零日漏洞。

定价：每百万 Token 输入 2 美元、输出 10 美元，缓存享 95% 折扣；报道称首发 API 价格与 GPT-6.1 Sol 持平，平均单任务成本比第二名低一半以上，多 Agent 蜂群模式使单任务成本下降约 6 倍。

多 Agent 能力：谷歌在 Antigravity 平台上线 /swarm 多 Agent 蜂群模式，配合 DeepMind 的 AlphaProof Code 框架，报道称四周内生成了 650 万行证明，验证了 Signal 核心加密的编译后代码。

科学家计划：谷歌宣布面向全球 10,000 名顶尖科学家提供长达半年的免费最高权限访问；报道称该工具在 CASP17 蛋白质预测盲测中已将疑难病毒蛋白同源物检索量提升 40 倍。

**「背景与可信度说明」** 本文来源为微信公众号“新智元”，经 36 氪授权发布，属二手报道而非谷歌一手公告。文中大量具体基准分数、竞品型号（如 GPT-6、Opus 5.5、Fable 5.2）及能力演示（阿波罗登月舱三维复原、黑洞渲染、Platform 37 办公楼还原等）均为报道引述，尚缺独立验证，宜以谷歌官方发布为准。文章末尾附有 Google 官方博客及多个 X 平台链接作为参考。

**标签**: `#Google`, `#Gemini 4 Carbon`, `#AI model release`, `#DeepMind`, `#multi-agent`

---

<a id="item-radar-industry-5"></a>
### [阿里发布 Qwen Code 1.0：Qoder 与 Qwen Code Harness 融合开源](https://news.google.com/rss/articles/CBMiTEFVX3lxTE9ySjRwbWNDaFAzbXItSzYzTzVYVXBXd1lRdzN2cFlnd3h6ZVpyS0ZKY2lJTDJPRFo1LU9jemgtWjZSdmxGNjNkOG5Ed1Y?oc=5) ⭐️ 8.0/10

阿里巴巴发布 Qwen Code 1.0，这是一款开源的编程智能体（coding agent），由 Qoder 与 Qwen Code Harness 融合而成。消息由凤凰网科技于 2026 年 11 月 11 日报道。

google\_news · 凤凰网科技 · 11月11日 04:21

**标签**: `#Alibaba`, `#Qwen`, `#Qwen Code`, `#open-source`, `#coding agent`

---

<a id="item-radar-industry-6"></a>
### [MiniMax 开源 H3 Image 图像生成模型](https://news.google.com/rss/articles/CBMibkFVX3lxTE4tWDN1RmpoMExvU3AyYVpSZ00wS2dlWHhGUVJIVWNlVG9raWpMUTZyZEtoVFJydkYtOGlqRjlHbWc2TUNaUlg1N3BKa3E0dDlVTWVib2s4LWFCN1BhN0tBdVlCdUlZWHlNakc0T1pB?oc=5) ⭐️ 8.0/10

据 CSDN 博客报道，MiniMax 已开源其 H3 Image 模型，并将其定位为中国打造的开源模型。报道标题称其为「最强开源模型」，但该说法属于宣传性表述，现有材料未提供具体技术参数、基准测试结果或开源许可条款等可核实细节。

google\_news · CSDN博客 · 11月11日 03:36

**标签**: `#MiniMax`, `#H3 Image`, `#open-source model`, `#Chinese AI`, `#image generation`

---

<a id="item-radar-industry-7"></a>
### [Google Cloud 发布 Gemini for healthcare 行业解决方案](https://cloud.google.com/blog/products/ai-machine-learning/gemini-for-healthcare/) ⭐️ 8.0/10

2026 年 11 月 10 日，Google Cloud CEO Thomas Kurian 宣布推出 Gemini for healthcare，一个面向医疗行业的专用解决方案。该方案扩展了上月在 Gemini at Work 上发布的通用 Gemini agent，用于协调分散在临床、财务和管理系统中的医疗数据与多步骤工作流。产品即日起以预览版（preview）形式提供。

rss · Google Cloud AI · 11月10日 12:00

**「产品构成与关键能力」** Gemini for healthcare 由四个核心组件构成：一是面向医疗任务的 Skills（可复用指令与上下文，由领域专家编写，覆盖病历综合、就诊前准备、覆盖与政策审查、支付方福利判定等任务，并支持机构自定义）；二是连接临床、财务与运营系统的连接器库，直接对接 EHR、理赔、护理管理与行政系统，同时保留各系统既有的身份与基于角色的访问控制；三是开放的医疗合作伙伴生态，由系统集成商与数字健康伙伴协助扩展；四是安全、受治理的平台，支持开放模型选择，可在同一治理下为复杂临床推理搭配前沿模型、为常规行政步骤搭配快速低成本模型。

在诊疗场景，产品可从分散来源构建患者纵向时间线、在就诊或手术前准备病历、并简化临床授权与申诉流程。在覆盖（coverage）场景，它可加速支付方审查、解析复杂福利手册以估算自付费用、追踪免赔额并核实网络内状态；对 Medicare Advantage 会员，在计划内部规则更严格时适用 Medicare 的覆盖标准。

已公布的连接器包括 Epic EHR 与 Oracle Health EHR（均为只读、零写回以保障数据完整性）、InterSystems FHIR Server、Verato（患者身份解析与记录匹配）、Keragon（连接 400+ 医疗应用），以及 Optum Coordination of Benefits 与 Optum Network Eligibility（后两者目前处于有限发布与测试阶段）。

**「背景与合规」** Google Cloud 指出，当前医疗运行在碎片化数据之上，患者记录、覆盖政策与临床证据分散在互不连通的记录、理赔与行政系统中；临床医生每周需花费近 28 小时手动核对信息。公司因此主张行业需要单一、安全、受治理的编排层，在人工监督下跨既有系统协调工作。Gemini for healthcare 旨在支持 HIPAA 合规，提供企业级访问控制、端到端审计日志与可验证引用。Gemini agent 本身内置企业级身份管理、细粒度访问控制与集中策略管理，每个 agent 以独立身份运行并继承用户的既有角色权限。

**标签**: `#Google Cloud`, `#Gemini`, `#healthcare AI`, `#product release`, `#enterprise AI`

---

<a id="item-radar-industry-8"></a>
### [蚂蚁灵波开源触觉基础模型 LingBot-Touch](https://www.qbitai.com/2026/11/508996.html) ⭐️ 8.0/10

11 月 10 日，蚂蚁灵波科技开源触觉基础模型 LingBot-Touch，为机器人大脑补齐触觉感知能力。该模型基于近 5000 小时真实触觉数据预训练，覆盖磁触觉、视触觉和压阻式三类主流传感原理，可将不同信号转化为同一套触觉表征，供不同灵巧手和动作模型使用。模型已接入 LingBot-VLA，技术报告、模型和代码已在 Hugging Face、GitHub 和魔搭社区开源。

rss · 量子位 · 11月10日 07:57

**「关键数据」** 蚂蚁灵波在 Sharpa Wave 和 XHand1 两款灵巧手上进行了 26 项真机测试，涵盖翻书页、拧瓶盖、辨识麻将牌等精细操作。接入 LingBot-Touch 后，LingBot-VLA、π0.5、Diffusion Policy 和 T-Rex 四种动作模型的平均任务成功率较无触觉时提高约 14 至 26 个百分点。以 T-Rex 控制 Sharpa Wave 拧瓶盖为例，不使用触觉时成功率为 56.25%，直接输入传感器原始信号为 62.5%，接入 LingBot-Touch 触觉表征后达到 90%。此次 26 项测试全部使用约 530 万参数的轻量版 LingBot-Touch-Tiny 完成；接入 LingBot-VLA、π0.5 和 T-Rex 后，模型参数量仅增加约 0.13%至 0.16%。容量较大的 LingBot-Touch-Small 在感知测试中显示，当预训练数据增至近 5000 小时时仍能从新增数据中获益。

**「技术架构与适用范围」** LingBot-Touch 按传感原理分别设置编码入口，先处理不同原始信号，再将不同布局的触点映射到统一的指尖坐标空间，由共享模型学习接触位置、受力及其随时间的变化，输出统一的触觉 Token。人戴触觉手套和遥操作灵巧手采集的数据可共同用于训练。在 XHand1 上，团队验证了跨硬件复用：该手采用的磁触觉传感器型号不在预训练数据中，模型学到的磁触觉经验全部来自人戴手套采集的数据；换到这只灵巧手后，团队保持 LingBot-Touch 参数不变，只用 XHand 的操作示范训练动作模型。该模型接入四种不同动作模型，不绑定蚂蚁灵波自研模型，定位为位于触觉传感器和动作模型之间的通用感知能力。蚂蚁灵波 CEO 朱兴表示，通用大模型与具身基础模型更接近 1+1＞2 的协同关系，公司将坚持具身原生路线，推动视觉、深度、触觉乃至温度等更多物理模态在统一模型中对齐。

**标签**: `#蚂蚁灵波科技`, `#蚂蚁集团`, `#LingBot-Touch`, `#触觉基础模型`, `#具身智能`, `#开源模型`

---

<a id="item-radar-industry-9"></a>
### [高端 8 卡 GPU 服务器价格一年涨至 2000 万元以上，中介层层加价](https://www.36kr.com/p/4063602885039238) ⭐️ 7.0/10

据 36 氪《智能涌现》报道，国内某型号（文中称 X 型）8 卡高端 GPU 服务器价格在一年内大幅上涨：去年年末报价约 400 万元，今年 9 月涨至约 1500 万元，近一个月进一步突破 2000 万元。报道通过采购代表、中介商和算力服务商的叙述，描述了这一由全球 AI 算力需求扩大、供应紧张以及多层中介加价共同推动的不透明交易市场。

rss · 今日热榜 · 36氪 · 11月11日 14:23

**「关键数据与市场结构」** 价格走势：X 型 8 卡服务器去年年末国内报价约 400 万元，今年 9 月约 1500 万元，近一个月突破 2000 万元。另一主要交易型号 Y 型 8 卡，水下市场现货报价约每台 650 万元，通过原厂配额采购可比现货低约 200 万元，但配额有资金、机房、用途证明等审核门槛。转向租赁的企业，一年期合同月租金最高已涨至 19 万元，一年租金 200 多万元。

市场结构：交易链条最上游是直接掌握设备的货主，最下游是自用或出租算力的买家，中间隔着替货主找买家、替买家找货、受托代采等多层中介。货源消息每转一手便加价一次。买家多希望当面验资验货的“同台”交易，但在卖方市场下，卖家倾向先筛选买家资质再交底牌，买家需快速交定金锁货。买家主要包括模型公司、互联网大厂和算力服务商，多数委托代采方交易。报道引述中介称，国内 AI 大厂对 X 型 8 卡可接受的价格上限约 1500 万元，但仍有头部模型厂持续求购。部分交易还附带搭售条件，买 X 型需搭配购买 Y 型等其他型号。

**「供需背景」** 需求端：全球 AI 厂商加紧算力投入，报道举例称今年 2 月 Meta 与生产高端 GPU 的芯片厂商宣布多年合作，计划部署数百万颗高端 GPU 建设超大规模数据中心。工信部数据显示，截至今年 6 月底我国智能算力规模同比增长 177%，已建成 52 个万卡以上智算设施。

供应端：报道引述算力服务商观点称，高带宽内存（HBM）供应不足、先进封装产能紧张限制高端服务器量产，其估计全球用于组装 Y 型 8 卡服务器的现成模组可能仅能再支撑约半年供货。SK 海力士今年 10 月表示供应未能跟上市场增长，计划年底前将 M15X 工厂产能提升至最大水平以增加 HBM4 供应；台积电在同月业绩发布会上披露全球近 20 座工厂项目正在推进，但设备供应紧张、扩产需提前协调。

**标签**: `#GPU servers`, `#AI compute infrastructure`, `#NVIDIA \(implied chip vendor\)`, `#Meta`, `#China GPU market`, `#36Kr`

---

<a id="item-radar-industry-10"></a>
### [美团发布视觉版开源权重编程模型 LongCat-2.5，采用 MIT 许可证](https://news.google.com/rss/articles/CBMibEFVX3lxTE9sLWFVREVDbmQ3SmVJSzhIR2I3ajJsa3NzQWFGRFJzeTFxR0NpSFZXaFNhM01KMVpRM2g5bDdiRVVUeFQtQm50VWF1S0U1dXpGZi0wOXFKN3VSQlFyRFVPc0xndlpVWWxra0FxYg?oc=5) ⭐️ 7.0/10

据 Trend Hunter 报道，美团发布了 LongCat-2.5，一款基于视觉的开源权重（open-weight）编程模型，并以 MIT 许可证对外提供。报道未披露模型参数规模、基准测试成绩或具体发布日期等细节。

google\_news · Trend Hunter · 11月11日 05:29

**「产品变化」** LongCat-2.5 的两个关键特征：一是具备视觉能力（vision-based），二是以开源权重形式发布并采用 MIT 许可证，允许较宽松的使用与再分发。除此之外的技术规格与性能数据，现有材料未提供。

**「信息来源说明」** 本条信息来自 Trend Hunter 通过 Google News 转载的标题，属于二手聚合来源，暂无美团官方原始公告、技术报告或第三方评测作为佐证，相关细节有待官方发布进一步确认。

**标签**: `#Meituan`, `#LongCat-2.5`, `#open-weight models`, `#coding models`, `#MIT license`

---

<a id="item-radar-industry-11"></a>
### [当美国无法建设数据中心，会对 AI 产生怎样的冲击](http://www.geekpark.net/news/373816) ⭐️ 7.0/10

US state-level data center pauses and cancellations are materially constraining future AI compute capacity, with the article projecting that frozen planned projects could cut potential compute growth substantially.

rss · 极客公园 · 11月11日 05:23

**标签**: `#US data center moratoriums`, `#AI compute capacity`, `#Anthropic`, `#OpenAI`, `#inference infrastructure`, `#power and permitting constraints`

---

<a id="item-radar-industry-12"></a>
### [Build a daily dependency watcher with LangGraph and Amazon Bedrock AgentCore web search](https://aws.amazon.com/blogs/machine-learning/build-a-daily-dependency-watcher-with-langgraph-and-amazon-bedrock-agentcore-web-search/) ⭐️ 7.0/10

Amazon announces the general availability of the Web Search API in Amazon Bedrock AgentCore, enabling AI agents to retrieve current web results through a single API call served from Amazon&\#x27;s own web index within the AWS cloud environment.

rss · AWS Machine Learning · 11月10日 23:34

**标签**: `#Amazon`, `#AWS`, `#Bedrock AgentCore`, `#AI agents`, `#web search API`

---

<a id="item-radar-industry-13"></a>
### [微软研究检测隐藏在 AI 模型神经元中的休眠代理](https://news.google.com/rss/articles/CBMirgFBVV95cUxPMHZpdjIteTl2WXJDSmFxeWE3cFZUS0N1Tlh3UXZQaU9DVnpLT2JrTGthcVR6UkItYmdYUExoSTByY1hJMTBDb0lBMlM2Tkp5Vms1bmxhVEJwZHQ0SUg3akFnRHlEcU5ESy1qdnpmalJCWGtPU19fa1A3TExiRE9rNXNiMlY0blJxdWhXaHdXZWZXZURuZ3RfdHZTRDFvV2ZwYmpvNG9ZVnE1SWxaUFE?oc=5) ⭐️ 7.0/10

微软发布了一项关于检测隐藏在 AI 模型神经元中的“休眠代理”（sleeper agents）的研究。该研究针对 AI 模型中可能潜伏的隐藏恶意行为，属于 AI 安全与模型完整性领域的技术进展。除标题与发布方信息外，来源未披露具体技术方法、实验数据或适用模型范围。

google\_news · Microsoft · 11月10日 23:00

**标签**: `#Microsoft`, `#AI safety`, `#model integrity`, `#sleeper agents`, `#neuron-level detection`

---

<a id="item-radar-industry-14"></a>
### [Google Cloud 推出 TPU Sync 以加速 AI 推理](https://news.google.com/rss/articles/CBMipAFBVV95cUxQcXVEeDZ2NjJma0xONXhQVlVwclY3cmtGbllMY0h1cF9yOFhzWHplSWlWYWV2OWtkeGQzWDl3WjZNZnZxZ1gxNjh3T0hCVkU2SGZhWXVlODNuNkpBaVZUWDhFRHV5RmxRRTNCT0lZSFNKVmNsc0xMQlJSQWt4Q2NodlhDOGtqNnl4am1ZTmNmaWNJZGVFWTV4VlUwMGIxbGhHVk1icA?oc=5) ⭐️ 7.0/10

据 HPCwire 报道，Google Cloud 推出了名为 TPU Sync 的功能，旨在加速 AI 推理工作负载。报道时间为 2026 年 11 月 10 日。除标题信息外，来源未披露该功能的技术细节、定价或可用时间安排。

google\_news · HPCwire · 11月10日 16:22

**标签**: `#Google Cloud`, `#TPU`, `#AI inference`, `#cloud infrastructure`, `#HPCwire`

---

<a id="item-radar-industry-15"></a>
### [Momenta 与上汽成立合资公司，投资 3 亿元深化自动驾驶合作](https://news.google.com/rss/articles/CBMiUEFVX3lxTFA3c2pNMEtpMzJmREYxSWF0NTJrN1VhWUxCZk85amNVVFFodHJzMkJDNWREWXJOQUtfT1dXazFLSGZ3bmVrOC1BQ3RfZEVUREVt?oc=5) ⭐️ 7.0/10

自动驾驶公司 Momenta 与上汽集团成立合资公司，涉及 3 亿元投资，双方借此深化在自动驾驶领域的合作。该消息由 36 氪于 2026 年 11 月 10 日报道。

google\_news · 36kr · 11月10日 09:40

**「关键数据」** 投资金额为 3 亿元人民币。合作方向聚焦自动驾驶领域，通过合资公司形式推进。报道未披露合资公司的具体业务范围、股权结构及落地时间安排。

**标签**: `#Momenta`, `#上汽`, `#自动驾驶`, `#合资公司`, `#商业合作`

---

<a id="item-radar-industry-16"></a>
### [Fireworks AI 确认第二次数据泄露事件](https://news.google.com/rss/articles/CBMiuwFBVV95cUxQSEpoUkNiNXVjd2FCV252T1BDMFp0RXgxZVBvcW1QeWZaTUp6VGJrb0w2ODNka3dSblpBZE9BRnBqYWpVZUVDMW1iVHBlMF9KSnBsbHd0YUhNcWQtOWlqMEdtN3dCNTVIczlrUnVpX3lWNE5XTmZ4ZWo5NnNWUFVGak1PMlJlT0laN1VMN1NaMExvUnZyZUxRNm55RnZPZmRPM2I5Q3pFclMwbkRIQWtLUzZBY2tKTlRsR0Fv?oc=5) ⭐️ 7.0/10

据 MLQ.ai 报道，AI 推理基础设施平台 Fireworks AI 已确认发生第二次安全泄露事件，导致客户账单数据及部分模型权重被暴露。目前仅有标题信息，具体泄露范围、时间、影响客户数量及公司应对措施等细节尚未披露。

google\_news · MLQ.ai · 11月10日 09:03

**标签**: `#Fireworks AI`, `#data breach`, `#AI inference infrastructure`, `#security incident`, `#model weights`

---

<a id="item-radar-industry-17"></a>
### [达卯科技与浦东环保能源战略合作，黎明智算中心算电协同平台启动](https://www.qbitai.com/2026/11/508985.html) ⭐️ 7.0/10

近日，达卯科技与上海浦东环保能源发展有限公司签署战略合作协议，围绕数据中心节能优化与智慧管控、电力市场化运营、算电协同智能化体系建设、协同生态共建四大领域开展合作。作为首个落地项目，达卯科技为国家级算电协同试点浦东新区黎明智算中心启动算电协同平台建设。

rss · 量子位 · 11月10日 07:33

**「合作与项目细节」** 合作分四大方向：数据中心节能优化与智慧管控建设、电力市场化运营与辅助决策（含虚拟电厂体系搭建、资源聚合、市场化交易、电价预测等）、算电协同智能化体系与通用市场化平台、算电深度协同生态与能力共建。

黎明智算中心是上海浦东北片区首个万卡级算力集群，同时为国家级算电协同试点项目，设计总功率 18 兆瓦，采用生物质绿电直供、余热制冷与 LNG 相变余冷梯级利用综合技术。本次平台建设涵盖平台功能开发、数据采集对接、实施部署与运营培训等模块，将落地资源监控、运行分析、负荷预测、协同调度及系统管理等核心功能。平台建成后可实现园区用能全链路数字化管控、蓄冷罐等柔性资源聚合监控及供冷系统协同调度策略支撑，并为后续参与电能量交易、电力辅助服务等市场化业务提供技术底座。

**「背景」** 浦东环保能源是上海浦发集团全资组建的国有独资企业，作为集团绿色低碳及算力服务产业的核心承载主体，已构建“发电-储能-配电-用能-交易”全链条能源运营模式。达卯科技定位为算电协同领域核心软件与全周期价值运营服务商，以自研垂类能源大模型与智能体集群为技术底座。双方称此次合作旨在推动智算中心从被动用电负荷向可调节、可交易、可增值的主动能源运营节点升级，助力东部城市型智算中心向 E-AIDC 演进。

**标签**: `#达卯科技`, `#浦东环保能源`, `#算电协同`, `#智算中心`, `#数据中心节能`

---