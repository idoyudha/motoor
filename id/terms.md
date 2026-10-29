---
layout: page
title: Syarat dan Ketentuan
permalink: /id/terms/
ref: /terms/
lang: id
updated: 2026-10-25
lede: "Aturan penggunaan Motoor, apa saja yang termasuk dalam Premium, serta apa yang menjadi dan tidak menjadi tanggung jawab kami."
description: "Aturan penggunaan Motoor, apa saja yang termasuk dalam Premium, serta apa yang menjadi dan tidak menjadi tanggung jawab kami."
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}

<p class="mt-doc__meta">Ini adalah terjemahan. Jika ada perbedaan dengan <a href="{{ '/terms/' | relative_url }}">versi bahasa Inggris</a>, yang berlaku adalah versi bahasa Inggris.</p>

<div class="mt-note"><strong>Versi singkatnya.</strong> Motoor adalah buku catatan untuk kendaraan Anda. Catatan Anda adalah milik Anda dan dapat diekspor kapan saja, di paket apa pun. Premium ditagih oleh Google Play atau App Store, dan Anda dapat membatalkannya di sana kapan pun. Pengingat hanyalah panduan: selalu periksa jadwal servis resmi kendaraan Anda.</div>

## Menyetujui syarat ini

Syarat ini adalah perjanjian antara Anda dan **{{ dev.name }}** (“kami”), yang membuat dan menerbitkan Motoor. Syarat ini berlaku untuk aplikasi Motoor di Android dan iOS, untuk halaman berbagi yang dibuat Motoor, dan untuk situs web ini. Dengan menggunakan Motoor, Anda menyetujuinya. Jika Anda tidak setuju, mohon jangan gunakan aplikasi ini.

Cara kami menangani informasi pribadi Anda dijelaskan dalam [kebijakan privasi]({{ lp | append: '/privacy/' | relative_url }}), yang merupakan bagian dari syarat ini.

## Siapa yang boleh menggunakan Motoor

Anda harus berusia minimal {{ p.min_age }} tahun untuk menggunakan Motoor. Jika Anda belum dewasa menurut hukum di tempat tinggal Anda, Anda memerlukan izin orang tua atau wali. Anda wajib menggunakan Motoor sesuai hukum yang berlaku bagi Anda.

## Akun Anda

Anda masuk dengan Google, atau dengan Apple di iOS. Akun diperlukan untuk mendaftarkan kendaraan dan mengekspor buku catatan Anda. Jaga keamanan akun Google atau Apple Anda: siapa pun yang dapat masuk dengannya dapat membuka buku catatan Anda. Beri tahu kami di [{{ dev.email }}](mailto:{{ dev.email }}) jika Anda menduga orang lain telah menggunakan akun Anda.

## Free dan Premium

**Free** memberi Anda buku catatan lengkap untuk satu kendaraan aktif: bahan bakar dan pengisian daya, servis, biaya, pengingat, riwayat, dan ekspor.

**Premium** menghapus batas jumlah kendaraan dan menambahkan fitur seperti pindai struk, berbagi riwayat kendaraan, dan memindahkan kendaraan. Harganya **US$1,30 per bulan** atau **US$10,80 per tahun**. Harga ditetapkan dalam dolar AS; toko dapat menampilkannya dalam mata uang lokal dan menambahkan pajak setempat.

- Premium ditagih oleh **Google Play** atau **App Store** dan diperpanjang otomatis sesuai ketentuan mereka, sampai Anda membatalkannya.
- Anda dapat membatalkan kapan saja di toko. Premium tetap aktif sampai akhir periode yang sudah Anda bayar.
- Saat Premium berakhir, batas Free berlaku kembali, tetapi **tidak ada yang dihapus**. Kendaraan pertama Anda tetap aktif dan kendaraan lainnya menjadi hanya-baca sampai Anda berlangganan lagi.
- Pengembalian dana ditangani oleh toko tempat Anda membeli, sesuai kebijakan pengembalian dananya. Lihat [halaman bantuan]({{ lp | append: '/support/' | relative_url }}).

Jika kami mengubah harga, toko akan memberi tahu Anda sebelum harga baru berlaku untuk langganan Anda.

## Buku catatan Anda adalah milik Anda

Semua yang Anda masukkan ke Motoor (kendaraan, catatan, foto, struk, dan catatan lainnya) adalah konten Anda, dan Anda pemiliknya. Anda memberi kami lisensi terbatas untuk menyimpan, mencadangkan, dan menyinkronkan konten Anda, serta menampilkannya kepada Anda dan kepada orang yang Anda pilih untuk berbagi. Kami tidak menggunakannya untuk hal lain.

Anda dapat mengekspor buku catatan sebagai CSV, atau sebagai riwayat servis PDF dengan struk terlampir, kapan saja dari **Pengaturan → Ekspor dan cadangan**, di paket Free maupun Premium.

Anda bertanggung jawab atas konten Anda. Jangan mengunggah apa pun yang tidak berhak Anda gunakan.

## Berbagi dan memindahkan kendaraan

Kedua fitur ini termasuk dalam Premium.

- **Bagikan riwayat** membuat tautan hanya-baca ke riwayat kendaraan. Tautan kedaluwarsa setelah 24 jam, dan Anda dapat mencabutnya lebih awal. Siapa pun yang memiliki tautan dapat membukanya sampai saat itu.
- **Pindahkan kepemilikan** membuat kode sekali pakai yang kedaluwarsa setelah 24 jam. Penerima harus memiliki Premium. Setelah kode diklaim, pemindahan bersifat **permanen**: kendaraan, riwayat, dan struknya berpindah ke penerima, dan salinan Anda menjadi hanya-baca.

Anda bertanggung jawab atas siapa yang menerima tautan dan kode dari Anda. Kami tidak dapat membatalkan pemindahan yang sudah diklaim.

## Pindai struk

Pindai struk termasuk dalam Premium. Motoor membaca total, tanggal, dan tempat dari struk lalu mengisinya untuk Anda. Ini hanyalah saran: Anda memeriksa dan mengonfirmasi setiap kolom sebelum apa pun disimpan, dan Anda bertanggung jawab atas apa yang Anda simpan. Odometer tidak pernah dibaca dari struk.

## Pengingat adalah panduan

Motoor mengusulkan interval servis dari buku servis pabrikan, dari praktik umum bengkel, atau dari yang Anda atur sendiri, dan setiap interval menunjukkan sumbernya. Pengingat bergantung pada angka odometer dan tanggal yang Anda masukkan.

Pengingat adalah panduan, bukan nasihat profesional. Selalu periksa jadwal servis resmi kendaraan Anda dan ikuti saran mekanik yang kompeten. Motoor tidak bertanggung jawab atas perawatan yang terlewat, terlambat, atau keliru, maupun atas kerusakan yang timbul karenanya.

## Penggunaan yang diperbolehkan

Saat menggunakan Motoor, jangan:

- melanggar hukum atau hak orang lain
- mengunggah konten yang melanggar hukum, berbahaya, atau tidak berhak Anda bagikan
- mencoba masuk ke akun, data, atau sistem yang bukan milik Anda
- menyalin, merekayasa balik, menjual kembali, atau mengganggu aplikasi atau server kami, kecuali jika diizinkan oleh hukum
- menggunakan Motoor untuk mengirim spam atau kode berbahaya

Kami dapat menangguhkan atau menutup akun yang melanggar aturan ini. Jika memungkinkan, kami akan memberi tahu Anda terlebih dahulu dan menjelaskan alasannya.

## Ketersediaan

Motoor berfungsi tanpa koneksi, dan buku catatan Anda tetap ada di ponsel. Masuk, pencadangan, pindai struk, berbagi, dan pemindahan memerlukan koneksi dan server kami.

Kami berusaha menjaga Motoor tetap berjalan, tetapi tidak dapat menjamin aplikasi ini selalu tersedia atau bebas dari gangguan. Kami dapat mengubah, menambah, atau menghentikan fitur. Jika kami menghentikan fitur yang Anda andalkan, atau menghentikan Motoor sepenuhnya, kami akan memberi pemberitahuan di aplikasi jika memungkinkan, agar Anda sempat mengekspor buku catatan.

## Menghapus akun Anda

Anda dapat berhenti menggunakan Motoor kapan saja. Untuk menghapus akun, buka **Pengaturan → Profil → Hapus akun** dan konfirmasi.

Akun Anda langsung dikunci. Selama {{ p.deletion_grace_days }} hari Anda dapat memulihkannya dengan masuk kembali; setelah itu, akun dan buku catatan Anda dihapus secara permanen. Menghapus akun tidak membatalkan langganan: batalkan di toko. Jika Anda sudah tidak memiliki aplikasinya, lihat [halaman bantuan]({{ lp | append: '/support/#delete-your-data' | relative_url }}). [Kebijakan privasi]({{ lp | append: '/privacy/' | relative_url }}) menjelaskan apa yang dihapus dan kapan.

## Penafian

Motoor disediakan “sebagaimana adanya” dan “sebagaimana tersedia”. Sejauh diizinkan oleh hukum, kami tidak memberikan janji di luar yang tercantum dalam syarat ini, termasuk bahwa aplikasi akan memenuhi semua kebutuhan atau bahwa setiap perhitungan, seperti konsumsi, biaya, atau kurs, selalu tepat. Periksa sendiri angka-angka yang penting.

## Batasan tanggung jawab

Sejauh diizinkan oleh hukum, kami tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial, seperti hilangnya keuntungan, hilangnya data, atau kerusakan kendaraan, yang timbul dari penggunaan Motoor. Total tanggung jawab kami kepada Anda terbatas pada jumlah yang Anda bayarkan untuk Premium dalam 12 bulan sebelum klaim. Tidak ada bagian dari syarat ini yang membatasi tanggung jawab yang tidak dapat dibatasi oleh hukum, atau menghilangkan hak Anda sebagai konsumen.

## Hukum yang berlaku

Syarat ini tunduk pada hukum **Republik Indonesia**. Jika terjadi perselisihan, mohon hubungi kami terlebih dahulu dan kami akan berusaha menyelesaikannya. Hal ini tidak memengaruhi hak perlindungan konsumen yang wajib berlaku di tempat tinggal Anda.

## Perubahan pada syarat ini

Jika kami mengubah syarat ini, kami akan memperbarui tanggal di bagian atas halaman ini. Jika suatu perubahan berpengaruh pada cara Anda menggunakan Motoor, kami juga akan memberi tahu Anda di dalam aplikasi sebelum perubahan berlaku. Jika Anda tetap menggunakan Motoor setelah itu, Anda menerima syarat yang baru.

## Kontak

Pertanyaan tentang syarat ini dapat dikirim ke **{{ dev.name }}** di [{{ dev.email }}](mailto:{{ dev.email }}). Kami membalas {{ t.ui.response_time }}.
