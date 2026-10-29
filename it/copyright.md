---
layout: page
title: Copyright
permalink: /it/copyright/
ref: /copyright/
lang: it
updated: 2026-10-25
lede: "Di chi è Motoor, i marchi che cita e il software open source con cui è realizzato."
description: "Di chi è Motoor, i marchi che cita e il software open source con cui è realizzato."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<p class="mt-doc__meta">Questa è una traduzione. In caso di differenze rispetto alla <a href="{{ '/copyright/' | relative_url }}">versione inglese</a>, prevale la versione inglese.</p>

## Nota sul copyright

© 2026 {{ dev.name }}. Tutti i diritti riservati.

L’app Motoor, il nome e il logo Motoor e i contenuti di questo sito web appartengono a {{ dev.name }}. Non puoi copiarli, modificarli o distribuirli senza permesso, salvo quanto consentito dalla legge. I contenuti del tuo libretto appartengono a te.

## Marchi

Google Play è un marchio di Google LLC. App Store è un marchio di servizio di Apple Inc.

Le marche e i nomi dei modelli di veicoli mostrati in Motoor appartengono ai rispettivi titolari. Sono usati solo per identificare i veicoli e non implicano alcun sostegno o collegamento.

## Software open source

Motoor è realizzato con software open source. Ringraziamo le persone che lo creano.

| Componente | Licenza |
|---|---|
| Carattere Figtree | [SIL Open Font License 1.1]({{ '/assets/fonts/OFL.txt' | relative_url }}) |
| Kotlin e Kotlin Coroutines | Apache License 2.0 |
| Android Jetpack: Compose, Navigation, Room, WorkManager, Biometric | Apache License 2.0 |
| Hilt e Dagger | Apache License 2.0 |
| OkHttp e Retrofit | Apache License 2.0 |
| Kotlinx Serialization | Apache License 2.0 |
| SDK Firebase | Apache License 2.0 |
| Jekyll (questo sito web) | MIT License |

L’elenco completo, con i testi delle licenze, è nell’app. Ogni componente è usato secondo la propria licenza, il cui testo si applica a esso.

## Segnalare una violazione

Se ritieni che qualcosa in Motoor o su questo sito violi il tuo copyright o il tuo marchio, scrivi a [{{ dev.email }}](mailto:{{ dev.email }}) descrivendo l’opera, dove compare e come contattarti. Rispondiamo {{ t.ui.response_time }}.
