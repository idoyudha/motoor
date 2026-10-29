---
layout: page
title: 著作権
permalink: /ja/copyright/
ref: /copyright/
lang: ja
updated: 2026-10-25
lede: "Motoor の権利者、Motoor に登場する商標、そして Motoor を構成するオープンソースソフトウェア。"
description: "Motoor の権利者、Motoor に登場する商標、そして Motoor を構成するオープンソースソフトウェア。"
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<p class="mt-doc__meta">このページは翻訳版です。<a href="{{ '/copyright/' | relative_url }}">英語版</a>と内容が異なる場合は、英語版が優先されます。</p>

## 著作権表示

© 2026 {{ dev.name }}. All rights reserved.

Motoor アプリ、Motoor の名称とロゴ、および本ウェブサイトのコンテンツは {{ dev.name }} に帰属します。法律で認められる場合を除き、許可なく複製、改変、配布することはできません。あなた自身の記録帳の内容はあなたのものです。

## 商標

Google Play は Google LLC の商標です。App Store は Apple Inc. のサービスマークです。

Motoor に表示される車両のメーカー名やモデル名は、それぞれの権利者に帰属します。車両を識別する目的でのみ使用しており、推奨や提携関係を示すものではありません。

## オープンソースソフトウェア

Motoor はオープンソースソフトウェアを使って作られています。開発者の皆さんに感謝します。

| コンポーネント | ライセンス |
|---|---|
| Figtree 書体 | [SIL Open Font License 1.1]({{ '/assets/fonts/OFL.txt' | relative_url }}) |
| Kotlin、Kotlin Coroutines | Apache License 2.0 |
| Android Jetpack：Compose、Navigation、Room、WorkManager、Biometric | Apache License 2.0 |
| Hilt、Dagger | Apache License 2.0 |
| OkHttp、Retrofit | Apache License 2.0 |
| Kotlinx Serialization | Apache License 2.0 |
| Firebase SDK | Apache License 2.0 |
| Jekyll（本ウェブサイト） | MIT License |

ライセンス本文を含む完全な一覧はアプリ内にあります。各コンポーネントはそれぞれのライセンスに基づいて使用されており、そのライセンス本文が適用されます。

## 権利侵害の報告

Motoor や本ウェブサイトの内容があなたの著作権や商標を侵害していると思われる場合は、対象の著作物、それが表示されている場所、連絡先を添えて [{{ dev.email }}](mailto:{{ dev.email }}) までメールしてください。{{ t.ui.response_time }}返信します。
