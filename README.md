<div align="center">
  <h1>	SOFTWARE REQUIREMENTS SPECIFICATION </h1>
  <h1>	TUBAN SCAPE </h1>
  <h2>	Disusun Oleh : </h2>
  <p>	 Verani Fajrin Triana - 22091397018 </p>
  <p>	 Kartika Felicia - 22091397023 </p>
  <p>	 Khofifah Wulandari - 22091397034 </p>
  <h3>	PRODI D4 MANAJEMEN INFORMATIKA </h>
  <h3>	FAKULTAS VOKASI </h>
  <h3>	UNIVERSITAS NEGERI SURABAYA </h>
  <h3>	2023 </h>
</div>

## Daftar Isi

- [BAB 1](#BAB-1)
- [PENDAHULUAN](#PENDAHULUAN)

- [1.1. Tujuan](#11-Tujuan)
- [1.2. Konveksi Dokumen](#12-Konveksi-Dokumen)
- [1.3. Audiens yang Dituju](#13-Audiens-yang-Dituju)
- [1.4. Lingkup Produk](#14-Lingkup-Produk)
- [1.5. Referensi](#15-Referensi)

- [BAB 2](#BAB-2)
- [DESKRIPSI KESELURUHAN](#DESKRIPSI-KESELURUHAN)

- [2.1. Perspektif Produk](#21-Perspektif-Produk)
- [2.2. Fungsi Produk](#22-Fungsi-Produk)
- [2.3. Kelas dan Karakteristik Pengguna](#23-Kelas-dan-Karakteristik-Pengguna)
- [2.4. Lingkungan Pengembangan](#24-Lingkungan-Pengembangan)
- [2.5. Kendala Desain dan Implementasi](#Kendala-Desain-dan-Implentasi)
- [2.6. Dokumentasi Pengguna](#Dokumentasi-Pengguna)
- [2.7. Asumsi dan Ketergantungan](#Asumsi-dan-Ketergantungan)

- [BAB 3](#BAB-3)
- [PERSYARATAN ANTARMUKA](#PERSYARATAN-ANTARMUKA)

- [3.1. ANTARMUKA PENGGUNA](#31-Antarmuka-Pengguna)
- [3.2. ANTARMUKA HARDWARE](#32-Antarmuka-Hardware)
- [3.3. USER INTERFACE](#33-User-Interface)

- [BAB 4](#BAB-4)
- [FITUR](#FITUR)

- [4.1. Deskripsi dan Prioritas](#41-Deskripsi-dan-Prioritas)
- [4.1.1. Fitur Homepage](#411-Fitur-Homepage)
- [4.1.2. Fitur Discover](#412-Fitur-Discover)
- [4.1.3. Fitur About](#413-Fitur-About)

- [4.2. Fitur Sistem](#42-Fitur-Sistem)
- [4.2.1. Fitur Pencarian](421-Fitur-Pencarian)
- [4.2.2. Fitur Database Destinasi](#422-Fitur-Database-Destinasi)
- [4.2.3. Fitur Rekomendasi](#423-Fitur-Rekomendasi)
- [4.2.4. Fitur Sistem Ulasan](#424-Fitur-Sistem-Ulasan)
- [4.2.5. Fitur Integrasi Media Sosial](425-Fitur-Integrasi-Media-Sosial)
- [4.2.6. Fitur Pengelolaan Gambar](#426-Fitur-Pengelolaan-Gambar)
- [4.2.7. Fitur Integrasi Google Maps](#427-Fitur-Integrasi-Google)

- [BAB 5](#BAB-5)
- [PERSYARATAN FUNGSIONAL](#PERSYARATAN-FUNGSIONAL)

- [5.1. Use Case](#51-Use-Case)
- [5.2. Flowchart](#52-Flowchart)
- [5.2.1. Flowchart User](#521-Flowchart-User)
- [5.2.2. Flowchart Admin](#522-Flowchart-Admin)
- [5.3. Persyaratan Perfoma](#53-Persyaratan-Perfoma)
- [5.3.1. Persyaratan Hardware](#531-Persyaratan-Hardware)
- [5.3.2. Persyaratan Software](#532-Persyaratan-Software)
- [5.4. Persyaratan Keamanan Pengguna](#54-Persyaratan-Keamanan-Pengguna)
- [5.5. Persyaratan Keamanan Website](#55-Persyaratan-Keamanan-Website)
- [5.6. Proses Bisnis](#56-Proses-Bisnis)

- [BAB 6](#BAB-6)
- [PENJELASAN HTML DAN CSS](#PENJELASAN-HTML-DAN-CSS)

- [6.1. HTML](61-HTML)
- [6.1.1. Index HTML](#611-Index-HTML)
- [6.1.2. Discover HTML](#612-Discover-HTML)
- [6.1.3. About HTML](#613-About-HTML)
- [6.1.4. Gallery HTML](#614-Gallery-HTML)
- [6.2. CSS](#62-CSS)
- [6.2.1. Style CSS](#621-Style-CSS)
- [6.2.2. Discover CSS](#622-Discover-CSS)
- [6.2.3. GalleryStyle CSS](#623-GalleryStyle-CSS)
- [6.3. JavaScript](#63-JavaScript)

<div align="center">
  
## BAB 1

## PENDAHULUAN

</div>

## 1.1. Tujuan

Indonesia menawarkan pengalaman wisata yang tak terlupakan bagi para pengunjung. Terdapat beragam wisata dengan     pesona keindahan alam yang memukau, serta kaya akan warisan budaya. Hal tersebut menjadi salah satu alasan mengapa Indonesia menjadi tujuan destinasi wisata yang sangat populer di seluruh dunia. Sebuah destinasi wisata sukses     karena berhasil menonjolkan identitas yang membuatnya berbeda sehingga lebih dikenal oleh wisatawan. Untuk itu, kami menciptakan website “Tuban Scape” yang bertujuan untuk memberikan informasi dan pengalaman kepada pengguna seputar destinasi dan kegiatan wisata di Kabupaten Tuban, Jawa Timur. Website ini berfungsi sebagai platform yang luar biasa untuk mempromosikan potensi pariwisata dan budaya Kabupaten Tuban, Jawa Timur, kepada dunia.

Letak kota Tuban yang sangat strategis berada di jalur utama pantura membuatnya sangat tepat jika dijadikan         sebagai rujukan tempat wisata. Dengan adanya website ini, diharapkan pengguna dapat merencanakan perjalanan wisata  mereka di Tuban dengan optimal, mudah dan menyenangkan. |Tuban merupakan sebuah kota tua yang mengalami timbul tenggelam dalam perjalanan sejarahnya. Tuban juga dikenal sebagai Kota Wali karena menjadi tempat penyebaran agama Islam oleh para Wali Songo, seperti Sunan Bonang, Sunan Bejagung, dan Syekh Maulana Ibrahim Asmaraqandi. Selain itu, Tuban juga memiliki berbagai objek wisata alam yang menarik, seperti pantai, gua, air terjun, hutan mangrove, dan taman nasional.

Website “Tuban Scape” akan menyajikan informasi lengkap tentang lokasi, fasilitas, dan deskripsi wisata di          Tuban. Website ini juga akan menampilkan foto-foto dan video-video tentang pesona Tuban dari berbagai sudut         pandang. Selain itu, website ini juga akan menyediakan fitur-fitur interaktif yang dapat meningkatkan kenyamanan    dan kepuasan pengguna, seperti rating dan ulasan.

## 1.2. Koveksi Dokumen

Website Tubanscape, memberikan berbagai manfaat kepada pengguna yang mencari informasi tentang tempat wisata       diTuban. Berikut adalah beberapa fungsi yang dapat diimplementasikan :
1. Wisatawan dapat mencari dan memilih wisata rekomendasi di Tuban
2. Wisatawan dapat mencari wisata yang paling populer di Tuban
3. Wisatawan dapat memilih harga wisata yang sesuai dengan anggaran mereka
4. Wisatawan dapat memilih lokasi wisata yang paling dekat atau jauh dari lokasi mereka
5. Sistem dapat merekomendasikan wisata pada wisatawan berdasrkan hasil pencarian mereka

## 1.3. Audiens yang Dituju

Audiens yang dituju pada website “Tuban Scape” adalah wisatawan lokal dan internasional yang tertarik untuk         menjelajahi keindahan dan budaya di kota Tuban. Website ini bertujuan untuk memberikan informasi dan pengalaman     kepada pengguna seputar destinasi dan kegiatan wisata di Kabupaten Tuban, Jawa Timur. Website ini diharapkan bisa   meningkatkan minat dan kunjungan wisatawan ke kota Tuban, serta memberikan dampak positif bagi perekonomian dan     pembangunan kota Tuban. Website ini akan menjadi sumber utama informasi wisata bagi wisatawan lokal dan             internasional yang tertarik untuk menjelajahi keindahan dan budaya Tuban.

## 1.4. Lingkup Produk

Ruang lingkup dari sebuah website Tuban Scape dapat mencakup berbagai aspek yang terkait dengan pariwisata di       wilayah tersebut. Berikut adalah beberapa komponen yang bisa termasuk dalam ruang lingkup website Tuban Scape :
1. Wisata
2. Hiburan
3. Lokasi
4. Ulasan
                  
## 1.5. Referensi

Bhayu Rama, Ph.D. Tata Kelola Destinasi Wisata: dan Peraturan Perundangan Pariwisata. PT Kanisius, 2020,            https://books.google.co.id/books?                                             id=hqH6DwAAQBAJ&lpg=PR3&ots=bMbaKT5WNs&dq=destinasi%20wisata%20indonesia&lr&hl=id&pg=PR3-                           IA5#v=onepage&q=destinasi%20wisata%20indonesia&f=false. |

Samuel Hartono, and Handinoto. ALUN-ALUN DAN REVITALISASI IDENTITAS KOTA TUBAN, vol. 33.                            http://dimensi.petra.ac.id/index.php/ars/article/view/16353.

<div align="center">
  
## BAB 2

## DESKRIPSI KESELURUHAN

</div>

## 2.1. Perspektif Produk

Tuban Scape memiliki nilai unik yang membedakannya dari banyak website sejenis. Dengan fokus eksklusif pada         destinasi wisata di Tuban, kami memberikan pengalaman yang sangat spesifik dan mendalam bagi pengguna yang ingin    menjelajahi keindahan dan pesona kota ini. Keunikan ini adalah salah satu aspek yang membedakan Tuban Scape dari    website lainnya.

Selain itu, Tuban Scape memberikan tampilan website yang segar dan menarik, sehingga pengguna tidak hanya           mendapatkan informasi yang berguna, tetapi juga merasakan kenyamanan dan kesenangan dalam menjelajahi destinasi     Tuban. Tuban Scape juga user-friendly, sehingga setiap orang dari wisatawan pemula hingga yang berpengalaman,       dapat dengan mudah menavigasi situs kami dan menemukan informasi yang mereka butuhkan.

## 2.2. Fungsi Produk

Website ini memiliki beberapa fungsi yaitu : Informasi Destinasi yang memberikan informasi rinci tentang tempat     tempat wisata, termasuk deskripsi, lokasi, fasilitas, harga tiket masuk dan jam operasional,  ulasan, dan           penilaian. Kemudian memudahkan pengguna untuk mencari wisata di Tuban yang paling populer. Lalu tampil website      Tuban Scape memberikan tampilan website yang menarik, sehingga pengguna merasakan kenyamanan dan kemudahan dalam    menjelajahi destinasi Tuban.

## 2.3. Kelas dan Karakteristik Pengguna

Tuban Scape memiliki beberapa kelas pengguna yang mungkin menggunakan produk ini, berikut beserta                   karakteristiknya: 
1. Wisatawan → Wisatawan menggunakan website untuk mencari informasi rinci tentang tempat-tempat wisata, termasuk deskripsi, lokasi, fasilitas, harga tiket masuk dan jam operasional,  ulasan, dan penilaian.
2. Admin → Pihak yang bertanggung jawab atas pengelolaan website, seperti memperbarui fitur memperbarui tempat wisata dan memantau sistem website.

## 2.4. Lingkungan Pengembangan

Website Tuban Scape memiliki beberapa teknologi yang dipakai untuk mengembangkan website ini, antara lain :
A. Pemrograman :
   1. HTML : HyperText Markup Language
   2. CSS : Cascading Style Sheets.
B. Software Pengembangan :
   1. Visual Studio Code : Software Pemrograman
   2. Github : Publikasi dan Hosting
   3. Figma : Pengembangan antarmuka pengguna (UI) dan pengalaman pengguna (UX)

## 2.5. Kendala Desain dan Implementasi

Proses pengujian website Tuban Scape masih berlangsung, dan kami sedang berupaya mengatasi beberapa kendala         yang ditemukan selama pengembangan. Beberapa fitur mungkin belum berfungsi sepenuhnya karena masih dalam tahap     pembuatan, tetapi kami berkomitmen untuk memastikan bahwa semuanya akan berjalan dengan baik seiring berjalannya    waktu. Selain itu, kami juga tengah melakukan penyesuaian tampilan pada website Tuban Scape untuk memastikan        tampilan yang lebih baik, lebih menarik, dan lebih mudah digunakan oleh pengguna. Kami berusaha keras untuk         menyempurnakan setiap aspeknya sebelum kami resmi meluncurkan website ini.

## 2.6. Dokumentasi Pengguna

Dokumen SKPL ini dibagi menjadi beberapa bagian, yaitu :
1. Pendahuluan yang berisi gambaran umum dari seluruh dokumen SKPL. Yang berisikan tujuan penulisan dokumen, konvensi dokumen, pembaca yang dituju, lingkup produk, dan referensi
3. Deskripsi umum yang berisi penjelasan website secara umum. Dijelaskan melalui deskripsi umum, fungsi website,  karakteristik pengguna, batasan, lingkungan operasi.
4. Kebutuhan antarmuka eksternal merincikan deskripsi masukan dan keluaran website yang dispesifikasikan. Ada       berbagai macam antarmuka eksternal, antara lain : antarmuka pengguna, antarmuka perangkat keras, antarmuka         komunikasi.
5. Fungsi produk berisi fungsi utama dari website.
6. Kebutuhan non-fungsional berisi bagian yang menspesifikasikan ukuran kuantitatif yang harus dipenuhi perangkat  lunak.

## 2.7. Asumsi dan Ketergantungan

Asumsi :
1. Admin memiliki ototritas penuh dalam pendataan wisata
2. Admin harus mengetahui riset wisata dan deskripsinya.
3. Website ini merupakan website yang bisa di akses dimana saja dan sistem operasi device manapun.

Ketergantungan :
1. Ketergantungan pada internet yang membuat website ini dapat diakses jika terdapat koneksi internet saja.
2. Ketergantungan pada deskripsi tempat wisata pada website, seperti lokasi, harga tiket dan jam operasional

<div align="center">
  
## BAB 3

## PERSYARATAN ANTARMUKA

</div>

## 3.1. Antarmuka Pengguna

Tuban Scape menggusung konsep desain yang ramah untuk digunakan oleh pengguna. Navigasinya cukup mudah dan pengguna tidak akan kesulitan dalam berpindah halaman. Kombinasi warna yang dipilih dirancang dengan teliti, menciptakan tampilan yang nyaman di mata tanpa kesan norak.

## 3.2. Antarmuka Hardware

Antarmuka Perangkat Keras yang digunakan oleh Tuban Scape adalah Smartphone atau komunter untuk mengakses website Tuban Scape.

## 3.3. User Interface

A. Home
   ! [image](https://github.com/22091397023KartikaFelicia/TubanSpace/blob/main/photo/Homepage.png) 

B. Discover
   - Tampilan Rekomendasi Wisata
     ! [image](https://github.com/22091397023KartikaFelicia/TubanSpace/blob/main/photo/Search%20Results.png)
   - Tampilan Detail Wisata
     ! [image](https://github.com/22091397023KartikaFelicia/TubanSpace/blob/main/photo/Product%20detail.png)

C. About
   ! [image](https://github.com/22091397023KartikaFelicia/TubanSpace/blob/main/photo/About.jpg)

<div align="center">
  
## BAB 4

## FITUR

</div>

## 4.1. Deskripsi dan Prioritas

## 4.1.1. Fitur Homepage

Fitur homepage merupakan fitur utama pada Website TubanScape yang menarik dan informatif. Fitur ini memungkinkan pengguna untuk mencari tempat wisata di Tuban sesuai dengan keinginan mereka. Fitur ini juga memberikan informasi tentang destinasi wisata, seperti deskripsi, foto, Selain itu, fitur ini juga menawarkan pilihan perjalanan dan rekomendasi hotel untuk membantu pengguna merencanakan liburan mereka di Tuban.

## 4.1.2. Fitur Discover

Dalam fitur ini, pengguna memiliki kesempatan untuk menjelajahi berbagai destinasi dengan cara mengeksplorasi foto-foto menarik yang memvisualisasikan pesona setiap tempat wisata, membaca deskripsi yang menjelaskan karakteristik dan daya tarik dari destinasi, meninjau ulasan yang dibagikan oleh pengunjung sebelumnya, memberikan peringkat untuk mengekspresikan tingkat kepuasan, mengetahui tepat lokasi destinasi wisata, memperoleh informasi terkait harga tiket masuk, mengetahui jam operasional, dan mendapatkan wawasan tentang fasilitas yang ada di tempat wisata tersebut. Fitur "Discover" bertujuan untuk memberikan pengetahuan pengguna agar lebih mengetaui mengenai semua destinasi wisata yang dapat mereka kunjungi di Tuban, sehingga mereka dapat merencanakan perjalanan mereka dengan lebih baik.

## 4.1.3. Fitur About

Dalam fitur About memberikan informasi singkat namun menarik bagi pengguna untuk memotivasi dan membangkitkan minat dalam menjelajahi setiap sudut situs web Tubanscape. Tidak hanya menghadirkan informasi seputar destinasi wisata yang memukau di Tuban, tetapi juga menyajikan konten terbaru yang inspiratif. Selain itu, dalam fitur ini, kami memperkenalkan anggota tim yang bertanggung jawab atas pembangunan dan perwujudan situs web ini sehingga dapat memberikan wawasan lebih tentang visi kami untuk menghadirkan eksplorasi keindahan destinasi Tuban.

## 4.2. Fitur Sistem

## 4.2.1. Fitur Pencarian

Fitur pencarian bertujuan agar pengguna dapat mencari destinasi wisata, ulasan, atau konten lainnya dengan kata kunci atau filter tertentu.

## 4.2.2. Fitur Database Destinasi

Fitur Database ini menyimpan informasi mengenai destinasi wisata, termasuk nama, deskripsi, gambar, ulasan, harga tiket, jam buka, dan lain-lain.

## 4.2.3. Fitur Rekomendasi

Berdasarkan preferensi dan riwayat pencarian pengguna, sistem rekomendasi dapat memberikan saran destinasi atau pengalaman lain yang mungkin menarik bagi mereka.

## 4.2.4. Fitur Sistem Ulasan

Pengguna dapat memberikan ulasan, peringkat, dan komentar tentang destinasi yang mereka kunjungi, dan sistem ini memproses dan menampilkan ulasan tersebut.

## 4.2.5 Fitur Integrasi Media Sosial

Fitur ini memudahkan pengguna untuk berbagi konten situs web TubanScape di media sosial dengan ikon-ikon yang tersedia.

## 4.2.6 Fitur Pengelolaan Gambar

Fitur ini dapat mengunggah, mengarsip, dan menyunting gambar yang akan ditampilkan pada situs.

## 4.2.6 Fitur Integrasi Google Maps

Fitur ini menyajikan peta interaktif yang memungkinkan pengguna untuk melakukan zoom, memindahkan tampilan, dan mengklik peta agar mendapatkan informasi lebih lanjut tentang destinasi wisata tersebu dengan memanfaatkan Google Maps API.

<div align="center">
  
## BAB 5

## PERSYARATAN FUNGSIONAL

</div>

## 5.1. Use Case 

![file_2023-09-09_16 08 23](https://github.com/22091397023KartikaFelicia/TubanSpace/assets/124429174/8ecc0037-5949-4f41-85b2-d186d88d1fda)

Menggambarkan interaksi antara sistem website “Tuban Scape” dengan 2 aktor yaitu: admin dan user (pengunjung). aktor-aktor tersebut tentunya memiliki tugas yang berbeda. Interaksi antara admin dan pengunjung dengan website "Tuban Scape" menciptakan pengalaman yang lengkap, di mana admin bertanggung jawab untuk mengelola informasi dan mengelola konten tentang wisata di Tuban, sementara pengunjung dapat mengakses dan berinteraksi dengan informasi yang disediakan untuk merencanakan pengalaman wisata mereka di Kabupaten Tuban.

## 5.2. Flowchart

## 5.2.1. Flowchart User

![image](https://github.com/22091397023KartikaFelicia/TubanSpace/blob/main/photo/flowchart%20user.png)

User harus masuk terlebih dahulu ke website Tuban Scape dengan menggunakan browser web. Kemudian Tampilan pertama akan muncul yaitu tampilan Home, yang akan menampilkan informasi tentang sekilas wisata, berita, dan rekomendasi hotel. Lalu user akan memilih Discover, yang akan menampilakan rekomendasi hotel, dan juga user dapat mencari tempat wisata yang ingin dikunjungi. Jika tempat wisata yang dicari tersedia maka user akan melihat detail informasi wisata tersebut seperti, lokasi, fasilitas, harga tiket masuk, dan jam operasional. Namun jika tempat wisata yang dicari tidak tersedia maka user akan diberi rekomendasi tempat wisata lainnya. Setelah user melakukan perjalanan wisata maka user akan memberikan rating dan ulasan. User juga dapat memilih fitur AboutUs yang akan memberikan informasi tentang website Tuban Scape. 

## 5.2.2. Flowchart Admin

![image](https://github.com/22091397023KartikaFelicia/TubanSpace/blob/main/photo/flowchart%20admin.png)

Admin membuat website Tuban Scape dengan melakukan beberapa hal , yaitu memantau aktivitas sistem, mengubah data tempat wisata seperti menghapus data atau menambahkan data baru. Lalu admin juga memeriksa ulasan dan rating, jika user memberi ulasan dan rating maka admin akan menyetujui jika ulasan dan rating sesuai, jika tidak sesuai maka admin menghapus ulasan dan rating, hal ini dilakukan untuk menjaga kualitas konten yang ada di website.Admin juga pastinya akan melakukan pengembangan website Tuban Scape.

## 5.3. Persyaratan Perfoma

## 5.3.1. Persyaratan Hardware 

- Perangkat Komputer: Pengguna harus memiliki perangkat komputer, seperti PC, laptop, tablet, atau smartphone.
- Koneksi Internet: Pengguna harus memiliki koneksi internet yang stabil dan cepat untuk mengakses situs web dengan lancar.
- Layar: Resolusi layar minimal yang disarankan adalah 1024 x 768 piksel

## 5.3.2. Persyaratan Software

- Sistem Operasi: Website Tubanscape dapat diakses pada Windows 7 ke atas, MacOS 10.12 ke atas, iOS 6 ke atas, Android 6 ke atas, dan sistem operasi lain yang kompatibel.
- Browser Web: Pengguna memerlukan browser web yang kompatibel untuk mengakses website TubanScape. Browser yang digunakan seperti Google Chrome, Mozilla Firefox, Apple Safari, dan Microsoft Edge.

## 5.4. Persyaratan Keamanan Pengguna

Data pengguna disimpan pada server yang aman dan dilindungi dengan enkripsi. data tersebut berupa nama, alamat email, dan nomor telepon. data tersebut harus dilindungi dari akses yang tidak sah. 

## 5.5. Persyaratan Keamanan Website

- Menggunakan protokol HTTPS dan sertifikat SSL yang valid untuk menjamin integritas dan kerahasiaan data yang dikirimkan antara web dan pengguna.
- Menggunakan mekanisme enkripsi untuk melindungi data informasi pribadi pengguna dari pencurian atau manipulasi oleh pihak yang tidak bertanggung jawab.
- Menggunakan mekanisme validasi form, filter input, dan output untuk mencegah serangan injeksi yang dapat merusak fungsi atau tampilan web.
- Menggunakan mekanisme pembaruan dan pemeliharaan yang rutin untuk memastikan bahwa web selalu menggunakan versi terbaru dan bebas dari bug atau celah keamanan.


## 5.6. Proses Bisnis

Proses Bisnis pada pengelolaan konten wisata di Website Tubanscape bertujuan untuk mengumpulkan, mengelola, dan menyajikan informasi lengkap dan menarik tentang destinasi wisata di Tuban kepada pengguna. Informasi ini mencakup deskripsi destinasi, foto, ulasan, harga tiket, jam buka, fasilitas, dan detail lainnya. berikut Entitas yang Terlibat:
1. Pengguna (User): Pengguna adalah individu yang mengakses dan berinteraksi dengan website Tubanscape. Mereka mencari informasi tentang destinasi wisata dan membaca ulasan pengguna lainnya.
2. Destinasi Wisata (Tourist Destinations): Entitas ini mencakup berbagai lokasi atau destinasi wisata di Tuban. Ini adalah subjek utama dalam pengelolaan konten wisata.
3. Konten Wisata (Tourist Content): Ini mencakup semua informasi tentang destinasi wisata, seperti deskripsi, foto, ulasan, harga tiket, jam buka, fasilitas, dan detail lainnya. Konten ini disediakan oleh tim pengelola website.
4. Tim Pengelola (Management Team): Tim pengelola Tubanscape bertanggung jawab atas pengumpulan, pembaruan, dan pengelolaan konten wisata. Ini mencakup editor konten dan pengembang web.
   
Langkah-langkah Proses:
1. Pengumpulan Informasi: Tim pengelola mengumpulkan informasi terkait destinasi wisata di Tuban, termasuk deskripsi, foto, ulasan, harga tiket, jam buka, fasilitas, dan detail lainnya.
2. Pemuatan Konten: Informasi yang dikumpulkan dimuat ke dalam sistem website. Ini mencakup pembuatan halaman destinasi, mengunggah foto, dan memasukkan data lengkap.
3. Pembaruan Konten: Tim pengelola secara berkala memperbarui konten wisata sesuai dengan perubahan informasi atau kondisi aktual destinasi.
4. Penyajian Konten: Informasi tentang destinasi wisata disajikan kepada pengguna dalam format yang menarik dan mudah dimengerti.
5. Navigasi dan Pencarian: Pengguna dapat dengan mudah menavigasi halaman destinasi dan menggunakan fitur pencarian untuk menemukan destinasi yang mereka minati.
6. Integrasi Media Sosial: Pengguna dapat berbagi konten destinasi di media sosial mereka melalui ikon-ikon yang tersedia.

<div align="center">
  
## BAB 6

## PENJELASAN HTML DAN CSS

</div>

## 6.1. HTML

## 6.1.1. Index HTML

1. Deklarasi Dokumen HTML5: Ini adalah awal dokumen HTML, yang mengindikasikan penggunaan HTML5 dan bahasa Inggris.
2. Bagian 'Head': Bagian ini berisi elemen-elemen yang mendukung karakter internasional, mengatur mode kompatibilitas, menyesuaikan tampilan halaman web, dan menautkan ke file CSS dan Font Awesome.
3. Bagian 'Body': Bagian ini adalah area utama konten halaman web dan termasuk elemen-elemen seperti navigasi (navbar), judul halaman, dan konten lainnya.
4. Elemen Navbar: Bagian navigasi halaman web terdiri dari judul, logo, dan tautan ke halaman lain seperti "Home," "Discover," dan "About."
5. Elemen Header: Di dalam elemen header, kita memiliki kelas "header-content" yang berisi judul dan subjudul.
6. Elemen Search Bar: terdapat kelas "searchbar" menandakan bagian dari elemen search bar yang digunakan untuk mencari informasi tentang wisata di halaman web.
7. Elemen "Vacation": Elemen "section" dengan kelas "vacation" menandai bagian berita tentang liburan. Elemen "title" mengelompokkan elemen-elemen yang berkaitan dengan judul berita. Judul berita ditampilkan dengan elemen "h1" yang mengindikasikan berita yang menginspirasi perjalanan.
8. Elemen "Famous": Elemen "section" dengan kelas "famous" menandai bagian "famous" yang berisi daftar tempat terkenal di Tuban. Di dalamnya, terdapat elemen "box-famous" yang berisi elemen-elemen seperti gambar tempat terkenal, tautan, dan judul destinasi wisata.
9. Elemen "Berita": Elemen "section" dengan kelas "vacation" menandai bagian berita liburan. Elemen "title" mengelompokkan elemen-elemen berita. Judul berita ditampilkan dengan elemen "h1," yang mengindikasikan berita yang menginspirasi perjalanan.
10. Elemen "Berita": Elemen "section" dengan kelas "berita" menandai bagian berita yang berisi elemen "containt." Setiap berita terdiri dari elemen "boc" yang berisi elemen gambar, tautan, judul, dan teks berita.
11. Elemen "Recommended Hotel": Elemen "section" dengan kelas "Hotel" menandai bagian rekomendasi hotel. Elemen "title" mengelompokkan elemen dengan judul "Recommended Hotel."
12. Elemen "Recommended Hotel": Elemen "section" dengan kelas "hotel" menandai bagian rekomendasi hotel yang berisi elemen "container-hotel." Di dalam "container-hotel," terdapat elemen "box-hotel" yang berisi informasi tentang setiap hotel, termasuk gambar, tautan, dan judul hotel.
13. Elemen "Footer": Elemen "section" menandai bagian footer yang dipisahkan dari konten utama. Elemen "footer-content" mengelompokkan elemen yang berisi judul dan teks tentang eksplorasi Tuban dengan "My Dream Place."
14. Elemen "Footer": Elemen "footer" juga mencakup elemen "foot-container," "row-foot," dan "footer-col" yang mengatur tautan dan informasi tambahan ke destinasi wisata, tautan bantuan atau informasi, tautan aplikasi hotel, serta tautan ke media sosial seperti Facebook, Twitter, Instagram, dan LinkedIn.

# 6.1.2. Discover HTML

1. Pada awal kode mendeklarasikan dokumen HTML yang digunakan dengan elemen <!DOCTYPE html>.
2. Bagian head digunakan untuk informasi meta dan referensi ke berkas eksternal seperti CSS dan JavaScript. Beberapa elemen di sini adalah:
   - Pengaturan karakter : meta charset="UTF-8" untuk mengatur karakter encoding ke UTF-8.
   - Viewport : meta name="viewport" content="width=device-width, initial-scale=1.0" untuk mengoptimalkan tampilan pada perangkat mobile.
   - Referensi CSS : merujuk ke tiga berkas CSS eksternal melalui elemen <link>.
   - Referensi JavaScript: Anda merujuk ke jQuery dan script.js melalui elemen <script>.
   - Referensi ikon : menggunakan ikon dari Font Awesome dan Unicons.
4. Bagian body adalah tempat untuk konten yang akan ditampilkan di halaman web. Beberapa elemen di sini adalah:
   - Navbar: sebuah navigasi di bagian atas halaman web dengan logo "TUBANSCAPE" dan tautan menu seperti "Home," "Discover," dan "About."
   - Searchbar: Di bawah navbar, ada sebuah kotak pencarian dengan ikon dan tombol "Search."
   - Rekomendasi: bagian untuk mengurutkan hasil. Ada teks "Sort By" dan "Recommended."
   - Filter dan Kategori: beberapa filter yang memungkinkan pengguna untuk menyaring hasil berdasarkan kategori wisata seperti "Air Terjun," "Gunung," dan lain-lain.
   - Konten Wisata: berisi informasi tentang tempat wisata, dengan gambar, judul, rating, deskripsi, dan tautan "See Availability."
5. Footer: Di bagian bawah halaman, memiliki bagian footer yang berisi tautan ke halaman terkait seperti "About Us," tautan ke situs pemesanan hotel, dan tautan ke media sosial.

# 6.1.3. About HTML

1. Deklarasi Dokumen HTML5: Ini adalah awal dokumen HTML, yang mengindikasikan penggunaan HTML5 dan bahasa Inggris.
2. Bagian 'Head': Bagian ini berisi elemen-elemen yang mendukung karakter internasional, mengatur mode kompatibilitas, menyesuaikan tampilan halaman web, dan menautkan ke file CSS dan Font Awesome.
3. Bagian 'Body': Bagian ini adalah area utama konten halaman web dan termasuk elemen-elemen seperti navigasi (navbar), judul halaman, dan konten lainnya.
4. Elemen Navbar: Bagian navigasi halaman web terdiri dari judul, logo, dan tautan ke halaman lain seperti "Home," "Discover," dan "About."
5. Elemen "About Us": Elemen “section” dengan kelas "Hero" yang menjadi tanda bagian "About Us." berisi elemen "Container" yang mengelompokkan elemen "Hero-Content" berisi judul, teks, dan tombol yang mengajak pengunjung untuk mengunjungi halaman utama, dan "Hero-Image" berisi gambar yang menggambarkan keindahan Tubanscape.
6. Elemen "Our Team": Elemen “section” dengan kelas "Our Team" berisi elemen "wrapper". yang mengelompokkan elemen h1 untuk judul dan elemen "team" berisi daftar anggota tim. Setiap anggota tim ditandai oleh elemen "team-member" yang berisi gambar, nama, peran, dan deskripsi anggota tim.
7. Elemen "Footer": Elemen "section" menandai bagian footer yang dipisahkan dari konten utama. Elemen "footer-content" mengelompokkan elemen yang berisi judul dan teks tentang eksplorasi Tuban dengan "My Dream Place."
8. Elemen "Footer": Elemen "footer" juga mencakup elemen "foot-container," "row-foot," dan "footer-col" yang mengatur tautan dan informasi tambahan ke destinasi wisata, tautan bantuan atau informasi, tautan aplikasi hotel, serta tautan ke media sosial seperti Facebook, Twitter, Instagram, dan LinkedIn.

# 6.1.4. Gallery HTML

1. Deklarasi Dokumen HTML5: Ini adalah awal dokumen HTML, yang mengindikasikan penggunaan HTML5 dan bahasa Inggris.
2. Bagian 'Head': Bagian ini berisi elemen-elemen yang mendukung karakter internasional, mengatur mode kompatibilitas, menyesuaikan tampilan halaman web, dan menautkan ke file CSS dan Font Awesome.
3. Bagian 'Body': Bagian ini adalah area utama konten halaman web dan termasuk elemen-elemen seperti navigasi (navbar), judul halaman, dan konten lainnya.
4. Elemen Navbar: Bagian navigasi halaman web terdiri dari judul, logo, dan tautan ke halaman lain seperti "Home," "Discover," dan "About."
5. Elemen section class="gallery" : bagian dari halaman web yang menandai galeri gambar. Ini terdiri dari elemen div class="container" yang berisi elemen-elemen <div class="box-gallery". Setiap kotak tersebut berisi gambar yang ditandai oleh elemen <img>. Gambar-gambar tersebut memiliki kelas, yaitu "portrait" atau "landscape," tergantung pada orientasinya.
6. Elemen <div class="rating-box" : Bagian ini digunakan untuk menampilkan informasi dan peringkat dari objek wisata Elemen h2 digunakan untuk menampilkan judul objek wisata tersebut. Elemen div class="stars" dan i digunakan untuk menampilkan bintang-bintang peringkat. Elemen div class="paragraph" dan p digunakan untuk menampilkan deskripsi objek wisata.
7. Elemen div class="map-container" : Bagian ini berisi peta dan lokasi Mata Air Sungai Krawak. Elemen iframe digunakan untuk menampilkan peta Google Maps dengan berbagai atribut seperti src, width, height, allowfullscreen, loading, dan referrerpolicy. Selain itu, ada juga elemen a yang menampilkan tautan ke peta Google Maps dengan atribut href dan target. Elemen i digunakan untuk menampilkan ikon penanda lokasi, dan teks "Lokasi" memberikan informasi geografis lokasi tersebut.
8. Elemen div class="ticket" : Bagian ini berisi informasi tentang tiket masuk dan jam operasional objek wisata. Elemen i digunakan untuk menampilkan ikon tiket dan jam. Teks "Harga Tiket Masuk" dan "Jam Operasional" menjelaskan biaya masuk dan jam buka objek wisata.
9. Elemen div class="facilities" : Bagian ini menampilkan fasilitas-fasilitas wisata. Ini terdiri dari elemen h3 untuk judul dan elemen ul untuk daftar fasilitas. Setiap elemen li berisi elemen img untuk menampilkan ikon dan teks yang menjelaskan fasilitas tersebut.
10. Elemen div class="customer-review" : Bagian ini berisi ulasan dari pengunjung. Elemen h3 digunakan untuk menampilkan judul, dan elemen ul berisi daftar ulasan. Setiap elemen li berisi elemen-elemen seperti div class="profile", img, span, div class="stars", dan p, yang digunakan untuk menampilkan profil pengunjung, gambar, nama, peringkat dalam bentuk bintang, dan komentar dari pengunjung.
11. Elemen a href="index.html" class="back-button : Ini adalah tautan yang mengarahkan ke halaman "index.html." Elemen i class="fa-solid fa-arrow-left" digunakan untuk menampilkan ikon panah ke kiri. Teks "Kembali" adalah label tombol yang menandakan fungsi tautan ini, yaitu untuk kembali ke halaman sebelumnya.
12. Elemen "Footer": Elemen "section" menandai bagian footer yang dipisahkan dari konten utama. Elemen "footer-content" mengelompokkan elemen yang berisi judul dan teks tentang eksplorasi Tuban dengan "My Dream Place."
13. Elemen "Footer": Elemen "footer" juga mencakup elemen "foot-container," "row-foot," dan "footer-col" yang mengatur tautan dan informasi tambahan ke destinasi wisata, tautan bantuan atau informasi, tautan aplikasi hotel, serta tautan ke media sosial seperti Facebook, Twitter, Instagram, dan LinkedIn.

## 6.2. CSS

## 6.2.1. Style CSS

Struktur Style CSS terdiri dari beberapa blok yaitu :
1. Blok Reser Gaya : Blok ini mengatur nol margin, nol padding, serta gaya default untuk elemen-elemen di halaman. Selain itu, mengatur jenis font dan efek scroll halus untuk elemen HTML.
2. Blok Header : Blok ini mengatur tampilan kepala halaman, termasuk gambar latar belakang, judul, dan elemen pencarian. Lalu juga memiliki animasi fadeInUp yang diterapkan pada elemen header.
3. Blok Searchbar : Blok ini mengatur tampilan kotak pencarian dengan elemen input dan tombol pencarian.
4. Blok Navbar : Blok ini mengatur tampilan navbar dengan logo dan tautan menu.
5. Blok Section : Blok ini mengatur tampilan bagian "Enjoy Your Dream Vacation" dengan judul dan teks.
6. Blok Famous : Blok ini mengatur tampilan bagian "Famous Places" dengan gambar-gambar tempat.
7. Blok berita : Blok ini mengatur tampilan bagian berita dengan gambar dan teks berita.
8. Blok Hotel : Blok  mengatur stil untuk bagian header yang mencakup judul, teks, tombol, dan gambar. Container adalah kelas yang menjaga konten dalam satu baris dan menyesuaikan lebarnya dengan perangkat pengguna. .Hero-Content menangani konten teks, seperti judul, paragraf, dan tombol. .Hero-Image mengatur gambar yang muncul di samping teks.
9. Blok Gaya Footer : Blok ini mengimpor jenis huruf dari Google Fonts dan mengatur tampilan footer.
10. Blok Footer : Blok ini mengatur tampilan footer, termasuk informasi kontak, tautan, dan ikon media sosial.
11. Blok About : Blok ini mengatur tampilan bagian "About Us," termasuk konten dan gambar.
12. Blok Wrapper : Blok ini mengatur tampilan bagian "Meet Our Team" dengan daftar anggota tim dan gambar.

## 6.2.2. Discover CSS

Struktur Style CSS terdiri dari beberapa blok yaitu :
1. Blok reser gaya : Blok ini mengatur nol margin, nol padding, serta gaya default untuk elemen-elemen di halaman. dan juga mengimpor jenis huruf 'Open Sans' dari Google Fonts.
2. Blok Header (Navbar) : Blok ini mengatur tampilan navbar, termasuk gambar latar belakang di latar belakang navbar, logo, dan tautan menu.
3. Blok Searchbar :  Blok ini mengatur tampilan kotak pencarian dengan ikon pencarian dan tombol pencarian yang responsif.
4. Blok Recomended : Blok ini mengatur tampilan kotak rekomendasi yang mencakup teks dan gambar.
5. Blok Budget dan Item : Blok ini mengatur tampilan elemen-elemen budget dan checkbox serta daftar pilihan.
6. Blok Rating : Blok ini mengatur tampilan elemen rating dengan ikon bintang.
7. Blok Isi Konten (Contect1. Content 2) :  Blok ini mengatur tampilan elemen-elemen konten yang mungkin berisi judul, ulasan, dan paragraf.
8. Blok Button style : Blok ini mengatur tampilan tombol yang digunakan dalam konten.
9. Blok Load More : Blok ini mengatur tampilan tombol "Load More" yang digunakan untuk memuat lebih banyak konten.
10. Blok Footer : Blok ini mengatur tampilan footer, termasuk tautan, kolom, dan ikon media sosial.

## 6.2.3. GalleryStyle CSS

1. Selektor Universal * menghapus margin dan padding bawaan, mengatur model kotak ke border-box, dan mengatur font default untuk semua elemen.
Media Query memberikan kondisi berdasarkan lebar layar untuk membuat tampilan responsif. Pada kondisi tersebut, lebar elemen dengan kelas container dan gallery diatur menjadi 100%.
2. Menghasilkan tautan yang terlihat seperti teks biasa tanpa dekorasi, berwarna hitam, dan berukuran 1 rem. Saat pengguna mengarahkan kursor mouse ke tautan, warna teks tautan akan berubah menjadi "burlywood"
3. Menghasilkan navbar yang memiliki lebar 100% dengan lebar maksimum 1200px. Navbar ini akan berada di tengah halaman dan memiliki padding 10px 20px. Logo navbar akan memiliki ukuran font 1.5rem, font weight bold, dan warna hitam. Tautan di navbar akan ditampilkan secara horizontal dengan gap 8rem. Pada layar dengan lebar maksimum 1366px, 768px, dan 320px, tautan di navbar akan ditampilkan secara vertikal dengan gap 10px.
4. Menghasilkan galeri yang memiliki lebar dan tinggi 100%. Galeri ini akan berada di tengah halaman dengan margin-top -100px dan margin-bottom -155px. Gambar-gambar di dalam galeri akan memiliki lebar dan tinggi 285px, dan margin 7px. Gambar-gambar dengan class landscape akan memiliki lebar 50% dari galeri, sedangkan gambar-gambar dengan class portrait akan memiliki tinggi penuh galeri. Semua gambar di dalam galeri akan memiliki object-fit cover, sehingga gambar akan mengisi penuh elemen yang menampungnya.
5. Mengimpor font Google Poppins ke dalam halaman web dan menggunakan font tersebut untuk semua elemen di halaman web. Elemen header akan memiliki font-size 24px, text-align left, color hitam, font-weight bold, dan margin-bottom 15px.
6. Menghasilkan rating bintang dengan warna abu-abu dan font-size 20px. Saat pengguna mengarahkan kursor mouse ke salah satu bintang, bintang tersebut akan berubah warna menjadi oranye.
7. Menghasilkan peta dengan lebar 500px dan tinggi 280px. Peta ini akan berada di sebelah kanan halaman dengan margin-top -225px dan margin-right 5px. Peta ini juga akan memiliki tautan dengan warna abu-abu dan font-size 14px. Saat pengguna mengarahkan kursor mouse ke tautan tersebut, tautan tersebut akan berubah warna menjadi krem.
8. Menghasilkan isi ulasan dengan font-size 16px, warna abu-abu, text-align justify (teks akan dirata kiri dan kanan), lebar maksimum 600px, margin-top 10px, dan margin-left 0.
9. Menghasilkan garis pemisah dengan ketebalan 2px, warna abu-abu, margin-top 80px, dan margin-bottom 20px.
10. Menghasilkan ikon dan teks ditampilkan dalam satu baris rata tengah secara vertical rata kanan secara horizontal. Ikon akan memiliki font-size 24px dan margin-right 5px berwarna biru. Sedangkan teks akan berwarna hitam.
11. Kotak abu-abu muda dengan border melengkung menampilkan fasilitas wisata di web. Kotak punya padding dan margin 20 piksel. Judul abu-abu ukuran 24 piksel ada di atas kotak dengan margin bawah 20 piksel. Daftar fasilitas tanpa tanda ada di bawah judul. Tiap fasilitas punya ikon 30x30 piksel di kiri teks dengan margin kanan 10 piksel.

## 6.3. JavaScript

1. Pertama, memilih semua elemen dengan tag "i" yang memiliki kelas "stars" dan menyimpannya dalam sebuah NodeList yang disebut "stars".
2. Kemudian melakukan perulangan (loop) melalui NodeList "stars" dengan menggunakan metode forEach().
3. Di dalam loop tersebut, menambahkan event listener pada setiap elemen "star" untuk mengidentifikasi saat elemen tersebut di-klik (event "click"). Ketika elemen bintang di-klik, sebuah fungsi dijalankan.
4. Di dalam fungsi yang dijalankan ketika elemen bintang di-klik, melakukan loop kembali melalui NodeList "stars" menggunakan forEach(). Tujuannya adalah untuk menentukan elemen mana yang harus memiliki kelas "active" (mengaktifkannya) dan mana yang harus dihapuskan kelas "active" (menonaktifkannya) berdasarkan indeks (index1 dan index2).
5. Jika indeks (index1) elemen saat di-klik lebih besar atau sama dengan indeks (index2) elemen dalam perulangan ini, maka menambahkan kelas "active" ke elemen tersebut, yang berarti elemen tersebut akan menjadi bintang yang diberi penanda "active". Sebaliknya, jika indeks elemen saat di-klik lebih kecil dari indeks elemen dalam perulangan ini, maka menghapus kelas "active" dari elemen tersebut.
6. Lalu mendefinisikan perilaku tombol pencarian (button) dengan kelas "button". Saat tombol ditekan (mousedown), menambahkan kelas "Clicked" ke tombol, dan saat tombol dilepaskan (mouseup) akan menghapus kelas tersebut.
7. Menangani elemen-elemen checkbox dengan kelas "item", dengan memilih semua elemen ini dan menambahkan event listener agar ketika salah satu elemen checkbox diklik, kelas "checked" ditambahkan atau dihapus.

