export const getInterestDescription = (code: string): string => {
  const interestMap: Record<string, string> = {
    AGM: "Minat Keagamaan",
    MTK: "Minat Matematika",
    IPA: "Minat Ilmu Pengetahuan Alam",
    IPS: "Minat Ilmu Pengetahuan Sosial",
    BDB: "Minat Bahasa dan Budaya",
    TDR: "Minat Teknologi dan Rekayasa",
    TIK: "Minat Teknologi Informasi dan Komunikasi",
    KES: "Minat Kesehatan",
    AGR: "Minat Agrobisnis dan Agroteknologi",
    PDK: "Minat Perikanan dan Kelautan",
    BDM: "Minat Bisnis dan Manajemen",
    PRW: "Minat Pariwisata",
    SDK: "Minat Seni dan Kerjainan",
    KOR: "Minat Keolahragaan",
  };

  return interestMap[code] || "Unknown Code";
};

export const getInterestDescription2 = (code: string): string => {
  const interestMap: Record<string, string> = {
    AGM: "Keagamaan",
    MTK: "Matematika",
    IPA: "Ilmu Pengetahuan Alam",
    IPS: "Ilmu Pengetahuan Sosial",
    BDB: "Bahasa dan Budaya",
    TDR: "Teknologi dan Rekayasa",
    TIK: "Teknologi Informasi dan Komunikasi",
    KES: "Kesehatan",
    AGR: "Agrobisnis dan Agroteknologi",
    PDK: "Perikanan dan Kelautan",
    BDM: "Bisnis dan Manajemen",
    PRW: "Pariwisata",
    SDK: "Seni dan Kerjainan",
    KOR: "Keolahragaan",
  };

  return interestMap[code] || "Unknown Code";
};

export const getAreaBelajar = (code: string): string => {
  const interestMap: Record<string, string[]> = {
    AGM: ["Pendidikan Agama", "Pendidikan Budi Pekerti", "Sejarah Agama", "Filsafat Agama", "Teologi"],
    MTK: ["Statistika", "Kalkulus", "Aljabar", "Geometri", "Trigonometri", "Matematika Diskrit", "Logika Matematika"],
    IPA: ["Fisika", "Kimia", "Biologi", "Astronomi", "Geografi"],
    IPS: ["Sejarah", "Geografi", "Ekonomi", "Sosiologi", "Antropologi"],
    BDB: ["Bahasa Indonesia", "Bahasa Inggris", "Sastra", "Linguistik", "Komunikasi"],
    TDR: ["Teknik Mesin", "Teknik Elektro", "Teknik Sipil", "Teknik Industri", "Teknik Kimia"],
    TIK: ["Ilmu Komputer", "Sistem Informasi", "Teknologi Informasi", "Rekayasa Perangkat Lunak", "Jaringan Komputer"],
    KES: ["Ilmu Kesehatan", "Kedokteran", "Keperawatan", "Farmasi", "Gizi"],
    AGR: ["Agronomi", "Hortikultura", "Ilmu Tanah", "Proteksi Tanaman", "Agribisnis"],
    PDK: ["Ilmu Perikanan", "Teknologi Kelautan", "Budidaya Perairan", "Manajemen Sumberdaya Perairan", "Oseanografi"],
    BDM: ["Manajemen", "Akuntansi", "Pemasaran", "Keuangan", "Kewirausahaan"],
    PRW: ["Manajemen Pariwisata", "Perhotelan", "Ekowisata", "Event Management", "Travel and Tour"],
    SDK: ["Seni Rupa", "Seni Musik", "Seni Tari", "Kriya", "Desain"],
    KOR: ["Ilmu Keolahragaan", "Manajemen Olahraga", "Kesehatan dan Kebugaran", "Pelatihan Olahraga", "Psikologi Olahraga"],
  };

  const areaList = interestMap[code];
  return areaList ? areaList.join(", ") : "Unknown Code";
};

export const getJenjangPT = (code: string): string[] => {
  const interestMap: Record<string, string[]> = {
    AGM: [
      "Program Studi Pendidikan Agama Islam (PAI)",
      "Program Studi Ilmu Al-Qur’an dan Tafsir (IAT)",
      "Program Studi Hukum Islam (Ahwal Al-Syakhshiyah)",
      "Program Studi Manajemen Dakwah (MD)",
      "Program Studi Perbankan Syariah (PBS)",
      "Program Studi Komunikasi dan Penyiaran Islam (KPI)",
    ],
    MTK: [
      "Program Studi Matematika (Mathematics)",
      "Program Studi Statistika (Statistics)",
      "Program Studi Aktuaria (Actuarial Science)",
      "Program Studi Pendidikan Matematika (Mathematics Education)",
      "Program Studi Matematika Terapan (Applied Mathematics)",
    ],
    IPA: [
      "Program Studi Fisika (Physics)",
      "Program Studi Kimia (Chemistry)",
      "Program Studi Biologi (Biology)",
      "Program Studi Biokimia (Biochemistry)",
      "Program Studi Mikrobiologi (Microbiology)",
      "Program Studi Astronomi (Astronomy)",
    ],
    IPS: [
      "Program Studi Sejarah (History)",
      "Program Studi Geografi (Geography)",
      "Program Studi Ekonomi (Aconomics)",
      "Program Studi Sosiologi (Sociology)",
      "Program Studi Antropologi (Anthropology)",
    ],
    BDB: [
      "Program Studi Bahasa dan Sastra Indonesia (Indonesian Language and Literature)",
      "Program Studi Bahasa dan Sastra Inggris (English Language and Literature)",
      "Program Studi Linguistik Terapan (Applied Linguistics)",
      "Program Studi Sastra Jepang (Japanese Literature)",
      "Program Studi Komunikasi (Communication Studies)",
    ],
    TDR: [
      "Program Studi Teknik Mesin (Mechanical Engineering)",
      "Program Studi Teknik Elektro (Electrical Engineering)",
      "Program Studi Teknik Sipil (Civil Engineering)",
      "Program Studi Teknik Industri (Industrial Engineering)",
      "Program Studi Teknik Kimia (Chemical Engineering)",
    ],
    TIK: [
      "Program Studi Ilmu Komputer (Computer Science)",
      "Program Studi Sistem Informasi (Information Systems)",
      "Program Studi Teknologi Informasi (Information Technology)",
      "Program Studi Rekayasa Perangkat Lunak (Software Engineering)",
      "Program Studi Jaringan Komputer (Computer Networks)",
    ],
    KES: [
      "Program Studi Ilmu Kesehatan Masyarakat (Public Health)",
      "Program Studi Pendidikan Dokter (Medical Education)",
      "Program Studi Keperawatan (Nursing)",
      "Program Studi Farmasi (Pharmacy)",
      "Program Studi Gizi (Nutrition)",
    ],
    AGR: [
      "Program Studi Agronomi (Agronomy)",
      "Program Studi Hortikultura (Horticulture)",
      "Program Studi Ilmu Tanah (Soil Science)",
      "Program Studi Proteksi Tanaman (Plant Protection)",
      "Program Studi Agribisnis (Agribusiness)",
    ],
    PDK: [
      "Program Studi Ilmu Perikanan (Fisheries Science)",
      "Program Studi Teknologi Kelautan (Marine Technology)",
      "Program Studi Budidaya Perairan (Aquaculture)",
      "Program Studi Manajemen Sumberdaya Perairan (Aquatic Resource Management)",
      "Program Studi Oseanografi (Oceanography)",
    ],
    BDM: [
      "Program Studi Manajemen (Management)",
      "Program Studi Akuntansi (Accounting)",
      "Program Studi Pemasaran (Marketing)",
      "Program Studi Keuangan (Finance)",
      "Program Studi Kewirausahaan (Entrepreneurship)",
    ],
    PRW: [
      "Program Studi Manajemen Pariwisata (Tourism Management)",
      "Program Studi Perhotelan (Hospitality Management)",
      "Program Studi Ekowisata (Ecotourism)",
      "Program Studi Event Management",
      "Program Studi Travel and Tour",
    ],
    SDK: [
      "Program Studi Seni Rupa (Fine Arts)",
      "Program Studi Seni Musik (Music)",
      "Program Studi Seni Tari (Dance)",
      "Program Studi Kriya (Crafts)",
      "Program Studi Desain (Design)",
    ],
    KOR: [
      "Program Studi Ilmu Keolahragaan (Sports Science)",
      "Program Studi Manajemen Olahraga (Sports Management)",
      "Program Studi Kesehatan dan Kebugaran (Health and Fitness)",
      "Program Studi Pelatihan Olahraga (Sports Coaching)",
      "Program Studi Psikologi Olahraga (Sports Psychology)",
    ],
  };

  return interestMap[code] || "Unknown Code";
};

export const getKarirNegara = (code: string): string[] => {
  const interestMap: Record<string, string[]> = {
    AGM: [
      "Penyuluh Agama di Kementerian Agama (Kemenag)",
      "Pegawai Negeri Sipil (PNS) di bidang keagamaan pada Kementerian Agama, Kementerian Pendidikan dan Kebudayaan, atau instansi terkait",
      "Tenaga pengajar pada madrasah, sekolah keagamaan, dan perguruan tinggi Islam (UIN, IAIN, STAIN)",
      "Peneliti bidang agama dan sosial keagamaan di lembaga seperti: Badan Litbang dan Diklat Kementerian Agama, LIPI (Pusat Penelitian Kemasyarakatan dan Kebudayaan), Balai Litbang Keagamaan",
      "Hakim Agama di Pengadilan Agama",
      "Pegawai di Badan Amil Zakat Nasional (BAZNAS) atau Lembaga Zakat dan Wakaf",
      "Staf atau peneliti di Lembaga Sensor Film (untuk peninjauan nilai keagamaan dan moral dalam media)"
    ],
    MTK: [
      "Analis data di Badan Pusat Statistik (BPS)",
      "Statistisi di Kementerian Keuangan, Kementerian Perindustrian, atau instansi pemerintah lainnya",
      "Aktuaris di Otoritas Jasa Keuangan (OJK) atau perusahaan asuransi milik negara",
      "Dosen atau peneliti di perguruan tinggi negeri",
      "Pengembang kurikulum atau tenaga pengajar di Kementerian Pendidikan dan Kebudayaan",
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Analis kebijakan di lembaga pemerintah yang memerlukan keahlian matematika dan statistik"
    ],
    IPA: [
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Dosen atau tenaga pengajar di perguruan tinggi negeri",
      "Analis lingkungan di Kementerian Lingkungan Hidup dan Kehutanan (KLHK)",
      "Ahli laboratorium di rumah sakit pemerintah atau lembaga penelitian kesehatan",
      "Spesialis di Badan Tenaga Nuklir Nasional (BATAN)",
      "Petugas di Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)",
      "Peneliti di Balai Besar Teknologi dan Industri Pangan (BBTIP) atau lembaga penelitian pangan lainnya"
    ],
    IPS: [
      "Pegawai Negeri Sipil (PNS) di Kementerian Dalam Negeri, Kementerian Luar Negeri, atau instansi pemerintah lainnya",
      "Dosen atau peneliti di perguruan tinggi negeri",
      "Analis kebijakan di lembaga pemerintah yang memerlukan keahlian sosial dan ekonomi",
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Pegawai di Badan Perencanaan Pembangunan Nasional (Bappenas)",
      "Pegawai di Badan Nasional Penanggulangan Bencana (BNPB)",
      "Staf di lembaga internasional yang berafiliasi dengan pemerintah, seperti PBB atau ASEAN"
    ],
    BDB: [
      "Pegawai Negeri Sipil (PNS) di Kementerian Pendidikan dan Kebudayaan, Kementerian Luar Negeri, atau instansi pemerintah lainnya",
      "Dosen atau tenaga pengajar di perguruan tinggi negeri",
      "Analis komunikasi di lembaga pemerintah yang memerlukan keahlian bahasa dan komunikasi",
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Pegawai di Badan Pengembangan dan Pembinaan Bahasa (Badan Bahasa)",
      "Staf di lembaga internasional yang berafiliasi dengan pemerintah, seperti PBB atau ASEAN",
      "Jurnalis atau editor di media pemerintah"
    ],
    TDR: [
      "Insinyur di Kementerian Pekerjaan Umum dan Perumahan Rakyat (PUPR)",
      "Insinyur di Kementerian Energi dan Sumber Daya Mineral (ESDM)",
      "Insinyur di Badan Pengkajian dan Penerapan Teknologi (BPPT)",
      "Dosen atau tenaga pengajar di perguruan tinggi negeri",
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Tenaga ahli di Badan Standardisasi Nasional (BSN)",
      "Insinyur di perusahaan BUMN seperti PT PLN, PT Pertamina, atau PT Telkom Indonesia"
    ],
    TIK: [
      "Pegawai Negeri Sipil (PNS) di Kementerian Komunikasi dan Informatika (Kominfo)",
      "Pegawai di Badan Siber dan Sandi Negara (BSSN)",
      "Dosen atau tenaga pengajar di perguruan tinggi negeri",
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Analis sistem di lembaga pemerintah yang memerlukan keahlian TIK",
      "Pengembang perangkat lunak di lembaga pemerintah",
      "Tenaga ahli di Badan Pengkajian dan Penerapan Teknologi (BPPT)"
    ],
    KES: [
      "Pegawai Negeri Sipil (PNS) di Kementerian Kesehatan",
      "Dokter atau tenaga medis di rumah sakit pemerintah",
      "Dosen atau tenaga pengajar di perguruan tinggi negeri",
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Ahli gizi di lembaga pemerintah yang menangani kesehatan masyarakat",
      "Tenaga kesehatan di Puskesmas atau klinik pemerintah",
      "Pegawai di Badan Pengawas Obat dan Makanan (BPOM)"
    ],
    AGR: [
      "Pegawai Negeri Sipil (PNS) di Kementerian Pertanian",
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Dosen atau tenaga pengajar di perguruan tinggi negeri",
      "Penyuluh pertanian di Badan Penyuluhan dan Pengembangan Sumber Daya Manusia Pertanian (BPPSDMP)",
      "Ahli tanah di lembaga pemerintah yang menangani pertanian dan lingkungan",
      "Pegawai di Badan Ketahanan Pangan (BKP)",
      "Tenaga ahli di Badan Standardisasi Nasional (BSN)"
    ],
    PDK: [
      "Pegawai Negeri Sipil (PNS) di Kementerian Kelautan dan Perikanan",
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Dosen atau tenaga pengajar di perguruan tinggi negeri",
      "Penyuluh perikanan di Badan Penyuluhan dan Pengembangan Sumber Daya Manusia Pertanian (BPPSDMP)",
      "Ahli kelautan di lembaga pemerintah yang menangani kelautan dan perikanan",
      "Pegawai di Badan Riset dan Sumber Daya Manusia Kelautan dan Perikanan (BRSDM-KP)",
      "Tenaga ahli di Badan Standardisasi Nasional (BSN)"
    ],
    BDM: [
      "Pegawai Negeri Sipil (PNS) di Kementerian Keuangan, Kementerian Perdagangan, atau Kementerian BUMN",
      "Dosen atau tenaga pengajar di perguruan tinggi negeri",
      "Analis keuangan di lembaga pemerintah yang memerlukan keahlian bisnis dan manajemen",
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Pegawai di Badan Koordinasi Penanaman Modal (BKPM)",
      "Pegawai di Otoritas Jasa Keuangan (OJK)",
      "Staf di lembaga internasional yang berafiliasi dengan pemerintah, seperti PBB atau ASEAN"
    ],
    PRW: [
      "Pegawai Negeri Sipil (PNS) di Kementerian Pariwisata dan Ekonomi Kreatif",
      "Dosen atau tenaga pengajar di perguruan tinggi negeri",
      "Analis pariwisata di lembaga pemerintah yang memerlukan keahlian pariwisata",
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Pegawai di Badan Otorita Pariwisata (BOP)",
      "Pegawai di Badan Ekonomi Kreatif (BEKRAF)",
      "Staf di lembaga internasional yang berafiliasi dengan pemerintah, seperti PBB atau ASEAN"
    ],
    SDK: [
      "Pegawai Negeri Sipil (PNS) di Kementerian Pendidikan dan Kebudayaan, Kementerian Pariwisata dan Ekonomi Kreatif, atau instansi pemerintah lainnya",
      "Dosen atau tenaga pengajar di perguruan tinggi negeri",
      "Seniman atau pekerja seni di lembaga pemerintah yang memerlukan keahlian seni dan budaya",
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Pegawai di Badan Pengembangan dan Pembinaan Bahasa (Badan Bahasa)",
      "Pegawai di Badan Ekonomi Kreatif (BEKRAF)",
      "Staf di lembaga internasional yang berafiliasi dengan pemerintah, seperti PBB atau ASEAN"
    ],
    KOR: [
      "Pegawai Negeri Sipil (PNS) di Kementerian Pemuda dan Olahraga (Kemenpora)",
      "Dosen atau tenaga pengajar di perguruan tinggi negeri",
      "Pelatih atau instruktur di lembaga pemerintah yang memerlukan keahlian keolahragaan",
      "Peneliti di Lembaga Ilmu Pengetahuan Indonesia (LIPI) atau Badan Riset dan Inovasi Nasional (BRIN)",
      "Pegawai di Badan Kepegawaian Negara (BKN) yang menangani bidang keolahragaan",
      "Pegawai di Komite Olahraga Nasional Indonesia (KONI)",
      "Staf di lembaga internasional yang berafiliasi dengan pemerintah, seperti PBB atau ASEAN"
    ],
  };

  return interestMap[code] || "Unknown Code";
};

export const getKarirSwasta = (code: string): string[] => {
  const interestMap: Record<string, string[]> = {
    AGM: [
      "Konsultan etika dan nilai keagamaan di perusahaan",
      "Penulis dan editor konten keagamaan di media massa, penerbit, atau platform digital",
      "Penyiar atau host program keagamaan di radio, televisi, dan media daring",
      "Pembuat konten dakwah dan edukasi keagamaan di platform digital (YouTube, podcast, media sosial)",
      "Pengajar di sekolah swasta berbasis agama"
    ],
    MTK: [
      "Analis data di perusahaan riset pasar atau konsultan bisnis",
      "Aktuaris di perusahaan asuransi swasta",
      "Dosen atau tenaga pengajar di perguruan tinggi swasta",
      "Pengembang kurikulum atau tenaga pengajar di lembaga pendidikan swasta",
      "Analis keuangan di bank atau perusahaan investasi",
      "Peneliti di lembaga riset swasta",
      "Analis risiko di perusahaan asuransi atau lembaga keuangan"
    ],
    IPA: [
      "Peneliti di perusahaan farmasi atau bioteknologi",
      "Dosen atau tenaga pengajar di perguruan tinggi swasta",
      "Analis lingkungan di perusahaan konsultan lingkungan",
      "Ahli laboratorium di perusahaan kesehatan atau lembaga penelitian swasta",
      "Spesialis di perusahaan energi atau teknologi",
      "Petugas di perusahaan jasa meteorologi atau geofisika",
      "Peneliti di perusahaan pangan atau lembaga riset swasta"
    ],
    IPS: [
      "Konsultan kebijakan di perusahaan konsultan atau lembaga think tank",
      "Dosen atau peneliti di perguruan tinggi swasta",
      "Analis pasar di perusahaan riset pasar atau lembaga survei",
      "Peneliti di lembaga riset swasta",
      "Konsultan sumber daya manusia di perusahaan konsultan SDM",
      "Analis hubungan internasional di perusahaan multinasional",
      "Jurnalis atau editor di media massa swasta"
    ],
    BDB: [
      "Pegawai di departemen komunikasi perusahaan besar",
      "Dosen atau tenaga pengajar di perguruan tinggi swasta",
      "Analis komunikasi di perusahaan konsultan komunikasi atau humas",
      "Peneliti di lembaga riset swasta",
      "Pegawai di media massa swasta (jurnalis, editor, penyiar)",
      "Staf di perusahaan multinasional yang memerlukan keahlian bahasa dan komunikasi",
      "Pengembang konten di agensi periklanan atau pemasaran digital"
    ],
    TDR: [
      "Insinyur di perusahaan konstruksi atau manufaktur",
      "Insinyur di perusahaan energi atau teknologi",
      "Dosen atau tenaga pengajar di perguruan tinggi swasta",
      "Peneliti di lembaga riset swasta",
      "Tenaga ahli di perusahaan konsultan teknik",
      "Pengembang produk di perusahaan teknologi atau manufaktur"
    ],
    TIK: [
      "Pegawai di departemen TI perusahaan besar",
      "Pengembang perangkat lunak di perusahaan teknologi atau startup",
      "Dosen atau tenaga pengajar di perguruan tinggi swasta",
      "Peneliti di lembaga riset swasta",
      "Analis sistem di perusahaan konsultan TI",
      "Spesialis keamanan siber di perusahaan keamanan TI",
      "Tenaga ahli di perusahaan pengembangan teknologi atau inovasi"
    ],
    KES: [
      "Pegawai di departemen kesehatan perusahaan besar",
      "Dokter atau tenaga medis di rumah sakit swasta",
      "Dosen atau tenaga pengajar di perguruan tinggi swasta",
      "Peneliti di lembaga riset kesehatan swasta",
      "Ahli gizi di perusahaan makanan atau lembaga konsultasi gizi",
      "Tenaga kesehatan di klinik swasta",
      "Pegawai di perusahaan farmasi atau alat kesehatan"
    ],
    AGR: [
      "Pegawai di departemen agribisnis perusahaan besar",
      "Peneliti di perusahaan agribisnis atau lembaga riset swasta",
      "Dosen atau tenaga pengajar di perguruan tinggi swasta",
      "Penyuluh pertanian di perusahaan agribisnis",
      "Ahli tanah di perusahaan konsultan lingkungan atau agribisnis",
      "Pegawai di perusahaan pangan atau distribusi hasil pertanian",
      "Tenaga ahli di perusahaan agritech atau inovasi pertanian"
    ],
    PDK: [
      "Pegawai di departemen kelautan dan perikanan perusahaan besar",
      "Peneliti di perusahaan perikanan atau lembaga riset swasta",
      "Dosen atau tenaga pengajar di perguruan tinggi swasta",
      "Penyuluh perikanan di perusahaan perikanan",
      "Ahli kelautan di perusahaan konsultan lingkungan atau kelautan",
      "Pegawai di perusahaan pengolahan hasil perikanan",
      "Tenaga ahli di perusahaan teknologi kelautan atau inovasi perikanan"
    ],
    BDM: [
      "Pegawai di departemen bisnis dan manajemen perusahaan besar",
      "Dosen atau tenaga pengajar di perguruan tinggi swasta",
      "Analis keuangan di bank atau perusahaan investasi",
      "Peneliti di lembaga riset swasta",
      "Pegawai di perusahaan konsultan bisnis atau manajemen",
      "Pegawai di perusahaan multinasional yang memerlukan keahlian bisnis dan manajemen",
      "Staf di perusahaan startup atau perusahaan teknologi"
    ],
    PRW: [
      "Pegawai di departemen pariwisata perusahaan besar",
      "Dosen atau tenaga pengajar di perguruan tinggi swasta",
      "Analis pariwisata di perusahaan konsultan pariwisata",
      "Peneliti di lembaga riset swasta",
      "Pegawai di perusahaan travel atau agen perjalanan",
      "Pegawai di perusahaan perhotelan atau resort",
      "Staf di perusahaan event management atau pemasaran pariwisata"
    ],
    SDK: [
      "Pegawai di departemen seni dan budaya perusahaan besar",
      "Dosen atau tenaga pengajar di perguruan tinggi swasta",
      "Seniman atau pekerja seni di perusahaan kreatif atau agensi periklanan",
      "Peneliti di lembaga riset seni dan budaya swasta",
      "Pegawai di galeri seni, museum, atau lembaga kebudayaan swasta",
      "Pegawai di perusahaan media massa atau produksi film",
      "Staf di perusahaan event management atau pemasaran seni dan budaya"
    ],
    KOR: [
      "Pegawai di departemen keolahragaan perusahaan besar",
      "Dosen atau tenaga pengajar di perguruan tinggi swasta",
      "Pelatih atau instruktur di klub olahraga swasta",
      "Peneliti di lembaga riset keolahragaan swasta",
      "Pegawai di perusahaan manajemen olahraga atau agensi atlet",
      "Pegawai di perusahaan kebugaran atau pusat olahraga",
      "Staf di perusahaan event management atau pemasaran olahraga"
    ],
  };

  return interestMap[code] || "Unknown Code";
};

export const getKarirLain = (code: string): string[] => {
  const interestMap: Record<string, string[]> = {
    AGM: [
      "Wirausaha dalam bidang penerbitan buku keagamaan, alat ibadah, atau busana muslim/muslimah",
      "Pemandu ibadah (seperti travel umrah dan haji, atau ziarah rohani)",
      "Pembicara publik, trainer spiritual, atau motivator berbasis nilai keagamaan",
    ],
    MTK: [
      "Konsultan data statistik untuk perusahaan atau instansi",
      "Trainer software statistik seperti SPSS, R, atau Python",
      "Wirausaha di bidang edukasi matematika (bimbel, kursus online, dll.)",
    ],
    IPA: [
      "Wirausaha dalam pembuatan makanan, kosmetik, atau pupuk organik",
      "Pembuatan alat-alat praktik laboratorium atau alat eksperimen sederhana",
      "Pengembang produk berbasis ilmu alam, seperti energi terbarukan miniatur",
    ],
    IPS: [
      "Wirausaha dalam bidang jasa edukasi sosial dan sejarah",
      "Konsultan sosial kemasyarakatan atau pelatihan masyarakat",
      "Pekerja komunitas atau inisiator gerakan sosial berbasis riset",
    ],
    BDB: [
      "Penulis konten kreatif (artikel, buku, naskah, puisi)",
      "Penerjemah atau interpreter lepas",
      "Wirausaha dalam bidang penerbitan, media, atau komunikasi publik",
    ],
    TDR: [
      "Wirausaha bengkel atau jasa teknis mandiri",
      "Pembuatan alat-alat mesin sederhana untuk kebutuhan lokal",
      "Trainer teknisi atau teknologi tepat guna",
    ],
    TIK: [
      "Freelancer pengembang perangkat lunak, aplikasi, atau website",
      "Konsultan IT independen",
      "Wirausaha startup digital di bidang edukasi, bisnis, atau hiburan",
    ],
    KES: [
      "Penyedia layanan kesehatan alternatif atau tradisional",
      "Konsultan gizi atau kebugaran secara mandiri",
      "Wirausaha dalam bidang herbal, jamu, atau produk kesehatan alami",
    ],
    AGR: [
      "Petani atau peternak modern berbasis teknologi",
      "Wirausaha agribisnis (pupuk, bibit, hasil tani, dll.)",
      "Trainer pertanian organik atau hidroponik",
    ],
    PDK: [
      "Wirausaha budidaya perairan skala kecil (ikan hias, lele, dll.)",
      "Penyedia jasa wisata bahari atau edukasi kelautan",
      "Konsultan lingkungan perairan",
    ],
    BDM: [
      "Wirausaha mandiri di bidang ritel, F&B, atau jasa",
      "Konsultan bisnis skala UMKM",
      "Pelatih atau mentor kewirausahaan",
    ],
    PRW: [
      "Pemandu wisata lokal atau mandiri",
      "Wirausaha biro perjalanan wisata atau event organizer",
      "Pengelola homestay, guesthouse, atau jasa hospitality rumahan",
    ],
    SDK: [
      "Wirausaha seni kriya atau kerajinan tangan",
      "Seniman lepas atau desainer produk handmade",
      "Pembuat konten kreatif visual atau seni pertunjukan",
    ],
    KOR: [
      "Pelatih olahraga mandiri atau personal trainer",
      "Instruktur kebugaran di pusat kebugaran atau secara online",
      "Wirausaha di bidang alat olahraga lokal atau komunitas olahraga",
    ],
  };

  return interestMap[code] || ["Unknown Code"];
};

type Rekomendasi = {
  SMA: string[];
  SMK: string[];
};

const interestMap: Record<string, Rekomendasi> = {
  AGM: {
    SMA: ["IPS"],
    SMK: ["Keagamaan", "Perbankan Syariah"],
  },
  MTK: {
    SMA: ["IPA"],
    SMK: [],
  },
  IPA: {
    SMA: ["IPA"],
    SMK: ["Teknik Kimia", "Teknik Elektronika Industri", "Teknik Mekatronika"],
  },
  IPS: {
    SMA: ["IPS"],
    SMK: [
      "Akuntansi dan Keuangan Lembaga",
      "Administrasi Perkantoran",
      "Pemasaran",
    ],
  },
  BDB: {
    SMA: ["Bahasa"],
    SMK: ["Bahasa Inggris", "Bahasa Indonesia", "Bahasa Jawa"],
  },
  TDR: {
    SMA: ["IPA"],
    SMK: ["Teknik Otomotif", "Teknik Mesin", "Teknik Kendaraan Ringan"],
  },
  TIK: {
    SMA: ["IPA"],
    SMK: ["Rekayasa Perangkat Lunak", "Teknik Komputer dan Jaringan"],
  },
  KES: {
    SMA: ["IPA"],
    SMK: ["Kesehatan", "Kesehatan Masyarakat", "Kesehatan Lingkungan"],
  },
  AGR: {
    SMA: ["IPA"],
    SMK: ["Teknik Pertanian", "Teknik Peternakan", "Teknik Perkebunan"],
  },
  PDK: {
    SMA: ["IPA"],
    SMK: [
      "Teknik Perikanan",
      "Teknik Kelautan",
      "Teknik Pengolahan Hasil Perikanan",
    ],
  },
  BDM: {
    SMA: ["IPS"],
    SMK: [
      "Akuntansi dan Keuangan Lembaga",
      "Administrasi Perkantoran",
      "Pemasaran",
    ],
  },
  PRW: {
    SMA: ["IPS"],
    SMK: ["Perhotelan", "Pariwisata", "Kuliner"],
  },
  SDK: {
    SMA: ["IPS"],
    SMK: ["Seni Rupa", "Seni Musik", "Seni Tari"],
  },
  KOR: {
    SMA: ["IPS"],
    SMK: ["Olahraga", "Kesehatan dan Kebugaran", "Rekreasi"],
  },
};

export const getRekomendasiSekolah = (
  code: string
): Rekomendasi | { error: string } => {
  if (interestMap[code]) {
    return interestMap[code];
  } else {
    return { error: "Unknown Code" };
  }
};
