---
layout: page
title: Acerca de Motoor
permalink: /es/about/
ref: /about/
lang: es
lede: "Un registro tranquilo para cada vehículo que tienes."
description: "Motoor guarda en un solo lugar los registros de combustible, mantenimiento y gastos de tus vehículos, y te avisa antes de que toque el mantenimiento."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}

Motoor guarda en un solo lugar los registros de combustible, mantenimiento y gastos de tus coches, motos, bicicletas y vehículos eléctricos, y te avisa antes de que toque el mantenimiento.

## Cómo funciona Motoor

- **Registra un vehículo en un minuto aproximadamente.** Elige la marca, la clase y el tipo de motor, y Motoor te propone un plan de mantenimiento.
- **Registra combustible o carga, mantenimientos y gastos** con unos pocos toques. Motoor calcula el consumo y lo que de verdad cuesta cada vehículo.
- **Recibe recordatorios por distancia o por tiempo**, lo que llegue primero, para saber qué está vencido, qué vence pronto y qué puede esperar.

## En qué creemos

**Tus registros nunca quedan secuestrados.** Registrar, el historial y la exportación están completos en Free. Tu registro es tuyo y puedes llevártelo cuando quieras.

**Nada se crea sin tu confirmación.** Motoor sugiere y tú decides. Un plan propuesto o un recibo escaneado solo se guarda cuando lo confirmas.

**Cada intervalo dice de dónde viene.** El libro de mantenimiento, la práctica habitual de los talleres o tú. Siempre puedes ver por qué vence un recordatorio.

**Primero en local.** Motoor funciona sin conexión, con tu registro en tu teléfono, y se respalda automáticamente para que un teléfono nuevo continúe donde lo dejó el anterior.

## Quién lo hace

Motoor es una app independiente creada por **{{ dev.name }}** en Indonesia. Sin anuncios, y tus datos nunca se venden.

## Contacto

Las preguntas, ideas e informes de errores llegan directamente a la persona que hace Motoor: escribe a [{{ dev.email }}](mailto:{{ dev.email }}) y recibirás respuesta {{ t.ui.response_time }}. Las respuestas a las preguntas frecuentes están en la [página de ayuda]({{ lp | append: '/support/' | relative_url }}).
