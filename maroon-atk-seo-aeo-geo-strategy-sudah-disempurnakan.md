# STRATEGI SEO, AEO & GEO TERINTEGRASI — MAROON ATK

## Panduan Implementasi SEO, Answer Engine Optimization, Generative Engine Optimization & Topical Authority
### Struktur Website Maroon ATK — 2026

Dokumen ini menjadi **blueprint optimasi pencarian organik, mesin penjawab AI, dan mesin pencarian generatif** untuk website Maroon ATK.

Strategi ini disusun berdasarkan struktur website yang saat ini digunakan:

```text
/
├── index.html
├── tentang-kami.html
├── produk.html
├── paket.html
├── blog.html
├── kontak.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── vercel.json
│
├── produk/
│   ├── atk.html
│   ├── furniture-kantor.html
│   ├── interactive-flat-panel.html
│   ├── kursi-kantor.html
│   ├── lemari-arsip.html
│   ├── meja-kantor.html
│   ├── papan-tulis-digital.html
│   └── videotron.html
│
├── detail/
│   ├── digital-whiteboard-55-inch-portable.html
│   ├── interactive-flat-panel-65-inch-4k.html
│   ├── kertas-hvs-a4-f4.html
│   ├── kursi-direktur-executive-k-80.html
│   ├── lemari-arsip-besi-pintu-geser-kaca-l-180.html
│   ├── meja-kerja-staf-m-120.html
│   ├── set-sofa-tamu-kantor-leather-3-1-1.html
│   └── videotron-led-indoor-p2.html
│
├── blog/
│   ├── digital-whiteboard-portable-untuk-pendidikan.html
│   ├── interactive-flat-panel-untuk-rapat-modern.html
│   ├── keunggulan-videotron-led-proyektor.html
│   ├── panduan-memilih-supplier-atk.html
│   ├── promo-paket-kantor-2026.html
│   ├── prosedur-pengadaan-atk-instansi-pemerintah.html
│   └── tips-menata-furniture-kantor-produktif.html
│
└── assets/
    ├── css/style.css
    ├── js/script.js
    └── image/
```

> **Catatan penting:** website Maroon ATK menggunakan halaman HTML statis. Karena itu, strategi teknis di dokumen ini **tidak mengharuskan SSR**. Prioritasnya adalah memastikan setiap halaman penting sudah memiliki HTML yang lengkap dan dapat dibaca langsung tanpa bergantung pada JavaScript.

---

# 1. TUJUAN UTAMA

Strategi SEO, AEO, dan GEO Maroon ATK diarahkan pada empat tujuan:

1. Meningkatkan visibilitas halaman Maroon ATK di Google dan mesin pencari lain.
2. Membuat konten mudah dipahami dan dikutip oleh mesin penjawab berbasis AI.
3. Membangun Maroon ATK sebagai entitas bisnis yang jelas dan konsisten di internet.
4. Mengubah trafik organik dan rekomendasi AI menjadi **lead B2B**, permintaan penawaran, dan transaksi.

### Target audiens utama

- Instansi pemerintah
- Sekolah
- Kampus dan perguruan tinggi
- Perusahaan swasta
- Perkantoran
- Tim procurement/purchasing
- Pengelola sarana dan prasarana
- Pemilik usaha

### Positioning

**Maroon ATK = Supplier • Vendor • Distributor • Penyedia Pengadaan Peralatan Kantor, ATK, Furniture, dan Teknologi Modern.**

---

# 2. PRINSIP STRATEGI: SEO → AEO → GEO

Ketiga strategi harus dipandang sebagai satu ekosistem.

```text
SEO
│
├── Crawling
├── Indexing
├── Struktur HTML
├── Internal Linking
├── Metadata
└── Performa
        │
        ▼
AEO
│
├── Jawaban langsung
├── FAQ
├── Tabel
├── Definisi
├── Perbandingan
└── Data terstruktur
        │
        ▼
GEO
│
├── Entity consistency
├── Brand mentions
├── Review
├── Referensi pihak ketiga
├── Digital PR
└── Reputasi
        │
        ▼
REKOMENDASI + TRAFIK + LEAD
```

### SEO

Memastikan mesin pencari dapat menemukan, memahami, merayapi, dan mengindeks website.

### AEO

Memformat informasi sehingga jawaban Maroon ATK mudah diekstraksi ketika pengguna mengajukan pertanyaan.

### GEO

Memperkuat kemungkinan Maroon ATK dikenali, disebut, dan direkomendasikan dalam jawaban mesin generatif.

---

# 3. PEMETAAN STRUKTUR WEBSITE TERHADAP SEARCH INTENT

Struktur website yang sekarang sudah cocok untuk model **Hub → Category → Product → Content**.

| Level | Folder/Halaman | Fungsi SEO |
|---|---|---|
| Hub | `index.html` | Brand + layanan utama |
| Corporate | `tentang-kami.html` | Entity & trust |
| Product Hub | `produk.html` | Pengantar katalog |
| Category | `produk/*.html` | Keyword kategori |
| Product | `detail/*.html` | Keyword produk spesifik |
| Solution | `paket.html` | Intent pengadaan |
| Content Hub | `blog.html` | Topical authority |
| Article | `blog/*.html` | Informational queries |
| Conversion | `kontak.html` | Lead & inquiry |
| Utility | `404.html` | UX & crawl hygiene |

---

# 4. PRIORITAS HALAMAN SEO

## 4.1 Homepage — `index.html`

### Search intent

Pengguna yang mencari:

- supplier ATK
- vendor peralatan kantor
- distributor furniture kantor
- pengadaan peralatan kantor
- supplier perlengkapan kantor
- vendor teknologi kantor

### Fokus

Homepage harus menjawab dalam beberapa detik:

**Siapa Maroon ATK? Apa yang dijual? Siapa yang dilayani? Mengapa harus memilih Maroon ATK? Bagaimana cara menghubungi?**

### Elemen wajib

- `<title>` yang jelas
- Meta description
- H1 tunggal
- Hero dengan value proposition
- Kategori produk utama
- Keunggulan
- Paket pengadaan
- Area/jenis layanan jika memang benar-benar dilayani
- FAQ
- CTA
- Informasi kontak
- Internal link ke kategori utama

---

# 5. HALAMAN TENTANG KAMI

File:

```text
/tentang-kami.html
```

Halaman ini tidak hanya berfungsi sebagai halaman profil.

Ia berfungsi sebagai **Trust & Entity Page**.

### Informasi yang perlu dijelaskan

- Nama bisnis: Maroon ATK
- Posisi bisnis: Supplier / Vendor / Distributor / Penyedia Pengadaan
- Produk dan layanan
- Target pelanggan
- Nilai/keunggulan
- Proses pelayanan
- Informasi kontak
- Identitas bisnis yang memang dapat diverifikasi

### Jangan membuat klaim

Jangan menulis:

- "terbaik di Indonesia"
- "nomor satu"
- "termurah"
- "100% terpercaya"

kecuali klaim tersebut benar-benar dapat dibuktikan.

Gunakan bahasa berbasis fakta.

---

# 6. HALAMAN PRODUK

File:

```text
/produk.html
```

Berfungsi sebagai **Product Hub**.

Halaman ini harus mengarahkan crawler dan pengguna ke seluruh kategori produk.

### Kategori utama

```text
ATK
Furniture Kantor
Interactive Flat Panel
Kursi Kantor
Lemari Arsip
Meja Kantor
Papan Tulis Digital
Videotron
```

Setiap kategori harus memiliki:

- Deskripsi singkat
- Keyword utama
- Keyword turunan
- Link menuju halaman kategori
- Link ke beberapa produk unggulan
- CTA pengadaan

---

# 7. STRATEGI HALAMAN KATEGORI

Setiap halaman:

```text
/produk/*.html
```

harus dianggap sebagai **landing page SEO**, bukan sekadar daftar produk.

## Template struktur

```text
H1
↓
Ringkasan kategori
↓
Apa itu produk/kategori ini?
↓
Kegunaan
↓
Jenis/varian
↓
Produk yang tersedia
↓
Panduan memilih
↓
Tabel spesifikasi/perbandingan
↓
FAQ
↓
Produk terkait
↓
Artikel terkait
↓
CTA
```

### Contoh

`produk/interactive-flat-panel.html`

Target semantic cluster:

```text
interactive flat panel
IFP
interactive display
layar interaktif
smart board
papan interaktif
IFP untuk sekolah
IFP untuk ruang meeting
```

Jangan memaksakan semua keyword berulang-ulang. Fokus pada **topical relevance dan kelengkapan informasi**.

---

# 8. STRATEGI HALAMAN DETAIL PRODUK

Folder:

```text
/detail/
```

Halaman detail produk adalah aset penting untuk **long-tail SEO + commercial intent**.

Contoh:

```text
/detail/interactive-flat-panel-65-inch-4k.html
```

## Struktur ideal

```text
Breadcrumb
↓
Nama Produk / H1
↓
Foto produk
↓
Ringkasan produk
↓
Spesifikasi teknis
↓
Keunggulan
↓
Kegunaan
↓
Siapa yang cocok menggunakan produk
↓
Informasi pengadaan
↓
FAQ
↓
Produk terkait
↓
Artikel terkait
↓
CTA / Hubungi Admin
```

## Data yang sebaiknya tersedia

- Nama produk
- Merek jika memang tersedia
- Model
- Ukuran
- Resolusi
- Dimensi
- Material
- Fitur
- Garansi jika tersedia
- Kelengkapan
- Ketersediaan
- Informasi harga atau keterangan "hubungi admin" bila harga bersifat dinamis

**Jangan membuat spesifikasi, garansi, sertifikasi, stok, atau klaim teknis yang belum diverifikasi.**

---

# 9. PRODUCT SCHEMA

Untuk halaman produk yang memang merepresentasikan produk individual, gunakan structured data yang sesuai dengan informasi nyata di halaman.

Minimal pertimbangkan:

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Nama Produk",
  "image": [
    "URL GAMBAR PRODUK"
  ],
  "description": "Deskripsi produk yang benar-benar tampil di halaman",
  "sku": "SKU-JIKA-ADA"
}
```

Tambahkan `brand`, `offers`, `aggregateRating`, atau `review` **hanya jika datanya benar-benar tersedia dan memenuhi ketentuan penggunaan structured data**.

Jangan membuat rating atau review fiktif.

---

# 10. STRATEGI BLOG

Folder:

```text
/blog/
```

Website saat ini menggunakan artikel HTML statis.

Ini justru dapat menjadi keunggulan karena setiap artikel dapat memiliki:

- URL permanen
- metadata sendiri
- structured data sendiri
- internal linking sendiri
- canonical sendiri
- konten yang dapat dibaca langsung tanpa JavaScript

## Struktur artikel

```text
Breadcrumb
↓
H1
↓
Jawaban singkat / direct answer
↓
Tanggal publikasi & pembaruan
↓
Author
↓
Daftar isi bila diperlukan
↓
Pembahasan
↓
Tabel / daftar / langkah
↓
FAQ
↓
Kesimpulan
↓
Produk terkait
↓
Artikel terkait
↓
CTA
```

---

# 11. AEO — ANSWERS FIRST

Setiap artikel harus menjawab pertanyaan utama **sedini mungkin**.

Jangan memulai artikel dengan paragraf pembuka yang terlalu panjang.

### Format yang disarankan

```text
H1: Cara Memilih Supplier ATK untuk Kantor

Jawaban singkat:
Supplier ATK yang baik untuk kebutuhan kantor harus mampu menyediakan
produk yang sesuai kebutuhan, informasi spesifikasi yang jelas,
proses pemesanan yang mudah, dan dukungan pengadaan yang konsisten.
```

Setelah itu baru masuk ke pembahasan mendalam.

---

# 12. FORMAT KONTEN YANG MUDAH DIEKSTRAK AI

Prioritaskan:

### Definisi

> Apa itu Interactive Flat Panel?

### List

> Apa saja perlengkapan ATK kantor?

### Perbandingan

| Aspek | Proyektor | IFP |
|---|---|---|
| Interaksi sentuh | Terbatas/tidak tersedia pada konfigurasi umum | Tersedia pada perangkat yang mendukung |
| Kebutuhan perangkat tambahan | Dapat memerlukan beberapa perangkat | Lebih terintegrasi |
| Penggunaan | Presentasi | Presentasi, kolaborasi, pembelajaran |

### Langkah

```text
1. Tentukan kebutuhan.
2. Tentukan spesifikasi.
3. Bandingkan produk.
4. Periksa layanan pengadaan.
5. Hubungi vendor.
```

### FAQ

```text
Q: Apa itu IFP?
A: ...

Q: Apakah Maroon ATK melayani pengadaan?
A: ...
```

Format seperti ini membuat informasi lebih mudah dipahami manusia sekaligus mesin.

---

# 13. FAQ STRATEGY

FAQ harus berasal dari **pertanyaan nyata pengguna**, bukan sekadar dibuat untuk memasukkan keyword.

Prioritas pertanyaan:

- Apa itu produk tersebut?
- Apa fungsi produk?
- Bagaimana memilih produk?
- Berapa ukuran yang sesuai?
- Apa perbedaan produk A dan B?
- Apakah tersedia untuk kebutuhan kantor/sekolah/kampus?
- Bagaimana proses pengadaan?
- Bagaimana cara meminta penawaran?

Gunakan FAQ pada halaman yang memang relevan.

---

# 14. ARTICLE SCHEMA

Setiap artikel blog sebaiknya menggunakan structured data yang menggambarkan artikel sebenarnya.

Pertimbangkan:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Judul Artikel",
  "description": "Ringkasan artikel",
  "image": "URL GAMBAR",
  "author": {
    "@type": "Person",
    "name": "Nama Penulis"
  },
  "datePublished": "2026-XX-XX",
  "dateModified": "2026-XX-XX"
}
```

Gunakan tanggal dan penulis yang benar-benar sesuai dengan halaman.

---

# 15. ENTITY SEO — MEMBANGUN IDENTITAS MAROON ATK

AI perlu memahami bahwa:

```text
Maroon ATK
=
Satu entitas bisnis
```

Karena itu informasi berikut harus konsisten:

- Nama brand
- Logo
- Deskripsi bisnis
- Website
- Kontak
- Alamat bila dipublikasikan
- Social profile bila tersedia
- Kategori bisnis
- Produk/layanan

Jangan menggunakan variasi nama bisnis yang membingungkan tanpa alasan.

---

# 16. ORGANIZATION / LOCAL BUSINESS SCHEMA

Jika informasi bisnis memang tersedia dan dapat diverifikasi, gunakan structured data yang sesuai seperti `Organization` atau jenis bisnis lokal yang relevan.

Contoh konsep:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Maroon ATK",
  "url": "https://DOMAIN-RESMI/",
  "logo": "https://DOMAIN-RESMI/assets/image/favicon-maroon-atk.webp"
}
```

Tambahkan informasi lain hanya jika benar-benar dimiliki dan konsisten.

Jika bisnis memiliki lokasi fisik yang melayani pelanggan secara lokal, pertimbangkan structured data bisnis lokal yang paling sesuai.

---

# 17. KNOWLEDGE GRAPH & ENTITY CONNECTION

Bangun hubungan semantik:

```text
Maroon ATK
│
├── Supplier
├── Vendor
├── Distributor
├── Pengadaan
│
├── ATK
├── Furniture Kantor
│   ├── Kursi
│   ├── Meja
│   └── Lemari Arsip
│
├── Teknologi Interaktif
│   ├── Interactive Flat Panel
│   ├── Papan Tulis Digital
│   └── Videotron
│
└── Paket Pengadaan
```

Gunakan istilah yang konsisten di halaman website, artikel, profil bisnis, dan kanal eksternal.

---

# 18. GEO — GENERATIVE ENGINE OPTIMIZATION

GEO tidak cukup dilakukan hanya dengan mengubah meta tag.

Fokus GEO:

```text
Website sendiri
+
Konten berkualitas
+
Data terstruktur
+
Entity consistency
+
Mention pihak ketiga
+
Review nyata
+
Digital PR
+
Referensi eksternal
```

Tujuan akhirnya adalah membuat informasi tentang Maroon ATK **mudah ditemukan, dipahami, diverifikasi, dan dipercaya**.

---

# 19. THIRD-PARTY VALIDATION

Bangun keberadaan Maroon ATK di platform yang relevan dan benar-benar digunakan bisnis.

Prioritas:

1. Google Business Profile jika memenuhi syarat.
2. Profil perusahaan.
3. LinkedIn perusahaan.
4. Direktori bisnis yang kredibel dan relevan.
5. Marketplace atau platform procurement bila memang digunakan.
6. Media/PR jika memiliki berita yang layak diberitakan.
7. Testimoni pelanggan nyata.

### Prinsip utama

**Jangan melakukan spam mention.**

Lebih baik memiliki sedikit referensi berkualitas daripada banyak profil tipis yang tidak memberikan nilai.

---

# 20. REVIEW & TESTIMONI

Minta pelanggan memberikan ulasan berdasarkan pengalaman nyata.

Contoh tema yang berguna:

- kualitas produk
- kecepatan respons
- ketepatan pengiriman
- proses pengadaan
- komunikasi
- kesesuaian barang

Jangan meminta pelanggan membuat klaim yang tidak mereka alami.

Jangan membuat review sendiri.

---

# 21. TOPICAL AUTHORITY

Struktur blog yang sekarang dapat dikembangkan menjadi beberapa cluster utama.

## CLUSTER A — ATK & PROCUREMENT

### Awareness

- Daftar perlengkapan administrasi kantor
- Kesalahan umum dalam pengadaan ATK
- Cara mengatur kebutuhan ATK kantor

### Consideration

- Panduan memilih supplier ATK
- Cara menghitung kebutuhan ATK bulanan
- Perbandingan jenis kertas untuk kebutuhan kantor

### Conversion

- Panduan pengadaan ATK untuk kantor
- Supplier ATK untuk kebutuhan rutin
- Solusi pengadaan ATK satu tempat

---

# 22. CLUSTER B — FURNITURE KANTOR

### Awareness

- Cara menata furniture kantor agar produktif
- Pentingnya ergonomi ruang kerja
- Kesalahan umum dalam menata meja kerja

### Consideration

- Cara memilih kursi kantor
- Panduan ukuran meja kerja
- Cara memilih lemari arsip
- Perbandingan material furniture kantor

### Conversion

- Paket furniture kantor
- Pengadaan meja dan kursi kantor
- Vendor furniture kantor

---

# 23. CLUSTER C — TEKNOLOGI INTERAKTIF

### Awareness

- Apa itu Interactive Flat Panel?
- Apa itu papan tulis digital?
- Apa fungsi videotron LED?

### Consideration

- IFP vs proyektor
- Cara memilih ukuran IFP
- Panduan memilih videotron indoor
- Perbandingan smart board dan papan tulis konvensional

### Conversion

- Pengadaan IFP sekolah
- Pengadaan IFP kampus
- Pengadaan videotron
- Solusi smart classroom

---

# 24. CLUSTER D — PAKET PENGADAAN

Halaman:

```text
/paket.html
```

harus menjadi halaman **commercial intent**.

Gunakan paket yang memang tersedia:

```text
Paket Kantor Baru
Paket Kelas Digital Kampus
Paket Pengadaan ATK Rutin
Paket Smart Meeting Room
```

Setiap paket idealnya memiliki:

- Target pengguna
- Isi paket
- Manfaat
- Produk yang termasuk
- Opsi penyesuaian
- Proses pengadaan
- CTA

---

# 25. INTERNAL LINKING

Internal linking adalah salah satu bagian terpenting dari struktur website ini.

## Pola utama

```text
Homepage
   ↓
Kategori
   ↓
Detail Produk
   ↓
Artikel
   ↓
Produk/Paket
   ↓
Kontak
```

Namun alurnya tidak harus selalu satu arah.

### Contoh

```text
Artikel:
"Interactive Flat Panel untuk Rapat Modern"
        ↓
produk/interactive-flat-panel.html
        ↓
detail/interactive-flat-panel-65-inch-4k.html
        ↓
kontak.html
```

Dan:

```text
detail/interactive-flat-panel-65-inch-4k.html
        ↓
blog/interactive-flat-panel-untuk-rapat-modern.html
```

---

# 26. ANCHOR TEXT

Gunakan anchor text yang deskriptif dan natural.

### Baik

```text
lihat koleksi Interactive Flat Panel
panduan memilih kursi kantor
pengadaan furniture kantor
lihat paket smart meeting room
```

### Hindari terlalu sering

```text
klik di sini
selengkapnya
baca selengkapnya
produk
```

Jangan menggunakan anchor text yang sama secara berlebihan pada semua halaman.

---

# 27. BREADCRUMB

Halaman kategori, produk, dan artikel sebaiknya memiliki breadcrumb.

Contoh:

```text
Beranda
→ Produk
→ Interactive Flat Panel
→ Interactive Flat Panel 65 Inch 4K
```

Artikel:

```text
Beranda
→ Blog
→ Interactive Flat Panel untuk Rapat Modern
```

Breadcrumb membantu pengguna memahami lokasi halaman dan membantu mesin memahami hierarki konten.

---

# 28. CANONICAL URL

Setiap halaman indexable harus memiliki canonical yang menunjuk ke URL versi utama halaman tersebut.

Contoh konsep:

```html
<link rel="canonical" href="https://DOMAIN-RESMI/produk/interactive-flat-panel.html">
```

Pastikan:

- HTTPS digunakan.
- URL konsisten.
- Tidak mencampur variasi URL yang sebenarnya halaman sama.
- Canonical tidak diarahkan sembarangan ke homepage.

---

# 29. META TITLE

Gunakan title yang:

- unik
- jelas
- menggambarkan intent
- tidak keyword stuffing
- relevan dengan isi halaman

### Contoh

```text
Interactive Flat Panel | Solusi Layar Interaktif — Maroon ATK
```

```text
Kursi Kantor Ergonomis | Supplier Furniture Kantor — Maroon ATK
```

```text
Supplier ATK & Perlengkapan Kantor | Maroon ATK
```

Jangan menggunakan satu title yang sama untuk semua halaman.

---

# 30. META DESCRIPTION

Description harus menjelaskan manfaat halaman dan mendorong klik.

Contoh:

```text
Temukan Interactive Flat Panel untuk sekolah, kampus, dan ruang meeting.
Lihat spesifikasi, pilihan produk, dan solusi pengadaan dari Maroon ATK.
```

Hindari:

```text
supplier supplier supplier ATK furniture kantor supplier murah...
```

---

# 31. HEADING HIERARCHY

Gunakan:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2
      └── H3
```

Setiap halaman idealnya memiliki satu H1 yang menggambarkan topik utama.

Jangan menggunakan heading hanya untuk memperbesar teks.

---

# 32. IMAGE SEO

Folder:

```text
/assets/image/
```

sudah menjadi pusat aset visual.

## Aturan

Gunakan:

- nama file deskriptif
- `alt` yang menjelaskan gambar
- ukuran gambar sesuai kebutuhan
- format WebP yang sudah digunakan
- `width` dan `height` bila memungkinkan
- lazy loading untuk gambar non-kritis

### Contoh

```html
<img
  src="/assets/image/Digital-Whiteboard-SLIDE-1.webp"
  alt="Digital whiteboard untuk kebutuhan pembelajaran"
  width="..."
  height="..."
>
```

Jangan memasukkan keyword ke alt jika gambar tidak merepresentasikan keyword tersebut.

---

# 33. AUTHOR ENTITY

Folder:

```text
/assets/image/AUTHOR-ARTIKEL/
```

menunjukkan bahwa website sudah memiliki aset author.

Gunakan identitas penulis secara konsisten pada artikel.

Contoh:

```text
Ditulis oleh:
Moh. Arbi Ardiansyah
```

Buat halaman/profil author tersendiri jika memang dibutuhkan dan informasinya tersedia.

Tujuannya bukan sekadar SEO, tetapi meningkatkan transparansi siapa yang membuat konten.

---

# 34. DATE PUBLISHED & DATE MODIFIED

Artikel yang memiliki informasi yang dapat berubah harus memiliki tanggal publikasi dan pembaruan yang benar.

Contoh:

```html
<time datetime="2026-08-21">
  21 Agustus 2026
</time>
```

Jangan mengubah `dateModified` hanya untuk membuat artikel terlihat baru.

Tanggal harus mencerminkan perubahan yang benar-benar dilakukan.

---

# 35. ROBOTS.TXT

File:

```text
/robots.txt
```

harus memungkinkan crawler mengakses halaman publik yang memang ingin diindeks.

Konsep dasar:

```text
User-agent: *
Allow: /

Sitemap: https://DOMAIN-RESMI/sitemap.xml
```

Jika ingin mengontrol crawler tertentu, lakukan berdasarkan kebutuhan nyata dan pahami bahwa `robots.txt` adalah aturan crawling, bukan mekanisme keamanan.

**Jangan menganggap `robots.txt` dapat memaksa AI untuk menggunakan atau mengutip konten.**

---

# 36. SITEMAP.XML

File:

```text
/sitemap.xml
```

harus berisi URL canonical yang memang ingin muncul di mesin pencari.

Prioritaskan:

```text
index.html
tentang-kami.html
produk.html
paket.html
kontak.html

produk/*.html
detail/*.html
blog.html
blog/*.html
```

Jangan memasukkan:

- halaman duplikat
- URL yang tidak canonical
- URL error
- resource seperti CSS/JS
- halaman yang memang tidak ingin diindeks

Jika sitemap statis, perbarui ketika halaman baru ditambahkan.

---

# 37. STATUS CODE & 404

File:

```text
404.html
```

harus memiliki:

- pesan bahwa halaman tidak ditemukan
- link ke homepage
- link ke produk
- link ke blog
- link ke kontak
- desain yang tetap konsisten dengan Maroon ATK

Jangan mengarahkan semua URL salah ke homepage menggunakan soft-404.

---

# 38. VERCEL & URL

Karena terdapat:

```text
vercel.json
```

pastikan deployment menghasilkan URL yang konsisten.

Periksa:

```text
HTTPS
Canonical domain
Redirect HTTP → HTTPS
Redirect domain alternatif → domain utama
URL trailing slash
404 handling
```

Jangan membuat redirect chain yang panjang.

---

# 39. CORE WEB VITALS & PERFORMANCE

Prioritas performa:

### LCP

Optimalkan gambar hero:

```text
gambar_hero_beranda.webp
hero_beranda.webp
herogeser-*.webp
```

Jangan memuat semua gambar hero besar jika tidak diperlukan.

### CLS

Tetapkan dimensi gambar agar layout tidak bergeser.

### INP

Kurangi JavaScript yang tidak diperlukan.

Website statis Maroon ATK sebaiknya mempertahankan JavaScript seminimal mungkin.

---

# 40. JAVASCRIPT

File:

```text
/assets/js/script.js
```

boleh digunakan untuk interaksi UI.

Namun:

**Konten inti tidak boleh bergantung pada JavaScript.**

Konten berikut harus tersedia langsung di HTML:

- H1
- deskripsi produk
- spesifikasi
- artikel
- FAQ
- internal link
- CTA utama

JavaScript hanya menangani enhancement seperti:

- menu mobile
- slider
- interaksi UI
- filter yang tidak menghilangkan konten inti
- tombol tertentu

---

# 41. STRUKTUR HTML SEMANTIK

Gunakan elemen:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Contoh halaman artikel:

```html
<main>
  <article>
    <header>
      <h1>...</h1>
    </header>

    <section>
      <h2>...</h2>
      <p>...</p>
    </section>
  </article>

  <aside>
    <h2>Artikel Terkait</h2>
  </aside>
</main>
```

---

# 42. STRATEGI KEYWORD

Jangan membangun website berdasarkan daftar keyword semata.

Gunakan tiga lapisan:

## Primary keyword

Topik utama halaman.

## Secondary keyword

Variasi pencarian yang masih relevan.

## Entity / semantic terms

Istilah yang membantu mesin memahami konteks.

Contoh:

```text
Primary:
interactive flat panel

Secondary:
IFP 65 inch
layar interaktif
interactive display
smart board

Semantic:
4K
touchscreen
ruang meeting
kelas digital
kolaborasi
presentasi
```

---

# 43. SEARCH INTENT

Sebelum membuat halaman/artikel, tentukan intent.

| Intent | Contoh | Target |
|---|---|---|
| Informational | Apa itu IFP? | Blog |
| Commercial Research | IFP vs proyektor | Blog |
| Transactional | Beli IFP 65 inch | Detail produk |
| Category | Supplier furniture kantor | Kategori |
| Local | Supplier ATK dekat saya | Local/Business presence |
| Brand | Maroon ATK | Homepage |

Jangan memaksa halaman produk menjawab pertanyaan yang seharusnya dijawab artikel.

---

# 44. PROGRAMMATIC SEO — JANGAN BERLEBIHAN

Dengan struktur statis saat ini, jangan membuat ratusan halaman hanya dengan mengganti keyword.

Setiap halaman harus memiliki nilai unik.

Contoh:

```text
/meja-kantor
/meja-kantor-jakarta
/meja-kantor-banyuwangi
/meja-kantor-murah
/meja-kantor-terbaik
```

Jangan membuat semuanya jika kontennya hampir sama.

Lebih baik satu halaman kuat daripada banyak halaman tipis dan duplikatif.

---

# 45. STRATEGI KONTEN YANG SUDAH ADA

Artikel yang sekarang:

```text
digital-whiteboard-portable-untuk-pendidikan.html
interactive-flat-panel-untuk-rapat-modern.html
keunggulan-videotron-led-proyektor.html
panduan-memilih-supplier-atk.html
promo-paket-kantor-2026.html
prosedur-pengadaan-atk-instansi-pemerintah.html
tips-menata-furniture-kantor-produktif.html
```

dapat dipetakan:

| Artikel | Cluster | Intent |
|---|---|---|
| Digital Whiteboard Portable untuk Pendidikan | Teknologi | Informational |
| Interactive Flat Panel untuk Rapat Modern | Teknologi | Informational/Commercial |
| Keunggulan Videotron LED vs Proyektor | Teknologi | Comparison |
| Panduan Memilih Supplier ATK | ATK | Commercial Research |
| Promo Paket Kantor 2026 | Paket | Transactional |
| Prosedur Pengadaan ATK Instansi Pemerintah | Procurement | Informational |
| Tips Menata Furniture Kantor Produktif | Furniture | Informational |

---

# 46. CONTENT GAP BERIKUTNYA

Setelah artikel yang ada diperkuat, prioritas konten berikutnya:

### Teknologi

```text
Apa Itu Interactive Flat Panel?
IFP vs Proyektor: Mana yang Cocok untuk Ruang Meeting?
Cara Memilih Ukuran IFP untuk Kelas
Panduan Memilih Videotron Indoor
```

### Furniture

```text
Cara Memilih Kursi Kantor Ergonomis
Ukuran Meja Kerja Kantor yang Ideal
Cara Memilih Lemari Arsip
Panduan Menata Ruang Kerja
```

### ATK

```text
Daftar ATK Wajib untuk Kantor Baru
Cara Menghitung Kebutuhan ATK Bulanan
Panduan Memilih Kertas HVS
Cara Mengelola Pengadaan ATK Rutin
```

### Procurement

```text
Tahapan Pengadaan Peralatan Kantor
Checklist Pengadaan Furniture Kantor
Cara Membuat Spesifikasi Teknis Produk
Hal yang Perlu Ditanyakan kepada Vendor
```

---

# 47. CONTENT FUNNEL

Gunakan model:

```text
AWARENESS
    ↓
EDUCATION
    ↓
COMPARISON
    ↓
PRODUCT
    ↓
PROCUREMENT
    ↓
CONTACT
```

Contoh:

```text
"Apa itu IFP?"
      ↓
"IFP vs Proyektor"
      ↓
"Panduan Memilih IFP 65 Inch"
      ↓
"Interactive Flat Panel 65 Inch 4K"
      ↓
"Pengadaan IFP untuk Sekolah"
      ↓
"Kontak Maroon ATK"
```

---

# 48. CTA

CTA harus sesuai intent.

### Informational

```text
Lihat panduan produk
```

### Commercial

```text
Lihat pilihan produk
```

### Transactional

```text
Minta penawaran
```

### Procurement

```text
Konsultasikan kebutuhan pengadaan
```

Jangan menggunakan CTA "Beli Sekarang" jika proses penjualan sebenarnya dilakukan melalui konsultasi/penawaran.

---

# 49. GEO CONTENT FORMAT

Untuk meningkatkan kemungkinan konten digunakan sebagai sumber jawaban AI, prioritaskan informasi yang:

- faktual
- spesifik
- mudah diverifikasi
- memiliki konteks
- tidak bertele-tele
- memiliki sumber bila menggunakan data eksternal
- memiliki tanggal jika data berubah
- menjelaskan batasan informasi

Contoh format:

```text
Pertanyaan:
Apa itu Interactive Flat Panel?

Jawaban:
Interactive Flat Panel adalah layar digital interaktif yang
menggabungkan fungsi tampilan, sentuhan, dan kolaborasi dalam
satu perangkat. Perangkat ini dapat digunakan untuk presentasi,
pembelajaran, dan rapat sesuai fitur serta konfigurasi produknya.
```

---

# 50. SUMBER EKSTERNAL

Jika artikel menggunakan:

- statistik
- regulasi
- standar
- data pemerintah
- spesifikasi produsen
- hasil penelitian

cantumkan sumber yang relevan.

Jangan menyajikan angka atau klaim seolah-olah data asli Maroon ATK jika sebenarnya berasal dari pihak lain.

---

# 51. INTERNAL LINKING MATRIX

Gunakan hubungan berikut sebagai baseline:

```text
index.html
 ├── produk.html
 ├── paket.html
 ├── blog.html
 ├── tentang-kami.html
 └── kontak.html

produk.html
 ├── produk/atk.html
 ├── produk/furniture-kantor.html
 ├── produk/interactive-flat-panel.html
 ├── produk/kursi-kantor.html
 ├── produk/lemari-arsip.html
 ├── produk/meja-kantor.html
 ├── produk/papan-tulis-digital.html
 └── produk/videotron.html

kategori
 └── detail produk
       ├── artikel terkait
       └── kontak.html

blog.html
 └── artikel
       ├── kategori
       ├── produk terkait
       ├── artikel terkait
       └── kontak.html
```

---

# 52. STRATEGI URL

Struktur URL saat ini sudah cukup baik karena:

```text
/produk/
/detail/
/blog/
```

memberikan konteks yang jelas.

Pertahankan URL yang sudah terindeks jika tidak ada alasan kuat untuk mengubahnya.

Jika URL harus berubah:

```text
URL LAMA
   ↓
301 Redirect
   ↓
URL BARU
```

Jangan mengubah slug hanya demi memasukkan keyword tambahan jika URL lama sudah memiliki performa dan backlink.

---

# 53. SEO CHECKLIST PER HALAMAN

Setiap halaman baru harus diperiksa:

```text
[ ] URL jelas
[ ] Title unik
[ ] Meta description unik
[ ] Canonical benar
[ ] H1 jelas
[ ] Heading terstruktur
[ ] Konten utama tersedia di HTML
[ ] Internal link
[ ] Breadcrumb bila relevan
[ ] Image alt
[ ] Gambar teroptimasi
[ ] CTA
[ ] Structured data bila relevan
[ ] Tidak ada broken link
[ ] Tidak ada konten duplikat
[ ] Mobile friendly
```

---

# 54. AEO CHECKLIST PER ARTIKEL

```text
[ ] Pertanyaan utama terjawab di awal
[ ] Jawaban singkat tersedia
[ ] Heading berbentuk pertanyaan jika relevan
[ ] Tabel digunakan jika membantu
[ ] List digunakan jika membantu
[ ] FAQ relevan
[ ] Data faktual jelas
[ ] Sumber eksternal dicantumkan bila diperlukan
[ ] Author jelas
[ ] datePublished benar
[ ] dateModified benar
[ ] Artikel terkait
[ ] Produk terkait
[ ] CTA
```

---

# 55. GEO CHECKLIST

```text
[ ] Nama Maroon ATK konsisten
[ ] Informasi bisnis konsisten
[ ] Website resmi konsisten
[ ] Profil bisnis tersedia
[ ] Review nyata
[ ] Mention pihak ketiga yang relevan
[ ] Digital PR bila relevan
[ ] Konten informatif tersedia
[ ] Data produk jelas
[ ] Tidak ada klaim palsu
[ ] Tidak melakukan spam mention
```

---

# 56. PRIORITAS IMPLEMENTASI

Jangan mengerjakan semuanya sekaligus.

## PHASE 1 — TECHNICAL FOUNDATION

Prioritas:

```text
1. Pastikan semua URL utama dapat diakses.
2. Periksa title.
3. Periksa meta description.
4. Periksa canonical.
5. Periksa H1.
6. Periksa sitemap.xml.
7. Periksa robots.txt.
8. Periksa 404.
9. Periksa internal links.
10. Optimalkan gambar.
```

## PHASE 2 — PRODUCT SEO

```text
1. Optimalkan produk.html.
2. Optimalkan semua halaman produk/.
3. Optimalkan semua halaman detail/.
4. Tambahkan Product schema yang valid.
5. Hubungkan kategori ↔ detail produk ↔ artikel.
```

## PHASE 3 — AEO

```text
1. Perbaiki artikel lama.
2. Tambahkan direct answer.
3. Tambahkan FAQ relevan.
4. Tambahkan tabel perbandingan.
5. Tambahkan data tanggal dan author.
6. Tambahkan Article schema.
```

## PHASE 4 — TOPICAL AUTHORITY

```text
1. Lengkapi cluster ATK.
2. Lengkapi cluster Furniture.
3. Lengkapi cluster Teknologi.
4. Lengkapi cluster Procurement.
5. Bangun internal linking antarcluster.
```

## PHASE 5 — GEO

```text
1. Konsistensi entity.
2. Google Business Profile bila memenuhi syarat.
3. Profil bisnis.
4. Review pelanggan.
5. Digital PR.
6. Referensi pihak ketiga yang relevan.
```

---

# 57. PRIORITAS BERDASARKAN DAMPAK

| Prioritas | Pekerjaan | Dampak |
|---|---|---|
| P0 | Indexability & technical SEO | Sangat tinggi |
| P0 | Struktur halaman produk | Sangat tinggi |
| P0 | Internal linking | Sangat tinggi |
| P0 | Sitemap & canonical | Tinggi |
| P1 | Konten kategori | Tinggi |
| P1 | Optimasi artikel | Tinggi |
| P1 | Structured data | Menengah–tinggi |
| P1 | Image SEO | Menengah |
| P2 | Entity consistency | Tinggi |
| P2 | Review nyata | Tinggi |
| P2 | Digital PR | Menengah–tinggi |
| P3 | Eksperimen GEO | Menengah |

---

# 58. MEASUREMENT FRAMEWORK

Jangan hanya mengukur jumlah pengunjung.

Gunakan empat kelompok metrik.

## A. Visibility

- Impressions
- Average position
- Query coverage
- Indexed pages

## B. Organic Traffic

- Organic sessions
- Landing pages
- CTR
- Branded search

## C. Engagement

- Engagement rate
- Scroll depth bila tersedia
- CTA clicks
- Product page visits

## D. Business

- WhatsApp clicks
- Form submissions
- Request for quotation
- Lead qualified
- Conversion

---

# 59. AI / AEO / GEO MONITORING

Buat daftar query uji yang sama dan lakukan pengujian secara berkala.

Contoh:

```text
supplier ATK terpercaya
supplier furniture kantor
vendor furniture kantor
supplier peralatan kantor
supplier IFP sekolah
vendor interactive flat panel
supplier videotron
pengadaan ATK kantor
supplier ATK untuk instansi
vendor smart meeting room
```

Catat:

```text
Tanggal
Platform
Query
Apakah Maroon ATK disebut?
Apakah website dikutip?
Kompetitor yang muncul
Sumber yang digunakan AI
Catatan
```

**Jangan menganggap satu kali hasil AI sebagai ranking permanen.** Jawaban generatif dapat berubah berdasarkan waktu, lokasi, model, konteks, dan sumber yang tersedia.

---

# 60. ATTRIBUTION LEAD

Tambahkan pertanyaan pada kontak/form jika sistem lead memang mendukung:

```text
Bagaimana Anda mengetahui Maroon ATK?
```

Pilihan:

```text
Google
Google Maps
Instagram
TikTok
Rekomendasi
Website
Asisten AI
Lainnya
```

Jika belum memiliki form, CTA WhatsApp dapat menggunakan pesan pembuka yang membantu atribusi.

Contoh:

```text
Halo Maroon ATK, saya ingin berkonsultasi mengenai pengadaan...
```

---

# 61. STRATEGI BRAND SEARCH

Tujuan jangka panjang bukan hanya ranking:

```text
"supplier ATK"
```

tetapi juga membangun:

```text
"Maroon ATK"
"Maroon ATK supplier"
"Maroon ATK furniture"
"Maroon ATK pengadaan"
```

Semakin jelas brand entity terbentuk, semakin mudah mesin memahami hubungan antara:

```text
Maroon ATK
        ↓
Supplier / Vendor / Distributor
        ↓
ATK + Furniture + Teknologi
```

---

# 62. HAL YANG HARUS DIHINDARI

Jangan:

```text
❌ Keyword stuffing
❌ Artikel AI massal tanpa editing
❌ Review palsu
❌ Backlink spam
❌ Hidden text
❌ Cloaking
❌ Doorway pages
❌ Halaman kota yang isinya sama
❌ Data produk palsu
❌ Schema markup yang tidak sesuai halaman
❌ FAQ fiktif
❌ Klaim "terbaik/termurah" tanpa bukti
❌ Mengubah tanggal artikel tanpa perubahan nyata
❌ Membuat ratusan halaman tipis
```

---

# 63. TARGET AKHIR WEBSITE

Website Maroon ATK harus berkembang dari:

```text
WEBSITE KATALOG
```

menjadi:

```text
SEARCHABLE PROCUREMENT KNOWLEDGE HUB
```

yang memiliki hubungan:

```text
BRAND
  ↓
CATEGORY
  ↓
PRODUCT
  ↓
ARTICLE
  ↓
SOLUTION / PACKAGE
  ↓
PROCUREMENT
  ↓
CONTACT
```

Dengan begitu, pengguna dapat masuk dari berbagai titik:

```text
Google
AI
Google Maps
Artikel
Produk
Referral
Social Media
```

dan akhirnya menemukan solusi pengadaan Maroon ATK.

---

# 64. MASTER BLUEPRINT

```text
                         MAROON ATK
                              │
             ┌────────────────┼────────────────┐
             │                │                │
            SEO              AEO              GEO
             │                │                │
       Technical SEO     Answer First     Entity
       Indexability      FAQ              Reviews
       Internal Link     Tables           Mentions
       Performance       Definitions      PR
             │                │                │
             └────────────────┼────────────────┘
                              │
                       TOPICAL AUTHORITY
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
         ATK              FURNITURE          TECHNOLOGY
          │                   │                   │
          └───────────────────┼───────────────────┘
                              │
                         PROCUREMENT
                              │
                    ┌─────────┴─────────┐
                    │                   │
                  PAKET              PRODUK
                    │                   │
                    └─────────┬─────────┘
                              │
                           KONTAK
                              │
                             LEAD
```

---

# 65. KESIMPULAN

Struktur website Maroon ATK saat ini sudah memiliki fondasi yang baik untuk dikembangkan menjadi website B2B yang kuat secara SEO karena telah memisahkan:

```text
Homepage
Corporate
Product Hub
Category
Product Detail
Package
Blog
Contact
```

Prioritas berikutnya bukan menambah sebanyak mungkin halaman, melainkan **memperkuat hubungan antarhalaman dan kualitas informasi**.

Fokus utama:

1. Pastikan seluruh halaman penting dapat di-crawl dan di-index.
2. Jadikan setiap kategori sebagai landing page yang benar-benar informatif.
3. Jadikan setiap detail produk sebagai sumber spesifikasi yang jelas.
4. Jadikan blog sebagai pusat pengetahuan, bukan sekadar kumpulan artikel.
5. Gunakan format Answers First untuk pertanyaan penting.
6. Bangun internal linking berbasis hubungan topik dan search intent.
7. Gunakan structured data hanya ketika sesuai dengan konten nyata.
8. Bangun entity Maroon ATK secara konsisten.
9. Kembangkan validasi pihak ketiga secara natural.
10. Ukur SEO, AEO, GEO, dan hasil bisnis secara terpisah.

### Prinsip paling penting

> **Jangan membuat website hanya agar terlihat SEO-friendly. Bangun website yang benar-benar paling membantu calon pembeli memahami produk, membandingkan pilihan, dan mengambil keputusan pengadaan.**

SEO membantu pengguna menemukan Maroon ATK.

AEO membantu pengguna mendapatkan jawaban dari konten Maroon ATK.

GEO membantu ekosistem pencarian generatif memahami dan mempertimbangkan Maroon ATK.

Dan seluruhnya harus bermuara pada satu tujuan:

**Maroon ATK menjadi sumber informasi dan solusi pengadaan yang jelas, relevan, dapat dipercaya, dan mudah dihubungi.**
