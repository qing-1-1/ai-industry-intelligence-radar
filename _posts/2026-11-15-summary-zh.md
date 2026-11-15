---
layout: default
title: "Horizon Summary: 2026-11-15 (ZH)"
date: 2026-11-15
lang: zh
---

> 从 64 条内容中筛选出 8 条重要资讯。

---

**模型路由与 AI 网关**
1. [LiteLLM 发布 v1.110.0-rc.3：路由字段校验与依赖修复回溯](#item-radar-router-1) ⭐️ 6.0/10
2. [LG U+推进 AI 推理降本：模型路由与 Chip-Mix 并进，明年拓展 B2B](#item-radar-router-2) ⭐️ 6.0/10

**其他 AI 行业新闻**
1. [DeepSeek 发布全家桶 API，开发者可复刻完整 App 体验](#item-radar-industry-1) ⭐️ 8.0/10
2. [Runway 发布 Praxis-1 权重与训练代码](#item-radar-industry-2) ⭐️ 8.0/10
3. [英伟达上演“奥特曼 2.0”，员工集体请愿：让老黄回家！](#item-radar-industry-3) ⭐️ 7.0/10
4. [「史上最严」湿实验预测基准发布！推理拉满、算力翻 5 倍也白搭](#item-radar-industry-4) ⭐️ 7.0/10
5. [绿电进 Token 出！联想重新定义词元工厂](#item-radar-industry-5) ⭐️ 7.0/10
6. [百度承诺以 Apache 许可证发布 ERNIE 5.5 模型权重，基础模型排除欧盟与英国](#item-radar-industry-6) ⭐️ 7.0/10

---

## 模型路由与 AI 网关

<a id="item-radar-router-1"></a>
### [LiteLLM 发布 v1.110.0-rc.3：路由字段校验与依赖修复回溯](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-rc.3) ⭐️ 6.0/10

BerriAI/litellm 于 2026 年 11 月 15 日发布 v1.110.0-rc.3 候选版本。该版本为 rc/1.110.0 分支的维护性更新，主要回溯了路由请求字段校验修复、多项主干依赖升级以及若干问题修复，并对 Docker 镜像提供 cosign 签名验证。社区评论暂无。

github · litellm-release\[bot\] · 11月15日 01:10

**「路由与能力」** 版本变更内容如下：1）fix\(router\)：将请求字段校验回溯至 rc/1.110.0（PR \#51514，作者 @narmstrong-berri）；2）fix：回溯 \#51334、\#51380 及主干依赖升级至 rc/1.110.0（PR \#51854，作者 @yuneng-berri）；3）fix：回溯 \#51451、\#51449、\#51715 至 rc/1.110.0（PR \#51858，作者 @yuneng-berri）。完整变更对比为 v1.110.0-rc.2 至 v1.110.0-rc.3。Docker 镜像 ghcr.io/berriai/litellm:v1.110.0-rc.3 使用 cosign 签名，签名密钥引入自 commit e82a3c6，支持通过 pinned commit hash 或 release tag 两种方式验证。

**「适用与限制」** 该版本为 release candidate（候选版本），非稳定版。变更以回溯修复为主，未涉及新增路由策略、定价调整或运营商部署信息。来源未提供更多细节。

**标签**: `#LLM gateway`, `#LiteLLM`, `#release candidate`, `#provider routing`, `#open source`

---

<a id="item-radar-router-2"></a>
### [LG U+推进 AI 推理降本：模型路由与 Chip-Mix 并进，明年拓展 B2B](https://news.google.com/rss/articles/CBMiqgFBVV95cUxOc2lSOGxXazFvSlU0WjRPZXZoZUVJRGlHa0N6U051ck8yWTF6Zm1OSDdJdXd1dTlFQjVFWklvdjF4TEc5VXFoMXFQSFNjZ050c0NZWDdCbGppMmxJTXVMakJmZHI3Nmk3NnVqMjdhazN2RHE4ZjJGdjU1MTBpSGFPVF9kVW85QkN3Mk1pYXpEeGJ0d2ZlRWdzZU5pT2l3dFJEdkM4MExHWnVCZw?oc=5) ⭐️ 6.0/10

据디지털투데이报道，LG U+正在推进 AI 推理降本，方向包括模型路由（model routing）与 Chip-Mix 策略，并计划明年拓展至 B2B。目前仅有报道标题，来源未提供更多细节。

google\_news · 디지털투데이 · 11月15日 00:00

**标签**: `#model routing`, `#AI inference cost reduction`, `#LG U+`, `#telecom operator`, `#B2B`

---

## 其他 AI 行业新闻

<a id="item-radar-industry-1"></a>
### [DeepSeek 发布全家桶 API，开发者可复刻完整 App 体验](https://news.google.com/rss/articles/CBMijAFBVV95cUxQZU00M0VsLXYyd1M5dVRiRjh1WjlCZF9OUlJKQmRQS0FXcU9EckdkVzVva3RRR1AzRUNNYlBEQUN1bXJfRTVMY1BSVVZqWjRGZU5ZMU1tZ2dpZVRLeXNuQUpnUS1IbWhvSW9PVTRobkZORjRYazRLMGlhNGRpakM2WlhYYWRwdUpMa1JIUQ?oc=5) ⭐️ 8.0/10

据搜狐转载的华西计算机 1114 期报道，DeepSeek 发布了被称为“全家桶”的完整 API 套件，使开发者能够复刻完整的 DeepSeek App 体验。报道未披露该 API 套件的具体接口构成、定价、可用模型版本或上线时间等细节，来源亦为二手新闻聚合内容，相关信息有待官方渠道进一步确认。

google\_news · Sohu · 11月14日 14:52

**标签**: `#DeepSeek`, `#API`, `#AI model release`, `#developer platform`, `#Chinese AI`

---

<a id="item-radar-industry-2"></a>
### [Runway 发布 Praxis-1 权重与训练代码](https://news.google.com/rss/articles/CBMic0FVX3lxTFBKcVlzWVNBaXp6YjdRMU9MbzNLU1BVWW52LWZkMlFueE9NRDJKejdfSmpvS19YYlFTY0J2SjMxcC1ha3k3WF9HbHl6LXNQMmRrRzJmMC1ZWVBnN0JPNmhReS1JY1BIZ2F2ekF4UFZ4bXpOYnM?oc=5) ⭐️ 8.0/10

据 CASRAI 报道，Runway 已发布其 Praxis-1 模型的权重与训练代码，使该模型的相关组件可以获取。报道未说明权重采用的具体许可协议、模型规模、训练数据构成，也未说明发布渠道与配套文档。

google\_news · CASRAI · 11月14日 21:33

**标签**: `#Runway`, `#Praxis-1`, `#open weights`, `#training code`, `#AI model release`

---

<a id="item-radar-industry-3"></a>
### [英伟达上演“奥特曼 2.0”，员工集体请愿：让老黄回家！](https://www.qbitai.com/2026/11/510297.html) ⭐️ 7.0/10

NVIDIA employees and supporters including Elon Musk petition for Jensen Huang&\#x27;s return after his abrupt resignation as CEO, while the board reportedly considers Arm CEO Rene Haas as a successor.

rss · 量子位 · 11月14日 10:08

**标签**: `#NVIDIA`, `#Jensen Huang`, `#Rene Haas`, `#Arm`, `#AI infrastructure leadership`

---

<a id="item-radar-industry-4"></a>
### [「史上最严」湿实验预测基准发布！推理拉满、算力翻 5 倍也白搭](https://www.qbitai.com/2026/11/510232.html) ⭐️ 7.0/10

UniPat AI launches the Science Prediction Universe \(SPU\) benchmark to evaluate AI models&\#x27; ability to predict wet lab experiment outcomes across multiple scientific disciplines.

rss · 量子位 · 11月14日 09:58

**标签**: `#UniPat AI`, `#SPU benchmark`, `#AI for Science`, `#wet lab prediction`, `#model evaluation`

---

<a id="item-radar-industry-5"></a>
### [绿电进 Token 出！联想重新定义词元工厂](https://www.qbitai.com/2026/11/510094.html) ⭐️ 7.0/10

联想在河北张家口发布&\#x27;万全混合词元工厂&\#x27;，以绿电驱动的大规模算力集群量产低成本 Token 服务。

rss · 量子位 · 11月14日 09:41

**标签**: `#联想`, `#AI推理基础设施`, `#词元工厂`, `#绿电算力`, `#张家口`

---

<a id="item-radar-industry-6"></a>
### [百度承诺以 Apache 许可证发布 ERNIE 5.5 模型权重，基础模型排除欧盟与英国](https://news.google.com/rss/articles/CBMi1wFBVV95cUxQRDYxc0p6aDJZWkkwSW11YlJrQk5yQ0hUN1Mzbi16TlcwSVNrYWp4RHdfTHlsUXVOWXVEbDhwQ3E1ZlR2MHhGeXA4cnBwMWc4aTBPS1QtMTJKd2F2Mk4xMDRsbXhQczBHdHBSMjBLVy1WNEFQeDh5Y0UyZWloMjc2LTFIcTlNdXV5ZTRYbmR5V0YxMEc3Tm9yTnFCdndEQVB4a3FfMmU4MFVVREVjNERsN2ZPR3owY21rLVM0WTI3Q0RmSjk0MUdlVjYzdFlaZkF4M3N5MVpBWQ?oc=5) ⭐️ 7.0/10

据 Tech Times 报道，百度承诺于本月以 Apache 许可证发布 ERNIE 5.5 的 AI 模型权重，但其基础模型不适用于欧盟和英国司法辖区。该信息目前仅来自 Tech Times 的标题，尚无正文内容或百度官方确认。

google\_news · Tech Times · 11月14日 10:15

**「关键信息」** 报道要点：模型为 ERNIE 5.5；许可证为 Apache License；发布时间窗口为本月；地理限制针对基础模型（base model），排除欧盟（EU）与英国（UK）。具体发布日期、参数规模及限制的执行方式，来源未披露。

**「信息可靠性说明」** 现有证据仅为一则二手媒体（Tech Times）的标题，缺少正文细节与百度官方声明，因此该承诺的确定性有限，需以官方发布为准。

**标签**: `#Baidu`, `#ERNIE 5.5`, `#Apache License`, `#open-source AI`, `#China AI policy`

---