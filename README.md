| Nama                  | NRP        | Kelas               |
| --------------------- | ---------- | ------------------- |
| Ahmad Satrio Arrohman | 5025241061 | Pemrograman Web - B |
| Ahsin Khuluqil Karim  | 5025241063 | Pemrograman Web - B |
| Liem, Alfred Haryanto | 5025241100 | Pemrograman Web - B |

# ConnectIn Application

## Laporan Proyek

## 1. Frontend & Backend Development

a. Frontend Development

Frontend Development kami dimulai dengan membuat mock-up an sederhana yang menjadi dasar dari bentuk antarmuka aplikasi yang kami buat dengan memanfaatkan HTML, CSS, Javascript dan juga framework Bootstrap. Antar halaman kami pisah menggunakan file sehingga ketika pengguna mengakses URL atau path lain maka pengguna tersebut juga berganti halaman, tidak seperti SPA atau Single-Page App.

HTML digunakan untuk membuat kerangka dasar dari tampilan antarmuka web kami yang kemudian dikombinasikan dengan CSS dan framework Bootstrap dan terdapat banyak sekali Javascript karena dilakukannya kustomisasi pemanggilan komponen per-page.

Bagian Front-End kami tergabung dalam kata "V" yang berarti View yang merupakan salah satu bagian dari arsitektur perangkat lunak yang tidak kalah populer yakni "MVC" atau memiliki kepanjangan Model, View dan Controller.

b. Backend Development

Backend Development disini kami menggunakan konsep MVC dan API-based untuk komunikasi antara server dan client. Penggunaan API-based bertujuan agar pada file yang menampilkan sisi Front-End tidak langsung bersinggungan dengan Back-End atau secara sederhana, kami mencoba memisahkan peran Server yang hanya digunakan untuk penyajian, pengolahan dan pusat logika bisnis aplikasi. Sedangkan untuk sisi Interface atau Front-End menggunakan utilitas hampir non-PHP yakni dengan menggunakan Vanilla Javascript untuk melakukan prosedur pemanggilan "API".

API = Application Programming Interface, berarti server kami akan terdapat endpoint yang hanya dikhususkan untuk hit endpoint API yang hanya akan menerima dan/atau mengembalikan data baik dari/menuju Server.

Karena menggunakan arsitektur MVC maka dari kami memutuskan untuk mempermudah development menggunakan versi OOP dari PHP untuk memudahkan pengelolaan kode dan logika bisnis dan juga agar terlihat pemisahan fungsi antara M, V, dan C. Kemudian juga menggunakan package manager yang didukung oleh PHP yakni Composer untuk dapat menggunakan PSR-4 yang sangat berguna untuk kemudahan development.

## 2. Database Implementation

Database kami terdiri dari 8 tabel yang berbeda yang masing-masing memiliki fungsi dan perannya masing-masing, seperti yang ada pada gambar PDM atau Physical Data Model yang menggambarkan relasi-relasi serta properti yang dimilliki oleh setiap tabel. Terdapat 1 tabel lagi namun hanya digunakan sebagai tabel intermedit.

![](./img/db1.png)
![](./img/db2.png)
![](./img/db3.png)
![](./img/db4.png)

Penjelasan singkat tiap tabel

- Users -> menampung data user seperti username, placeholder, password, api_token
- Jobs -> tabel utama penyimpanan data pekerjaan yang diperoleh melalui API eksternal
- Locations -> tabel untuk menyimpan data lokasi
- Companies -> tabel untuk menyimpan data sebuah perusahaan (logo, nama, website)
- Job_Sources -> tabel yang berisi entri data yang menunjukkan asal data diambil (seperti JSearch)
- Categories -> tabel untuk menyimpan kategori-kategori pekerjaan
- User Profiles -> tabel untuk menyimpan data user (placeholder, avatar, bio, last education)
- User Job History -> tabel untuk menyimpan data histori pekerjaan suatu user

## 3. Integrasi API

Integrasi API dilakukan dengan menggunakan API Fetch yang berasal dari Javascript sebagai Requester dan Server PHP yang akan listen secara terus menerus koneksi HTTP yang dibuat oleh Requester dan mengembalikan Response berupa data JSON atau data HTML (View).

Integrasi API juga dilakukan dengan menggunakan layanan OAuth dari google untuk memudahkan proses login tanpa harus membuat akun baru secara manual. API eksternal lain yang juga diintegrasikan adalah GeoFetch API untuk mendapatkan alamat atau tempat suatu entri pekerjaan yang tidak lengkap datanya dan juga penggunaan JSearch API untuk fetch data Job API baru-baru ini.

## Testing

1. Pengujian Login dan Register Manual

2. Pengujian Login dan Register menggunakan OAuth

3. Uji Infinite Scroll selama data ada di Database

4. Uji untuk melihat detail suatu pekerjaan

5. Uji untuk menambahkan pekerjaan kedalam preferensi (ditambahkan ke Application / List untuk Aplikasi Pekerjaan)

6. Uji untuk Menambah Pekerjaan secara manual (Admin)

7. Uji Menghapus dan Edit Data Pekerjaan (Admin)

8. Uji Mengganti data profil User (Admin dan Pengguna Biasa)

9. Uji Moderasi Admin (Manajemen User)

10. Uji Logout

11. Uji Populate Data dari API (Admin)

## Diagram Sistem

## User Guide

Pengguna pertama akan disuguhkan dengan halaman login atau register dimana pengguna akan diminta untuk membuat akun dan memasukkan akun. Atau secara alternatif menggunkaan layanan OAuth Google.

Setelah pengguna masuk aplikasi, pengguna dapat langsung melihat daftar-daftar pekerjaan beserta detailnya, kemudian terdapat tombol untuk menambahkan suatu pekerjaan ke daftar wishlist atau wish application nya.

Pengguna kemudian dapat merubah placeholder, bio, riwayat pendidikan paling terakhir dan mengganti avatar.

Pengguna kemudian dapat melakukan un-save pada pekerjaan yang sudah di-save atau masuk kedalam wishlist melalui dashboard user yang dapat diakses pada sidebar di panel kiri.

Pengguna dapat mencari pekerjaan menggunakan fitur search yang ada pada main page dengan mengetikkan keyword.

## Pembagian Jobdesk

| Nama                  | NRP        | Jobdesk          |
| --------------------- | ---------- | ---------------- |
| Ahmad Satrio Arrohman | 5025241061 | Backend          |
| Ahsin Khuluqil Karim  | 5025241063 | Frontend         |
| Liem, Alfred Haryanto | 5025241100 | UI/UX & Frontend |
