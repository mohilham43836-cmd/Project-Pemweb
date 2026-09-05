# Sistem Informasi Puskesmas Sei Taiwan

Sistem pendaftaran dan pengurusan antrean pesakit berasaskan web untuk **Puskesmas Sei Taiwan**. Projek ini direka bentuk dengan antaramuka (UI) yang moden, mesra pengguna, dan responsif untuk memudahkan proses log masuk serta pendaftaran pesakit BPJS mahupun Pasien Umum.

---

## 📸 Antaramuka Utama (Features)

- **Latar Belakang Fullscreen Custom**: Menggunakan visual sebenar bangunan Puskesmas Sei Taiwan dengan *overlay* gelap untuk kejelasan teks.
- **Reka Bentuk Kad Glassmorphism**: Kotak log masuk yang kemas, separa lutsinar dengan aksen hijau hospital.
- **Log Masuk Dwi-Jalur**: Menyokong log masuk biasa (NIK/Username) dan Google SSO.
- **Pendaftaran Dinamik**: Borang pendaftaran (`register.html`) yang menyesuaikan ruang input secara automatik mengikut jenis penjamin (Pasien BPJS vs Pasien Umum).

---

## 📁 Struktur Projek

```text
proyek_pemweb/
│
├── index.html                  # Halaman Log Masuk (Login)
├── register.html               # Halaman Pendaftaran Pasien Baru
├── Background.css              # Gaya CSS khas untuk Latar Belakang
├── style.css                   # Gaya CSS utama untuk Borang, Pop-up & Butang
│
├── Foto Puskemas Sei Taiwan.jpg # Gambar latar belakang bangunan
└── logo-puskesmas.png          # Logo rasmi Puskesmas Sei Taiwan