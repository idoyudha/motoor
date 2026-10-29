---
layout: page
title: 关于 Motoor
permalink: /zh/about/
ref: /about/
lang: zh
lede: "为你拥有的每一辆车准备的从容记录本。"
description: "Motoor 将车辆的加油、保养和费用记录集中在一处，并在保养到期前提醒你。"
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}

Motoor 将你的汽车、摩托车、自行车和电动车的加油、保养和费用记录集中在一处，并在保养到期前提醒你。

## Motoor 如何运作

- **大约一分钟即可登记一辆车。**选择品牌、类别和动力类型，Motoor 会为它建议一份保养计划。
- **轻点几下即可记录加油或充电、保养和费用。**Motoor 会计算油耗，以及每辆车的实际花费。
- **按里程或时间提醒**，以先到者为准，让你知道哪些已逾期、哪些即将到期、哪些可以再等等。

## 我们的信念

**记录永远不会被“扣押”。**记录、历史和导出在 Free 中都是完整的。记录本归你所有，你可以随时带走。

**未经你确认，不会创建任何内容。**Motoor 提出建议，由你决定。建议的计划或扫描的票据只有在你确认后才会保存。

**每个间隔都注明来源。**保养手册、维修店常见做法，或是你自己。你总能看到某项提醒为何到期。

**本地优先。**Motoor 可离线使用，记录本保存在你的手机上，并自动备份，换新手机也能从旧手机停下的地方继续。

## 谁在做

Motoor 是由 **{{ dev.name }}** 在印度尼西亚独立开发的应用。没有广告，你的数据也绝不出售。

## 联系我们

问题、想法和错误报告会直接送到开发 Motoor 的人手中：发送邮件至 [{{ dev.email }}](mailto:{{ dev.email }})，我们会在{{ t.ui.response_time }}回复。常见问题的解答请见[支持页面]({{ lp | append: '/support/' | relative_url }})。
