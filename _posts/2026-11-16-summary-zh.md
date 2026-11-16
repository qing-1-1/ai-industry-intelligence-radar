---
layout: default
title: "Horizon Summary: 2026-11-16 (ZH)"
date: 2026-11-16
lang: zh
---

> 从 76 条内容中筛选出 7 条重要资讯。

---

**运营商 Token 与模型服务**
1. [C114 刊文称天翼词元不止于中国版 OpenRouter](#item-radar-token-1) ⭐️ 6.0/10

**其他 AI 行业新闻**
1. [腾讯混元发布高性价比语言模型 Hy4 flash，单任务成本仅为 Hy4 的 1/20](#item-radar-industry-1) ⭐️ 9.0/10
2. [腾讯发布并开源混元世界模型 2.0](#item-radar-industry-2) ⭐️ 9.0/10
3. [阿里正式发布 Qwen4，单任务平均费用降六成](#item-radar-industry-3) ⭐️ 8.0/10
4. [36 氪报道：Kimi 估值 500 亿美元，月之暗面被指急于拆除海外架构](#item-radar-industry-4) ⭐️ 8.0/10
5. [开源盘古模型 openPangu-2.1-Pro 正式上线华为云](#item-radar-industry-5) ⭐️ 8.0/10
6. [Edge0 发布 145B 与 120B 稀疏 MoE 模型，支持单 GPU SSD 流式推理](#item-radar-industry-6) ⭐️ 7.0/10

---

## 运营商 Token 与模型服务

<a id="item-radar-token-1"></a>
### [C114 刊文称天翼词元不止于中国版 OpenRouter](https://news.google.com/rss/articles/CBMiUkFVX3lxTE1HamdyZGppZlRCNEFQS2wzanFGaVY0dUVabWZlREZQNHpIXzZOSW1BdkJTQVVLWWJPTDdCVmZjQlhBd2ZYTGhmWWNYa2VOV2lrMHc?oc=5) ⭐️ 6.0/10

C114 通信网发布题为《天翼词元，不止中国版 OpenRouter》的文章，将中国电信的词元（Token）服务与模型聚合平台 OpenRouter 作对比，并指出其定位不止于国内版 OpenRouter。该文涉及主体为中国电信及其天翼词元服务，属于运营商 Token/模型 API 产品方向的行业信号。来源仅提供标题，未提供产品功能、上线时间、计费方式、价格、配额或计量口径等具体细节，来源未提供更多细节。

google\_news · C114通信网 · 11月16日 00:57

**标签**: `#天翼词元`, `#中国电信`, `#Token/MaaS`, `#模型API`, `#OpenRouter`

---

## 其他 AI 行业新闻

<a id="item-radar-industry-1"></a>
### [腾讯混元发布高性价比语言模型 Hy4 flash，单任务成本仅为 Hy4 的 1/20](https://www.infoq.cn/article/ejVJGwMvIIvplY8yio5r?utm_source=rss&amp;utm_medium=article) ⭐️ 9.0/10

11 月 16 日，腾讯混元发布最新语言模型 Hy4 flash。该模型总参数量为 224B（其中 64B 为 Engram 参数），激活参数仅 12B，支持多模态和 1M 上下文长度。定价为每百万 Token 输入 0.5 元、输出 2 元，命中缓存时仅需 0.02 元。按内部评测集 WorkIndex 综合测算，Hy4 flash 单任务成本仅为 Hy4 的 1/20、Hy4 preview 的 1/13、DeepSeek-V4.1-Flash-1027（Max 档位，忙时价格）的 1/8。模型已在腾讯云 TokenHub、WorkBuddy、元宝、企业微信、QQ、ima、Marvis 等产品上线，即将接入 OpenRouter。

rss · InfoQ 中文 · 11月16日 14:23

**「关键数据与产品变化」** 定价：每百万 Token 输入 0.5 元、输出 2 元，命中缓存时 0.02 元。

参数与上下文：总参数 224B（含 64B Engram 参数），激活参数 12B，支持多模态，上下文长度 1M。

架构与优化：预训练阶段加入混合注意力、LatentMoE、Engram 等架构特性，KV cache 大小仅为 Hy3 的 1/24、Hy4 的 1/6；后训练阶段通过自蒸馏 Hy4 获得综合智能水平，再通过强化学习使端到端任务输出长度降低 50%；推理阶段结合 megakernel、4bit 量化、DFly 等手段，解码速度超过 150 tps。

效果对比：Hy4 flash 综合效果略优于更大参数的 Hy4 preview（总参数 770B，激活参数 49B），但成本显著降低。

内部盲测：腾讯内部 85 位 WorkBuddy 用户在 27 类共 259 个任务中盲测，Hy4 flash 用户满意度接近 Claude Haiku 5.5，单任务成本显著低于其他所有模型，任务时长也最短。

限时优惠：11 月 30 日前，用户可在 WorkBuddy 限时免费使用，腾讯云 TokenHub API 限时 5 折使用。

开源计划：混元计划开源 Hy4 flash 并高频迭代。

**「背景与适用范围」** 11 月 4 日发布的 Hy4 首次跻身最强开源模型之列，在 Artificial Analysis 智能指数榜单上位列中国模型第二，Agent Arena 榜单居开源模型第一。此次 Hy4 flash 则聚焦在真实生产力任务中实现智能和效率的更优平衡。

内部评测集 WorkIndex 覆盖 PPT 制作与修改、文档编辑、表格修复、音视频处理及视觉理解等 WorkBuddy 典型任务，并结合人评，聚焦日常工作产物效果、单轮输出长度、端到端用时。

官方推荐：在深度搜索、文档处理、PPT 生成、简单前端展示、Computer Use 等大部分日常任务中使用 Hy4 flash；在长程软件工程等复杂任务中使用智能上限更高的 Hy4。

**标签**: `#腾讯混元`, `#Hy4 flash`, `#大模型发布`, `#TokenHub`, `#多模态`

---

<a id="item-radar-industry-2"></a>
### [腾讯发布并开源混元世界模型 2.0](https://news.google.com/rss/articles/CBMiSEFVX3lxTE9IZVhhRFpHOG1JMUtya1ZMLVJuVDhSNVlHTWs5VFdYMFM2ZDZ0aUJubDdwaXR0MGVNN0REOGZCak16WHBOZXlRSg?oc=5) ⭐️ 9.0/10

腾讯发布并开源混元世界模型 2.0（HunYuan World Model 2.0）。据品玩报道，该模型支持通过一句话文本生成 3D 世界，并兼容游戏引擎。

google\_news · 品玩 · 11月15日 06:34

**标签**: `#Tencent`, `#HunYuan`, `#world model`, `#open source`, `#3D generation`

---

<a id="item-radar-industry-3"></a>
### [阿里正式发布 Qwen4，单任务平均费用降六成](https://news.google.com/rss/articles/CBMiX0FVX3lxTE1ubjE3SG5pa1dXYUFjM1R0WnBRQjFHRkQxeWFDa0RDZmZHODMxem41SHBXdHpDRHJnRjFqOXZ1TElrdzhHMnhFQ3ZtekhPMkVkMWt2c2IwOEVNOHVWLUdv?oc=5) ⭐️ 8.0/10

据飞象网报道，阿里巴巴正式发布 Qwen4 大模型，报道称其单任务平均费用下降约六成。另有华尔街日报中文网的报道标题提到阿里巴巴发布了性能更强、成本更低的 AI 模型。目前可获取的信息主要来自新闻标题，模型的具体参数、性能指标、定价口径及发布细节尚未在所提供材料中披露。

google\_news · 飞象网 · 11月16日 05:09

**标签**: `#Alibaba`, `#Qwen4`, `#model release`, `#inference cost`, `#Chinese AI`

---

<a id="item-radar-industry-4"></a>
### [36 氪报道：Kimi 估值 500 亿美元，月之暗面被指急于拆除海外架构](https://news.google.com/rss/articles/CBMiTkFVX3lxTE1KR3N3U3NVSElZY1dqTmJkVml5amluakR1VDdpSjJtRGtkUDB6SDNPaTBLdHB3RGxld0o1UFFmQXpfSHVhRkNoci1xNlpnZw?oc=5) ⭐️ 8.0/10

据 36 氪 2026 年 11 月 15 日发布的报道标题，月之暗面旗下 Kimi 估值达 500 亿美元，报道同时探讨该公司急于拆除海外架构的原因。目前仅有该标题及摘要可见，具体估值口径、架构重组方案、时间安排及一手来源均未在所提供材料中披露，相关数字与动因尚待进一步核实。

google\_news · 36氪 · 11月15日 08:32

**标签**: `#月之暗面`, `#Kimi`, `#估值`, `#海外架构重组`, `#中国AI`

---

<a id="item-radar-industry-5"></a>
### [开源盘古模型 openPangu-2.1-Pro 正式上线华为云](https://news.google.com/rss/articles/CBMiZkFVX3lxTE5ZdlNsd1lBeExsWUVDb2FyazYyWGV0SGItWmZ6dUZ6VGhMQmpPZWtGY0xZOXB0aDUwdndURU1zbktzMHVKSUY5Q3U2TzBWR25zV1oyTnF2b1JReVBKc0FyQ3lvVnp5dw?oc=5) ⭐️ 8.0/10

华为在华为云上正式上线开源盘古模型 openPangu-2.1-Pro。该模型是华为旗舰盘古（Pangu）系列的开源版本。截至发稿，公开信息仅为标题报道，未披露模型参数、技术细节、许可条款或定价等具体内容。

google\_news · www.mrjjxw.com · 11月15日 14:21

**标签**: `#Huawei`, `#Huawei Cloud`, `#openPangu`, `#open-source model`, `#Pangu`

---

<a id="item-radar-industry-6"></a>
### [Edge0 发布 145B 与 120B 稀疏 MoE 模型，支持单 GPU SSD 流式推理](https://news.google.com/rss/articles/CBMieEFVX3lxTE5RY3FBTHRIbjJyVTlVNUFleEpsZU45Si1RWGRDUkVyNHo3cjFVNXZuY25zdkFwVkc3ODFEaUx6UHk1a0tBanBjZXdEX1NjUnJaRmc3djRuOHhlU2Y5V0FHX3hYa3dyMWFQRGZ0SVZYQ0wzUTlaekp1NQ?oc=5) ⭐️ 7.0/10

据 CASRAI 新闻报道，Edge0 发布了两款稀疏混合专家（MoE）模型，参数规模分别为 145B 和 120B，可通过单块 GPU 配合 SSD 流式读取的方式进行推理服务。除该报道标题外，来源未提供模型的具体架构、性能基准、许可条款或发布渠道等细节。

google\_news · CASRAI · 11月16日 02:18

**标签**: `#Edge0`, `#Sparse MoE`, `#model release`, `#SSD streaming inference`, `#large language models`

---