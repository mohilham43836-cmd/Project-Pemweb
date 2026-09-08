# Sistem Informasi Puskesmas Sei Taiwan

Sistem pendaftaran dan pengelolaan antrean pasien berbasis web untuk **UPTD Puskesmas Sei Taiwan**. Proyek ini dirancang dengan antarmuka (UI) modern, responsif, serta memenuhi standar aksesibilitas (A11y) dan struktur semantik HTML5.

---

## 📌 Informasi Organisasi
* **Instansi:** UPTD Puskesmas Sei Taiwan
* **Alamat:** Jl. Lujoh RT. 05 Desa Sungai Manurung, Kecamatan Sebatik, Kab. Nunukan, Kalimantan Utara (Kode Pos: 74832)
* **Instagram:** [@puskesmas_sei_taiwan](https://www.instagram.com/puskesmas_sei_taiwan/)

---

## 📸 Fitur Utama (Features)

- **Latar Belakang Fullscreen Custom**: Menggunakan visual bangunan UPTD Puskesmas Sei Taiwan dengan *overlay* gelap untuk kenyamanan keterbacaan teks.
- **Desain Glassmorphism**: Tampilan kartu log masuk dan dashboard yang modern, semi-transparan, dengan aksen warna hijau khas fasilitas kesehatan.
- **Log Masuk Dwi-Jalur**: Mendukung masuk menggunakan akun biasa (Username/NIK) dan Google SSO.
- **Pendaftaran Dinamik**: Formulir (`register.html`) yang menyesuaikan ruang input secara otomatis berdasarkan jenis penjamin (Pasien BPJS vs Pasien Umum).
- **Dashboard & Antrean Online**: Halaman portal pasien (`dashboard.html`) untuk mengambil nomor antrean poliklinik dan memantau riwayat berobat.

---

## 🏗️ Hirarki Heading Logis (A11y Standards)
Penerapan level heading yang terstruktur dan tidak melompati tingkatan (WCAG Compliance):
* **`<h1>`**: Judul utama tunggal dokumen pada setiap halaman (misal: *Sistem Informasi Berbasis Web...* atau *Dashboard Layanan Pasien*).
* **`<h2>`**: Tajuk utama pembagi section (misal: *Informasi Layanan Publik*, *Layanan Antrean Online*, *Riwayat Catatan Kunjungan*).
* **`<h3>`**: Sub-tajuk komponen kartu, pengumuman artikel, serta judul form pendaftaran.

---

## ♿ Checklist Aksesibilitas (A11y)
* [x] **Deklarasi Bahasa:** Menggunakan atribut `<html lang="id">` untuk optimasi pembaca layar (*screen reader*).
* [x] **Teks Alternatif (`alt`):** Menyediakan deskripsi `alt` yang informatif pada seluruh atribut tag `<img>`.
* [x] **Relasi Form & Label:** Menghubungkan setiap elemen `<label for="...">` dengan `<input id="...">` secara presisi.
* [x] **Semantik HTML5:** Memanfaatkan tag `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, dan `<footer>`.
* [x] **Atribut ARIA:** Menerapkan `aria-labelledby`, `aria-label`, `aria-expanded`, dan `aria-required="true"`.

---

## 📁 Struktur Projek

```text
proyek_pemweb/
│
├── index.html                  # Halaman Login Utama Pasien
├── register.html               # Halaman Pendaftaran Pasien Baru
├── dashboard.html              # Halaman Dashboard & Antrean Pasien
├── Background.css              # Styling CSS khusus Latar Belakang
├── style.css                   # Styling CSS Utama & Glassmorphism
├── README.md                   # Dokumentasi Resmi Proyek
│
├── Foto Puskemas Sei Taiwan.jpg # Visual Latar Belakang Bangunan
└── logo-puskesmas.png          # Logo Resmi Puskesmas Sei Taiwan