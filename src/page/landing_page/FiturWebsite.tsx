import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fiturList = [
  {
    title: "Tes Minat",
    description:
      "Kenali minat belajarmu lewat tes sederhana dan akurat. Biar kamu nggak salah pilih jurusan!",
    icon: "/icon1.png",
  },
  {
    title: "Minat Bakat",
    description:
      "Pahami berbagai bidang minat dan temukan yang paling menggambarkan dirimu. Fokus pada yang paling cocok, bukan yang paling umum.",
    icon: "/icon2.png",
  },
  {
    title: "Jurusan",
    description:
      "Tonton video jurusan dari SMA & SMK untuk tahu lebih jauh sebelum menentukan arah pendidikanmu.",
    icon: "/icon3.png",
  },
  {
    title: "Dukungan",
    description:
      "Peran orang tua & nilai akademik punya pengaruh besar. Dapatkan wawasan penting untuk jadi versi terbaik dari dirimu.",
    icon: "/icon4.png",
  },
  {
    title: "Sekolah",
    description:
      "Jelajahi daftar sekolah SMA & SMK se-DIY. Pilih kabupaten, lihat pilihan, dan temukan sekolah impianmu.",
    icon: "/icon5.png",
  },
];

function FiturWebsite() {
  return (
    <div className="relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-0 py-4 pt-10 z-10">
        <h1 className="text-center text-3xl font-semibold">
          Rancang <span className="text-primary  z-20">Masa Depanmu</span>
        </h1>
        <p className="mt-4 text-description text-center w-full md:max-w-[45%] mx-auto  z-20">
          Bantu kamu memilih jurusan dengan percaya diri melalui tes minat,
          video edukatif, dan dukungan lengkap.
        </p>
        <div className="flex flex-wrap justify-center w-full mt-8">
          {fiturList.map((fitur, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center mb-6 md:mb-8 px-0 md:px-4 sm:w-1/2 lg:w-1/3 sm:max-w-xs"
              >
                <Card className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20">
                  <CardContent className="flex flex-col h-full">
                    <img src={fitur.icon} className="w-16" />
                    <p className="text-2xl font-semibold my-2">{fitur.title}</p>
                    <div className="flex-1 w-full">
                      <p className="text-description">{fitur.description}</p>
                    </div>
                    <Button className="mt-6 rounded-full w-fit px-6 py-2">
                      Lihat Detail
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute top-[10%] right-0 h-[15%] w-[30%] md:w-[10%] z-0">
        <img src="/assets1.png" alt="" className="w-full" />
      </div>
      <div className="absolute bottom-[5%] md:bottom-[40%] left-0 h-[15%] w-[30%] md:w-[15%] z-0">
        <img src="/assets2.png" alt="" className="w-full" />
      </div>
    </div>
  );
}

export default FiturWebsite;
