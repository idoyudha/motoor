---
layout: page
title: 저작권
permalink: /ko/copyright/
ref: /copyright/
lang: ko
updated: 2026-10-25
lede: "Motoor의 소유자, Motoor에 언급되는 상표, 그리고 Motoor를 만드는 데 사용한 오픈소스 소프트웨어."
description: "Motoor의 소유자, Motoor에 언급되는 상표, 그리고 Motoor를 만드는 데 사용한 오픈소스 소프트웨어."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<p class="mt-doc__meta">이 페이지는 번역본입니다. <a href="{{ '/copyright/' | relative_url }}">영어 원문</a>과 내용이 다를 경우 영어 원문이 우선합니다.</p>

## 저작권 고지

© 2026 {{ dev.name }}. All rights reserved.

Motoor 앱, Motoor의 이름과 로고, 그리고 이 웹사이트의 콘텐츠는 {{ dev.name }}의 소유입니다. 법률이 허용하는 경우를 제외하고 허락 없이 복제, 수정 또는 배포할 수 없습니다. 사용자 본인의 기록장 콘텐츠는 사용자의 것입니다.

## 상표

Google Play는 Google LLC의 상표입니다. App Store는 Apple Inc.의 서비스 마크입니다.

Motoor에 표시되는 차량 제조사와 모델명은 각 소유자에게 귀속됩니다. 이는 차량을 식별하기 위해서만 사용되며, 어떠한 보증이나 제휴도 의미하지 않습니다.

## 오픈소스 소프트웨어

Motoor는 오픈소스 소프트웨어로 만들어졌습니다. 이를 만든 분들께 감사드립니다.

| 구성 요소 | 라이선스 |
|---|---|
| Figtree 서체 | [SIL Open Font License 1.1]({{ '/assets/fonts/OFL.txt' | relative_url }}) |
| Kotlin 및 Kotlin Coroutines | Apache License 2.0 |
| Android Jetpack: Compose, Navigation, Room, WorkManager, Biometric | Apache License 2.0 |
| Hilt 및 Dagger | Apache License 2.0 |
| OkHttp 및 Retrofit | Apache License 2.0 |
| Kotlinx Serialization | Apache License 2.0 |
| Firebase SDK | Apache License 2.0 |
| Jekyll(이 웹사이트) | MIT License |

라이선스 전문이 포함된 전체 목록은 앱에서 볼 수 있습니다. 각 구성 요소는 고유한 라이선스에 따라 사용되며, 해당 라이선스 전문이 적용됩니다.

## 권리 침해 신고

Motoor나 이 웹사이트의 내용이 귀하의 저작권이나 상표권을 침해한다고 생각되면, 해당 저작물에 대한 설명, 표시된 위치, 연락 방법을 적어 [{{ dev.email }}](mailto:{{ dev.email }})으로 이메일을 보내 주세요. {{ t.ui.response_time }} 답변드립니다.
