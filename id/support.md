---
layout: page
title: Bantuan
permalink: /id/support/
ref: /support/
lang: id
lede: "Jawaban atas pertanyaan umum, dan jalur langsung ke orang yang membuat Motoor."
description: "Jawaban atas pertanyaan umum, dan jalur langsung ke orang yang membuat Motoor."
---
{% assign dev = site.developer %}
{% assign t = site.data.i18n[page.lang] %}

<div class="mt-contact">
  <h2 class="mt-contact__title">Kontak</h2>
  <p style="margin:0">Kirim email ke <a href="mailto:{{ dev.email }}">{{ dev.email }}</a> dan Anda akan mendapat balasan {{ t.ui.response_time }}. Akan sangat membantu jika Anda menyertakan model ponsel, apakah Anda menggunakan Android atau iOS, dan versi Motoor dari <strong>Pengaturan → Tentang</strong>.</p>
  <a class="mt-btn mt-btn--filled mt-btn--small" href="mailto:{{ dev.email }}?subject=Motoor%20support">{% include icon.html name="mail" %}Kirim email ke bantuan</a>
</div>

## Pertanyaan umum

<details class="mt-faq">
<summary>Pengingat tidak muncul di ponsel saya</summary>
<div>
<p>Pastikan notifikasi untuk Motoor sudah aktif di pengaturan ponsel Anda. Di Android, beberapa ponsel juga menghentikan aplikasi yang berjalan di latar belakang untuk menghemat baterai: buka <strong>Setelan → Aplikasi → Motoor → Baterai</strong> dan pilih <strong>Tidak dibatasi</strong>. Pengingat selalu muncul di dalam aplikasi pada tab <strong>Pengingat</strong>, meskipun notifikasi dimatikan.</p>
</div>
</details>

<details class="mt-faq">
<summary>Bagaimana Motoor menentukan kapan servis jatuh tempo?</summary>
<div>
<p>Saat Anda menambahkan kendaraan, Motoor mengusulkan jadwal servis sesuai merek, jenis, dan sistem penggeraknya, dengan setiap item jatuh tempo berdasarkan jarak atau tanggal, mana yang lebih dulu. Setiap item menunjukkan dari mana intervalnya berasal. Di paket apa pun, Anda dapat menghapus centang item yang tidak Anda perlukan. Dengan Premium, Anda juga dapat mengganti nama item, mengubah intervalnya, dan menambahkan item sendiri. Pastikan odometer selalu terbaru dengan mencatat bahan bakar atau servis, agar pengingat berbasis jarak tetap akurat.</p>
</div>
</details>

<details class="mt-faq">
<summary>Saya sudah membeli Premium tetapi belum terbuka</summary>
<div>
<p>Buka <strong>Pengaturan → Premium → Pulihkan pembelian</strong> saat masuk dengan akun Google atau Apple yang sama dengan yang Anda gunakan untuk membeli. Jika belum berhasil, kirim email kepada kami dengan nomor pesanan dari struk Google Play atau App Store Anda.</p>
</div>
</details>

<details class="mt-faq">
<summary>Bagaimana cara membatalkan Premium?</summary>
<div>
<p>Langganan dikelola oleh toko aplikasi, bukan oleh Motoor.</p>
<ul>
<li><strong>Android:</strong> buka Play Store, ketuk foto profil Anda, lalu <strong>Pembayaran &amp; langganan → Langganan → Motoor → Batalkan langganan</strong>.</li>
<li><strong>iOS:</strong> buka <strong>Pengaturan</strong>, ketuk nama Anda, lalu <strong>Langganan → Motoor → Batalkan Langganan</strong>.</li>
</ul>
<p>Saat periode tagihan berakhir, batasan paket Free berlaku kembali, tetapi tidak ada yang dihapus. Kendaraan pertama Anda tetap aktif (Anda dapat memilih kendaraan lain), dan kendaraan lainnya menjadi hanya-baca sampai Anda berlangganan lagi. Setiap catatan dan lampiran tetap disimpan, di ponsel Anda dan di cadangan Anda.</p>
</div>
</details>

<details class="mt-faq">
<summary>Bisakah saya mendapatkan pengembalian dana?</summary>
<div>
<p>Pengembalian dana ditangani oleh toko tempat Anda membeli. Di Android, ajukan melalui <a href="https://support.google.com/googleplay/answer/2479637">halaman pengembalian dana Google Play</a>. Di iOS, gunakan <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Apakah buku catatan saya dicadangkan?</summary>
<div>
<p>Ya, secara otomatis, baik di paket Free maupun Premium. Kendaraan, catatan, pengingat, lampiran, dan struk Anda dicadangkan ke server kami setiap kali Anda online. Di ponsel baru, masuk dengan akun Google atau Apple yang sama dan buku catatan Anda akan kembali. Baca selengkapnya di <a href="{{ '/id/privacy/' | relative_url }}">kebijakan privasi</a>.</p>
</div>
</details>

<details class="mt-faq">
<summary>Apakah Motoor bisa dipakai offline?</summary>
<div>
<p>Ya. Buku catatan Anda disimpan di ponsel, jadi Anda dapat mencatat bahan bakar, servis, dan biaya, melihat riwayat, dan menerima pengingat tanpa koneksi. Perubahan dicadangkan secara otomatis saat Anda kembali online. Masuk, memindai struk, berbagi, dan memindahkan kendaraan memerlukan koneksi.</p>
</div>
</details>

<details class="mt-faq">
<summary>Saya punya ide atau menemukan bug</summary>
<div>
<p>Silakan kirim email ke <a href="mailto:{{ dev.email }}">{{ dev.email }}</a>. Untuk bug, jelaskan apa yang Anda lakukan, apa yang Anda harapkan, dan apa yang terjadi. Tangkapan layar sangat membantu.</p>
</div>
</details>

## Hapus data Anda {#delete-your-data}

Menghapus akun akan menghapus buku catatan Anda dari ponsel dan, setelah {{ site.privacy.deletion_grace_days }} hari, dari server kami secara permanen. Ada dua cara untuk melakukannya.

**Di aplikasi:** buka **Pengaturan → Profil → Hapus akun** dan konfirmasi. Akun Anda langsung dikunci dan semua tautan berbagi berhenti berfungsi.

**Tanpa aplikasi:** kirim email ke [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20account) dengan subjek “Delete my account” (Hapus akun saya), dari alamat email yang Anda gunakan untuk masuk. Kami akan mengonfirmasi melalui email {{ t.ui.response_time }} dan menjadwalkan penghapusan, yang kemudian berjalan dengan cara yang sama.

Yang terjadi selanjutnya:

1. **Selama {{ site.privacy.deletion_grace_days }} hari Anda dapat berubah pikiran.** Masuk ke Motoor dan pilih **Pulihkan**. Buku catatan Anda kembali seperti semula.
2. **Setelah {{ site.privacy.deletion_grace_days }} hari**, akun, cadangan buku catatan, lampiran, struk, dan hasil pindaian Anda dihapus secara permanen, dan akun masuk Anda dihapus. Salinan di cadangan pemulihan bencana kami kedaluwarsa dalam {{ site.privacy.backup_expiry_days }} hari berikutnya. Tindakan ini tidak dapat dibatalkan.
3. **Langganan Anda tidak dibatalkan secara otomatis.** Batalkan terlebih dahulu di Google Play atau App Store (lihat di atas).

Mencopot pemasangan Motoor hanya menghapus salinan di ponsel Anda. Cadangan Anda tetap ada sampai Anda menghapus akun.

Jika Anda pernah mengirim email kepada kami dan ingin korespondensi tersebut dihapus, tulis ke [{{ dev.email }}](mailto:{{ dev.email }}?subject=Delete%20my%20emails) dengan subjek “Delete my emails” (Hapus email saya). Kami akan menghapusnya dalam 30 hari dan mengonfirmasi melalui email.

Baca selengkapnya di [kebijakan privasi]({{ '/id/privacy/' | relative_url }}).
