---
layout: page
title: Informazioni su Motoor
permalink: /it/about/
ref: /about/
lang: it
lede: "Un libretto tranquillo per ogni veicolo che possiedi."
description: "Motoor tiene in un unico posto carburante, interventi e spese dei tuoi veicoli e ti avvisa prima che sia ora di fare manutenzione."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}

Motoor tiene in un unico posto carburante, interventi e spese di auto, moto, biciclette e veicoli elettrici, e ti avvisa prima che sia ora di fare manutenzione.

## Come funziona Motoor

- **Registra un veicolo in circa un minuto.** Scegli marca, categoria e alimentazione, e Motoor ti propone un piano di manutenzione.
- **Registra carburante o ricarica, interventi e spese** con pochi tocchi. Motoor calcola i consumi e quanto costa davvero ogni veicolo.
- **Ricevi promemoria per distanza o per tempo**, a seconda di quale arriva prima, così sai cosa è scaduto, cosa scade a breve e cosa può aspettare.

## In cosa crediamo

**I tuoi dati non sono mai in ostaggio.** Registrazione, cronologia ed esportazione sono complete con Free. Il libretto è tuo e puoi portarlo con te quando vuoi.

**Niente viene creato senza la tua conferma.** Motoor suggerisce, tu decidi. Un piano proposto o una ricevuta scansionata vengono salvati solo quando li confermi.

**Ogni intervallo dice da dove viene.** Il libretto di manutenzione, la prassi delle officine o tu. Puoi sempre vedere perché un promemoria è in scadenza.

**Prima in locale.** Motoor funziona offline, con il libretto sul tuo telefono, e viene salvato automaticamente in backup, così un nuovo telefono riparte da dove si era fermato il vecchio.

## Chi lo realizza

Motoor è un’app indipendente realizzata da **{{ dev.name }}** in Indonesia. Niente pubblicità, e i tuoi dati non vengono mai venduti.

## Contatti

Domande, idee e segnalazioni di bug arrivano direttamente alla persona che realizza Motoor: scrivi a [{{ dev.email }}](mailto:{{ dev.email }}) e riceverai risposta {{ t.ui.response_time }}. Le risposte alle domande frequenti sono nella [pagina di assistenza]({{ lp | append: '/support/' | relative_url }}).
