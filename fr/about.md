---
layout: page
title: À propos de Motoor
eyebrow: À propos
permalink: /fr/about/
ref: /about/
lang: fr
lede: "Un carnet d’entretien serein pour chacun de vos véhicules."
description: "Motoor réunit au même endroit le carburant, les entretiens et les dépenses de vos véhicules, et vous prévient avant qu’un entretien soit dû."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}

Motoor réunit au même endroit le carburant, les entretiens et les dépenses de vos voitures, motos, vélos et véhicules électriques, et vous prévient avant qu’un entretien soit dû.

## Comment fonctionne Motoor

- **Enregistrez un véhicule en une minute environ.** Choisissez la marque, la catégorie et la motorisation, et Motoor vous propose un plan d’entretien.
- **Notez carburant ou recharge, entretiens et dépenses** en quelques gestes. Motoor calcule la consommation et ce que coûte réellement chaque véhicule.
- **Recevez des rappels selon la distance ou la durée**, au premier des deux termes atteint, pour savoir ce qui est en retard, ce qui arrive bientôt et ce qui peut attendre.

## Nos principes

**Vos données ne sont jamais prises en otage.** La saisie, l’historique et l’export sont complets en Free. Votre carnet vous appartient et vous pouvez l’emporter quand vous voulez.

**Rien n’est créé sans votre confirmation.** Motoor suggère, vous décidez. Un plan proposé ou un ticket numérisé n’est enregistré que lorsque vous le confirmez.

**Chaque intervalle indique sa source.** Le carnet d’entretien, la pratique courante des garages, ou vous. Vous voyez toujours pourquoi un rappel est dû.

**Local d’abord.** Motoor fonctionne hors connexion, avec votre carnet sur votre téléphone, et il est sauvegardé automatiquement pour qu’un nouveau téléphone reprenne là où l’ancien s’est arrêté.

## Qui le fait

Motoor est une application indépendante créée par **{{ dev.name }}** en Indonésie. Pas de publicité, et vos données ne sont jamais vendues.

## Nous contacter

Questions, idées et signalements de bugs arrivent directement à la personne qui fait Motoor : écrivez à [{{ dev.email }}](mailto:{{ dev.email }}) et vous recevrez une réponse {{ t.ui.response_time }}. Les réponses aux questions fréquentes sont sur la [page d’assistance]({{ lp | append: '/support/' | relative_url }}).
