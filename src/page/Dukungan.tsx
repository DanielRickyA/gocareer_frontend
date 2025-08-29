import LazyYoutube from "@/components/LazyYoutube";

function Dukungan() {
  return (
    <div className="relative">
      <div className="container mx-auto max-w-6xl px-8 py-12">
        <div className="flex gap-6 items-center justify-start">
          <img src="/icon4.png" alt="" />
          <h1 className="text-4xl md:text-5xl text-left font-bold">Dukungan</h1>
        </div>
        <p className="text-base md:text-xl mt-4 text-description text-justify">
          Peran orang tua & nilai akademik punya pengaruh besar. Dapatkan
          wawasan penting untuk jadi versi terbaik dari dirimu.
        </p>
        <div className="flex items-center w-full mt-10">
          <p className="font-semibold text-left text-2xl ">Peran Orangtua</p>
        </div>
        <p className="my-2 text-justify text-description">
          Orang tua memiliki peran sangat penting dalam pendidikan seorang anak.
          Dari orang tua lah anak belajar pertama kali tentang kehidupan
          termasuk dalam hal pendidikan. Saat memasuki masa remaja, peran teman
          dan lingkungan di luar keluarga menjadi cenderung lebih dominan,
          termasuk dalam penentuan pilihan masa depannya. Kondisi tersebut
          tentunya memerlukan komunikasi yang baik antara orang tua dan anak
          agar menghasilkan pilihan terbaik bagi anak dan juga keluarga.
        </p>
        <LazyYoutube
          url={"https://www.youtube.com/embed/tvQFj6GAFE0?si=DP-jwYUn7o4YtUHy"}
          title={"Memahami Minat dan Bakat Siswa"}
        />
        <div className="flex items-center w-full mt-8">
          <p className="font-semibold text-left text-2xl ">
            Peran Walikelas dan Guru Mata Pelajaran
          </p>
        </div>
        <p className="mt-2 text-justify text-description">
          Guru mata pelajaran dan Walikelas dapat memberikan tambahan wawasan
          dan pengalaman mengenai informasi kelanjutan studiKegiatan ini dapat
          dilakukan pada waktu pembelajaran di kelas atau dalam sesi khusus
          pembinaan Walikelas. Diharapkan Peserta didik aktif bertanya sesuai
          kondisi, keingininan dan harapannya.
        </p>

        <div className="flex items-center w-full mt-8">
          <p className="font-semibold text-left text-2xl ">Peran Guru BK</p>
        </div>
        <p className="mt-2 text-justify text-description">
          Data pendukung merupakan data yang digunakan oleh guru BK untuk
          membantu peserta didik dalam proses memahami dirinya yang berkaitan
          dengan minat, bakat, dan aspirasi sebagai bagian penunjang proses
          utama dalam pendampingan eksplorasi. Data perkembangan belajar peserta
          didik juga dapat digunakan untuk membantu peserta didik dalam memahami
          kemampuan yang dimiliki, terutama dalam pertimbangan memilih mata
          pelajaran pilihan. Guru BK dapat membantu peserta didik dalam memahami
          perkembangan belajar peserta didik dan kaitannya dalam pilihan-pilihan
          Jurusan / karir
        </p>
      </div>
      {/* <div className="absolute top-[10%] right-0 h-[15%] w-[30%] md:w-[10%] z-0 hidden lg:block">
        <img src="/assets1.png" alt="" className="w-full" />
      </div>
      <div className="absolute bottom-[5%] md:bottom-[40%] left-0 h-[15%] w-[30%] md:w-[13%] z-0 hidden lg:block">
        <img src="/assets2.png" alt="" className="w-full" />
      </div> */}
    </div>
  );
}

export default Dukungan;
