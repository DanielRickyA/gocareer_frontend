import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

function Jurusan() {
  return (
    <div className="">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 min-h-[85dvh]">
        <div className="flex gap-6 items-center justify-start">
          <img src="/icon3.png" alt="" />
          <h1 className="text-4xl md:text-5xl text-left font-bold">Jurusan</h1>
        </div>
        <p className="text-base md:text-xl mt-4 text-description text-justify">
          Tonton video jurusan dari SMA & SMK untuk tahu lebih jauh sebelum
          menentukan arah pendidikanmu. Jika kamu ingin melihat jurusan SMA atau
          SMK, silakan pilih kartu di bawah ini sesuai dengan keinginanmu.
        </p>
        <div className="flex justify-between items-center max-w-3xl w-full mx-auto mt-20">
          <Link to={"/jurusan/sma"}>
            <Card className="p-10 animate-bounce-smooth cursor-pointer aspect-square bg-[#F9FAFC]  shadow-none border-[0.3px]">
              <CardContent>
                <div className="flex flex-col justify-center items-center gap-4">
                  <img src="/sekolah.svg" alt="logo" className="w-22" />
                  <h1 className="text-3xl font-semibold">SMA</h1>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to={"/jurusan/smk"}>
            <Card className="p-10 animate-bounce-smooth cursor-pointer aspect-square bg-[#F9FAFC]  shadow-none border-[0.3px]">
              <CardContent>
                <div className="flex flex-col justify-center items-center gap-4">
                  <img src="/sekolah.svg" alt="logo" className="w-22" />
                  <h1 className="text-3xl font-semibold">SMK</h1>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Jurusan;
