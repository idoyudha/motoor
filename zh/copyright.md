---
layout: page
title: 版权
permalink: /zh/copyright/
ref: /copyright/
lang: zh
updated: 2026-10-25
lede: "Motoor 归谁所有、其中提及的商标，以及构建它所使用的开源软件。"
description: "Motoor 归谁所有、其中提及的商标，以及构建它所使用的开源软件。"
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<p class="mt-doc__meta">本页为翻译版本。如与<a href="{{ '/copyright/' | relative_url }}">英文版本</a>有出入，以英文版本为准。</p>

## 版权声明

© 2026 {{ dev.name }}。保留所有权利。

Motoor 应用、Motoor 名称和标志以及本网站内容均归 {{ dev.name }} 所有。除法律允许的情况外，未经许可，你不得复制、修改或分发。你自己记录本中的内容归你所有。

## 商标

Google Play 是 Google LLC 的商标。App Store 是 Apple Inc. 的服务商标。

Motoor 中显示的车辆品牌和型号名称归其各自所有者所有，仅用于识别车辆，并不表示任何认可或关联。

## 开源软件

Motoor 使用开源软件构建。感谢创造这些软件的人们。

| 组件 | 许可证 |
|---|---|
| Figtree 字体 | [SIL Open Font License 1.1]({{ '/assets/fonts/OFL.txt' | relative_url }}) |
| Kotlin 和 Kotlin Coroutines | Apache License 2.0 |
| Android Jetpack：Compose、Navigation、Room、WorkManager、Biometric | Apache License 2.0 |
| Hilt 和 Dagger | Apache License 2.0 |
| OkHttp 和 Retrofit | Apache License 2.0 |
| Kotlinx Serialization | Apache License 2.0 |
| Firebase SDK | Apache License 2.0 |
| Jekyll（本网站） | MIT License |

完整列表及许可证文本可在应用中查看。每个组件均按其自身的许可证使用，并适用该许可证的文本。

## 举报侵权

如果你认为 Motoor 或本网站中的某些内容侵犯了你的版权或商标，请发送邮件至 [{{ dev.email }}](mailto:{{ dev.email }})，说明相关作品、出现位置以及你的联系方式。我们会在{{ t.ui.response_time }}回复。
