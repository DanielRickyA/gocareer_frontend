import { Card, CardContent } from "@/components/ui/card";
import { CircleArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function RefrensiKarir() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 min-h-[84.1dvh]">
      <div
        className="flex justif-start items-center gap-2 cursor-pointer print:hidden"
        onClick={() => navigate("/beranda")}
      >
        <CircleArrowLeft size={16} />
        <p>Kembali</p>
      </div>
      <div className="flex gap-6 items-center justify-start mt-4">
        <img src="/career-choice.png" alt="" className="w-16 h-16" />
        <h1 className="text-4xl md:text-5xl text-left font-bold">
          Refrensi Karir
        </h1>
      </div>
      <p className="text-base md:text-xl mt-4 text-description text-justify">
        Referensi Karir membantumu memahami pilihan jurusan SMA & SMK sekaligus
        menyiapkan langkah pendidikan berikutnya. Kamu bisa menjelajahi dukungan
        dari orang tua dan guru, serta menemukan informasi tentang berbagai
        sekolah di Yogyakarta sesuai minat dan kebutuhanmu.
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl w-full mx-auto mt-20 gap-12">
        <Link to={"/dukungan"}>
          <Card className="p-10 animate-bounce-smooth cursor-pointer w-[300px] aspect-square bg-[#F9FAFC] shadow-none border border-gray-200">
            <CardContent className="flex flex-col justify-center items-center gap-4 h-full">
              <img src="/dukungan.png" alt="logo" className="w-20" />
              <h1 className="text-3xl font-semibold">Dukungan</h1>
              <p className="text-description text-sm text-center">
                Temukan peran orang tua dan guru dalam mendukung pilihan karirmu
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to={"/jurusan"}>
          <Card className="p-10 animate-bounce-smooth cursor-pointer w-[300px] aspect-square bg-[#F9FAFC] shadow-none border border-gray-200">
            <CardContent className="flex flex-col justify-center items-center gap-4 h-full">
              <img src="/icon3.png" alt="logo" className="w-20" />
              <h1 className="text-3xl font-semibold">Jurusan</h1>
              <p className="text-description text-sm text-center">
                Lihat Daftar Jurusan atau Matakuliah untuk menentukan arah pendidikanmu
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to={"/sekolah"}>
          <Card className="p-10 animate-bounce-smooth cursor-pointer w-[300px] aspect-square bg-[#F9FAFC] shadow-none border border-gray-200">
            <CardContent className="flex flex-col justify-center items-center gap-4 h-full">
              <img src="/school.png" alt="logo" className="w-20" />
              <h1 className="text-3xl font-semibold">Sekolah</h1>
              <p className="text-description text-sm text-center">
                Lihat daftar sekolah di Yogyakarta beserta jurusannya
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default RefrensiKarir;
