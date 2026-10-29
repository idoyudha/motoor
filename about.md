---
layout: page
title: About Motoor
permalink: /about/
ref: /about/
lede: A calm logbook for every vehicle you own.
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}

Motoor keeps the fuel, service and cost records for your cars, motorcycles, bicycles and electric vehicles in one place, and reminds you before maintenance is due.

## How Motoor works

- **Register a vehicle in about a minute.** Choose its make, class and powertrain, and Motoor proposes a service schedule for it.
- **Log fuel or charging, services and costs** in a few taps. Motoor works out consumption and what each vehicle really costs.
- **Get reminders by distance or by time**, whichever comes first, so you know what’s overdue, what’s due soon and what can wait.

## What we believe

**The record is never held hostage.** Logging, history and export are complete on Free. Your logbook is yours, and you can take it with you at any time.

**Nothing is created without your confirmation.** Motoor suggests, you decide. A proposed schedule or a scanned receipt is saved only when you confirm it.

**Every interval says where it came from.** The service book, common workshop practice, or you. You can always see why a reminder is due.

**Local first.** Motoor works offline, with your logbook on your phone, and it is backed up automatically so a new phone picks up where the old one left off.

## Who makes it

Motoor is an independent app made by **{{ dev.name }}** in Indonesia. No ads, and your data is never sold.

## Get in touch

Questions, ideas and bug reports go straight to the person who makes Motoor: email [{{ dev.email }}](mailto:{{ dev.email }}) and you’ll get a reply {{ t.ui.response_time }}. Answers to common questions are on the [support page]({{ lp | append: '/support/' | relative_url }}).
