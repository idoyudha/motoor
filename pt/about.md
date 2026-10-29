---
layout: page
title: Sobre o Motoor
permalink: /pt/about/
ref: /about/
lang: pt
lede: "Um diário de bordo tranquilo para cada veículo que você tem."
description: "O Motoor reúne num só lugar os registros de combustível, manutenção e custos dos seus veículos e avisa antes de a manutenção vencer."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}

O Motoor reúne num só lugar os registros de combustível, manutenção e custos dos seus carros, motos, bicicletas e veículos elétricos, e avisa você antes de a manutenção vencer.

## Como o Motoor funciona

- **Cadastre um veículo em cerca de um minuto.** Escolha a marca, a categoria e a motorização, e o Motoor propõe um plano de manutenção.
- **Registre combustível ou recarga, manutenções e custos** com poucos toques. O Motoor calcula o consumo e quanto cada veículo realmente custa.
- **Receba lembretes por distância ou por tempo**, o que vier primeiro, para saber o que está atrasado, o que vence em breve e o que pode esperar.

## No que acreditamos

**Seus registros nunca ficam reféns.** Registros, histórico e exportação são completos no Free. Seu diário é seu, e você pode levá-lo quando quiser.

**Nada é criado sem a sua confirmação.** O Motoor sugere, você decide. Um plano proposto ou um recibo lido só é salvo quando você confirma.

**Cada intervalo diz de onde veio.** O manual de manutenção, a prática comum das oficinas ou você. Você sempre vê por que um lembrete venceu.

**Local em primeiro lugar.** O Motoor funciona offline, com seu diário no celular, e faz backup automático para que um celular novo continue de onde o antigo parou.

## Quem faz

O Motoor é um app independente feito por **{{ dev.name }}** na Indonésia. Sem anúncios, e seus dados nunca são vendidos.

## Fale conosco

Dúvidas, ideias e relatos de bugs vão direto para a pessoa que faz o Motoor: escreva para [{{ dev.email }}](mailto:{{ dev.email }}) e você terá resposta {{ t.ui.response_time }}. As respostas às dúvidas comuns estão na [página de suporte]({{ lp | append: '/support/' | relative_url }}).
