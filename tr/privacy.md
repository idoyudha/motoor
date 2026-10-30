---
layout: page
title: Gizlilik politikası
permalink: /tr/privacy/
ref: /privacy/
lang: tr
privacy_date: true
lede: "Motoor neleri toplar, nerede saklar, başka kimler işler ve nasıl silinir."
description: "Motoor neleri toplar, nerede saklar, başka kimler işler ve nasıl silinir."
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% comment %}
  Before publishing: read this page end to end and check every statement is true
  for your build. The switches under `privacy:` in _config.yml fill in the details.
  This is a starting point, not legal advice.
{% endcomment %}

<p class="mt-doc__meta">Bu bir çeviridir. <a href="{{ '/privacy/' | relative_url }}">İngilizce sürümden</a> farklı olması durumunda İngilizce sürüm geçerlidir.</p>

<div class="mt-note"><strong>Kısaca.</strong> Google, Apple veya e-posta ile giriş yaparsınız. Bakım defteriniz telefonunuzda tutulur ve yeni bir telefonda geri yükleyebilmeniz için otomatik olarak sunucumuza yedeklenir (konum: {{ t.privacy.data_location }}). Motoor reklam göstermez ve verilerinizi satmayız. Hesabınızı ve içindeki her şeyi istediğiniz zaman silebilirsiniz.</div>

## Biz kimiz

Motoor, bağımsız bir geliştirici olan **{{ dev.name }}** (“biz”) tarafından geliştirilip yayınlanan bir uygulamadır. Motoor’un bilgilerinizi nasıl işlediğinden biz sorumluyuz. Bize [{{ dev.email }}](mailto:{{ dev.email }}) adresinden ulaşabilirsiniz.

Bu politika; Android ve iOS’taki Motoor uygulaması, Motoor’un oluşturduğu paylaşım sayfaları ve bu web sitesi için geçerlidir.

## Neleri topluyoruz

**Hesabınız.** Araç eklemek için Google ile, iOS’ta Apple ile ya da e-postanız ve bir şifreyle giriş yaparsınız. Bu girişten adınızı, e-posta adresinizi ve bir hesap kimliğini alırız. Şifrenizi Firebase Authentication saklar, biz asla görmeyiz.

**Bakım defteriniz.** Motoor’a girdiğiniz her şey:

- araçlar: marka, model, sınıf, ad, plaka, yıl, kilometre sayacı okumaları, notlar ve fotoğraflar
- yakıt ve şarj kayıtları, bakımlar, masraflar, yerler ve notlar
- hatırlatıcılar ve planları
- eklediğiniz fişler, taramalar ve diğer dosyalar
- eklediğiniz araç belgeleri; örneğin ruhsat, sigorta ve garanti
- birimler, para birimi, dil ve tema gibi ayarlarınız

**Cihazınız.** Hatırlatıcıların ve uyarıların telefonunuza ulaşması için bir anlık bildirim belirteci ve platform (Android veya iOS).

**Satın almalar.** Google Play veya App Store’un bildirdiği şekilde, etkin bir Premium aboneliğinizin olup olmadığı.

{% if p.crash_reporting != "" %}**Çökme raporları.** Uygulama çöktüğünde teknik ayrıntılar (aşağıya bakın).
{% endif %}
{% if p.analytics != "" %}**Kullanım istatistikleri.** Hangi özelliklerin kullanıldığı (aşağıya bakın).
{% endif %}

**Bize gönderdiğiniz e-postalar.** Adresiniz ve yazdığınız her şey.

## Bakım defteriniz nerede saklanır

Bakım defteriniz, uygulamanın bağlantı olmadan da çalışması için telefonunuzda, Motoor’un özel depolama alanında saklanır.

Ayrıca Google Cloud üzerindeki sunucumuza **otomatik olarak yedeklenir** (konum: **{{ t.privacy.data_location }}**). Bu, Free ve Premium planlardaki giriş yapmış her kullanıcı için geçerlidir ve kapatmak için bir ayar yoktur: Yeni bir telefonda giriş yaptığınızda Motoor bakım defterinizi bu yedekle geri yükler. Yedek; kayıtlarınızı, eklerinizi ve fişlerinizi kapsar.

Veriler telefonunuz ile sunucumuz arasında aktarılırken şifrelenir ve Google Cloud’da depolanırken de şifreli tutulur. Bakım defterinizi uygulama üzerinden yalnızca siz okuyabilirsiniz. Saklanan verilere yalnızca siz bizden yardım istediğinizde veya bir arızayı gidermemiz gerektiğinde erişiriz.

## Fiş tarama (Premium)

Bir fişi taradığınızda Motoor, sizin yazmanıza gerek kalmaması için fişteki tutarları, tarihi ve yeri okur. Herhangi bir şey kaydedilmeden önce her alanı siz gözden geçirirsiniz. Kilometre sayacı asla fişten okunmaz.

- **Mümkünse telefonunuzda.** Telefonunuzda fiş okuyabilen yerleşik bir model varsa Motoor onu kullanır ve okuma cihaz üzerinde gerçekleşir.
- **Aksi halde sunucumuzda.** Görüntü veya PDF sunucumuza yüklenir; sunucumuz da onu **Google Cloud üzerindeki Google Gemini modeline** gönderir (konum: {{ t.privacy.scan_location }}). Google’ın ücretli hizmetini kullanıyoruz; bu hizmetin koşulları Google’ın verileri modellerini eğitmek için kullanmasına izin vermez. Çıkarılan alanlar telefonunuza geri gönderilir.

Her iki durumda da tarama, kayda ek olarak saklanır ve bakım defterinizin geri kalanı gibi yedeklenir.

## Bir aracı paylaşma ve devretme (Premium)

**Geçmişi paylaş**, aracın kayıtlarını, tarihlerini, kilometre sayacı okumalarını ve toplamlarını gösteren salt okunur bir web sayfasına giden bir bağlantı ve QR kod oluşturur. Bu sayfa hiçbir hesap bilgisi göstermez. Bağlantıya sahip olan herkes, bağlantı 24 saat sonra sona erene veya siz iptal edene kadar sayfayı açabilir.

**Sahipliği devret**, 24 saat sonra geçerliliğini yitiren tek kullanımlık bir kod oluşturur. Kodu ilk açan Premium kullanıcısı aracı geçmişi ve fişleriyle birlikte alır; siz de onun adını ve aracı ne zaman aldığını görürsünüz. Sizdeki kopya salt okunur hale gelir.

{% if p.crash_reporting != "" %}
## Çökme raporları

Motoor çökerse, sorunu düzeltebilmemiz için **{{ p.crash_reporting }}** bize bir çökme raporu gönderir. Rapor yalnızca teknik ayrıntılar içerir: cihaz modeli, işletim sistemi sürümü, uygulama sürümü, çökmenin zamanı ve o anda kodun durumu. Araçlarınızı, kayıtlarınızı veya fotoğraflarınızı içermez.
{% endif %}

{% if p.analytics != "" %}
## Kullanım istatistikleri

Motoor, uygulamanın nasıl kullanıldığını saymak için **{{ p.analytics }}** kullanır; örneğin kaç kişinin araç eklemeyi tamamladığı, ilk yakıt dolumunu kaydettiği veya Premium ekranını açıp hangi planı seçtiği. Bu istatistikler adınıza veya e-postanıza değil, rastgele bir uygulama örneği kimliğine bağlıdır ve bakım defteri kayıtlarınızı içermez.
{% endif %}

## Satın almalar

Premium satın alırsanız ödeme tamamen **Google Play** veya **Apple App Store** tarafından yürütülür. Kart veya ödeme bilgilerinizi asla görmeyiz. Mağaza bize yalnızca etkin bir satın almanızın olup olmadığını bildirir; böylece Premium açılabilir ve diğer cihazlarınızda geri yüklenebilir.

## Verilerinizi başka kimler işler

Kişisel bilgilerinizi satmayız ve reklam amacıyla paylaşmayız. Aşağıdaki sağlayıcılar verileri yalnızca Motoor’u çalıştırmak için bizim adımıza işler:

| Sağlayıcı | Ne yapar | İşlediği veriler |
|---|---|---|
| Google Cloud | Sunucumuzu, veritabanımızı ve dosya depolamamızı barındırır ({{ t.privacy.data_location }}) | Hesabınız ve bakım defteri yedeğiniz |
| Google Cloud (Gemini) | Telefonunuzda okunamayan fişleri okur | Taradığınız fiş |
| Firebase Authentication (Google) | Google, Apple veya e-posta ile giriş | Ad, e-posta, hesap kimliği, e-posta hesapları için şifre |
| Firebase Cloud Messaging (Google) | Anlık bildirimleri iletir | Cihazın bildirim belirteci |
{% if p.crash_reporting != "" %}| {{ p.crash_reporting }} (Google) | Çökme raporları | Teknik çökme ayrıntıları |
{% endif %}{% if p.analytics != "" %}| {{ p.analytics }} (Google) | Kullanım istatistikleri | Uygulama örneği kimliği ve özellik olayları |
{% endif %}| Google Play, Apple App Store | Abonelikler ve ödeme | Satın alma durumu |

Firebase hizmetleri Google tarafından işletilir ve verileri Endonezya dışında işleyebilir. Para birimi dönüştürme için döviz kurları kendi sunucumuzdan gelir; bunları almak sizinle ilgili hiçbir bilgi göndermez.

## Motoor’un istediği izinler

| İzin | Neden | Reddederseniz |
|---|---|---|
| Bildirimler | Bir bakım zamanı geldiğinde size hatırlatmak için | Hatırlatıcılar yine uygulama içinde görünür |
| Kamera | Fişlerin ve araçların fotoğrafını çekmek için | Bunun yerine mevcut fotoğrafları veya dosyaları seçebilirsiniz |
| Fotoğraflar ve dosyalar | Zaten sahip olduğunuz bir fotoğrafı veya PDF’yi eklemek için | Bunun yerine kamerayı kullanabilirsiniz |

Motoor konumunuza, kişilerinize, mikrofonunuza veya arama geçmişinize erişim istemez. Biyometrik kilidi açarsanız parmak iziniz veya yüzünüz telefonunuz tarafından doğrulanır; Motoor bunları asla almaz.

## Bilgileri nasıl kullanıyoruz

Bilgilerinizi yalnızca şu amaçlarla kullanırız:

- bakım defterinizi telefonunuzda tutmak ve geri yükleyebilmeniz için yedeklemek
- hatırlatıcılar ve uyarılar göndermek
- taradığınız fişleri okumak
- istediğiniz paylaşım sayfalarını ve devirleri oluşturmak
- Premium’u açmak ve geri yüklemek
{% if p.crash_reporting != "" or p.analytics != "" %}- hataları bulup düzeltmek ve uygulamayı geliştirmek
{% endif %}- destek taleplerinizi yanıtlamak

## Seçimleriniz ve haklarınız

Endonezya Kişisel Verilerin Korunması Kanunu (2022 tarihli ve 27 sayılı Kanun) ve yaşadığınız yerdeki benzer yasalar kapsamında kişisel verilerinize erişme, onları düzeltme, sildirme ve onayınızı geri çekme hakkına sahipsiniz. Motoor’da:

- **Erişim ve kopya:** **Ayarlar → Dışa aktarma ve yedekleme** bölümünden bakım defterinizi CSV olarak veya fişlerin eklendiği bir PDF bakım geçmişi olarak dışa aktarın.
- **Düzeltme:** Uygulamada herhangi bir aracı, kaydı veya hatırlatıcıyı, **Ayarlar → Profil** bölümünde de adınızı düzenleyin.
- **Silme:** Uygulamada tek tek kayıtları silin veya hesabınızın tamamını silin (aşağıya bakın).

Diğer her konu için [{{ dev.email }}](mailto:{{ dev.email }}) adresine e-posta gönderin.

## Hesabınızı silme

**Ayarlar → Profil → Hesabı sil** yolunu izleyin ve onaylayın. Uygulama artık sizde değilse bunu bizden e-postayla da isteyebilirsiniz; [destek sayfasına]({{ '/tr/support/#delete-your-data' | relative_url }}) bakın.

- Hesabınız **hemen kilitlenir** ve tüm paylaşım bağlantıları ile açık devirler çalışmayı durdurur.
- **{{ p.deletion_grace_days }} gün** boyunca fikrinizi değiştirebilirsiniz: Yeniden giriş yapın ve **Geri yükle**’yi seçin.
- {{ p.deletion_grace_days }} gün sonra hesabınız, bakım defteri yedeğiniz, ekleriniz, fişleriniz ve taramalarınız sunucumuzdan **kalıcı olarak silinir** ve giriş hesabınız kaldırılır. Felaket kurtarma yedeklerimizdeki kopyalar en geç {{ p.backup_expiry_days }} gün daha içinde sona erer.
- Hesabınızı silmek aboneliğinizi iptal etmez. Aboneliği, kendi satın alma kayıtlarını tutan Google Play veya App Store üzerinden iptal edin.

Uygulamayı telefonunuzdan silmek yalnızca telefondaki kopyayı kaldırır. Yedeğiniz, hesabınızı silene kadar kalır.

## Bilgileri ne kadar süre saklıyoruz

| Bilgi | Saklama süresi |
|---|---|
| Hesabınız ve bakım defteri yedeğiniz | Hesabınızı silene kadar, ardından {{ p.deletion_grace_days }} gün daha, sonra kaldırılır (yedek kopyalar {{ p.backup_expiry_days }} gün sonra sona erer) |
| Sildiğiniz tek bir kayıt, araç veya fotoğraf | Cihazlarınızdan hemen, sunucumuzdan 90 gün içinde kaldırılır |
| Paylaşım ve devir bağlantıları | 24 saat sonra sona erene veya iptal edilene kadar; ardından hesabınız silinene kadar kayıt olarak tutulur |
{% if p.crash_reporting != "" %}| Çökme raporları | En fazla 90 gün |
{% endif %}{% if p.analytics != "" %}| Kullanım istatistikleri | {{ t.privacy.analytics_retention }} |
{% endif %}| Destek e-postaları | Son mesajdan sonra 12 ay |

## Güvenlik

Telefondaki bakım defteriniz, diğer uygulamaların okuyamadığı Motoor’un özel depolama alanında tutulur ve isterseniz biyometrik kilit ekleyebilirsiniz. Motoor’un internet üzerinden gönderdiği her şey şifrelenir. Paylaşım ve devir bağlantıları tahmin edilemeyen uzun rastgele kodlar kullanır ve her kodun yalnızca bir parmak izini (özetini) saklarız. Telefonunuzdakileri korumak için telefonunuzu PIN, parmak izi veya yüz tanıma ile kilitli tutun.

## Çocuklar

Motoor, bir araca sahip olan veya bir aracın bakımıyla ilgilenen kişiler için tasarlanmıştır ve {{ p.min_age }} yaşından küçük çocuklara yönelik değildir. Çocuklardan bilerek kişisel bilgi toplamayız. Bir çocuğun bize bilgi verdiğini düşünüyorsanız bize e-posta gönderin, bu bilgileri sileriz.

## Bu politikadaki değişiklikler

Bu politikayı değiştirirsek bu sayfanın üst kısmındaki tarihi güncelleriz. Bir değişiklik topladığımız verileri veya onları kimin işlediğini etkiliyorsa, Motoor değişiklik yürürlüğe girmeden önce bunu size uygulama içinde de bildirir.

## İletişim

Gizlilikle ilgili sorularınızı [{{ dev.email }}](mailto:{{ dev.email }}) adresinden **{{ dev.name }}**’ya iletebilirsiniz. {{ t.ui.response_time }} yanıt veririz.
