// --- DEFINISI INTERFACE ---

/**
 * Interface dasar untuk Jurusan (Mata Pelajaran SMA atau Jurusan SMK)
 */
export interface Jurusan {
  id: number;
  jenjang: "sma" | "smk";
  nama: string;
}

/**
 * Interface untuk item video YouTube
 */
export interface VideoItem {
  id: number; // ID unik untuk video
  id_jurusan: number; // Foreign key yang merujuk ke Jurusan.id
  nama: string; // Judul video
  youtube: string; // URL YouTube
}

/**
 * Interface gabungan yang mewarisi Jurusan dan menambahkan
 * daftar video yang terkait.
 */
export interface JurusanWithVideos extends Jurusan {
  /**
   * Daftar video yang terkait dengan jurusan ini.
   * Kita menggunakan Omit<> untuk menghapus 'id_jurusan' dari
   * objek video di dalam array ini, karena sudah implisit.
   */
  videos: Omit<VideoItem, "id_jurusan">[];
}

/**
 * Interface untuk respons API yang mengembalikan
 * data jurusan yang sudah digabung dengan video.
 */
export interface JurusanWithVideosResponse {
  status: boolean;
  message: string;
  data: JurusanWithVideos[];
}

// --- DATA MOCK ASAL (JURUSAN) ---

export const mockJurusan: Jurusan[] = [
  // --- SMA ---
  { id: 1, jenjang: "sma", nama: "Pendidikan Agama dan Budi Pekerti" },
  { id: 2, jenjang: "sma", nama: "Pendidikan Pancasila" },
  { id: 3, jenjang: "sma", nama: "Bahasa Indonesia" },
  { id: 4, jenjang: "sma", nama: "Matematika" },
  { id: 5, jenjang: "sma", nama: "Bahasa Inggris" },
  { id: 6, jenjang: "sma", nama: "Pendidikan Jasmani, Olahraga dan Kesehatan" },
  { id: 7, jenjang: "sma", nama: "Sejarah" },
  { id: 8, jenjang: "sma", nama: "Seni dan Budaya" },
  { id: 9, jenjang: "sma", nama: "Biologi" },
  { id: 10, jenjang: "sma", nama: "Kimia" },
  { id: 11, jenjang: "sma", nama: "Fisika" },
  { id: 12, jenjang: "sma", nama: "Sosiologi" },
  { id: 13, jenjang: "sma", nama: "Ekonomi" },
  { id: 14, jenjang: "sma", nama: "Geografi" },
  { id: 15, jenjang: "sma", nama: "Antropologi" },
  { id: 16, jenjang: "sma", nama: "Bahasa Arab" },
  { id: 17, jenjang: "sma", nama: "Bahasa Jerman" },
  { id: 18, jenjang: "sma", nama: "Prakarya dan Kewirausahaan" },
  { id: 47, jenjang: "sma", nama: "Informatika" },
  { id: 48, jenjang: "sma", nama: "Bahasa Korea" },
  { id: 49, jenjang: "sma", nama: "Bahasa Perancis" },
  { id: 50, jenjang: "sma", nama: "Bahasa Jepang" },
  { id: 51, jenjang: "sma", nama: "Bahasa Mandarin" },

  // --- SMK ---
  { id: 20, jenjang: "smk", nama: "Teknik Komputer dan Jaringan" },
  { id: 21, jenjang: "smk", nama: "Teknik Instalasi Tenaga Listrik" },
  { id: 22, jenjang: "smk", nama: "Teknik Mekatronika" },
  { id: 23, jenjang: "smk", nama: "Teknik Otomotif Kendaraan Ringan" },
  { id: 24, jenjang: "smk", nama: "Teknik Pemesinan" },
  { id: 25, jenjang: "smk", nama: "Teknik Pendingin dan Tata Udara" },
  { id: 26, jenjang: "smk", nama: "Teknik Pengelasan" },
  { id: 27, jenjang: "smk", nama: "Teknika Kapal Penangkap Ikan" },
  { id: 28, jenjang: "smk", nama: "Teknik Usaha Perjalanan Wisata" },
  { id: 29, jenjang: "smk", nama: "Teknik Fabrikasi Logam dan Manufaktur" },
  { id: 30, jenjang: "smk", nama: "Teknik Elektronika Industri" },
  { id: 31, jenjang: "smk", nama: "Teknik dan Bisnis Sepeda Motor" },
  { id: 32, jenjang: "smk", nama: "Teknik Otomotif" },
  { id: 33, jenjang: "smk", nama: "Teknik Elektronika" },
  { id: 34, jenjang: "smk", nama: "Teknik Tata Kecantikan" },
  { id: 35, jenjang: "smk", nama: "Teknik Busana" },
  { id: 36, jenjang: "smk", nama: "Kulineri" },
  {
    id: 37,
    jenjang: "smk",
    nama: "Teknik Sistem Informatika, Jaringan dan Aplikasi",
  },
  { id: 38, jenjang: "smk", nama: "Teknik Rekayasa Perangkat Lunak" },
  { id: 39, jenjang: "smk", nama: "Teknik Grafika" },
  { id: 40, jenjang: "smk", nama: "Broadcasting dan Film" },
  { id: 41, jenjang: "smk", nama: "Perhotelan" },
  { id: 42, jenjang: "smk", nama: "Akuntansi dan Keuangan" },
  { id: 43, jenjang: "smk", nama: "Manajemen Perkantoran" },
  { id: 44, jenjang: "smk", nama: "Teknik Pelayaran Kapal Penangkap Ikan" },
  { id: 45, jenjang: "smk", nama: "Teknik Multimedia" },
  { id: 46, jenjang: "smk", nama: "Desain dan Produk Kreatif Kriya" },
];

// --- DATA MOCK VIDEO ---

export const mockVideoItems: VideoItem[] = [
  {
    id: 1,
    id_jurusan: 1,
    nama: "Prasangka Baik Husnuzzan",
    youtube: "https://youtu.be/GNoSc20cPd4?si=wKgSBAaQ2UKeO9Bv",
  },
  {
    id: 2,
    id_jurusan: 1,
    nama: "Menghormati dan Menyayangi Orang tua dan Guru",
    youtube: "https://youtu.be/sNe9n_UqIes?si=lL-3bBnDCZoyf3OC",
  },
  {
    id: 3,
    id_jurusan: 2,
    nama: "Peranan Indonesia dalam Perdamaian Dunia",
    youtube: "https://youtu.be/HKJtCFneDfk?si=cP96lEYA5J5OfMQe",
  },
  {
    id: 4,
    id_jurusan: 2,
    nama: "Sistem Pembagian Kekuasaan Negara Republik Indones...",
    youtube: "https://youtu.be/kO_qEdLOHDg?si=f6xqGwOTpUF5OwL8",
  },
  {
    id: 5,
    id_jurusan: 3,
    nama: "Bahasa Indonesia : Perbedaan Fiksi dan Non Fiksi",
    youtube: "https://youtu.be/Z5M7BuDEZNA?si=RhcKe5hlDGC5Pc7e",
  },
  {
    id: 6,
    id_jurusan: 3,
    nama: "Bahasa Indonesia - Materi Teks Negosiasi",
    youtube: "https://youtu.be/IdGJNnbWBAQ?si=ESdL09SbosONk0_4",
  },
  {
    id: 7,
    id_jurusan: 4,
    nama: "Perbandingan Trigonometri",
    youtube: "https://youtu.be/0h16FQjeqP8?si=qO05n8a1pp68joDr",
  },
  {
    id: 8,
    id_jurusan: 4,
    nama: "Peluang Suatu Kejadian",
    youtube: "https://youtu.be/YLAZZz3DSvA?si=haOHsDn2OQrk-tcb",
  },
  {
    id: 9,
    id_jurusan: 5,
    nama: "English Song",
    youtube: "https://youtu.be/5XELIFsFmcU?si=KgPdoZUmxh9yAOz8",
  },
  {
    id: 10,
    id_jurusan: 5,
    nama: "Announcement",
    youtube: "https://youtu.be/q5_Ok9nLeEs?si=GBq8ZhvshTh-bFlc",
  },
  {
    id: 11,
    id_jurusan: 6,
    nama: "Permainan Bola Kecil",
    youtube: "https://youtu.be/mxnzhO4XGlI?si=wOOk-0-Fp-9SlSqm",
  },
  {
    id: 12,
    id_jurusan: 6,
    nama: "Teknik Dasar Lari 100 M",
    youtube: "https://youtu.be/hbxoZ41irAI?si=23D_fMIgFx3cfW49",
  },
  {
    id: 13,
    id_jurusan: 7,
    nama: "Sejarah : Keterkaitan Peristiwa Sejarah Untuk Kehi...",
    youtube: "https://youtu.be/HUFCMzLhIVY?si=7aeWfSBbuhVhk02-",
  },
  {
    id: 14,
    id_jurusan: 7,
    nama: "Sejarah Indonesia : Kebudayaan Zaman Pra Aksara",
    youtube: "https://youtu.be/gydjBK2bVwM?si=qzi43IbaLNfk5SGz",
  },
  {
    id: 15,
    id_jurusan: 8,
    nama: "Bentuk Bentuk Karya Seni Rupa",
    youtube: "https://youtu.be/nHj_zfG1Vmk?si=A9hs8TdvboqmcftC",
  },
  {
    id: 16,
    id_jurusan: 8,
    nama: "Seni Teater Modern",
    youtube: "https://youtu.be/nOxIm_gMKk4?si=-vz2pkuVcHPrQ6TN",
  },
  {
    id: 17,
    id_jurusan: 9,
    nama: "Klasifikasi Makhluk Hidup",
    youtube: "https://youtu.be/iwvrabdN7wo?si=6JHJ7bo56kltvdDP",
  },
  {
    id: 18,
    id_jurusan: 9,
    nama: "Fotosintesis",
    youtube: "https://youtu.be/GgDjjto899k?si=D5s3TvU6xEKJhfLt",
  },
  {
    id: 19,
    id_jurusan: 10,
    nama: "Larutan Elektrolit Dan Non Elektrolit",
    youtube: "https://youtu.be/yGS_4UzvWSY?si=tlXCwvzHbOjbMElb",
  },
  {
    id: 20,
    id_jurusan: 10,
    nama: "Menentukan Bentuk Molekul Berdasarkan Teori VSEPR",
    youtube: "https://youtu.be/1bkUi96fwdE?si=LOLgl-4DFJBF_Nn8",
  },
  {
    id: 21,
    id_jurusan: 11,
    nama: "Gravitasi Newton",
    youtube: "https://youtu.be/kzGYawCtUM8?si=FqIkl2AoQiuEeomv",
  },
  {
    id: 22,
    id_jurusan: 11,
    nama: "Gelombang Bunyi Efek Doppler",
    youtube: "https://youtu.be/ZTJQkSzyanM?si=vSZdHC4YhrLl2loq",
  },
  {
    id: 23,
    id_jurusan: 12,
    nama: "Resolusi Konflik",
    youtube: "https://youtu.be/pRj-KZ34Q9I?si=G7G087DYvyoAJRdQ",
  },
  {
    id: 24,
    id_jurusan: 12,
    nama: "Prinsip Kesetaraan Untuk Menyingkapi Perbedaan Sos...",
    youtube: "https://youtu.be/9h5il1Dqs4Y?si=JMSLwgb0ZcrV4nqU",
  },
  {
    id: 25,
    id_jurusan: 13,
    nama: "Pasar Modal",
    youtube: "https://youtu.be/HuLzmgK5gU4?si=p9fpcn7VlX8fA3st",
  },
  {
    id: 26,
    id_jurusan: 13,
    nama: "Indeks Harga dan Inflasi",
    youtube: "https://youtu.be/Gp-e-K9W-Ws?si=iBrIk1gqis32h_QG",
  },
  {
    id: 27,
    id_jurusan: 14,
    nama: "Siklus Hidrologi",
    youtube: "https://youtu.be/xFOitEG3_PU?si=qGh97EveFscGmBwG",
  },
  {
    id: 28,
    id_jurusan: 14,
    nama: "Pemanasan Global",
    youtube: "https://youtu.be/K3TqbcdJZiI?si=ucSdGSUizZBpw1iZ",
  },
  {
    id: 29,
    id_jurusan: 15,
    nama: "Konsep Dasar Antropologi",
    youtube: "https://youtu.be/-JepjereSaY?si=8ONtMwrAVeKyYGVA",
  },
  {
    id: 30,
    id_jurusan: 15,
    nama: "Keragaman Budaya Masyarakat Indonesia",
    youtube: "https://youtu.be/dtnoHJ9FR-U?si=iwFTDcd2PIMhl_bh",
  },
  {
    id: 31,
    id_jurusan: 16,
    nama: "Teks Eksplanasi",
    youtube: "https://youtu.be/bFr5x3_qStI?si=B7Mw6XcjPg6rpaau",
  },
  {
    id: 32,
    id_jurusan: 16,
    nama: "Huruf Jar",
    youtube: "https://youtu.be/S912sxQAWfI?si=CPZyusIYC6cOtWUJ",
  },
  {
    id: 33,
    id_jurusan: 17,
    nama: "Bahasa dan Sastra Jerman : Wie grüßt Julian seine ...",
    youtube: "https://youtu.be/GkJea_Sq9wM?si=43XyJLg9_KMeu37n",
  },
  {
    id: 34,
    id_jurusan: 18,
    nama: "Sistem Produksi Kerajinan dari Bahan Limbah Berben...",
    youtube: "https://youtu.be/cEPGBRHmXKs?si=0AkHDB1OmmBaGROQ",
  },
  {
    id: 35,
    id_jurusan: 18,
    nama: "Sistem Pengolahan Makanan Awetan dari Bahan Nabati...",
    youtube: "https://youtu.be/UTSNnMd3VTY?si=DP3ZS8a8uCSrVuXB",
  },
  {
    id: 41,
    id_jurusan: 20,
    nama: "Merancang Pengalamatan Jaringan",
    youtube: "https://youtu.be/QZPYoozLzvY?si=QuDQSpRTIVLSoFWQ",
  },
  {
    id: 42,
    id_jurusan: 20,
    nama: "Menyiapkan Kabel Jaringan",
    youtube: "https://youtu.be/BzQCu8X5CA4?si=la9AZs0VWjxXtW4h",
  },
  {
    id: 43,
    id_jurusan: 20,
    nama: "Merakit Komputer",
    youtube: "https://youtu.be/MgxRiLe_7kY?si=5YkWRa_Fj8MNDOFK",
  },
  {
    id: 44,
    id_jurusan: 20,
    nama: "Mengkonfigurasi VLAN",
    youtube: "https://youtu.be/xMvHQD1Bxpk?si=Ln18R7ZFZk8N_Ige",
  },
  {
    id: 45,
    id_jurusan: 20,
    nama: "Mengkonfigurasi Switch Pada Jaringan",
    youtube: "https://youtu.be/STzP7NLbM9s?si=xfBPEBM8B34H3lVy",
  },
  {
    id: 46,
    id_jurusan: 20,
    nama: "Mengkonfigurasi Sistem Keamanan Jaringan",
    youtube: "https://youtu.be/Yfa28sTxmM0?si=-GA1davPDSmwjkz3",
  },
  {
    id: 47,
    id_jurusan: 20,
    nama: "Mengkomfigurasi Routing Statis",
    youtube: "https://youtu.be/OKXGIL5g9y8?si=pn4nBZtr0NiKF92x",
  },
  {
    id: 48,
    id_jurusan: 20,
    nama: "Mengkonfigurasi Roouting Dinamis",
    youtube: "https://youtu.be/Yd8shJ3l36c?si=Mf3WD956iE3UMzX6",
  },
  {
    id: 49,
    id_jurusan: 20,
    nama: "Mengkonvigurasi DNS Server",
    youtube: "https://youtu.be/ZuQ7dPppqGI?si=o-EQlIbwzi9x8Npf",
  },
  {
    id: 50,
    id_jurusan: 20,
    nama: "Mengkonfigurasi DHCP Server",
    youtube: "https://youtu.be/nOgEFQKKiMU?si=drjMp18pDflkGNu0",
  },
  {
    id: 51,
    id_jurusan: 20,
    nama: "Menginstalasi Sistem Operasi",
    youtube: "https://youtu.be/xB7OF_DuEhI?si=MCn6J1VQjIIRTR7g",
  },
  {
    id: 52,
    id_jurusan: 20,
    nama: "Menginstalasi Jaringan Local (LAN)",
    youtube: "https://youtu.be/83l7zEQ0IL4?si=geiDD0z3Nd1D87xv",
  },
  {
    id: 53,
    id_jurusan: 20,
    nama: "Menginstalasi Software Aplikasi",
    youtube: "https://youtu.be/5wXD-51u7bc?si=9CvvXz2YzCGYqFlG",
  },
  {
    id: 54,
    id_jurusan: 20,
    nama: "Mendesain Topologi Jaringan",
    youtube: "https://youtu.be/OvLT6yv_OOM?si=Q2jyRcopijRfnm21",
  },
  {
    id: 55,
    id_jurusan: 20,
    nama: "Membangun Jaringan Nirkabel",
    youtube: "https://youtu.be/pGeNwBjqaF8?si=Nfgrt8ceIzcsDgKt",
  },
  {
    id: 56,
    id_jurusan: 20,
    nama: "Memasang Kabel Jaringan",
    youtube: "https://youtu.be/d4o5kXhpYPQ?si=pUa0uHPOTZXgIFyD",
  },
  {
    id: 57,
    id_jurusan: 20,
    nama: "Melakukan Setting BIOS",
    youtube: "https://youtu.be/e3NXG4WTp1w?si=BbX3XCBppUj4IHrz",
  },
  {
    id: 58,
    id_jurusan: 21,
    nama: "Merakit dan memasang PHB Penerangan Bangunan Gedun...",
    youtube: "https://youtu.be/SQqgadEBWm4?si=rDM9dCDWZYH__hQi",
  },
  {
    id: 59,
    id_jurusan: 21,
    nama: "Mengoperasikan Sistem Pembumian",
    youtube: "https://youtu.be/jHnwNjQ0Hbs?si=Jo-X8ZZn24MmYiFK",
  },
  {
    id: 60,
    id_jurusan: 21,
    nama: "Mengoperasikan Programable Logic Control (PLC)",
    youtube: "https://youtu.be/yRZ_sTEP9gQ?si=HaiZ5y06qX9VmhvN",
  },
  {
    id: 61,
    id_jurusan: 21,
    nama: "Mengoperasikan PHB Lift, Escalator dan Conveyor",
    youtube: "https://youtu.be/4CdaM7OLVXc?si=WhohiiBUjYGk5tG7",
  },
  {
    id: 62,
    id_jurusan: 21,
    nama: "Mengoperasikan PHB Air Conditioning",
    youtube: "https://youtu.be/VmSJLP6w080?si=SadTv3TCBtAZfMX7",
  },
  {
    id: 63,
    id_jurusan: 21,
    nama: "Mengoperasikan PHB Penerangan Bangunan Sederhana",
    youtube: "https://youtu.be/EYq76VejIhI?si=cliNwzrsSdvdtwUI",
  },
  {
    id: 64,
    id_jurusan: 21,
    nama: "Mengoperasikan (PHB) Penerangan Bangunan Gedung",
    youtube: "https://youtu.be/WvtNcTnVL-E?si=RP8owaoTIrSlEMIh",
  },
  {
    id: 65,
    id_jurusan: 21,
    nama: "Mengoperasikan Lampu Penerangan jalan Umum (PJU)",
    youtube: "https://youtu.be/-c2x9Dv3EA0?si=r2oZP2iBFO-mtl27",
  },
  {
    id: 66,
    id_jurusan: 21,
    nama: "Mengoperasikan Instalasi Listrik Bangunan Sederhan...",
    youtube: "https://youtu.be/FvIqqbf-1-4?si=N_Sia9RPT5yU46Qd",
  },
  {
    id: 67,
    id_jurusan: 21,
    nama: "Mengoperasikan Instalasi Listrik Bangunan Gedung",
    youtube: "https://youtu.be/JU08ywG2R4g?si=ze28ZiOFtS5yr2eC",
  },
  {
    id: 68,
    id_jurusan: 21,
    nama: "Memelihara Dan Memperbaiki Programable Logic Contr...",
    youtube: "https://youtu.be/wwhaFwOQet0?si=_2ec2xwXHIvHI49m",
  },
  {
    id: 69,
    id_jurusan: 21,
    nama: "Memperbaiki Instalasi Listrik Lift, Escalator dan ...",
    youtube: "https://youtu.be/2tqwWMYfcJk?si=DY67NFZd--jYxHZw",
  },
  {
    id: 70,
    id_jurusan: 21,
    nama: "Memelihara dan Memperbaiki Instalasi Listrik Bangu...",
    youtube: "https://youtu.be/IoYPjoPLdjI?si=elJzNxAH4qMixtBZ",
  },
  {
    id: 71,
    id_jurusan: 21,
    nama: "Memelihara dan memperbaiki Instalasi Listrik Bangu...",
    youtube: "https://youtu.be/tfQxz_XVVdA?si=8mzhZssfRKxNmR2D",
  },
  {
    id: 72,
    id_jurusan: 21,
    nama: "Memelihara dan Memperbaik Instalasi Listrik Air Co...",
    youtube: "https://youtu.be/hpPBW5jBzoU?si=zeYIbrnC8N4_b4Zs",
  },
  {
    id: 73,
    id_jurusan: 21,
    nama: "Memasang PHB dan Instalasi Listrik Lift, Escalator...",
    youtube: "https://youtu.be/848ct6rlcoQ?si=3fkaisEJgQKX8FOM",
  },
  {
    id: 74,
    id_jurusan: 21,
    nama: "Memasang PHB dan Instalasi Listrik Air Conditionin...",
    youtube: "https://youtu.be/ct-ImOzVJmg?si=e4Ug2fnimqfbVNFB",
  },
  {
    id: 75,
    id_jurusan: 21,
    nama: "Memasang Lampu Penerangan Jalan Umum (PJU)",
    youtube: "https://youtu.be/34KQdUR1jCQ?si=kGaEFX3zqVimunwa",
  },
  {
    id: 76,
    id_jurusan: 21,
    nama: "Memasang Instalasi PLC",
    youtube: "https://youtu.be/4c9GwhuXpVc?si=G_Cd6tdeiW9BuynA",
  },
  {
    id: 77,
    id_jurusan: 21,
    nama: "Memasang Instalasi Listrik Bangunan",
    youtube: "https://youtu.be/vkIyU1spGtk?si=IOnhVjYOlbRKrLvb",
  },
  {
    id: 78,
    id_jurusan: 21,
    nama: "Memasang Listrik Bangunan Gedung",
    youtube: "https://youtu.be/royYrOVjLHo?si=wouPy8UQc3y2cEg5",
  },
  {
    id: 79,
    id_jurusan: 22,
    nama: "Memelihara Peralatan Elektronika",
    youtube: "https://youtu.be/gVhyFVtUBKg?si=dcZODFJDlST-jZHv",
  },
  {
    id: 80,
    id_jurusan: 22,
    nama: "Memelihara Peralatan Hidrolik",
    youtube: "https://youtu.be/6w-XeVOzJ2Y?si=J9JYzImCZsDmEhbE",
  },
  {
    id: 81,
    id_jurusan: 22,
    nama: "Memelihara Peralatan Kelistrikan",
    youtube: "https://youtu.be/ccUiP3HzPg0?si=Eeq8Qt1S2ckLhfJS",
  },
  {
    id: 82,
    id_jurusan: 22,
    nama: "Memelihara Peralatan Pneumatik",
    youtube: "https://youtu.be/hzf5biyVMXU?si=2Xk0-PMiyKO1j00v",
  },
  {
    id: 83,
    id_jurusan: 22,
    nama: "Memelihara Sensor",
    youtube: "https://youtu.be/wH_8YXt9t_M?si=jO1x0sFd4OqMrNFi",
  },
  {
    id: 84,
    id_jurusan: 22,
    nama: "Mengoperasikan Mesin Perkakas Konvensional",
    youtube: "https://youtu.be/ad6aCSMppwk?si=8_3woKAfZDzR5-2u",
  },
  {
    id: 85,
    id_jurusan: 22,
    nama: "Mengoperasikan Peralatan Pneumatik",
    youtube: "https://youtu.be/g0Z21aQ4gBs?si=HCpG7ItPLQ6xaum5",
  },
  {
    id: 86,
    id_jurusan: 22,
    nama: "Mengoperasikan Permesinan CNC",
    youtube: "https://youtu.be/I5I4urdBut8?si=ILwUtfGomfC0FAST",
  },
  {
    id: 87,
    id_jurusan: 22,
    nama: "Mengoperasikan Programmable Logic Controller (PLC)",
    youtube: "https://youtu.be/-QCxxDXRqP0?si=e0QwYvODHOkWWJsM",
  },
  {
    id: 88,
    id_jurusan: 22,
    nama: "Mengoperasikan Sistem Robot (Handling System)",
    youtube: "https://youtu.be/bhysi3OXNnA?si=20cZp4OTDX3x7VSA",
  },
  {
    id: 89,
    id_jurusan: 22,
    nama: "Mengoperasikan Peralatan Elektronik",
    youtube: "https://youtu.be/HaaHldbnRas?si=yF4neFE2RvUpQY8I",
  },
  {
    id: 90,
    id_jurusan: 22,
    nama: "Mengoperasikan Peralataan Hidrolik",
    youtube: "https://youtu.be/KCkQNPdyBx0?si=fwHhR8AIREixQkMI",
  },
  {
    id: 91,
    id_jurusan: 22,
    nama: "Mengoperasikan Peralatan Kelistrikan",
    youtube: "https://youtu.be/mxQPamF12Po?si=e-prPImWzI8fqDFv",
  },
  {
    id: 92,
    id_jurusan: 23,
    nama: "Melaksanakan Operasi Penanganan Secara Manual",
    youtube: "https://youtu.be/IwCn6Ygoc4U?si=8cWI2d3DasBCKIEN",
  },
  {
    id: 93,
    id_jurusan: 23,
    nama: "Melaksanakan Pekerjaan Pelurusan Roda/Spooring",
    youtube: "https://youtu.be/3zPfo3IhpPE?si=ycWOma6MgT7tC5GE",
  },
  {
    id: 94,
    id_jurusan: 23,
    nama: "Melaksanakan Pemelihraan/Servis Komponen",
    youtube: "https://youtu.be/Rm_Z1wRY8NA?si=9SPdITA1w9Wvi1rV",
  },
  {
    id: 95,
    id_jurusan: 23,
    nama: "Memasang dan Memelihara/Servis System Rem",
    youtube: "https://youtu.be/XwNAkVU9aB0?si=7aGJ4Fx78mTu-_G_",
  },
  {
    id: 96,
    id_jurusan: 23,
    nama: "Memasang dan memelihara sistem A/C (Air Conditione...",
    youtube: "https://youtu.be/uhhOxQ09G04?si=rQay31zlEQe2lIRD",
  },
  {
    id: 97,
    id_jurusan: 23,
    nama: "Memasang Perlengkapan Kelistrikan Tambahan (Asesor...",
    youtube: "https://youtu.be/GBDjrBSuwn8?si=P3oEQ-IRI7unHEty",
  },
  {
    id: 98,
    id_jurusan: 23,
    nama: "Memasang, Menguji dan Memperbaiki Sistem Peneranga...",
    youtube: "https://youtu.be/o16FdbzYPbY?si=n5Doq6zJEDGjieSe",
  },
  {
    id: 99,
    id_jurusan: 23,
    nama: "Memasang, Menguji dan Memperbaiki Sistem Pengamana...",
    youtube: "https://youtu.be/W0RKqhNoBUk?si=D-DVZXqs_E3F-OZl",
  },
  {
    id: 100,
    id_jurusan: 23,
    nama: "Membalance Roda/Ban",
    youtube: "https://youtu.be/09rCOUWL9NM?si=kW_66wtAC2gQeFEm",
  },
  {
    id: 101,
    id_jurusan: 23,
    nama: "Memelihara/Servis dan Memperbaiki Engine Managemen...",
    youtube: "https://youtu.be/UE6B4vdrE0o?si=Jcgb-JgcTQxdpOdP",
  },
  {
    id: 102,
    id_jurusan: 23,
    nama: "Memelihara / Servis Sistem Bahan bakar Bensin",
    youtube: "https://youtu.be/_sAUvLccRD4?si=mUM50Iuq5OJeCpKc",
  },
  {
    id: 103,
    id_jurusan: 23,
    nama: "Memelihara /Servis Sistem Pendingin dan Komponenny...",
    youtube: "https://youtu.be/AI8uKReuKwM?si=N5eR5kiswim1_tQB",
  },
  {
    id: 104,
    id_jurusan: 23,
    nama: "Memelihara Memperbaiki Sistem Kelistrikan Bodi Con...",
    youtube: "https://youtu.be/Y_VrykVDDfI?si=ZvrHw4m5UzxtRFVG",
  },
  {
    id: 105,
    id_jurusan: 23,
    nama: "Memelihara dan Memperbaiki Sistem Penggerak Contro...",
    youtube: "https://youtu.be/__OABYmAnBU?si=rhpqTJ9O3GqKLTEH",
  },
  {
    id: 106,
    id_jurusan: 23,
    nama: "Memelihara dan Memperbaiki Sitem rem Anti-Lock Bra...",
    youtube: "https://youtu.be/CKhzrkKQtzo?si=E_anivbu8jogpaHW",
  },
  {
    id: 107,
    id_jurusan: 23,
    nama: "Memelihara/Servis Engine dan Komponen-komponennya",
    youtube: "https://youtu.be/HqqA-_zIrkU?si=D9I6RcnEzq8oDdCW",
  },
  {
    id: 108,
    id_jurusan: 23,
    nama: "Memelihara/Servis Sistem A/C (Air Conditioner)",
    youtube: "https://youtu.be/VYNyTNyBrDo?si=9TGpn0KR8qqDKXtg",
  },
  {
    id: 109,
    id_jurusan: 23,
    nama: "Memelihara/Servise Injeksi Bahan Bakar Diesel",
    youtube: "https://youtu.be/hsVo0hYtMbQ?si=GBUrbOBMJcZtycjD",
  },
  {
    id: 110,
    id_jurusan: 23,
    nama: "Memelihara/Servis Sistem Kemudi",
    youtube: "https://youtu.be/UD_Ek84jR9A?si=6kDjWT7h0XzBvVOS",
  },
  {
    id: 111,
    id_jurusan: 23,
    nama: "Memelihara/Servis Sistem Suspensi",
    youtube: "https://youtu.be/o9Mw906U_mI?si=wDLt7qKOY_aWwYoO",
  },
  {
    id: 112,
    id_jurusan: 23,
    nama: "Memelihara/Servis Transmisi Manual",
    youtube: "https://youtu.be/yaHwhXBCWtM?si=VLd-Bp1uzkTxr7vR",
  },
  {
    id: 113,
    id_jurusan: 23,
    nama: "Memelihara/Servis Transmisi Otomatis",
    youtube: "https://youtu.be/PBkrih79AsQ?si=8abmzJLJEdLnOL2x",
  },
  {
    id: 114,
    id_jurusan: 23,
    nama: "Memelihara/Servis Unit Final Drive/Gardan",
    youtube: "https://youtu.be/ILcfgh87bhg?si=DcO6PVV1iMSEoNn-",
  },
  {
    id: 115,
    id_jurusan: 23,
    nama: "Memelihara Unit Kopling dan Komponen Sistem Pengop...",
    youtube: "https://youtu.be/rDnZM4pTEmU?si=YDsO3ifYc5YlPgvx",
  },
  {
    id: 116,
    id_jurusan: 23,
    nama: "Memperbaiki Sistem Pengapian",
    youtube: "https://youtu.be/EPVjPT_lHQc?si=hmUn7u_VM5bZ8VhL",
  },
  {
    id: 117,
    id_jurusan: 23,
    nama: "Memperbaiki Sistem Starter dan Pengisisan",
    youtube: "https://youtu.be/HzNjWzvS2qs?si=AvWyEVAlSTvG068w",
  },
  {
    id: 118,
    id_jurusan: 23,
    nama: "Menggunakan dan Memelihara Alat Ukur",
    youtube: "https://youtu.be/odOVcJ43xPE?si=igPEL2OiCQN4GKAH",
  },
  {
    id: 119,
    id_jurusan: 23,
    nama: "Menggunkan dan Memelihara Peralatan dan Perlengkap...",
    youtube: "https://youtu.be/vn0pcAuzbqY?si=_-VNYw2PFkBD5WdY",
  },
  {
    id: 120,
    id_jurusan: 23,
    nama: "Menguji, Memelihara servis dan mengganti Baterai",
    youtube: "https://youtu.be/HmVS24-KiKc?si=dTqcdl9QWiB-6i_m",
  },
  {
    id: 121,
    id_jurusan: 23,
    nama: "Pemeliharaan/Servis Sistem Kontrol Emisi",
    youtube: "https://youtu.be/FNRPTaPYEco?si=MalRSCp18f7FTHH2",
  },
  {
    id: 122,
    id_jurusan: 24,
    nama: "Memprogram mesin NC/CNC (dasar) - Teknik Pemesinan",
    youtube: "https://youtu.be/T9fOJFLrcjs?si=TMvBKUwDQ7Gpzv6w",
  },
  {
    id: 123,
    id_jurusan: 24,
    nama: "Mengoperasikan dan Mengamati Mesin/Proses - Teknik...",
    youtube: "https://youtu.be/_jllATCev4U?si=yAsovdbE_vp4v7qC",
  },
  {
    id: 124,
    id_jurusan: 24,
    nama: "Mengoperasikan mesin NC/CNC (Dasar) - Teknik Pemes...",
    youtube: "https://youtu.be/BbZksk9z9bI?si=mSUMLXAVmiOFFleB",
  },
  {
    id: 125,
    id_jurusan: 25,
    nama: "Membersihkan AC Indoor dan Outdoor - Teknik Pendin...",
    youtube: "https://youtu.be/xDWDr9-enho?si=89pSWadPdfqPp6Cb",
  },
  {
    id: 126,
    id_jurusan: 25,
    nama: "Memelihara dan Memperbaiki Peralatan Pendingin Unt...",
    youtube: "https://youtu.be/cIT2kOrhSz4?si=Yu8hHu33c36xzHsC",
  },
  {
    id: 127,
    id_jurusan: 25,
    nama: "Memperbaiki Kerusakan Part dan Komponen Sistem Pen...",
    youtube: "https://youtu.be/giPKsmiThG0?si=-rgFFxjDtGoc6q4C",
  },
  {
    id: 128,
    id_jurusan: 25,
    nama: "Mengganti Komponen Elektrik dan Mekanik pada Siste...",
    youtube: "https://youtu.be/25SyyylqFrg?si=_XqTekYpXWK6I5z1",
  },
  {
    id: 129,
    id_jurusan: 26,
    nama: "Melaksanakan Pemotongan Dengan Gas",
    youtube: "https://youtu.be/G7isc2mYpQ0?si=jB8XpLMSgt03yYyg",
  },
  {
    id: 130,
    id_jurusan: 26,
    nama: "Melaksanakan Pemotongan Secara Mekanik",
    youtube: "https://youtu.be/D44SPVehHrs?si=UM4EmtSNNv_aPv2M",
  },
  {
    id: 131,
    id_jurusan: 26,
    nama: "Melaksanakan Pemotongan Secara Mekanik dan Gas",
    youtube: "https://youtu.be/fL1J2KIQL_w?si=ZpwSLaBDQg4OJUBe",
  },
  {
    id: 132,
    id_jurusan: 26,
    nama: "Melakukan Pekerjaan Secara Tim",
    youtube: "https://youtu.be/gN4oXj7oTDk?si=eI1o3eI16PIWloBK",
  },
  {
    id: 133,
    id_jurusan: 26,
    nama: "Mengelas Pelat Posisi di Bawah Tangan(1F, 1G) deng...",
    youtube: "https://youtu.be/P2guZocGht8?si=9ke5vs2d2LYwILNT",
  },
  {
    id: 134,
    id_jurusan: 27,
    nama: "Melakukan Penangkapan Ikan dengan Berbagai Alat Ta...",
    youtube: "https://youtu.be/yvFgRgBGmys?si=VaR4PEJJ4_M9YlMH",
  },
  {
    id: 135,
    id_jurusan: 27,
    nama: "Melakukan Perawatan Sistem Refrigerasi",
    youtube: "https://youtu.be/JFFgSIKJZ_U?si=OgrKTVJOdF10FUx4",
  },
  {
    id: 136,
    id_jurusan: 27,
    nama: "Membuat dan Melakukan Perawatan Alat Penangkapan I...",
    youtube: "https://youtu.be/TSwnKSQY2Vw?si=g22XDuKoHCKC72vX",
  },
  {
    id: 137,
    id_jurusan: 27,
    nama: "Melakukan Pencegahan dan Pemadaman Kebakaran",
    youtube: "https://youtu.be/webroUE6u00?si=itAo9SNTS_jvi4F6",
  },
  {
    id: 138,
    id_jurusan: 27,
    nama: "Melakukan Perawatan Motor Bantu Dek",
    youtube: "https://youtu.be/TSwnKSQY2Vw?si=wUjujbq5yYbKu16m",
  },
  {
    id: 139,
    id_jurusan: 28,
    nama: "Memproses Dokumen Perjalanan Darat dan Laut",
    youtube: "https://youtu.be/9BX8MAwEWs4?si=B3YrkNA1mlNHhVjD",
  },
  {
    id: 140,
    id_jurusan: 28,
    nama: "Membuat Dokumen di Dalam Komputer",
    youtube: "https://youtu.be/rUm8PoOr6Do?si=Q03vlHhjqNcbwsTJ",
  },
  {
    id: 141,
    id_jurusan: 28,
    nama: "Melakukan Prosedur Administrasi",
    youtube: "https://youtu.be/PkHrr_QZBkE?si=SyXVxT1-T4WWtaQW",
  },
  {
    id: 142,
    id_jurusan: 28,
    nama: "Melakukan Pemeriksaan Pra-Keberangkatan",
    youtube: "https://youtu.be/qDhM954Ac50?si=jKAqh8dEpNTwwRG9",
  },
  {
    id: 143,
    id_jurusan: 28,
    nama: "Melakukan Komunikasi Dalam Bahasa Inggris Pada Tin...",
    youtube: "https://youtu.be/vOwUfIJSz2w?si=_81r-F0oVB7eq-cu",
  },
  {
    id: 144,
    id_jurusan: 29,
    nama: "Merakit Pelat dan Lembaran",
    youtube: "https://youtu.be/563_S7zqGWY?si=44MXCqnMatMpSflE",
  },
  {
    id: 145,
    id_jurusan: 29,
    nama: "Merakit Komponen Fabrikasi",
    youtube: "https://youtu.be/Na7WVnjyTXs?si=6tO7RQwqln5T4n6U",
  },
  {
    id: 146,
    id_jurusan: 29,
    nama: "Menyolder dengan Kuningan dan/atau Perak",
    youtube: "https://youtu.be/B-WfyI2PCbE?si=EEHkB05lRa_Ltela",
  },
  {
    id: 147,
    id_jurusan: 29,
    nama: "Mengoperasikan Mesin NC/CNC (Dasar)",
    youtube: "https://youtu.be/bXxs_YQ2p7g?si=WAhC_exucZ2gkMer",
  },
  {
    id: 148,
    id_jurusan: 29,
    nama: "Menggambar Dan Menginterpretasikan Sketsa",
    youtube: "https://youtu.be/dcX-02w-ckY?si=eLKWtl6d3aCmAm8z",
  },
  {
    id: 149,
    id_jurusan: 30,
    nama: "Mengoperasikan Sistem Pneumatik",
    youtube: "https://youtu.be/lTxPJ1gJv6Y?si=RacsndwsnNWVTL4L",
  },
  {
    id: 150,
    id_jurusan: 30,
    nama: "Mengoperasikan Bahasa Pemrograman",
    youtube: "https://youtu.be/Iakiv6CIcyQ?si=cAy65nhYk1N5_fNR",
  },
  {
    id: 151,
    id_jurusan: 30,
    nama: "Memelihara Peralatan Kelistrikan",
    youtube: "https://youtu.be/-64Y-dU8KwE?si=T2Ix-BCIo-WLFO73",
  },
  {
    id: 152,
    id_jurusan: 30,
    nama: "Memelihara Peralatan Hidrolik",
    youtube: "https://youtu.be/Vp7rwgJ5KsM?si=EJ5osdbReNkHMQbL",
  },
  {
    id: 153,
    id_jurusan: 31,
    nama: "Memperbaiki Sistem Starter",
    youtube: "https://youtu.be/g1W4rTJ6CWA?si=M_ys4JN4E5B3jf50",
  },
  {
    id: 154,
    id_jurusan: 31,
    nama: "Memperbaiki Sistem Rem",
    youtube: "https://youtu.be/4gka1XlgCeI?si=5slWYWeEd0tH5aPX",
  },
  {
    id: 155,
    id_jurusan: 31,
    nama: "Memperbaiki Sistem Pengisian",
    youtube: "https://youtu.be/yV-1WfgzVss?si=N88fgLOnSUUKTMts",
  },
  {
    id: 156,
    id_jurusan: 31,
    nama: "Memperbaiki Sistem Kemudi",
    youtube: "https://youtu.be/ko7MtEJfT7U?si=r0w5Mw8H6r6IhFOl",
  },
  {
    id: 157,
    id_jurusan: 31,
    nama: "Memperbaiki Sistem Kelistrikan",
    youtube: "https://youtu.be/wSUM-yE-E_Y?si=zdkPMgECiBI7Ao94",
  },
  {
    id: 158,
    id_jurusan: 32,
    nama: "Memperbaiki Panel-panel Bodi",
    youtube: "https://youtu.be/fd8kVV0t1iY?si=l_Q4wwZYaJ0H8AWG",
  },
  {
    id: 159,
    id_jurusan: 32,
    nama: "Pelaksanaan Pengkilapan dan Pemolesan",
    youtube: "https://youtu.be/Qg8HeMbP4cs?si=hipdkySbfCV_Gb7u",
  },
  {
    id: 160,
    id_jurusan: 32,
    nama: "Melepas dan Mengganti Pelindung Moulding, Gambar-g...",
    youtube: "https://youtu.be/U4Y-Zk1etbo?si=wDJFh7hAQQz4bjex",
  },
  {
    id: 161,
    id_jurusan: 32,
    nama: "Melaksanakan Perbaikan Cat dan Pekerjaan Perbaikan...",
    youtube: "https://youtu.be/EULcEA7ChqI?si=v61AemWlcWE0DFEa",
  },
  {
    id: 162,
    id_jurusan: 33,
    nama: "Menggunakan Komponen-komponen Dasar Elektrik dan E...",
    youtube: "https://youtu.be/Jcx3i2T-wFw?si=LgF8BtqKeSWuzKno",
  },
  {
    id: 163,
    id_jurusan: 33,
    nama: "Membuat Single/Double Layer PCB secara Manual deng...",
    youtube: "https://youtu.be/4-F3KtZSgrY?si=7H7PP0RAsCGLO5aj",
  },
  {
    id: 164,
    id_jurusan: 33,
    nama: "Melacak Kerusakan Pada Produk Elektronika",
    youtube: "https://youtu.be/rRaAx1OlcGs?si=JW_iRythlVrQqtKA",
  },
  {
    id: 165,
    id_jurusan: 33,
    nama: "Membaca Gambar/Skematik Diagram Elektronika",
    youtube: "https://youtu.be/Btp3hl8kw8o?si=NPTWHs6CWfzYINFv",
  },
  {
    id: 166,
    id_jurusan: 33,
    nama: "Menggunakan Alat Uji dan Ukur",
    youtube: "https://youtu.be/dvaDh6Arc-8?si=FyjhoiX-h5zHDRCE",
  },
  {
    id: 167,
    id_jurusan: 34,
    nama: "Merawat Kulit Wajah Tidak Bermasalah",
    youtube: "https://youtu.be/bvEiDp1IwuA?si=-uUn-YMJ8UlwMzUS",
  },
  {
    id: 168,
    id_jurusan: 34,
    nama: "Merawat Kulit Kepala dan Rambut",
    youtube: "https://youtu.be/TfcxpEHWaYs?si=NlUazUS4wL50gQXF",
  },
  {
    id: 169,
    id_jurusan: 34,
    nama: "Merias Wajah Panggung",
    youtube: "https://youtu.be/a56CqDl3P8Y?si=gEwMKJtv6mVIIegV",
  },
  {
    id: 170,
    id_jurusan: 34,
    nama: "Merawat Tangan dan Mewarnai Kuku",
    youtube: "https://youtu.be/XAMod054fZM?si=zKaDiUPU_HLvFhmK",
  },
  {
    id: 171,
    id_jurusan: 34,
    nama: "Merawat Kaki dan Mewarnai Kuku",
    youtube: "https://youtu.be/MDroYO631Ac?si=p1pERFy48LIhkbs0",
  },
  {
    id: 172,
    id_jurusan: 35,
    nama: "Menyelesaikan Busana dengan Jahitan Tangan",
    youtube: "https://youtu.be/iEz9IFJYU2o?si=9bURa3XOoPlCdhYy",
  },
  {
    id: 173,
    id_jurusan: 35,
    nama: "Menjahit Menggunakan Mesin",
    youtube: "https://youtu.be/jqKoRnQ1BGc?si=yEdS2kepDgzvxkzC",
  },
  {
    id: 174,
    id_jurusan: 35,
    nama: "Membuat Pola Sesuai Style dan Spesifikasi Secara M...",
    youtube: "https://youtu.be/fd1faBLuZV8?si=6Joa5FXcKPlJY5Vd",
  },
  {
    id: 175,
    id_jurusan: 35,
    nama: "Membuat Hiasan Pada Busana",
    youtube: "https://youtu.be/XDMgg47m_so?si=NjQxSan5QBjfmVEE",
  },
  {
    id: 176,
    id_jurusan: 35,
    nama: "Melakukan Penyelesaian Akhir Busana (Finishing)",
    youtube: "https://youtu.be/LRqq1tW5l0E?si=u-BFuluDQcLDoWjs",
  },
  {
    id: 177,
    id_jurusan: 36,
    nama: "Menyiapkan Produk Bakery Untuk Patisserie",
    youtube: "https://youtu.be/sYyicJNHm6Y?si=HkeXgZSrZiSoO4aD",
  },
  {
    id: 178,
    id_jurusan: 36,
    nama: "Menyiapkan dan Menyajikan Makanan Penutup",
    youtube: "https://youtu.be/E34H-DOYttQ?si=xwAjnPMosIUJvZ46",
  },
  {
    id: 179,
    id_jurusan: 36,
    nama: "Menyiapkan dan Menyajikan Gateaux, Torten dan Kue",
    youtube: "https://youtu.be/rDtuguvt6oM?si=y2X08kBBGi29ZyOX",
  },
  {
    id: 180,
    id_jurusan: 36,
    nama: "Menyiapkan dan Membuat Pastry",
    youtube: "https://youtu.be/ZiaNL2w2dnQ?si=J0XYLSqoWDyA2Ozc",
  },
  {
    id: 181,
    id_jurusan: 36,
    nama: "Menyajikan dan Mendisplay Makanan",
    youtube: "https://youtu.be/56NJBTvHHIw?si=aBA3ApFqnMgcZ7w8",
  },
  {
    id: 182,
    id_jurusan: 37,
    nama: "Mengimplementasikan Algoritma Pemrograman",
    youtube: "https://youtu.be/-645MWICKwI?si=rd4E3JnKGm0zxmkT",
  },
  {
    id: 183,
    id_jurusan: 37,
    nama: "Mengembangkan Perangkat Lunak Sesuai dengan Deploy...",
    youtube: "https://youtu.be/hfCoxYbOYZw?si=TWmIyv8MPg8924mP",
  },
  {
    id: 184,
    id_jurusan: 37,
    nama: "Menerapkan Akses Basis Data",
    youtube: "https://youtu.be/mjwYv6pglw0?si=DsMqrV5bRoNuhrIP",
  },
  {
    id: 185,
    id_jurusan: 37,
    nama: "Memasang Kabel Jaringan",
    youtube: "https://youtu.be/555eJ5_cHaY?si=XQ-MC20qkPQbB1yc",
  },
  {
    id: 186,
    id_jurusan: 37,
    nama: "Memasang Kabel Fiber Optik Ruangan/Gedung",
    youtube: "https://youtu.be/MfNNcvYSAJY?si=Q3EoCtYlSJcUNWPs",
  },
  {
    id: 187,
    id_jurusan: 38,
    nama: "Menerapkan Perintah Eksekusi Bahasa, Pemrograman B...",
    youtube: "https://youtu.be/E_BPT-jlPg8?si=-7zmqcvHT3yZlw_1",
  },
  {
    id: 188,
    id_jurusan: 38,
    nama: "Mengimplementasikan Pemrograman Berorientasi Objek",
    youtube: "https://youtu.be/d6_nual3T3w?si=0S7CpTLdElhjj8D-",
  },
  {
    id: 189,
    id_jurusan: 38,
    nama: "Mengimplementasikan Algoritma Pemrograman",
    youtube: "https://youtu.be/YX6ikFSZlec?si=T-X2RiRkmqIybmSL",
  },
  {
    id: 190,
    id_jurusan: 38,
    nama: "Membuat Dokumen Kode Program",
    youtube: "https://youtu.be/q7t2X0--pCw?si=mXBL2TorSdlOQ4QS",
  },
  {
    id: 191,
    id_jurusan: 38,
    nama: "Melaksanakan Konfigurasi Perangkat Lunak",
    youtube: "https://youtu.be/8lIAMn7vOWo?si=0PS8wKogbzkDDCRi",
  },
  {
    id: 192,
    id_jurusan: 39,
    nama: "Mengoperasikan Mesin Cetak Digital",
    youtube: "https://youtu.be/gZhv1PGwmGU?si=BhDeuRiw5tjj2Oz9",
  },
  {
    id: 193,
    id_jurusan: 39,
    nama: "Mengoperasikan Komputer",
    youtube: "https://youtu.be/CLUjEiU_xTw?si=HhoLezGphpF-XoKf",
  },
  {
    id: 194,
    id_jurusan: 39,
    nama: "Memproduksi Cetakan dengan Cetak Saring/sablon",
    youtube: "https://youtu.be/Th5o_0MQ4MA?si=ZRBgIsm8H-bhqRHu",
  },
  {
    id: 195,
    id_jurusan: 39,
    nama: "Memotong Kertas Secara Manual",
    youtube: "https://youtu.be/0RxmIrEVIN8?si=cqEl-eABBFet9t8s",
  },
  {
    id: 196,
    id_jurusan: 39,
    nama: "Memotong Kertas Secara Manual dan Mesin",
    youtube: "https://youtu.be/kfydP7jdKm4?si=E7s3b5wo28OfAwAE",
  },
  {
    id: 197,
    id_jurusan: 39,
    nama: "Memotong Kertas dengan Mesin Otomatis",
    youtube: "https://youtu.be/h1QAxMCMcQw?si=ibQaH6vEafLZtkmQ",
  },
  {
    id: 198,
    id_jurusan: 40,
    nama: "Mengoperasikan Kamera",
    youtube: "https://youtu.be/eHZ-6ZNBQVA?si=52a18QAhPukOlOMQ",
  },
  {
    id: 199,
    id_jurusan: 40,
    nama: "Membuat Rencana Rekaman Suara di Lapangan",
    youtube: "https://youtu.be/IDLrVWYZqOM?si=YDYpsuvWtx5NRH1D",
  },
  {
    id: 200,
    id_jurusan: 40,
    nama: "Melakukan Setting Peralatan Tata Suara",
    youtube: "https://youtu.be/rybcn_lJMeU?si=ASYjoFDclrXz0hIi",
  },
  {
    id: 201,
    id_jurusan: 40,
    nama: "Melakukan Perekaman",
    youtube: "https://youtu.be/l1RkXWcN2hA?si=lby5oDCDM1A01yiK",
  },
  {
    id: 202,
    id_jurusan: 40,
    nama: "Melakukan Instalasi Sistem Peralatan Kamera",
    youtube: "https://youtu.be/l8W-tTnqZyo?si=t5oZhNrvRLMNnURV",
  },
  {
    id: 203,
    id_jurusan: 40,
    nama: "Melakukan Export Hasil Editing (Export to Media)",
    youtube: "https://youtu.be/-b77diK1K6Q?si=4jR61xg6nqgyYHN8",
  },
  {
    id: 204,
    id_jurusan: 41,
    nama: "Menyiapkan Kamar Untuk Tamu",
    youtube: "https://youtu.be/CFWBDbyiL7k?si=QTugfdQrRaatjVaA",
  },
  {
    id: 205,
    id_jurusan: 41,
    nama: "Menyediakan Layanan Akomodasi Reception",
    youtube: "https://youtu.be/WZXj-mkYo3g?si=tL_vjsR6rYDeewPh",
  },
  {
    id: 206,
    id_jurusan: 41,
    nama: "Menerima dan Memproses Reservasi",
    youtube: "https://youtu.be/kvfU6I77r10?si=uUYBv2Hny6tMCOU6",
  },
  {
    id: 207,
    id_jurusan: 41,
    nama: "Melakukan Prosedur Administrasi",
    youtube: "https://youtu.be/yrAZA7mWetQ?si=3S_ZnsU3hQGAlOpL",
  },
  {
    id: 208,
    id_jurusan: 41,
    nama: "Melaksanakan Tugas Resepsionis",
    youtube: "https://youtu.be/isAR_C9MJZg?si=LEYBPUxKyjVxIHIO",
  },
  {
    id: 209,
    id_jurusan: 42,
    nama: "Mengoperasikan Paket Program Pengolahan Angka/spre...",
    youtube: "https://youtu.be/eqgyoFwglYA?si=4MGPx0tGckVFIDe1",
  },
  {
    id: 210,
    id_jurusan: 42,
    nama: "Mengoperasikan Aplikasi Komputer Akuntansi",
    youtube: "https://youtu.be/SNnWD4uEwGk?si=U1pbya7OUMM6ezzf",
  },
  {
    id: 211,
    id_jurusan: 42,
    nama: "Mengelola Simpanan Nasabah",
    youtube: "https://youtu.be/feGRYfe_qGM?si=PPx3J4zQf4uXI6yS",
  },
  {
    id: 212,
    id_jurusan: 42,
    nama: "Memproses Transaksi Keuangan",
    youtube: "https://youtu.be/_PRSrrkmwwY?si=ZPGLCR2AZM7_vp9D",
  },
  {
    id: 213,
    id_jurusan: 42,
    nama: "Mengoperasikan Aplikasi Komputer Akuntansi",
    youtube: "https://youtu.be/S-BIYIHV1UI?si=cbKBGC_rCKLifvLI",
  },
  {
    id: 214,
    id_jurusan: 43,
    nama: "Mengoperasikan Aplikasi Perangkat Lunak",
    youtube: "https://youtu.be/3Xrb4NVs1OQ?si=pCj3xoefJEUxp_1U",
  },
  {
    id: 215,
    id_jurusan: 43,
    nama: "Mengelola Jadwal Kegiatan Pimpinan",
    youtube: "https://youtu.be/-hXN1fQaXSk?si=ZWGA0sVE24kTFORg",
  },
  {
    id: 216,
    id_jurusan: 43,
    nama: "Mengelola Arsip",
    youtube: "https://youtu.be/toDoOYUHRbE?si=Mo8257pWuxWd-JTu",
  },
  {
    id: 217,
    id_jurusan: 43,
    nama: "Menciptakan Dokumen/Lembar Kerja Sederhana",
    youtube: "https://youtu.be/dip1YLYtg4A?si=YGihr7K_GZq-mUb4",
  },
  {
    id: 218,
    id_jurusan: 43,
    nama: "Memelihara Data/file di Komputer",
    youtube: "https://youtu.be/MrC9SQoSNKg?si=dUAvASdwPK9tU7gW",
  },
  {
    id: 219,
    id_jurusan: 43,
    nama: "Melakukan Komunikasi Lisan dalam Bahasa Inggris Ti...",
    youtube: "https://youtu.be/vCzmGbM6cso?si=wjCPWxQqimza46Iy",
  },
  {
    id: 220,
    id_jurusan: 44,
    nama: "Merencanakan Operasi Penangkapan Ikan",
    youtube: "https://youtu.be/STHqaMqg9HI?si=xNAieBTPebR76mwU",
  },
  {
    id: 221,
    id_jurusan: 44,
    nama: "Merakit Pukat Cincin, Hela, Jaring Insang, Rawai T...",
    youtube: "https://youtu.be/Jzn546YcoN8?si=S9Y1BCBFTYlPEkU9",
  },
  {
    id: 222,
    id_jurusan: 44,
    nama: "Melaksanakan Tugas Jaga Laut",
    youtube: "https://youtu.be/bTVwPALK6hE?si=7XbdnHZrTHNCeTYc",
  },
  {
    id: 223,
    id_jurusan: 45,
    nama: "Menyiapkan dan Membuat Frame/cel Berwarna",
    youtube: "https://youtu.be/pHZZa-Ygj6Y?si=RJRAauwvvXNjoFqK",
  },
  {
    id: 224,
    id_jurusan: 45,
    nama: "Menggabungkan Video ke Dalam Sajian Multimedia",
    youtube: "https://youtu.be/QsIav0ngP44?si=s0pLYWGxfri7rEMA",
  },
  {
    id: 225,
    id_jurusan: 45,
    nama: "Menggabungkan Fotografi Digital Ke Dalam Sajian Mu...",
    youtube: "https://youtu.be/pnTMy92W8a0?si=2_LA--9ZLpczEruU",
  },
  {
    id: 226,
    id_jurusan: 45,
    nama: "Menggabungkan Audio ke Dalam Sajian Multimedia",
    youtube: "https://youtu.be/Puxw_TP0P48?si=Sh_kWEOlV9Tf9nFD",
  },
];

// --- LOGIKA PENGGABUNGAN DATA ---

/**
 * Menggabungkan data mockJurusan dengan mockVideoItems
 */
export const mockJurusanWithVideos: JurusanWithVideos[] = mockJurusan.map(
  (jurusan) => {
    // 1. Filter semua video yang 'id_jurusan'-nya cocok dengan 'jurusan.id'
    const relatedVideos = mockVideoItems
      .filter((video) => video.id_jurusan === jurusan.id)
      .map((video) => {
        // 2. Ubah struktur video agar sesuai dengan interface Omit<VideoItem, 'id_jurusan'>
        const { ...videoData } = video; // Destructuring untuk menghapus id_jurusan
        return videoData;
      });

    // 3. Kembalikan objek Jurusan baru yang sudah berisi array 'videos'
    return {
      ...jurusan,
      videos: relatedVideos,
    };
  }
);

// --- HASIL GABUNGAN (RESPONSE) ---

/**
 * Objek respons akhir yang siap digunakan
 */
export const mockJurusanWithVideosResponse: JurusanWithVideosResponse = {
  status: true,
  message: "Success get jurusan with videos!",
  data: mockJurusanWithVideos,
};

// --- CONTOH PENGGUNAAN ---
// Anda bisa log ini untuk melihat hasilnya di konsol
// console.log(JSON.stringify(mockJurusanWithVideosResponse, null, 2));

// Contoh melihat satu jurusan (Teknik Komputer dan Jaringan, id: 20)
// const tkj = mockJurusanWithVideosResponse.data.find(j => j.id === 20);
// console.log(tkj);
