# Praktikum 5 — JavaScript Dasar dan Manipulasi HTML

## Identitas Mahasiswa
- Nama: [Nama kamu]
- NIM: [NIM kamu]
- Program Studi: Teknik Informatika
- Mata Kuliah: Pemrograman Web
- Praktikum: 5

## A. Tujuan Praktikum
1. Memahami dasar JavaScript.
2. Menggunakan variabel, operator, percabangan, perulangan, dan function.
3. Menampilkan output menggunakan Console, alert, prompt, dan HTML.
4. Memanipulasi elemen HTML menggunakan DOM.
5. Membuat form dan melakukan validasi input.

## B. Latihan Praktikum

### Latihan 1 — Menampilkan Output
Tujuan: Menampilkan teks pada halaman HTML dan Console.

Hasil: Teks Hello World berhasil ditampilkan.

Screenshot: `Screenshot 2026-10-20 204130.png`

### Latihan 2 — Alert dan Prompt
Tujuan: Meminta nama pengguna dan menampilkan pesan sapaan.

Hasil: Program menampilkan sapaan berdasarkan nama yang dimasukkan.

Screenshot: `Screenshot 2026-10-20 204251.png`

### Latihan 3 — Function dan Operasi Aritmetika
Tujuan: Menghitung penjumlahan, pengurangan, perkalian, pembagian, dan modulus.

Hasil: Operasi aritmetika ditampilkan pada Console.

Screenshot: `Screenshot 2026-10-20 204937.png`

### Latihan 4 — Percabangan If-Else
Tujuan: Menentukan status kelulusan berdasarkan nilai.

Hasil: Nilai minimal 60 dinyatakan lulus.

Screenshot: `Screenshot 2026-10-20 205055.png`

### Latihan 5 — Percabangan Switch
Tujuan: Menampilkan nama bilangan berdasarkan pilihan angka 1–5.

Hasil: Program menampilkan nama bilangan sesuai pilihan.

Screenshot:  `Screenshot 2026-10-20 205153.png`

### Latihan 6 — Bilangan Genap atau Ganjil
Tujuan: Memeriksa apakah bilangan termasuk genap atau ganjil.

Hasil: Program menampilkan hasil pemeriksaan bilangan.

Screenshot: `Screenshot 2026-10-20 205352.png`

### Latihan 7 — Mengubah Warna Halaman
Tujuan: Mengubah warna latar halaman menggunakan tombol.

Hasil: Warna latar berubah sesuai tombol yang dipilih.

Screenshot:  `Screenshot 2026-10-20 205530.png`

### Latihan 8 — Checkbox Menu Makanan
Tujuan: Menghitung total harga berdasarkan menu yang dipilih.

Hasil: Total harga berubah sesuai pilihan checkbox.

Screenshot: `Screenshot 2026-10-20 210030.png`

## C. Mini Project — Kalkulator Nilai Mahasiswa

Tujuan: Menghitung nilai akhir mahasiswa berdasarkan:
- Tugas: 30%
- UTS: 30%
- UAS: 40%

Program menentukan predikat A–E dan status kelulusan.

Rumus:
Nilai Akhir = (Tugas × 30%) + (UTS × 30%) + (UAS × 40%)

Hasil pengujian:
1. Tugas 85, UTS 78, UAS 88 → Nilai akhir 84,10, predikat B, Lulus.
2. Tugas 50, UTS 55, UAS 60 → Nilai akhir 55,00, predikat D, Belum lulus.
3. Tugas 90, UTS 90, UAS 90 → Nilai akhir 90,00, predikat A, Lulus.

Screenshot: `Screenshot 2026-10-21 084304.png`
`Screenshot 2026-10-21 084329.png`
`Screenshot 2026-10-21 084351.png`

## D. Eksperimen Mandiri

Eksperimen mandiri dilakukan untuk memperdalam pemahaman JavaScript melalui enam percobaan yang digabungkan dalam satu halaman HTML dan satu file JavaScript.

### 1. Input Dua Bilangan
Menggunakan `prompt()` untuk menerima dua angka, kemudian mengonversinya menjadi tipe data `number`. Program menghitung penjumlahan, pengurangan, perkalian, pembagian, dan modulus. Input yang tidak valid ditangani dengan pesan peringatan.

### 2. Tabel Perkalian 7
Menggunakan perulangan `for` untuk menampilkan tabel perkalian angka 7 dari 1 sampai 10 pada halaman HTML.

### 3. Function Cek Bilangan Genap
Membuat function `cekGenap(angka)` yang mengembalikan nilai `true` jika bilangan genap dan `false` jika bilangan ganjil. Input diperiksa agar berupa bilangan bulat yang valid.

### 4. Validasi Form
Membuat form nama dan nilai mahasiswa. Program memeriksa agar kolom tidak kosong dan nilai berada pada rentang 0–100.

### 5. Penambahan Pilihan Menu
Menambahkan dua pilihan menu makanan beserta harga pada latihan checkbox. Total harga dihitung otomatis berdasarkan menu yang dipilih.

### 6. Menyembunyikan dan Menampilkan Elemen HTML
Menggunakan tombol untuk menyembunyikan atau menampilkan teks pada halaman melalui manipulasi DOM.

### Hasil Eksperimen
Keenam eksperimen berhasil digabungkan dalam satu halaman HTML dengan JavaScript eksternal. Setiap eksperimen dapat dijalankan melalui tombol atau input yang tersedia pada halaman.

Screenshot hasil seluruh eksperimen: `screenshots/Screenshot 2026-10-21 091134.png`


## E. Cara Menjalankan
1. Unduh atau clone repository ini.
2. Buka folder proyek menggunakan Visual Studio Code.
3. Buka file HTML sesuai latihan atau eksperimen yang ingin dijalankan.
4. Jalankan file HTML pada browser.
5. Buka Console menggunakan Inspect → Console jika diperlukan.

## F. Kesimpulan
Praktikum ini memberikan pemahaman dasar tentang JavaScript, operasi aritmetika, percabangan, function, perulangan, manipulasi DOM, dan validasi form.
