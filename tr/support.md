---
layout: page
title: Destek
eyebrow: Yardım
permalink: /tr/support/
ref: /support/
lang: tr
lede: "Sık sorulan soruların yanıtları ve Motoor’u yapan kişiye doğrudan ulaşma imkânı."
description: "Sık sorulan soruların yanıtları ve Motoor’u yapan kişiye doğrudan ulaşma imkânı."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<div class="mt-contact">
  <p class="mt-eyebrow">İletişim</p>
  <p style="margin:0"><a href="mailto:{{ dev.email }}">{{ dev.email }}</a> adresine e-posta gönderin, {{ t.ui.response_time }} yanıt alırsınız. Telefon modelinizi, Android mi iOS mu kullandığınızı ve <strong>Ayarlar → Hakkında</strong> bölümündeki Motoor sürümünü belirtmeniz işimizi kolaylaştırır.</p>
  <a class="mt-btn mt-btn--filled mt-btn--small" href="mailto:{{ dev.email }}?subject=Motoor%20support">{% include icon.html name="mail" %}Destek ekibine e-posta gönder</a>
</div>

## Sık sorulan sorular

<details class="mt-faq">
<summary>Hatırlatıcılar telefonumda görünmüyor</summary>
<div>
<p>Telefonunuzun ayarlarında Motoor için bildirimlerin açık olduğunu kontrol edin. Android’de bazı telefonlar pil tasarrufu için arka planda çalışan uygulamaları da durdurur: <strong>Ayarlar → Uygulamalar → Motoor → Pil</strong> yolunu izleyin ve <strong>Kısıtlamasız</strong>’ı seçin. Bildirimler kapalı olsa bile hatırlatıcılar uygulama içinde <strong>Hatırlatıcılar</strong> sekmesinde her zaman görünür.</p>
</div>
</details>

<details class="mt-faq">
<summary>Motoor bir bakımın zamanının geldiğine nasıl karar veriyor?</summary>
<div>
<p>Bir araç eklediğinizde Motoor, aracın markasına, sınıfına ve güç aktarma sistemine göre bir bakım planı önerir; her kalem mesafeye veya tarihe göre, hangisi önce gelirse, zamanı gelmiş sayılır. Her kalem, aralığının nereden geldiğini gösterir. Her planda ihtiyacınız olmayan kalemlerin işaretini kaldırabilirsiniz. Premium ile kalemleri yeniden adlandırabilir, aralıklarını değiştirebilir ve kendi kalemlerinizi ekleyebilirsiniz. Mesafeye dayalı hatırlatıcıların doğru kalması için yakıt veya bakım kaydederek kilometre sayacını güncel tutun.</p>
</div>
</details>

<details class="mt-faq">
<summary>Premium satın aldım ama açılmadı</summary>
<div>
<p>Satın alırken kullandığınız Google veya Apple hesabıyla giriş yapmışken <strong>Ayarlar → Premium → Satın alımı geri yükle</strong> yolunu izleyin. Bu işe yaramazsa Google Play veya App Store makbuzunuzdaki sipariş numarasıyla bize e-posta gönderin.</p>
</div>
</details>

<details class="mt-faq">
<summary>Premium’u nasıl iptal ederim?</summary>
<div>
<p>Abonelikler Motoor tarafından değil, mağaza tarafından yönetilir.</p>
<ul>
<li><strong>Android:</strong> Play Store’u açın, profil resminize dokunun, ardından <strong>Ödemeler ve abonelikler → Abonelikler → Motoor → Aboneliği iptal et</strong>.</li>
<li><strong>iOS:</strong> <strong>Ayarlar</strong>’ı açın, adınıza dokunun, ardından <strong>Abonelikler → Motoor → Aboneliği İptal Et</strong>.</li>
</ul>
<p>Fatura dönemi sona erdiğinde Free sınırları yeniden geçerli olur, ancak hiçbir şey silinmez. İlk aracınız etkin kalır (farklı birini seçebilirsiniz), diğerleri ise yeniden abone olana kadar salt okunur hale gelir. Tüm kayıtlar ve ekler hem telefonunuzda hem de yedeğinizde saklanır.</p>
</div>
</details>

<details class="mt-faq">
<summary>Para iadesi alabilir miyim?</summary>
<div>
<p>Para iadeleri, satın aldığınız mağaza tarafından yürütülür. Android’de <a href="https://support.google.com/googleplay/answer/2479637">Google Play’in para iadesi sayfasından</a> talepte bulunun. iOS’ta <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a> adresini kullanın.</p>
</div>
</details>

<details class="mt-faq">
<summary>Bakım defterim yedekleniyor mu?</summary>
<div>
<p>Evet, hem Free hem Premium’da otomatik olarak. Araçlarınız, kayıtlarınız, hatırlatıcılarınız, ekleriniz ve fişleriniz çevrimiçi olduğunuz her an sunucumuza yedeklenir. Yeni bir telefonda aynı Google veya Apple hesabıyla giriş yapın, bakım defteriniz geri gelsin. Ayrıntılar için <a href="{{ '/tr/privacy/' | relative_url }}">gizlilik politikasını</a> okuyun.</p>
</div>
</details>

<details class="mt-faq">
<summary>Motoor çevrimdışı çalışır mı?</summary>
<div>
<p>Evet. Bakım defteriniz telefonunuzda saklandığı için bağlantı olmadan yakıt, bakım ve masraf kaydedebilir, geçmişinizi görebilir ve hatırlatıcı alabilirsiniz. Değişiklikler yeniden çevrimiçi olduğunuzda otomatik olarak yedeklenir. Giriş yapmak, fiş taramak, bir aracı paylaşmak ve devretmek için bağlantı gerekir.</p>
</div>
</details>

<details class="mt-faq">
<summary>Bir fikrim var veya bir hata buldum</summary>
<div>
<p>Lütfen <a href="mailto:{{ dev.email }}">{{ dev.email }}</a> adresine e-posta gönderin. Hatalar için ne yaptığınızı, ne beklediğinizi ve bunun yerine ne olduğunu yazın. Bir ekran görüntüsü çok yardımcı olur.</p>
</div>
</details>

## Verilerinizi silin {#delete-your-data}

Hesabınızı silmek, bakım defterinizi telefonunuzdan ve {{ site.privacy.deletion_grace_days }} gün sonra sunucumuzdan kalıcı olarak kaldırır. Bunu yapmanın iki yolu vardır.

**Uygulamada:** **Ayarlar → Profil → Hesabı sil** yolunu izleyin ve onaylayın. Hesabınız hemen kilitlenir ve tüm paylaşım bağlantıları çalışmayı durdurur.

**Uygulama olmadan:** Giriş yaptığınız e-posta adresinden, konu satırına “Delete my account” (Hesabımı sil) yazarak [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20account) adresine e-posta gönderin. {{ t.ui.response_time }} e-postayla onaylar ve silme işlemini planlarız; işlem bundan sonra aynı şekilde yürür.

Bundan sonra ne olur:

1. **{{ site.privacy.deletion_grace_days }} gün boyunca fikrinizi değiştirebilirsiniz.** Motoor’a giriş yapın ve **Geri yükle**’yi seçin. Bakım defteriniz olduğu gibi geri gelir.
2. **{{ site.privacy.deletion_grace_days }} gün sonra** hesabınız, bakım defteri yedeğiniz, ekleriniz, fişleriniz ve taramalarınız kalıcı olarak silinir ve giriş hesabınız kaldırılır. Felaket kurtarma yedeklerimizdeki kopyalar en geç {{ site.privacy.backup_expiry_days }} gün daha içinde sona erer. Bu işlem geri alınamaz.
3. **Aboneliğiniz otomatik olarak iptal edilmez.** Önce Google Play veya App Store üzerinden iptal edin (yukarıya bakın).

Motoor’u kaldırmak yalnızca telefonunuzdaki kopyayı siler. Yedeğiniz, hesabınızı silene kadar kalır.

Bize e-posta gönderdiyseniz ve bu yazışmaların silinmesini istiyorsanız, konu satırına “Delete my emails” (E-postalarımı sil) yazarak [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20emails) adresine yazın. Bunları 30 gün içinde siler ve e-postayla onaylarız.

Ayrıntılar için [gizlilik politikasını]({{ '/tr/privacy/' | relative_url }}) okuyun.
