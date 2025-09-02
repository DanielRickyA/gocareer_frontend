import { Card, CardContent } from "@/components/ui/card";
import { CircleArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HasilTesMinat() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    const localName = localStorage.getItem("name");
    setName(localName ?? "");
  }, []);

  return (
    <div className="relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 min-h-[85dvh]">
        <div
          className="flex justif-start items-center gap-2 cursor-pointer"
          onClick={() => navigate("/uji-coba-minat")}
        >
          <CircleArrowLeft size={16} />
          <p>Kembali</p>
        </div>
        <p className="text-xl mt-4">
          Hasil Uji Coba Minat untuk Peserta{" "}
          <span className="font-semibold text-primary">{name}</span>.
        </p>
        <Card className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 mt-4">
          <CardContent>
            <p className="text-xl font-semibold ">
              Minat bakat yang paling sesuai untuk kamu:
            </p>
            <p className="text-4xl font-semibold mt-4 text-primary">
              Minat Ilmu Pengetahuan Alam
            </p>
            <p className="text-xl mt-8">
              Peserta dengan minat bakat di bidang{" "}
              <span className="font-semibold text-primary">
                Minat Ilmu Pengetahuan Alam
              </span>
              , Kecenderungan pilihan peserta didik menyukai atau tidak menyukai
              kegiatan bidang Ilmu Pengetahuan Alam
            </p>
          </CardContent>
        </Card>
        <p className="text-xl mt-6 font-semibold">
          Deskripsi Hasil Uji Coba Minat
        </p>
        <p className="mt-2">
          Kecenderungan pilihan peserta didik menyukai kegiatan bidang Ilmu
          Pengetahuan Alam.
        </p>
        <p className="mt-4">
          Area Belajar Sekolah Menengah Atas/Kejuruan:{" "}
          <span className="font-semibold">
            Kimia, Fisika, Biologi, Biokimia, dll
          </span>
        </p>
        <p className="mt-4 font-semibold">Prospek Karir : </p>
        <ul className="list-decimal pl-4 space-y-2">
          <li>Program Studi Kimia (Chemistry)</li>
          <li>Program Studi Fisika (Physics)</li>
          <li>Program Studi Biologi (Biology) </li>
          <li>Program Studi Biokimia (Biochemistry)</li>
          <li>Program Studi Oseanografi (Oceanography)</li>
          <li>Program Studi Ilmu Kelautan (Marine Science)</li>
          <li>Program Studi Mikrobiologi (Microbiology)</li>
          <li>Dll</li>
        </ul>
        <p className="mt-4 font-semibold">Jenjang Perguruan Tinggi : </p>
        <ol className="list-decimal pl-4 space-y-2">
          <li>
            Instansi Negara
            <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
              <li>
                Peneliti di lembaga penelitian Negara, seperti LIPI, BATAN, dan
                lain-lain
              </li>
              <li>Badan Pengawas Obat-Obatan dan Makanan (BPOM)</li>
              <li>
                Badan Usaha Milik Negara (BUMN) bidang perminyakan dan gas bumi,
                serta pertambangan seperti: PT. Pertamina, PT. Perusahaan Gas
                Negara, PT. Aneka Tambang, PT. Tambang Batubara Bukit Asam, PT.
                Timah, dll.
              </li>
              <li>
                Badan Usaha Milik Negara (BUMN) bidang transportasi, teknologi
                dan telekomunikasi, seperti: PT. Angkasa Pura, PT. KAI, PT.
                Pelayaran Nasional Indonesia, PT. Energy Management Indonesia,
                PT. PLN, PT. PDAM, PT. Pindad, PT. Dirgantara Indonesia, PT.
                Telekomunikasi Indonesia, dll.
              </li>
              <li>
                Lembaga riset dan pengembangan, seperti: LIPI, BATAN, BPPT
              </li>
              <li>
                Pegawai Negeri Sipil (PNS) di Departemen Pertanian, Departemen
                Peternakan, Departemen Kelautan dan Perikanan, Departemen
                Kesehatan, Kementerian Lingkungan Hidup
              </li>
              <li>
                Lembaga penelitian milik negara, seperti: Lembaga Ilmu
                Pengetahuan Indonesia (LIPI), dll.
              </li>
            </ol>
          </li>

          <li>
            Industri Swasta
            <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
              <li>Industri di bidang makanan</li>
              <li>Industri obat-obatan</li>
              <li>Industri kosmetik</li>
              <li>
                Industri yang membutuhkan ilmu kimia seperti: perusahaan pupuk,
                perusahaan semen, perusahaan tekstil, dll.
              </li>
              <li>
                Staf ahli di perusahaan peternakan, perikanan, dan pertanian
              </li>
              <li>
                Staf ahli di perusahaan bahan makanan seperti: PT. Nestle, PT.
                Indofood, PT. Unilever, dll
              </li>
              <li>
                Staf ahli di perusahaan obat-obatan, seperti: PT. Bio Farma, PT.
                Kimia Farma, PT. Indo Farma, dll
              </li>
              <li>Staf ahli di kebun binatang</li>
            </ol>
          </li>

          <li>
            Lain-lain
            <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
              <li>Wirausaha dalam pembuatan makanan, kosmetik, atau pupuk.</li>
              <li>
                Wirausaha dalam pembuatan alat-alat yang menggunakan prinsip
                keilmuan fisika, seperti: pembuatan alat-alat pabrik, pembuatan
                peralatan-peralatan praktik di laboratorium, dll.
              </li>
              <li>
                Organisasi lingkungan hidup seperti WHO, WWF, Flora Fauna
                International, dll
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default HasilTesMinat;
