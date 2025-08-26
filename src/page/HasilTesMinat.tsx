import { useEffect, useState } from "react";

function HasilTesMinat() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const localName = localStorage.getItem("name");
    setName(localName ?? "");
  }, []);

  return (
    <div className="relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 min-h-[85dvh]">
        <div className="flex gap-6 items-center justify-start">
          <img src="/icon1.png" alt="" />
          <h1 className="text-4xl md:text-5xl text-left font-bold">
            Uji Coba Minat
          </h1>
        </div>
        <p className="text-base md:text-xl mt-4 text-description text-justify">
          Kenali minat belajarmu lewat tes sederhana dan akurat. Biar kamu nggak
          salah pilih jurusan!
        </p>
        <p className="text-2xl mt-8">
          Hasil Uji Coba Minat Pada Peserta{" "}
          <span className="font-semibold">{name}</span>
        </p>
        <p className="text-2xl mt-6">
          Minat Bakat yang cocok untuk Peserta{" "}
          <span className="font-semibold">{name}</span> Adalah{" "}
          <span className="font-semibold">Minat Ilmu Pengetahuan Alam</span>
        </p>
        <p className="text-2xl mt-6">
          Peserta yang memiliki Minat Bakat pada bidang{" "}
          <span className="font-semibold">Minat Ilmu Pengetahuan Alam</span>
          Kecenderungan pilihan peserta didik menyukai atau tidak menyukai
          kegiatan bidang Ilmu Pengetahuan Alam
        </p>
      </div>
    </div>
  );
}

export default HasilTesMinat;
