---
layout: page
title: Droits d’auteur
permalink: /fr/copyright/
ref: /copyright/
lang: fr
updated: 2026-10-25
lede: "À qui appartient Motoor, les marques qu’il mentionne et les logiciels libres avec lesquels il est conçu."
description: "À qui appartient Motoor, les marques qu’il mentionne et les logiciels libres avec lesquels il est conçu."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<p class="mt-doc__meta">Ceci est une traduction. En cas de divergence avec la <a href="{{ '/copyright/' | relative_url }}">version anglaise</a>, la version anglaise fait foi.</p>

## Mention de droits d’auteur

© 2026 {{ dev.name }}. Tous droits réservés.

L’application Motoor, le nom et le logo Motoor et le contenu de ce site web appartiennent à {{ dev.name }}. Vous ne pouvez pas les copier, les modifier ni les diffuser sans autorisation, sauf si la loi le permet. Le contenu de votre propre carnet vous appartient.

## Marques

Google Play est une marque de Google LLC. App Store est une marque de service d’Apple Inc.

Les marques et noms de modèles de véhicules affichés dans Motoor appartiennent à leurs titulaires. Ils servent uniquement à identifier les véhicules et n’impliquent aucun soutien ni lien.

## Logiciels libres

Motoor est conçu avec des logiciels libres. Merci aux personnes qui les créent.

| Composant | Licence |
|---|---|
| Police Figtree | [SIL Open Font License 1.1]({{ '/assets/fonts/OFL.txt' | relative_url }}) |
| Kotlin et Kotlin Coroutines | Apache License 2.0 |
| Android Jetpack : Compose, Navigation, Room, WorkManager, Biometric | Apache License 2.0 |
| Hilt et Dagger | Apache License 2.0 |
| OkHttp et Retrofit | Apache License 2.0 |
| Kotlinx Serialization | Apache License 2.0 |
| SDK Firebase | Apache License 2.0 |
| Jekyll (ce site web) | MIT License |

La liste complète, avec les textes des licences, se trouve dans l’application. Chaque composant est utilisé sous sa propre licence, dont le texte s’applique à lui.

## Signaler une atteinte

Si vous pensez que quelque chose dans Motoor ou sur ce site porte atteinte à vos droits d’auteur ou à votre marque, écrivez à [{{ dev.email }}](mailto:{{ dev.email }}) en décrivant l’œuvre, l’endroit où elle apparaît et comment vous joindre. Nous répondons {{ t.ui.response_time }}.
