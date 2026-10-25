---
layout: page
title: Urheberrecht
eyebrow: Rechtliches
permalink: /de/copyright/
ref: /copyright/
lang: de
updated: 2026-10-25
lede: "Wem Motoor gehört, welche Marken es nennt und mit welcher Open-Source-Software es gebaut ist."
description: "Wem Motoor gehört, welche Marken es nennt und mit welcher Open-Source-Software es gebaut ist."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<p class="mt-doc__meta">Dies ist eine Übersetzung. Weicht sie von der <a href="{{ '/copyright/' | relative_url }}">englischen Fassung</a> ab, gilt die englische Fassung.</p>

## Urheberrechtshinweis

© 2026 {{ dev.name }}. Alle Rechte vorbehalten.

Die Motoor-App, der Name und das Logo von Motoor sowie die Inhalte dieser Website gehören {{ dev.name }}. Sie dürfen sie ohne Erlaubnis nicht kopieren, verändern oder verbreiten, außer soweit das Gesetz es erlaubt. Die Inhalte Ihres eigenen Fahrtenbuchs gehören Ihnen.

## Marken

Google Play ist eine Marke von Google LLC. App Store ist eine Dienstleistungsmarke von Apple Inc.

In Motoor angezeigte Fahrzeugmarken und Modellnamen gehören ihren Inhabern. Sie dienen nur dazu, Fahrzeuge zu benennen; eine Empfehlung oder Verbindung ist damit nicht verbunden.

## Open-Source-Software

Motoor ist mit Open-Source-Software gebaut. Wir danken den Menschen, die sie entwickeln.

| Komponente | Lizenz |
|---|---|
| Schrift Figtree | [SIL Open Font License 1.1]({{ '/assets/fonts/OFL.txt' | relative_url }}) |
| Kotlin und Kotlin Coroutines | Apache License 2.0 |
| Android Jetpack: Compose, Navigation, Room, WorkManager, Biometric | Apache License 2.0 |
| Hilt und Dagger | Apache License 2.0 |
| OkHttp und Retrofit | Apache License 2.0 |
| Kotlinx Serialization | Apache License 2.0 |
| Firebase SDKs | Apache License 2.0 |
| Jekyll (diese Website) | MIT License |

Die vollständige Liste mit den Lizenztexten finden Sie in der App. Jede Komponente wird unter ihrer eigenen Lizenz genutzt, und deren Text gilt für sie.

## Rechtsverletzungen melden

Wenn Sie glauben, dass etwas in Motoor oder auf dieser Website Ihr Urheber- oder Markenrecht verletzt, schreiben Sie an [{{ dev.email }}](mailto:{{ dev.email }}) mit einer Beschreibung des Werks, der Stelle, an der es erscheint, und wie wir Sie erreichen. Wir antworten {{ t.ui.response_time }}.
