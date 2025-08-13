# PT RYANINDO GLOBAL SAMUDERA - Website Agency Pelayaran

Website profesional untuk PT RYANINDO GLOBAL SAMUDERA dengan fitur lowongan kerja pelaut, testimoni, dan kontak yang dapat dihubungi.

## Fitur
- ✅ Desain elegan dan profesional
- ✅ Responsive untuk semua device
- ✅ Admin panel dengan Netlify CMS
- ✅ Hosting gratis di Netlify
- ✅ SEO optimized
- ✅ Fast loading

## Teknologi yang Digunakan
- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (ES6+)
- Netlify CMS
- Git Gateway

## Cara Deploy ke Netlify

### 1. Upload ke GitHub
1. Buat repository baru di GitHub
2. Upload semua file ke repository tersebut
3. Pastikan struktur folder tetap sama

### 2. Setup Netlify
1. Login ke [Netlify](https://netlify.com)
2. Klik "New site from Git"
3. Pilih GitHub dan repository yang sudah dibuat
4. Biarkan build settings default (Publish directory: `.`)
5. Klik "Deploy site"

### 3. Setup Netlify CMS
1. Di Netlify Dashboard, masuk ke Settings > Identity
2. Enable Git Gateway
3. Enable Identity
4. Add custom domain (optional)

### 4. Setup Admin Panel
1. Buka `https://namasiteanda.netlify.app/admin`
2. Daftar atau login sebagai admin
3. Mulai mengelola konten lowongan dan testimoni

## Struktur Folder
```
ryanindo-global/
├── index.html              # Halaman utama
├── css/
│   └── style.css          # Styling utama
├── js/
│   └── main.js            # JavaScript interaktif
├── admin/
│   ├── index.html         # Netlify CMS admin
│   └── config.yml         # Konfigurasi CMS
├── content/               # Konten CMS (auto-generated)
├── assets/               # Gambar dan media
├── netlify.toml          # Konfigurasi Netlify
└── README.md            # Dokumentasi
```

## Cara Menggunakan Admin Panel

### Menambah Lowongan Kerja
1. Login ke admin panel
2. Pilih "Lowongan Kerja"
3. Klik "New Lowongan Kerja"
4. Isi semua informasi yang diperlukan
5. Klik "Publish"

### Menambah Testimoni
1. Login ke admin panel
2. Pilih "Testimoni"
3. Klik "New Testimoni"
4. Isi nama, posisi, dan testimoni
5. Upload foto (optional)
6. Klik "Publish"

### Update Informasi Perusahaan
1. Login ke admin panel
2. Pilih "Pengaturan Website"
3. Update informasi yang diperlukan
4. Klik "Publish"

## Custom Domain
Untuk menggunakan domain custom:
1. Di Netlify Dashboard > Domain Management
2. Add custom domain
3. Follow instruksi untuk setup DNS

## Kontak Support
Jika ada masalah atau pertanyaan:
- Email: info@ryanindoglobalsamudera.com
- WhatsApp: +62 812-3456-7890

## Lisensi
MIT License - Bebas digunakan dan dimodifikasi
