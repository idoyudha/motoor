---
layout: page
title: Telif hakkı
eyebrow: Yasal
permalink: /tr/copyright/
ref: /copyright/
lang: tr
updated: 2026-10-25
lede: "Motoor’un sahibi, andığı ticari markalar ve yapımında kullanılan açık kaynaklı yazılımlar."
description: "Motoor’un sahibi, andığı ticari markalar ve yapımında kullanılan açık kaynaklı yazılımlar."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<p class="mt-doc__meta">Bu bir çeviridir. <a href="{{ '/copyright/' | relative_url }}">İngilizce sürümden</a> farklı olması durumunda İngilizce sürüm geçerlidir.</p>

## Telif hakkı bildirimi

© 2026 {{ dev.name }}. Tüm hakları saklıdır.

Motoor uygulaması, Motoor adı ve logosu ile bu web sitesinin içeriği {{ dev.name }}’ya aittir. Yasaların izin verdiği durumlar dışında, izin almadan bunları kopyalayamaz, değiştiremez veya dağıtamazsınız. Kendi kayıt defterinizin içeriği size aittir.

## Ticari markalar

Google Play, Google LLC’nin ticari markasıdır. App Store, Apple Inc.’in hizmet markasıdır.

Motoor’da gösterilen araç markaları ve model adları sahiplerine aittir. Yalnızca araçları tanımlamak için kullanılırlar ve herhangi bir onay veya bağlantı anlamına gelmezler.

## Açık kaynaklı yazılımlar

Motoor açık kaynaklı yazılımlarla yapılmıştır. Bunları geliştiren insanlara teşekkür ederiz.

| Bileşen | Lisans |
|---|---|
| Figtree yazı tipi | [SIL Open Font License 1.1]({{ '/assets/fonts/OFL.txt' | relative_url }}) |
| Kotlin ve Kotlin Coroutines | Apache License 2.0 |
| Android Jetpack: Compose, Navigation, Room, WorkManager, Biometric | Apache License 2.0 |
| Hilt ve Dagger | Apache License 2.0 |
| OkHttp ve Retrofit | Apache License 2.0 |
| Kotlinx Serialization | Apache License 2.0 |
| Firebase SDK’ları | Apache License 2.0 |
| Jekyll (bu web sitesi) | MIT License |

Lisans metinleriyle birlikte tam liste uygulamanın içindedir. Her bileşen kendi lisansı altında kullanılır ve o lisansın metni ona uygulanır.

## İhlal bildirme

Motoor’da veya bu web sitesinde bir şeyin telif hakkınızı ya da ticari markanızı ihlal ettiğini düşünüyorsanız, eserin açıklaması, nerede göründüğü ve size nasıl ulaşılacağı bilgileriyle [{{ dev.email }}](mailto:{{ dev.email }}) adresine yazın. {{ t.ui.response_time }} yanıt veririz.
