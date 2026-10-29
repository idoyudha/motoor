---
layout: page
title: Şartlar ve Koşullar
permalink: /tr/terms/
ref: /terms/
lang: tr
updated: 2026-10-25
lede: "Motoor’u kullanma kuralları, Premium’un neleri kapsadığı ve nelerden sorumlu olup olmadığımız."
description: "Motoor’u kullanma kuralları, Premium’un neleri kapsadığı ve nelerden sorumlu olup olmadığımız."
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}

<p class="mt-doc__meta">Bu bir çeviridir. <a href="{{ '/terms/' | relative_url }}">İngilizce sürümden</a> farklı olması durumunda İngilizce sürüm geçerlidir.</p>

<div class="mt-note"><strong>Kısaca.</strong> Motoor, araçlarınız için bir kayıt defteridir. Kayıtlarınız size aittir ve hangi planda olursanız olun onları istediğiniz zaman dışa aktarabilirsiniz. Premium, Google Play veya App Store üzerinden faturalandırılır ve dilediğiniz zaman oradan iptal edebilirsiniz. Hatırlatıcılar yol göstericidir: aracınızın resmi bakım planını her zaman kontrol edin.</div>

## Bu şartları kabul etmek

Bu şartlar, sizinle Motoor’u geliştiren ve yayımlayan **{{ dev.name }}** (“biz”) arasında bir sözleşmedir. Android ve iOS’taki Motoor uygulaması, Motoor’un oluşturduğu paylaşım sayfaları ve bu web sitesi için geçerlidir. Motoor’u kullanarak bu şartları kabul etmiş olursunuz. Kabul etmiyorsanız lütfen uygulamayı kullanmayın.

Kişisel bilgilerinizi nasıl işlediğimiz, bu şartların bir parçası olan [gizlilik politikasında]({{ lp | append: '/privacy/' | relative_url }}) açıklanır.

## Motoor’u kimler kullanabilir

Motoor’u kullanmak için en az {{ p.min_age }} yaşında olmalısınız. Yaşadığınız yerin yasalarına göre reşit değilseniz, ebeveyninizin veya vasinizin iznine ihtiyacınız vardır. Motoor’u size uygulanan yasalara uygun şekilde kullanmalısınız.

## Hesabınız

Google ile, iOS’ta ise Apple ile giriş yaparsınız. Araç kaydetmek ve kayıt defterinizi dışa aktarmak için bir hesap gerekir. Google veya Apple hesabınıza erişimi güvende tutun: bu hesapla giriş yapabilen herkes kayıt defterinizi açabilir. Başka birinin hesabınızı kullandığını düşünüyorsanız [{{ dev.email }}](mailto:{{ dev.email }}) adresinden bize bildirin.

## Free ve Premium

**Free**, tek bir aktif araç için eksiksiz bir kayıt defteri sunar: yakıt ve şarj, bakımlar, masraflar, hatırlatıcılar, geçmiş ve dışa aktarma.

**Premium**, araç sınırını kaldırır ve fiş tarama, araç geçmişini paylaşma ve araç devretme gibi özellikler ekler. Fiyatı **aylık 1,30 ABD doları** veya **yıllık 10,80 ABD doları**dır. Fiyatlar ABD doları olarak sabittir; mağaza bunları yerel para biriminizde gösterebilir ve yerel vergileri ekleyebilir.

- Premium, **Google Play** veya **App Store** tarafından faturalandırılır ve siz iptal edene kadar onların koşullarına göre otomatik olarak yenilenir.
- Dilediğiniz zaman mağazadan iptal edebilirsiniz. Premium, ödediğiniz dönemin sonuna kadar etkin kalır.
- Premium sona erdiğinde Free sınırları yeniden geçerli olur, ancak **hiçbir şey silinmez**. İlk aracınız aktif kalır, diğerleri yeniden abone olana kadar salt okunur olur.
- İadeler, satın aldığınız mağaza tarafından kendi iade politikasına göre yapılır. [Destek sayfasına]({{ lp | append: '/support/' | relative_url }}) bakın.

Fiyatı değiştirirsek, yeni fiyat aboneliğinize uygulanmadan önce mağaza sizi bilgilendirir.

## Kayıt defteriniz sizindir

Motoor’a girdiğiniz her şey (araçlar, kayıtlar, fotoğraflar, fişler ve notlar) sizin içeriğinizdir ve size aittir. Bize yalnızca içeriğinizi saklamak, yedeklemek, eşitlemek ve size ve paylaşmayı seçtiğiniz kişilere göstermek için sınırlı bir lisans verirsiniz. Onu başka hiçbir şey için kullanmayız.

Kayıt defterinizi istediğiniz zaman **Ayarlar → Dışa aktarma ve yedekleme** bölümünden CSV olarak veya fişleri ekli PDF bakım geçmişi olarak dışa aktarabilirsiniz; hem Free hem Premium’da.

İçeriğinizden siz sorumlusunuz. Kullanma hakkınız olmayan hiçbir şeyi yüklemeyin.

## Araç paylaşma ve devretme

Her iki özellik de Premium’a dahildir.

- **Geçmişi paylaş**, bir aracın geçmişine salt okunur bir bağlantı oluşturur. Bağlantının süresi 24 saat sonra dolar ve daha önce iptal edebilirsiniz. O zamana kadar bağlantıya sahip herkes onu açabilir.
- **Sahipliği devret**, 24 saat sonra süresi dolan tek kullanımlık bir kod oluşturur. Alıcının Premium’u olmalıdır. Kod kullanıldığında devir **kalıcıdır**: araç, geçmişi ve fişleri alıcıya geçer ve sizin kopyanız salt okunur olur.

Bağlantıları ve kodları kiminle paylaştığınızdan siz sorumlusunuz. Kullanılmış bir devri geri alamayız.

## Fiş tarama

Fiş tarama Premium’a dahildir. Motoor bir fişten tutarları, tarihi ve yeri okur ve sizin için doldurur. Bunlar önerilerdir: bir şey kaydedilmeden önce her alanı gözden geçirip onaylarsınız ve kaydettiklerinizden siz sorumlusunuz. Kilometre sayacı asla fişten okunmaz.

## Hatırlatıcılar yol göstericidir

Motoor, bakım aralıklarını üreticinin bakım kitapçığından, yaygın servis uygulamalarından veya sizin belirlediklerinizden önerir ve her aralık kaynağını gösterir. Hatırlatıcılar, girdiğiniz kilometre değerlerine ve tarihlere bağlıdır.

Hatırlatıcılar profesyonel tavsiye değil, yol göstericidir. Aracınızın resmi bakım planını her zaman kontrol edin ve yetkin bir ustanın önerilerine uyun. Motoor, kaçırılan, geciken veya yanlış yapılan bakımlardan ya da bunlardan doğan zararlardan sorumlu değildir.

## Kabul edilebilir kullanım

Motoor’u kullanırken:

- yasaları veya başkalarının haklarını ihlal etmeyin
- yasa dışı, zararlı veya paylaşma hakkınız olmayan içerik yüklemeyin
- size ait olmayan hesaplara, verilere veya sistemlere erişmeye çalışmayın
- yasaların izin verdiği durumlar dışında uygulamayı veya sunucularımızı kopyalamayın, tersine mühendislik yapmayın, yeniden satmayın veya işleyişine müdahale etmeyin
- Motoor’u spam veya zararlı kod göndermek için kullanmayın

Bu kuralları ihlal eden bir hesabı askıya alabilir veya kapatabiliriz. Mümkün olduğunda önce size haber verir ve nedenini açıklarız.

## Hizmetin sürekliliği

Motoor çevrimdışı çalışır ve kayıt defteriniz telefonunuzda kalır. Giriş, yedekleme, fiş tarama, paylaşma ve devretme için bağlantı ve sunucularımız gerekir.

Motoor’u çalışır durumda tutmak için çaba gösteririz, ancak her zaman erişilebilir veya hatasız olacağını garanti edemeyiz. Özellikleri değiştirebilir, ekleyebilir veya kaldırabiliriz. Güvendiğiniz bir özelliği ya da Motoor’u tamamen kaldırırsak, kayıt defterinizi dışa aktarmaya vaktiniz olması için mümkün olduğunda uygulama içinde önceden bildiririz.

## Hesabınızı silmek

Motoor’u kullanmayı istediğiniz zaman bırakabilirsiniz. Hesabınızı silmek için **Ayarlar → Profil → Hesabı sil** bölümünü açın ve onaylayın.

Hesabınız hemen kilitlenir. {{ p.deletion_grace_days }} gün boyunca yeniden giriş yaparak hesabınızı geri yükleyebilirsiniz; ardından hesabınız ve kayıt defteriniz kalıcı olarak silinir. Hesabı silmek aboneliğinizi iptal etmez: aboneliği mağazadan iptal edin. Uygulama artık sizde değilse [destek sayfasına]({{ lp | append: '/support/#delete-your-data' | relative_url }}) bakın. Neyin ne zaman silindiği [gizlilik politikasında]({{ lp | append: '/privacy/' | relative_url }}) açıklanır.

## Sorumluluk reddi

Motoor “olduğu gibi” ve “mevcut olduğu şekliyle” sunulur. Yasaların izin verdiği ölçüde, bu şartlarda yazılanların ötesinde, uygulamanın her ihtiyacı karşılayacağı veya tüketim, masraf ya da döviz kuru gibi her hesaplamanın kesin olacağı dahil hiçbir taahhütte bulunmayız. Önemli rakamları kendiniz kontrol edin.

## Sorumluluğun sınırlandırılması

Yasaların izin verdiği ölçüde, Motoor’u kullanmanızdan doğan kâr kaybı, veri kaybı veya araç hasarı gibi dolaylı ya da sonuç olarak ortaya çıkan zararlardan sorumlu değiliz. Size karşı toplam sorumluluğumuz, talepten önceki 12 ayda Premium için ödediğiniz tutarla sınırlıdır. Bu şartlardaki hiçbir hüküm, yasa gereği sınırlanamayan sorumluluğu sınırlamaz veya tüketici olarak sahip olduğunuz hakları ortadan kaldırmaz.

## Uygulanacak hukuk

Bu şartlar **Endonezya Cumhuriyeti** yasalarına tabidir. Bir anlaşmazlık çıkarsa lütfen önce bizimle iletişime geçin; çözmeye çalışırız. Bu, yaşadığınız yerdeki zorunlu tüketici koruma haklarınızı etkilemez.

## Bu şartlardaki değişiklikler

Bu şartları değiştirirsek, bu sayfanın üstündeki tarihi güncelleriz. Bir değişiklik Motoor’u kullanma şeklinizi etkiliyorsa, yürürlüğe girmeden önce uygulama içinde de bildiririz. Sonrasında Motoor’u kullanmaya devam ederseniz yeni şartları kabul etmiş olursunuz.

## İletişim

Bu şartlarla ilgili sorularınızı [{{ dev.email }}](mailto:{{ dev.email }}) adresinden **{{ dev.name }}**’ya iletebilirsiniz. {{ t.ui.response_time }} yanıt veririz.
