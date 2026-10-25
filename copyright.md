---
layout: page
title: Copyright
eyebrow: Legal
permalink: /copyright/
ref: /copyright/
updated: 2026-10-25
lede: Who owns Motoor, the trademarks it mentions, and the open-source software it is built with.
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

## Copyright notice

© 2026 {{ dev.name }}. All rights reserved.

The Motoor app, the Motoor name and logo, and the content of this website are owned by {{ dev.name }}. You may not copy, change or distribute them without permission, except where the law allows it. Your own logbook content belongs to you.

## Trademarks

Google Play is a trademark of Google LLC. App Store is a service mark of Apple Inc.

Vehicle makes and model names shown in Motoor belong to their owners. They are used only to identify vehicles, and no endorsement or connection is implied.

## Open-source software

Motoor is built with open-source software. We are grateful to the people who make it.

| Component | Licence |
|---|---|
| Figtree typeface | [SIL Open Font License 1.1]({{ '/assets/fonts/OFL.txt' | relative_url }}) |
| Kotlin and Kotlin Coroutines | Apache License 2.0 |
| Android Jetpack: Compose, Navigation, Room, WorkManager, Biometric | Apache License 2.0 |
| Hilt and Dagger | Apache License 2.0 |
| OkHttp and Retrofit | Apache License 2.0 |
| Kotlinx Serialization | Apache License 2.0 |
| Firebase SDKs | Apache License 2.0 |
| Jekyll (this website) | MIT License |

The full list, with the licence texts, is in the app. Each component is used under its own licence, and that licence’s text applies to it.

## Reporting infringement

If you believe something in Motoor or on this website infringes your copyright or trademark, email [{{ dev.email }}](mailto:{{ dev.email }}) with a description of the work, where it appears and how to reach you. We reply {{ t.ui.response_time }}.
