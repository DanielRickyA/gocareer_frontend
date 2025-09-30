// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Printer } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

function RencanaKarir() {
  const [part, setPart] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [alamat, setAlamat] = useState<string>("");
  const [namaSekolah, setNamaSekolah] = useState<string>("");
  const [kelas, setKelas] = useState<string>("");
  const [umur, setUmur] = useState<string>("");
  const [sekolah, setSekolah] = useState<string>("");
  const [jurusan, setJurusan] = useState<string>("");
  const [prodi, setProdi] = useState<string>("");
  const [karir, setKarir] = useState<string>("");

  const cetakCarrer = () => {
    const fields = [
      { key: "Sekolah", value: sekolah },
      { key: "Jurusan", value: jurusan },
      { key: "Prodi", value: prodi },
      { key: "Karir", value: karir },
    ];

    for (const field of fields) {
      if (!field.value || field.value.trim() === "") {
        return toast.error(`Mohon ${field.key} diisi dan tidak kosong`);
      }
    }

    window.print();
  };
  return (
    <div className="relative bg-secondary">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 min-h-[85dvh]">
        <div className="flex gap-6 items-center justify-start print:justify-center">
          <img src="/success.png" alt="" className="w-16 h-16" />
          <h1 className="text-4xl md:text-5xl text-left font-bold print:text-4xl">
            Rencana Karir Hebatku
          </h1>
        </div>
        <p className="hidden print:block text-center font-medium text-xl mt-2">
          Halloo semua, namaku <span className="font-bold">{name}</span>
        </p>
        <p className="hidden print:block text-center font-medium text-xl">
          dan inilah rencana karir hebatkuu
        </p>
        <p className="text-base md:text-xl mt-4 text-description text-justify print:hidden">
          Berikut adalah rencana pendidikan dan karirmu yang telah kamu susun.
          Gunakan ini sebagai panduan untuk melangkah ke masa depan dengan lebih
          terarah.
        </p>
        {part == 1 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-8 print:ms-10">
              <div
                className="mt-8 grid w-full items-center gap-3 print:hidden"
                id="nama"
              >
                <Label htmlFor="nama">Nama Peserta</Label>
                <Input
                  type="text"
                  id="nama"
                  placeholder="Masukan Nama Anda"
                  value={name}
                  className="bg-white"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div
                className="mt-8 grid w-full items-center gap-3 print:hidden"
                id="nama"
              >
                <Label htmlFor="alamat">Alamat</Label>
                <Input
                  type="text"
                  id="alamat"
                  placeholder="Masukan Alamat Anda"
                  value={alamat}
                  className="bg-white"
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-8 print:ms-10">
              <div
                className="mt-8 grid w-full items-center gap-3 print:hidden"
                id="nama"
              >
                <Label htmlFor="namaSekolah">Nama Sekolah</Label>
                <Input
                  type="text"
                  id="namaSekolah"
                  placeholder="Masukan Nama Sekolah Anda"
                  value={namaSekolah}
                  className="bg-white"
                  onChange={(e) => setNamaSekolah(e.target.value)}
                />
              </div>
              <div
                className="mt-8 grid w-full items-center gap-3 print:hidden"
                id="nama"
              >
                <Label htmlFor="kelas">Kelas</Label>
                <Input
                  type="text"
                  id="kelas"
                  placeholder="Masukan Kelas Anda"
                  value={kelas}
                  className="bg-white"
                  onChange={(e) => setKelas(e.target.value)}
                />
              </div>
              <div
                className="mt-8 grid w-full items-center gap-3 print:hidden"
                id="nama"
              >
                <Label htmlFor="umur">Umur</Label>
                <Input
                  type="number"
                  id="umur"
                  placeholder="Masukan Umur Anda"
                  value={umur}
                  className="bg-white"
                  onChange={(e) => setUmur(e.target.value)}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-8 print:ms-10 print:grid-cols-2">
            <div className="flex justify-start gap-2 items-end">
              <img
                src="/school.png"
                alt="logo"
                className="w-16 h-16 print:w-12 print:h-12 object-cover"
              />
              <div className="mt-8 grid w-full max-w-sm items-center gap-3 print:gap-1 ">
                <Label
                  htmlFor="sekolah"
                  className="font-semibold print:font-medium"
                >
                  Rencana Sekolah Setelah Lulus SMP
                </Label>
                <Input
                  type="text"
                  id="sekolah"
                  value={sekolah}
                  className="bg-white print:hidden"
                  onChange={(e) => setSekolah(e.target.value)}
                />
                <p className="hidden print:block text-xl font-semibold">
                  {sekolah}
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-2 items-end">
              <img
                src="/book-stack.png"
                alt="logo"
                className="w-16 h-16 print:w-12 print:h-12 object-cover"
              />
              <div className="mt-8 grid w-full max-w-sm items-center gap-3 print:gap-1 ">
                <Label
                  htmlFor="jurusan"
                  className="font-semibold print:font-medium"
                >
                  Rencana jurusan yang aku pilih
                </Label>
                <Input
                  type="text"
                  id="jurusan"
                  value={jurusan}
                  className="bg-white print:hidden"
                  onChange={(e) => setJurusan(e.target.value)}
                />
                <p className="hidden print:block text-xl font-semibold">
                  {jurusan}
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-2 items-end print:mt-8">
              <img
                src="/university.png"
                alt="logo"
                className="w-16 h-16 print:w-12 print:h-12 object-cover"
              />
              <div className="mt-8 grid w-full max-w-sm items-center gap-3 print:gap-1 ">
                <Label
                  htmlFor="prodi"
                  className="font-semibold print:font-medium"
                >
                  Rencana program studi jenjang perguruan tinggi
                </Label>
                <Input
                  type="text"
                  id="prodi"
                  value={prodi}
                  className="bg-white print:hidden"
                  onChange={(e) => setProdi(e.target.value)}
                />
                <p className="hidden print:block text-xl font-semibold">
                  {prodi}
                </p>
              </div>
            </div>
            <div className="flex justify-start gap-2 items-end print:mt-8">
              <img
                src="/businessman.png"
                alt="logo"
                className="w-16 h-16 print:w-12 print:h-12 object-cover"
              />
              <div className="mt-8 grid w-full max-w-sm items-center gap-3 print:gap-1  ">
                <Label
                  htmlFor="karir"
                  className="font-semibold print:font-medium"
                >
                  Rencana karir pekerjaan di masa depan
                </Label>
                <Input
                  type="text"
                  id="karir"
                  value={karir}
                  className="bg-white print:hidden"
                  onChange={(e) => setKarir(e.target.value)}
                />
                <p className="hidden print:block text-xl font-semibold">
                  {karir}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <Button
            className="flex gap-2 print:hidden w-auto mt-12"
            onClick={() => {
              if (part == 1) {
                if (!name) {
                  return toast.error("Nama tidak boleh kosong");
                }
                if (!alamat) {
                  return toast.error("Alamat tidak boleh kosong");
                }
                if (!namaSekolah) {
                  return toast.error("Nama sekolah tidak boleh kosong");
                }
                if (!kelas) {
                  return toast.error("Kelas tidak boleh kosong");
                }
                if (!umur) {
                  return toast.error("Umur tidak boleh kosong");
                }

                setPart(2);
              } else {
                setPart(1);
              }
            }}
          >
            {part == 1 ? "Selanjutnya" : "Kembali"}
          </Button>
          {part == 2 && (
            <Button
              className="flex gap-2 print:hidden w-auto mt-12"
              onClick={cetakCarrer}
            >
              <Printer />
              Cetak Hasil
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RencanaKarir;
