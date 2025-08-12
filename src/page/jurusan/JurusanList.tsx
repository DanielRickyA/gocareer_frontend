import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleArrowLeft } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

const mapelList = {
  mapel: [
    "Pendidikan Agama dan Budi Pekerti",
    "Seni dan Budaya",
    "Antropologi",
    "Pendidikan Pancasila",
    "Biologi",
    "Bahasa Arab",
    "Bahasa Indonesia",
    "Kimia",
    "Bahasa Jerman",
    "Matematika",
    "Fisika",
    "Prakarya dan Kewirausahaan",
    "Bahasa Inggris",
    "Sosiologi",
    "Informatika",
    "PJOK",
    "Ekonomi",
    "Mandarin",
    "Sejarah",
    "Geografi",
  ],
  jurusan: [
    "Teknik Komputer dan Jaringan",
    "Teknik Fabrikasi Logam dan Manufaktur",
    "Teknik Reyakaya Perangkat Lunak",
    "Teknik Instalasi Tenaga Listrik",
    "Teknik Lektronika Industri",
    "Teknik Grafika",
    "Teknik Mekatronika",
    "Teknik dan Bisnis Sepeda Motor",
    "Brodcasting dan Film",
    "Teknik Otomotif Kendaraan Ringan",
    "Teknik Otomotif",
    "Perhotelan",
    "Teknik Pemesinan",
    "Teknik Elektronika",
    "Akuntansi dan Keunangan",
  ],
};

function JurusanList() {
  const { sekolah } = useParams();
  const navigate = useNavigate();

  function toLowerUnderscore(text: string) {
    return text
      .toLowerCase() // ubah ke lowercase
      .replace(/\s+/g, "_") // ubah semua spasi jadi underscore
      .trim(); // hilangkan spasi di awal/akhir
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 min-h-[84.1dvh]">
      <div
        className="flex justif-start items-center gap-2 cursor-pointer"
        onClick={() => navigate("/jurusan")}
      >
        <CircleArrowLeft size={16} />
        <p>Kembali</p>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end mt-2 mb-4 gap-4">
        <div>
          <p className="font-semibold text-left text-3xl ">
            {sekolah == "sma" ? "SMA/MA" : "SMK"}
          </p>
          <p className="text-description ">
            {sekolah == "sma"
              ? "Berikut adalah mata pelajaran yang terdapat pada SMA/MA."
              : "Berikut jurusan-jurusan yang terdapat pada SMK."}
          </p>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email" className="font-semibold">
            Cari {sekolah == "sma" ? "Mata Pelajaran" : "Jurusan"}
          </Label>
          <Input
            type="email"
            id="email"
            placeholder={`Cari Berdasarkan Nama ${
              sekolah == "sma" ? "Mata Pelajaran" : "Jurusan"
            }`}
          />
        </div>
      </div>
      {sekolah == "sma" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
          {mapelList.mapel.map((item) => (
            <Link to={toLowerUnderscore(item)}>
              <Card className="bg-[#F9FAFC] flex flex-col shadow-none border-[0.3px] z-20 py-4 px-0">
                <CardContent className="px-4">
                  <p className="text-sm">{item}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
          {mapelList.jurusan.map((item) => (
            <Link to={toLowerUnderscore(item)}>
              <Card className="bg-[#F9FAFC] flex flex-col shadow-none border-[0.3px] z-20 py-4 px-0">
                <CardContent className="px-4">
                  <p className="text-sm md:text-xs">{item}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default JurusanList;
