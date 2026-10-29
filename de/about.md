---
layout: page
title: Über Motoor
permalink: /de/about/
ref: /about/
lang: de
lede: "Ein ruhiges Fahrtenbuch für jedes Fahrzeug, das Sie besitzen."
description: "Motoor hält Tank-, Wartungs- und Kostendaten Ihrer Fahrzeuge an einem Ort und erinnert Sie, bevor eine Wartung fällig ist."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}

Motoor hält die Tank-, Wartungs- und Kostendaten Ihrer Autos, Motorräder, Fahrräder und Elektrofahrzeuge an einem Ort und erinnert Sie, bevor eine Wartung fällig ist.

## So funktioniert Motoor

- **Ein Fahrzeug in etwa einer Minute anlegen.** Wählen Sie Marke, Klasse und Antrieb, und Motoor schlägt einen Wartungsplan dafür vor.
- **Tanken oder Laden, Wartungen und Kosten erfassen** mit wenigen Fingertipps. Motoor berechnet den Verbrauch und was jedes Fahrzeug wirklich kostet.
- **Erinnerungen nach Strecke oder Zeit**, je nachdem, was zuerst eintritt. So sehen Sie, was überfällig ist, was bald fällig wird und was warten kann.

## Woran wir glauben

**Ihre Daten werden nie als Geisel genommen.** Erfassen, Verlauf und Export sind in Free vollständig. Ihr Fahrtenbuch gehört Ihnen, und Sie können es jederzeit mitnehmen.

**Nichts entsteht ohne Ihre Bestätigung.** Motoor schlägt vor, Sie entscheiden. Ein vorgeschlagener Plan oder ein gescannter Beleg wird erst gespeichert, wenn Sie ihn bestätigen.

**Jedes Intervall nennt seine Herkunft.** Das Serviceheft, übliche Werkstattpraxis oder Sie selbst. Sie sehen immer, warum eine Erinnerung fällig ist.

**Lokal zuerst.** Motoor funktioniert offline, mit Ihrem Fahrtenbuch auf dem Telefon, und wird automatisch gesichert, sodass ein neues Telefon dort weitermacht, wo das alte aufgehört hat.

## Wer es macht

Motoor ist eine unabhängige App von **{{ dev.name }}** aus Indonesien. Keine Werbung, und Ihre Daten werden nie verkauft.

## Kontakt

Fragen, Ideen und Fehlermeldungen gehen direkt an die Person, die Motoor macht: Schreiben Sie an [{{ dev.email }}](mailto:{{ dev.email }}), und Sie erhalten eine Antwort {{ t.ui.response_time }}. Antworten auf häufige Fragen finden Sie auf der [Support-Seite]({{ lp | append: '/support/' | relative_url }}).
