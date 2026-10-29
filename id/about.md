---
layout: page
title: Tentang Motoor
permalink: /id/about/
ref: /about/
lang: id
lede: "Buku catatan yang tenang untuk setiap kendaraan yang Anda miliki."
description: "Motoor menyimpan catatan bahan bakar, servis, dan biaya kendaraan Anda di satu tempat, dan mengingatkan Anda sebelum waktunya perawatan."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}
{% assign lp = '' %}{% if page.lang != 'en' %}{% assign lp = '/' | append: page.lang %}{% endif %}

Motoor menyimpan catatan bahan bakar, servis, dan biaya untuk mobil, sepeda motor, sepeda, dan kendaraan listrik Anda di satu tempat, dan mengingatkan Anda sebelum waktunya perawatan.

## Cara kerja Motoor

- **Daftarkan kendaraan dalam sekitar satu menit.** Pilih merek, jenis, dan sistem penggeraknya, lalu Motoor mengusulkan jadwal servisnya.
- **Catat bahan bakar atau pengisian daya, servis, dan biaya** dengan beberapa ketukan. Motoor menghitung konsumsi dan biaya sebenarnya dari setiap kendaraan.
- **Dapatkan pengingat berdasarkan jarak atau waktu**, mana yang lebih dulu, sehingga Anda tahu apa yang sudah lewat waktunya, apa yang segera jatuh tempo, dan apa yang masih bisa menunggu.

## Yang kami yakini

**Catatan Anda tidak pernah disandera.** Pencatatan, riwayat, dan ekspor tersedia lengkap di paket Free. Buku catatan Anda adalah milik Anda, dan dapat Anda bawa kapan saja.

**Tidak ada yang dibuat tanpa konfirmasi Anda.** Motoor memberi saran, Anda yang memutuskan. Jadwal yang diusulkan atau struk yang dipindai hanya disimpan setelah Anda mengonfirmasinya.

**Setiap interval menyebutkan sumbernya.** Buku servis, praktik umum bengkel, atau Anda sendiri. Anda selalu bisa melihat mengapa sebuah pengingat jatuh tempo.

**Lokal lebih dulu.** Motoor berfungsi tanpa koneksi, dengan buku catatan tersimpan di ponsel Anda, dan dicadangkan secara otomatis sehingga ponsel baru bisa melanjutkan dari ponsel lama.

## Siapa pembuatnya

Motoor adalah aplikasi independen yang dibuat oleh **{{ dev.name }}** di Indonesia. Tanpa iklan, dan data Anda tidak pernah dijual.

## Hubungi kami

Pertanyaan, ide, dan laporan bug langsung sampai ke orang yang membuat Motoor: kirim email ke [{{ dev.email }}](mailto:{{ dev.email }}) dan Anda akan mendapat balasan {{ t.ui.response_time }}. Jawaban atas pertanyaan umum ada di [halaman bantuan]({{ lp | append: '/support/' | relative_url }}).
