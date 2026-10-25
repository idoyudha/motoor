---
layout: page
title: Motoor hakkında
eyebrow: Hakkında
permalink: /tr/about/
ref: /about/
lang: tr
lede: "Sahip olduğunuz her araç için sakin bir kayıt defteri."
description: "Motoor, araçlarınızın yakıt, bakım ve masraf kayıtlarını tek bir yerde tutar ve bakım zamanı gelmeden sizi uyarır."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}

Motoor; otomobilleriniz, motosikletleriniz, bisikletleriniz ve elektrikli araçlarınız için yakıt, bakım ve masraf kayıtlarını tek bir yerde tutar ve bakım zamanı gelmeden sizi uyarır.

## Motoor nasıl çalışır

- **Bir aracı yaklaşık bir dakikada kaydedin.** Markasını, sınıfını ve güç aktarma sistemini seçin; Motoor onun için bir bakım planı önersin.
- **Yakıt veya şarj, bakım ve masrafları** birkaç dokunuşla kaydedin. Motoor tüketimi ve her aracın gerçekte neye mal olduğunu hesaplar.
- **Mesafeye veya zamana göre hatırlatıcılar alın**, hangisi önce gelirse; böylece neyin geciktiğini, neyin yaklaştığını ve neyin bekleyebileceğini bilirsiniz.

## İnandıklarımız

**Kayıtlarınız asla rehin tutulmaz.** Kayıt, geçmiş ve dışa aktarma Free’de eksiksizdir. Kayıt defteriniz sizindir ve onu istediğiniz zaman yanınızda götürebilirsiniz.

**Onayınız olmadan hiçbir şey oluşturulmaz.** Motoor önerir, siz karar verirsiniz. Önerilen bir plan veya taranan bir fiş yalnızca siz onayladığınızda kaydedilir.

**Her aralık kaynağını söyler.** Bakım kitapçığı, yaygın servis uygulaması veya siz. Bir hatırlatıcının neden geldiğini her zaman görebilirsiniz.

**Önce yerel.** Motoor çevrimdışı çalışır, kayıt defteriniz telefonunuzdadır ve otomatik olarak yedeklenir; böylece yeni telefon, eskisinin kaldığı yerden devam eder.

## Kim yapıyor

Motoor, Endonezya’da **{{ dev.name }}** tarafından yapılan bağımsız bir uygulamadır. Reklam yok ve verileriniz asla satılmaz.

## İletişim

Sorular, fikirler ve hata bildirimleri doğrudan Motoor’u yapan kişiye ulaşır: [{{ dev.email }}](mailto:{{ dev.email }}) adresine yazın, {{ t.ui.response_time }} yanıt alın. Sık sorulan soruların yanıtları [destek sayfasında]({{ lp | append: '/support/' | relative_url }}).
