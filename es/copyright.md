---
layout: page
title: Derechos de autor
permalink: /es/copyright/
ref: /copyright/
lang: es
updated: 2026-10-25
lede: "Quién es el dueño de Motoor, las marcas que menciona y el software de código abierto con el que está hecho."
description: "Quién es el dueño de Motoor, las marcas que menciona y el software de código abierto con el que está hecho."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<p class="mt-doc__meta">Esta es una traducción. Si difiere de la <a href="{{ '/copyright/' | relative_url }}">versión en inglés</a>, prevalece la versión en inglés.</p>

## Aviso de derechos de autor

© 2026 {{ dev.name }}. Todos los derechos reservados.

La app Motoor, el nombre y el logotipo de Motoor y el contenido de este sitio web pertenecen a {{ dev.name }}. No puedes copiarlos, modificarlos ni distribuirlos sin permiso, salvo cuando la ley lo permita. El contenido de tu propio registro te pertenece.

## Marcas

Google Play es una marca de Google LLC. App Store es una marca de servicio de Apple Inc.

Las marcas y los nombres de modelos de vehículos que aparecen en Motoor pertenecen a sus propietarios. Se usan solo para identificar vehículos y no implican respaldo ni relación alguna.

## Software de código abierto

Motoor está hecho con software de código abierto. Agradecemos a las personas que lo crean.

| Componente | Licencia |
|---|---|
| Tipografía Figtree | [SIL Open Font License 1.1]({{ '/assets/fonts/OFL.txt' | relative_url }}) |
| Kotlin y Kotlin Coroutines | Apache License 2.0 |
| Android Jetpack: Compose, Navigation, Room, WorkManager, Biometric | Apache License 2.0 |
| Hilt y Dagger | Apache License 2.0 |
| OkHttp y Retrofit | Apache License 2.0 |
| Kotlinx Serialization | Apache License 2.0 |
| SDK de Firebase | Apache License 2.0 |
| Jekyll (este sitio web) | MIT License |

La lista completa, con los textos de las licencias, está en la app. Cada componente se usa bajo su propia licencia, y el texto de esa licencia se aplica a él.

## Denunciar una infracción

Si crees que algo en Motoor o en este sitio web infringe tus derechos de autor o tu marca, escribe a [{{ dev.email }}](mailto:{{ dev.email }}) con una descripción de la obra, dónde aparece y cómo contactarte. Respondemos {{ t.ui.response_time }}.
