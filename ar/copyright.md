---
layout: page
title: حقوق النشر
eyebrow: قانوني
permalink: /ar/copyright/
ref: /copyright/
lang: ar
updated: 2026-10-25
lede: "من يملك Motoor، والعلامات التجارية التي يذكرها، والبرمجيات مفتوحة المصدر التي بُني بها."
description: "من يملك Motoor، والعلامات التجارية التي يذكرها، والبرمجيات مفتوحة المصدر التي بُني بها."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<p class="mt-doc__meta">هذه ترجمة. وإذا اختلفت عن <a href="{{ '/copyright/' | relative_url }}">النسخة الإنجليزية</a>، فإن النسخة الإنجليزية هي المعتمدة.</p>

## إشعار حقوق النشر

© 2026 {{ dev.name }}. جميع الحقوق محفوظة.

تطبيق Motoor واسم Motoor وشعاره ومحتوى هذا الموقع مملوكة لـ {{ dev.name }}. لا يجوز لك نسخها أو تعديلها أو توزيعها دون إذن، إلا بالقدر الذي يسمح به القانون. أما محتوى سجلّك الخاص فهو ملك لك.

## العلامات التجارية

Google Play علامة تجارية لشركة Google LLC. وApp Store علامة خدمة لشركة Apple Inc.

أسماء صانعي المركبات وطرازاتها الظاهرة في Motoor مملوكة لأصحابها. وهي تُستخدم فقط لتعريف المركبات، ولا تعني أي تأييد أو ارتباط.

## البرمجيات مفتوحة المصدر

بُني Motoor باستخدام برمجيات مفتوحة المصدر. ونحن ممتنون لمن يصنعونها.

| المكوّن | الترخيص |
|---|---|
| خط Figtree | [SIL Open Font License 1.1]({{ '/assets/fonts/OFL.txt' | relative_url }}) |
| Kotlin وKotlin Coroutines | Apache License 2.0 |
| Android Jetpack: Compose وNavigation وRoom وWorkManager وBiometric | Apache License 2.0 |
| Hilt وDagger | Apache License 2.0 |
| OkHttp وRetrofit | Apache License 2.0 |
| Kotlinx Serialization | Apache License 2.0 |
| حزم Firebase SDK | Apache License 2.0 |
| Jekyll (هذا الموقع) | MIT License |

القائمة الكاملة مع نصوص التراخيص موجودة داخل التطبيق. ويُستخدم كل مكوّن بموجب ترخيصه الخاص، ويسري عليه نص ذلك الترخيص.

## الإبلاغ عن انتهاك

إذا رأيت أن شيئًا في Motoor أو في هذا الموقع ينتهك حقوق النشر أو العلامة التجارية الخاصة بك، فراسلنا على [{{ dev.email }}](mailto:{{ dev.email }}) مع وصف للعمل، ومكان ظهوره، وكيفية التواصل معك. نردّ {{ t.ui.response_time }}.
