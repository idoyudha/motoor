---
layout: page
title: Direitos autorais
eyebrow: Jurídico
permalink: /pt/copyright/
ref: /copyright/
lang: pt
updated: 2026-10-25
lede: "A quem pertence o Motoor, as marcas que ele menciona e o software de código aberto com que é feito."
description: "A quem pertence o Motoor, as marcas que ele menciona e o software de código aberto com que é feito."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<p class="mt-doc__meta">Esta é uma tradução. Se houver divergência em relação à <a href="{{ '/copyright/' | relative_url }}">versão em inglês</a>, prevalece a versão em inglês.</p>

## Aviso de direitos autorais

© 2026 {{ dev.name }}. Todos os direitos reservados.

O app Motoor, o nome e o logotipo do Motoor e o conteúdo deste site pertencem a {{ dev.name }}. Você não pode copiá-los, alterá-los ou distribuí-los sem permissão, exceto quando a lei permitir. O conteúdo do seu próprio diário pertence a você.

## Marcas

Google Play é uma marca da Google LLC. App Store é uma marca de serviço da Apple Inc.

As marcas e os nomes de modelos de veículos exibidos no Motoor pertencem aos seus donos. Eles são usados apenas para identificar veículos e não implicam endosso nem vínculo.

## Software de código aberto

O Motoor é feito com software de código aberto. Agradecemos às pessoas que o criam.

| Componente | Licença |
|---|---|
| Fonte Figtree | [SIL Open Font License 1.1]({{ '/assets/fonts/OFL.txt' | relative_url }}) |
| Kotlin e Kotlin Coroutines | Apache License 2.0 |
| Android Jetpack: Compose, Navigation, Room, WorkManager, Biometric | Apache License 2.0 |
| Hilt e Dagger | Apache License 2.0 |
| OkHttp e Retrofit | Apache License 2.0 |
| Kotlinx Serialization | Apache License 2.0 |
| SDKs do Firebase | Apache License 2.0 |
| Jekyll (este site) | MIT License |

A lista completa, com os textos das licenças, está no app. Cada componente é usado sob sua própria licença, e o texto dessa licença se aplica a ele.

## Denunciar violação

Se você acredita que algo no Motoor ou neste site viola seus direitos autorais ou sua marca, escreva para [{{ dev.email }}](mailto:{{ dev.email }}) descrevendo a obra, onde ela aparece e como falar com você. Respondemos {{ t.ui.response_time }}.
