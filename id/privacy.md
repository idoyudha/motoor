---
layout: page
title: Kebijakan privasi
permalink: /id/privacy/
ref: /privacy/
lang: id
privacy_date: true
lede: "Apa yang dikumpulkan Motoor, di mana data disimpan, siapa saja yang menanganinya, dan cara menghapusnya."
description: "Apa yang dikumpulkan Motoor, di mana data disimpan, siapa saja yang menanganinya, dan cara menghapusnya."
---
{% assign p = site.privacy %}
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% comment %}
  Before publishing: read this page end to end and check every statement is true
  for your build. The switches under `privacy:` in _config.yml fill in the details.
  This is a starting point, not legal advice.
{% endcomment %}

<p class="mt-doc__meta">Ini adalah terjemahan. Jika ada perbedaan dengan <a href="{{ '/privacy/' | relative_url }}">versi bahasa Inggris</a>, yang berlaku adalah versi bahasa Inggris.</p>

<div class="mt-note"><strong>Versi singkatnya.</strong> Anda masuk dengan Google, Apple, atau email. Buku catatan Anda disimpan di ponsel dan dicadangkan secara otomatis ke server kami di {{ t.privacy.data_location }}, sehingga Anda bisa memulihkannya di ponsel baru. Motoor tidak menampilkan iklan dan kami tidak menjual data Anda. Anda dapat menghapus akun beserta seluruh isinya kapan saja.</div>

## Siapa kami

Motoor adalah aplikasi yang dibuat dan diterbitkan oleh **{{ dev.name }}**, seorang developer independen (“kami”). Kami bertanggung jawab atas cara Motoor menangani informasi Anda. Anda dapat menghubungi kami di [{{ dev.email }}](mailto:{{ dev.email }}).

Kebijakan ini berlaku untuk aplikasi Motoor di Android dan iOS, untuk halaman berbagi yang dibuat Motoor, dan untuk situs web ini.

## Apa yang kami kumpulkan

**Akun Anda.** Untuk menambahkan kendaraan, Anda masuk dengan Google, dengan Apple di iOS, atau dengan email dan kata sandi. Dari proses masuk tersebut kami menerima nama, alamat email, dan ID akun Anda. Firebase Authentication menyimpan kata sandi Anda, dan kami tidak pernah melihatnya.

**Buku catatan Anda.** Semua yang Anda masukkan ke Motoor:

- kendaraan: merek, model, jenis, nama, nomor registrasi, tahun, angka odometer, catatan, dan foto
- catatan bahan bakar dan pengisian daya, servis, biaya, tempat, dan catatan
- pengingat beserta jadwalnya
- struk, hasil pindaian, dan file lain yang Anda lampirkan
- dokumen kendaraan yang Anda tambahkan, seperti STNK, asuransi, dan garansi
- pengaturan Anda, seperti satuan, mata uang, bahasa, dan tema

**Perangkat Anda.** Token notifikasi push, agar pengingat dan peringatan sampai ke ponsel Anda, serta platformnya (Android atau iOS).

**Pembelian.** Apakah Anda memiliki langganan Premium yang aktif, sebagaimana dilaporkan oleh Google Play atau App Store.

{% if p.crash_reporting != "" %}**Laporan crash.** Detail teknis saat aplikasi mengalami crash (lihat di bawah).
{% endif %}
{% if p.analytics != "" %}**Statistik penggunaan.** Fitur mana yang digunakan (lihat di bawah).
{% endif %}

**Email yang Anda kirim kepada kami.** Alamat Anda dan apa pun yang Anda tulis.

## Di mana buku catatan Anda disimpan

Buku catatan Anda disimpan di ponsel, di penyimpanan privat Motoor, sehingga aplikasi tetap berfungsi tanpa koneksi.

Buku catatan tersebut juga **dicadangkan secara otomatis** ke server kami di Google Cloud di **{{ t.privacy.data_location }}**. Hal ini berlaku untuk setiap pengguna yang sudah masuk, baik di paket Free maupun Premium, dan tidak ada tombol untuk mematikannya: cadangan inilah yang digunakan Motoor untuk memulihkan buku catatan Anda saat Anda masuk di ponsel baru. Cadangan ini mencakup catatan, lampiran, dan struk Anda.

Data dienkripsi saat dikirim antara ponsel Anda dan server kami, serta dienkripsi saat disimpan di Google Cloud. Hanya Anda yang dapat membaca buku catatan Anda melalui aplikasi. Kami mengakses data yang tersimpan hanya ketika Anda meminta bantuan kami, atau ketika kami perlu memperbaiki kesalahan.

## Pemindaian struk (Premium)

Saat Anda memindai struk, Motoor membaca total, tanggal, dan tempat dari struk tersebut agar Anda tidak perlu mengetiknya. Anda memeriksa setiap kolom sebelum apa pun disimpan. Odometer tidak pernah dibaca dari struk.

- **Di ponsel Anda, jika memungkinkan.** Jika ponsel Anda memiliki model bawaan yang dapat membaca struk, Motoor menggunakannya dan pembacaan terjadi di perangkat.
- **Jika tidak, di server kami.** Gambar atau PDF diunggah ke server kami, yang mengirimkannya ke **model Gemini milik Google di Google Cloud**, di {{ t.privacy.scan_location }}. Kami menggunakan layanan berbayar Google, yang ketentuannya tidak mengizinkan Google menggunakan data tersebut untuk melatih modelnya. Kolom yang berhasil dibaca dikirim kembali ke ponsel Anda.

Dengan cara mana pun, hasil pindaian disimpan bersama catatan sebagai lampiran, dan dicadangkan seperti bagian lain dari buku catatan Anda.

## Berbagi dan memindahkan kendaraan (Premium)

**Bagikan riwayat** membuat tautan dan kode QR ke halaman web hanya-baca yang berisi catatan, tanggal, angka odometer, dan total kendaraan tersebut. Halaman ini tidak menampilkan detail akun. Siapa pun yang memiliki tautan dapat membukanya sampai tautan kedaluwarsa setelah 24 jam, atau sampai Anda mencabutnya.

**Pindahkan kepemilikan** membuat kode sekali pakai yang kedaluwarsa setelah 24 jam. Pengguna Premium pertama yang membukanya akan menerima kendaraan beserta riwayat dan struknya, dan Anda dapat melihat nama mereka serta kapan mereka mengklaimnya. Salinan Anda menjadi hanya-baca.

{% if p.crash_reporting != "" %}
## Laporan crash

Jika Motoor mengalami crash, **{{ p.crash_reporting }}** mengirimkan laporan crash kepada kami agar kami dapat memperbaiki masalahnya. Laporan hanya berisi detail teknis: model perangkat, versi sistem operasi, versi aplikasi, waktu crash, dan kondisi kode saat crash terjadi. Laporan ini tidak berisi kendaraan, catatan, atau foto Anda.
{% endif %}

{% if p.analytics != "" %}
## Statistik penggunaan

Motoor menggunakan **{{ p.analytics }}** untuk menghitung bagaimana aplikasi digunakan, misalnya berapa banyak orang yang selesai menambahkan kendaraan, mencatat pengisian bahan bakar pertama mereka, atau membuka layar Premium dan paket mana yang mereka pilih. Statistik ini terkait dengan ID instance aplikasi yang acak, bukan dengan nama atau email Anda, dan tidak berisi catatan di buku catatan Anda.
{% endif %}

## Pembelian

Jika Anda membeli Premium, pembayaran sepenuhnya ditangani oleh **Google Play** atau **Apple App Store**. Kami tidak pernah melihat detail kartu atau pembayaran Anda. Toko hanya memberi tahu kami apakah Anda memiliki pembelian yang aktif, sehingga Premium dapat dibuka dan dipulihkan di perangkat Anda yang lain.

## Siapa lagi yang menangani data Anda

Kami tidak menjual informasi pribadi Anda dan tidak membagikannya untuk keperluan iklan. Penyedia berikut memproses data atas nama kami, semata-mata untuk menjalankan Motoor:

| Penyedia | Fungsinya | Data yang ditangani |
|---|---|---|
| Google Cloud | Menjadi host server, database, dan penyimpanan file kami di {{ t.privacy.data_location }} | Akun dan cadangan buku catatan Anda |
| Google Cloud (Gemini) | Membaca struk yang tidak dapat dibaca di ponsel Anda | Struk yang Anda pindai |
| Firebase Authentication (Google) | Masuk dengan Google, Apple, atau email | Nama, email, ID akun, kata sandi untuk akun email |
| Firebase Cloud Messaging (Google) | Mengirimkan notifikasi push | Token push perangkat |
{% if p.crash_reporting != "" %}| {{ p.crash_reporting }} (Google) | Laporan crash | Detail teknis crash |
{% endif %}{% if p.analytics != "" %}| {{ p.analytics }} (Google) | Statistik penggunaan | ID instance aplikasi dan peristiwa fitur |
{% endif %}| Google Play, Apple App Store | Langganan dan pembayaran | Status pembelian |

Layanan Firebase dijalankan oleh Google dan dapat memproses data di luar Indonesia. Kurs untuk konversi mata uang berasal dari server kami sendiri; pengambilan kurs tersebut tidak mengirimkan informasi apa pun tentang Anda.

## Izin yang diminta Motoor

| Izin | Alasan | Jika Anda menolak |
|---|---|---|
| Notifikasi | Untuk mengingatkan Anda saat servis jatuh tempo | Pengingat tetap tampil di dalam aplikasi |
| Kamera | Untuk memotret struk dan kendaraan | Anda dapat memilih foto atau file yang sudah ada |
| Foto dan file | Untuk melampirkan foto atau PDF yang sudah Anda miliki | Anda dapat menggunakan kamera sebagai gantinya |

Motoor tidak meminta akses ke lokasi, kontak, mikrofon, atau log panggilan Anda. Jika Anda mengaktifkan kunci biometrik, sidik jari atau wajah Anda diperiksa oleh ponsel Anda; Motoor tidak pernah menerimanya.

## Cara kami menggunakan informasi

Kami menggunakan informasi Anda hanya untuk:

- menyimpan buku catatan di ponsel Anda dan mencadangkannya, agar Anda dapat memulihkannya
- mengirimkan pengingat dan peringatan
- membaca struk yang Anda pindai
- membuat halaman berbagi dan pemindahan yang Anda minta
- membuka dan memulihkan Premium
{% if p.crash_reporting != "" or p.analytics != "" %}- menemukan dan memperbaiki bug serta meningkatkan aplikasi
{% endif %}- menjawab permintaan bantuan Anda

## Pilihan dan hak Anda

Berdasarkan Undang-Undang Pelindungan Data Pribadi Indonesia (UU No. 27 Tahun 2022) dan undang-undang serupa di tempat Anda tinggal, Anda berhak mengakses data pribadi Anda, memperbaikinya, meminta penghapusannya, dan menarik persetujuan. Di Motoor:

- **Akses dan salin:** ekspor buku catatan Anda sebagai CSV, atau sebagai riwayat servis PDF dengan struk terlampir, dari **Pengaturan → Ekspor dan cadangan**.
- **Perbaiki:** edit kendaraan, catatan, atau pengingat mana pun di aplikasi, dan nama Anda di **Pengaturan → Profil**.
- **Hapus:** hapus catatan satu per satu di aplikasi, atau hapus seluruh akun Anda (lihat di bawah).

Untuk hal lainnya, kirim email ke [{{ dev.email }}](mailto:{{ dev.email }}).

## Menghapus akun Anda

Buka **Pengaturan → Profil → Hapus akun** dan konfirmasi. Jika Anda sudah tidak memiliki aplikasinya, Anda dapat meminta kepada kami melalui email; lihat [halaman bantuan]({{ '/id/support/#delete-your-data' | relative_url }}).

- Akun Anda **langsung dikunci**, dan semua tautan berbagi serta pemindahan yang masih terbuka berhenti berfungsi.
- Selama **{{ p.deletion_grace_days }} hari** Anda dapat berubah pikiran: masuk kembali dan pilih **Pulihkan**.
- Setelah {{ p.deletion_grace_days }} hari, akun, cadangan buku catatan, lampiran, struk, dan hasil pindaian Anda **dihapus secara permanen** dari server kami, dan akun masuk Anda dihapus. Salinan di cadangan pemulihan bencana kami kedaluwarsa dalam {{ p.backup_expiry_days }} hari berikutnya.
- Langganan Anda tidak dibatalkan dengan menghapus akun. Batalkan langganan di Google Play atau App Store, yang menyimpan catatan pembelian mereka sendiri.

Menghapus aplikasi dari ponsel hanya menghapus salinan di ponsel tersebut. Cadangan Anda tetap ada sampai Anda menghapus akun.

## Berapa lama kami menyimpan informasi

| Informasi | Disimpan |
|---|---|
| Akun dan cadangan buku catatan Anda | Sampai Anda menghapus akun, lalu {{ p.deletion_grace_days }} hari, kemudian dihapus (salinan cadangan kedaluwarsa {{ p.backup_expiry_days }} hari setelahnya) |
| Satu catatan, kendaraan, atau foto yang Anda hapus | Langsung dihapus dari perangkat Anda dan dari server kami dalam 90 hari |
| Tautan berbagi dan pemindahan | Sampai kedaluwarsa setelah 24 jam atau dicabut, lalu disimpan sebagai catatan sampai akun Anda dihapus |
{% if p.crash_reporting != "" %}| Laporan crash | Hingga 90 hari |
{% endif %}{% if p.analytics != "" %}| Statistik penggunaan | {{ t.privacy.analytics_retention }} |
{% endif %}| Email bantuan | 12 bulan setelah pesan terakhir |

## Keamanan

Buku catatan di ponsel Anda disimpan di penyimpanan privat Motoor, yang tidak dapat dibaca oleh aplikasi lain, dan Anda dapat menambahkan kunci biometrik. Semua yang dikirim Motoor melalui internet dienkripsi. Tautan berbagi dan pemindahan menggunakan kode acak yang panjang dan tidak dapat ditebak, dan kami hanya menyimpan sidik digital (fingerprint) dari setiap kode. Kunci ponsel Anda dengan PIN, sidik jari, atau buka kunci wajah untuk melindungi isinya.

## Anak-anak

Motoor ditujukan bagi orang yang memiliki atau merawat kendaraan, dan tidak ditujukan untuk anak-anak di bawah usia {{ p.min_age }} tahun. Kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak. Jika Anda yakin seorang anak telah memberikan informasi kepada kami, kirimkan email kepada kami dan kami akan menghapusnya.

## Perubahan pada kebijakan ini

Jika kami mengubah kebijakan ini, kami akan memperbarui tanggal di bagian atas halaman ini. Jika suatu perubahan memengaruhi apa yang kami kumpulkan atau siapa yang menanganinya, Motoor juga akan memberi tahu Anda di dalam aplikasi sebelum perubahan tersebut berlaku.

## Kontak

Pertanyaan tentang privasi dapat dikirim ke **{{ dev.name }}** di [{{ dev.email }}](mailto:{{ dev.email }}). Kami membalas {{ t.ui.response_time }}.
