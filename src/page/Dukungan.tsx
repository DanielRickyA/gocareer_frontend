function Dukungan() {
  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-0 py-12">
      <div className="flex gap-6 items-center">
        <img src="/icon4.png" alt=""  />
        <h1 className="text-5xl text-left font-bold">Dukungan</h1>
      </div>
      <p className="text-base md:text-xl mt-4 text-description text-justify">
        Go-Career membantumu memahami potensi diri, menemukan jurusan yang
        sesuai, dan mendapat dukungan terbaik dari orang tua & sekolah. Semua
        dalam satu platform.
      </p>
      <div className="flex items-center w-full mt-10">
        <p className="font-semibold text-left text-2xl md:text-nowrap mr-5 ">
          Peran Orangtua
        </p>
      </div>
      <p className="mt-2 text-justify text-description">
        Orang tua memiliki peran sangat penting dalam pendidikan seorang anak.
        Dari orang tua lah anak belajar pertama kali tentang kehidupan termasuk
        dalam hal pendidikan. Saat memasuki masa remaja, peran teman dan
        lingkungan di luar keluarga menjadi cenderung lebih dominan, termasuk
        dalam penentuan pilihan masa depannya. Kondisi tersebut tentunya
        memerlukan komunikasi yang baik antara orang tua dan anak agar
        menghasilkan pilihan terbaik bagi anak dan juga keluarga.
      </p>

      <div className="mt-10 relative w-full pb-[56.25%] h-0">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/tvQFj6GAFE0?si=DP-jwYUn7o4YtUHy"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex items-center w-full mt-10">
        <p className="font-semibold text-left text-2xl md:text-nowrap mr-5 ">
          Peran Walikelas dan Guru Mata Pelajaran
        </p>
      </div>
      <p className="mt-2 text-justify text-description">
        Guru mata pelajaran dan Walikelas dapat memberikan tambahan wawasan dan
        pengalaman mengenai informasi kelanjutan studiKegiatan ini dapat
        dilakukan pada waktu pembelajaran di kelas atau dalam sesi khusus
        pembinaan Walikelas. Diharapkan Peserta didik aktif bertanya sesuai
        kondisi, keingininan dan harapannya.
      </p>

      <div className="flex items-center w-full mt-10">
        <p className="font-semibold text-left text-2xl md:text-nowrap mr-5 ">
          Peran Guru BK
        </p>
      </div>
      <p className="mt-2 text-justify text-description">
        Data pendukung merupakan data yang digunakan oleh guru BK untuk membantu
        peserta didik dalam proses memahami dirinya yang berkaitan dengan minat,
        bakat, dan aspirasi sebagai bagian penunjang proses utama dalam
        pendampingan eksplorasi. Data perkembangan belajar peserta didik juga
        dapat digunakan untuk membantu peserta didik dalam memahami kemampuan
        yang dimiliki, terutama dalam pertimbangan memilih mata pelajaran
        pilihan. Guru BK dapat membantu peserta didik dalam memahami
        perkembangan belajar peserta didik dan kaitannya dalam pilihan-pilihan
        Jurusan / karir
      </p>
    </div>
  );
}

export default Dukungan;
