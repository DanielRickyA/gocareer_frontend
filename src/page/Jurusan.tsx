import LazyYoutube from "@/components/LazyYoutube";

export interface VideoItem {
  title: string;
  url: string;
}

export interface SubjectVideos {
  subject: string;
  videos: VideoItem[];
}

const smaList = [
  {
    subject: "Pendidikan Agama dan Budi Pekerti",
    videos: [
      {
        title: "Prasangka Baik Husnuzzan",
        url: "https://www.youtube.com/embed/GNoSc20cPd4",
      },
      {
        title: "Menghormati dan Menyayangi Orang tua dan Guru",
        url: "https://www.youtube.com/embed/sNe9n_UqIes",
      },
    ],
  },
  {
    subject: "Pendidikan Pancasila",
    videos: [
      {
        title: "Peranan Indonesia dalam Perdamaian Dunia",
        url: "https://www.youtube.com/embed/HKJtCFneDfk",
      },
      {
        title: "Sistem Pembagian Kekuasaan Negara Republik Indonesia",
        url: "https://www.youtube.com/embed/kO_qEdLOHDg",
      },
    ],
  },
  {
    subject: "Bahasa Indonesia",
    videos: [
      {
        title: "Perbedaan Fiksi dan Non Fiksi",
        url: "https://www.youtube.com/embed/Z5M7BuDEZNA",
      },
      {
        title: "Teks Negosiasi",
        url: "https://www.youtube.com/embed/IdGJNnbWBAQ",
      },
    ],
  },
  {
    subject: "Matematika",
    videos: [
      {
        title: "Perbandingan Trigonometri",
        url: "https://www.youtube.com/embed/0h16FQjeqP8",
      },
      {
        title: "Peluang Suatu Kejadian",
        url: "https://www.youtube.com/embed/YLAZZz3DSvA",
      },
    ],
  },
  {
    subject: "Bahasa Inggris",
    videos: [
      {
        title: "English Song",
        url: "https://www.youtube.com/embed/5XELIFsFmcU",
      },
      {
        title: "Announcement",
        url: "https://www.youtube.com/embed/q5_Ok9nLeEs",
      },
    ],
  },
  {
    subject: "Pendidikan Jasmani, Olahraga dan Kesehatan",
    videos: [
      {
        title: "Permainan Bola Kecil",
        url: "https://www.youtube.com/embed/mxnzhO4XGlI",
      },
      {
        title: "Teknik Dasar Lari 100 M",
        url: "https://www.youtube.com/embed/hbxoZ41irAI",
      },
    ],
  },
  {
    subject: "Sejarah",
    videos: [
      {
        title: "Keterkaitan Peristiwa Sejarah Untuk Kehidupan Masa Kini",
        url: "https://www.youtube.com/embed/HUFCMzLhIVY",
      },
      {
        title: "Kebudayaan Zaman Pra Aksara",
        url: "https://www.youtube.com/embed/gydjBK2bVwM",
      },
    ],
  },
  {
    subject: "Seni dan Budaya",
    videos: [
      {
        title: "Bentuk Bentuk Karya Seni Rupa",
        url: "https://www.youtube.com/embed/nHj_zfG1Vmk",
      },
      {
        title: "Seni Teater Modern",
        url: "https://www.youtube.com/embed/nOxIm_gMKk4",
      },
    ],
  },
  {
    subject: "Biologi",
    videos: [
      {
        title: "Klasifikasi Makhluk Hidup",
        url: "https://www.youtube.com/embed/iwvrabdN7wo",
      },
      {
        title: "Fotosintesis",
        url: "https://www.youtube.com/embed/GgDjjto899k",
      },
    ],
  },
  {
    subject: "Kimia",
    videos: [
      {
        title: "Larutan Elektrolit dan Non Elektrolit",
        url: "https://www.youtube.com/embed/yGS_4UzvWSY",
      },
      {
        title: "Bentuk Molekul Berdasarkan Teori VSEPR",
        url: "https://www.youtube.com/embed/1bkUi96fwdE",
      },
    ],
  },
  {
    subject: "Fisika",
    videos: [
      {
        title: "Gravitasi Newton",
        url: "https://www.youtube.com/embed/kzGYawCtUM8",
      },
      {
        title: "Gelombang Bunyi Efek Doppler",
        url: "https://www.youtube.com/embed/ZTJQkSzyanM",
      },
    ],
  },
  {
    subject: "Sosiologi",
    videos: [
      {
        title: "Resolusi Konflik",
        url: "https://www.youtube.com/embed/pRj-KZ34Q9I",
      },
      {
        title: "Prinsip Kesetaraan Untuk Menyingkapi Perbedaan Sosial",
        url: "https://www.youtube.com/embed/9h5il1Dqs4Y",
      },
    ],
  },
  {
    subject: "Ekonomi",
    videos: [
      {
        title: "Pasar Modal",
        url: "https://www.youtube.com/embed/HuLzmgK5gU4",
      },
      {
        title: "Indeks Harga dan Inflasi",
        url: "https://www.youtube.com/embed/Gp-e-K9W-Ws",
      },
    ],
  },
  {
    subject: "Geografi",
    videos: [
      {
        title: "Siklus Hidrologi",
        url: "https://www.youtube.com/embed/xFOitEG3_PU",
      },
      {
        title: "Pemanasan Global",
        url: "https://www.youtube.com/embed/K3TqbcdJZiI",
      },
    ],
  },
  {
    subject: "Antropologi",
    videos: [
      {
        title: "Konsep Dasar Antropologi",
        url: "https://www.youtube.com/embed/-JepjereSaY",
      },
      {
        title: "Keragaman Budaya Masyarakat Indonesia",
        url: "https://www.youtube.com/embed/dtnoHJ9FR-U",
      },
    ],
  },
  {
    subject: "Bahasa Arab",
    videos: [
      {
        title: "Teks Eksplanasi",
        url: "https://www.youtube.com/embed/bFr5x3_qStI",
      },
      {
        title: "Huruf Jar",
        url: "https://www.youtube.com/embed/S912sxQAWfI",
      },
    ],
  },
  {
    subject: "Bahasa Jerman",
    videos: [
      {
        title: "Wie grüβt Julian seine Freunde",
        url: "https://www.youtube.com/embed/GkJea_Sq9wM",
      },
    ],
  },
  {
    subject: "Prakarya dan Kewirausahaan",
    videos: [
      {
        title: "Produksi Kerajinan dari Bahan Limbah Berbentuk Bangun Ruang",
        url: "https://www.youtube.com/embed/cEPGBRHmXKs",
      },
      {
        title: "Pengolahan Makanan Awetan dari Bahan Nabati",
        url: "https://www.youtube.com/embed/UTSNnMd3VTY",
      },
    ],
  },
];

const smkList = [
  {
    subject: "Teknik Komputer dan Jaringan",
    videos: [
      {
        title: "Merancang Pengalamatan Jaringan",
        url: "https://www.youtube.com/embed/QZPYoozLzvY",
      },
      {
        title: "Menyiapkan Kabel Jaringan",
        url: "https://www.youtube.com/embed/BzQCu8X5CA4",
      },
      {
        title: "Merakit Komputer",
        url: "https://www.youtube.com/embed/MgxRiLe_7kY",
      },
      {
        title: "Mengkonfigurasi VLAN",
        url: "https://www.youtube.com/embed/xMvHQD1Bxpk",
      },
      {
        title: "Mengkonfigurasi Switch Pada Jaringan",
        url: "https://www.youtube.com/embed/STzP7NLbM9s",
      },
      {
        title: "Mengkonfigurasi Sistem Keamanan Jaringan",
        url: "https://www.youtube.com/embed/Yfa28sTxmM0",
      },
      {
        title: "Mengkomfigurasi Routing Statis",
        url: "https://www.youtube.com/embed/OKXGIL5g9y8",
      },
      {
        title: "Mengkonfigurasi Roouting Dinamis",
        url: "https://www.youtube.com/embed/Yd8shJ3l36c",
      },
      {
        title: "Mengkonvigurasi DNS Server",
        url: "https://www.youtube.com/embed/ZuQ7dPppqGI",
      },
      {
        title: "Mengkonfigurasi DHCP Server",
        url: "https://www.youtube.com/embed/nOgEFQKKiMU",
      },
      {
        title: "Menginstalasi Sistem Operasi",
        url: "https://www.youtube.com/embed/xB7OF_DuEhI",
      },
      {
        title: "Menginstalasi Jaringan Local (LAN)",
        url: "https://www.youtube.com/embed/83l7zEQ0IL4",
      },
      {
        title: "Menginstalasi Software Aplikasi",
        url: "https://www.youtube.com/embed/5wXD-51u7bc",
      },
      {
        title: "Mendesain Topologi Jaringan",
        url: "https://www.youtube.com/embed/OvLT6yv_OOM",
      },
      {
        title: "Membangun Jaringan Nirkabel",
        url: "https://www.youtube.com/embed/pGeNwBjqaF8",
      },
      {
        title: "Memasang Kabel Jaringan",
        url: "https://www.youtube.com/embed/d4o5kXhpYPQ",
      },
      {
        title: "Melakukan Setting BIOS",
        url: "https://www.youtube.com/embed/e3NXG4WTp1w",
      },
    ],
  },
];

function Jurusan() {
  return (
    <div className="">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12">
        <div className="flex gap-6 items-center justify-start">
          <img src="/icon3.png" alt="" />
          <h1 className="text-4xl md:text-5xl text-left font-bold">Jurusan</h1>
        </div>
        <p className="text-base md:text-xl mt-4 text-description text-justify">
          Tonton video jurusan dari SMA & SMK untuk tahu lebih jauh sebelum
          menentukan arah pendidikanmu.
        </p>

        <p className="font-semibold text-left text-3xl mt-8">SMA/MA</p>
        <p className="text-description mb-4">
          Berikut adalah Jingle SMA dan Mata pelajaran yang terdapat pada
          SMA/MA.
        </p>
        <p className="font-semibold text-left text-2xl mt-4 mb-2">
          Video Jingle
        </p>
        <LazyYoutube
          url={"https://www.youtube.com/embed/Ejwr0sEOeWY?si=qaDPm0CZa5bbXXPt"}
          title={"Jingle SMA"}
        />
        <p className="font-semibold text-left text-2xl my-4">
          Mata Pelajaran di SMA/MA
        </p>
        <ul className="list-disc ps-4">
          {smaList.map((jurusan) => (
            <li>
              <div className="">
                <p className="font-semibold text-left text-xl">
                  {jurusan.subject}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {jurusan.videos.map((item) => (
                    <div key={item.title} className="mb-4">
                      <div className=" relative w-full pb-[56.25%] h-0">
                        <LazyYoutube url={item.url} title={item.title} />
                      </div>
                      <p className="text-center mt-2">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="font-semibold text-left text-3xl mt-8">SMK</p>
        <p className="text-description mb-4">
          Berikut adalah Jingle SMK Bisa dan Jurusan yang terdapat pada SMK.
        </p>
        <p className="font-semibold text-left text-2xl mt-4 mb-2">
          Video Jingle
        </p>
        <LazyYoutube
          url={"https://www.youtube.com/embed/thuPDKF33Gg?si=r7sUWOnlmPhW2siX"}
          title={"Jingle SMK"}
        />
        <p className="font-semibold text-left text-2xl mt-4 mb-2">
          Jurusan di SMA/MA
        </p>
        <LazyYoutube
          url={"https://www.youtube.com/embed/QMP1RdeGLL8?si=XJaM1zC2DjOIbnC2"}
          title={"Jalan-jalan yuk keliling SMK, pasti seruuuuu!!!"}
        />
        <ul className="list-disc ps-4 mt-4">
          {smkList.map((jurusan) => (
            <li>
              <div className="">
                <p className="font-semibold text-left text-xl">
                  {jurusan.subject}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {jurusan.videos.map((item) => (
                    <div key={item.title} className="mb-4">
                      <div className=" relative w-full pb-[56.25%] h-0">
                        <LazyYoutube url={item.url} title={item.title} />
                      </div>
                      <p className="text-center mt-2">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Jurusan;
