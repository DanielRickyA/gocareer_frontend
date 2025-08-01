import { Card, CardContent } from "@/components/ui/card";

const minatBakatList = [
  {
    title: "Minat Keagamaan",
    description:
      "Kecenderungan pilihan peserta didik menyukai atau tidak menyukai kegiatan bidang keagamaan.",
  },
  {
    title: "Minat Matematika",
    description:
      "Kecenderungan pilihan peserta didik menyukai atau tidak menyukai kegiatan bidang Matematika.",
  },
  {
    title: "Minat Ilmu Pengetahuan Alam",
    description:
      "Kecenderungan pilihan peserta didik menyukai atau tidak menyukai kegiatan bidang Ilmu Pengetahuan Alam.",
  },
  {
    title: "Minat Ilmu Pengetahuan Sosial",
    description:
      "Kecenderungan pilihan peserta didik menyukai atau tidak menyukai kegiatan bidang Ilmu Pengetahuan Sosial.",
  },
  {
    title: "Minat Teknologi dan Rakayasa",
    description:
      "Kecenderungan pilihan peserta didik menyukai atau tidak menyukai kegiatan bidang teknologi dan rekayasa.",
  },
  {
    title: "Minat Teknologi Informasi dan Komunikasi",
    description:
      "Kecenderungan pilihan peserta didik menyenangi atau tidak menyenangi kegiatan bidang teknologi informasi dan komunikasi.",
  },
  {
    title: "Minat Kesehatan",
    description:
      "Kecenderungan pilihan peserta didik menyukai atau tidak menyukai kegiatan bidang kesehatan.",
  },
  {
    title: "Minat Agrobisnis dan Agroteknologi",
    description:
      "Kecenderungan pilihan peserta didik menyukai atau tidak menyukai kegiatan bidang agrobisnis dan agroteknologi.",
  },
  {
    title: "Minat Perikanan dan Kelautan",
    description:
      "Kecenderungan pilihan peserta didik menyukai atau tidak menyukai kegiatan bidang perikanan dan kelautan.",
  },
  {
    title: "Minat Bisnis dan Manajemen",
    description:
      "Kecenderungan pilihan peserta didik menyukai atau tidak menyukai kegiatan bidang bisnis dan manajemen.",
  },
  {
    title: "Minat Pariwisata",
    description:
      "Kecenderungan pilihan peserta didik menyukai atau tidak menyukai kegiatan bidang pariwisata.",
  },
  {
    title: "Minat Seni dan Kerajinan",
    description:
      "Kecenderungan pilihan peserta didik menyukai atau tidak menyukai kegiatan bidang seni dan kerajinan.",
  },
  {
    title: "Minat Keolahragaan",
    description:
      "Kecenderungan pilihan peserta didik menyukai atau tidak menyukai kegiatan bidang keolahragaan.",
  },
];
function MinatBakat() {
  return (
    <div className="relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12">
        <div className="flex gap-6 items-center justify-start">
          <img src="/icon2.png" alt="" />
          <h1 className="text-4xl md:text-5xl text-left font-bold">
            Minat Bakat
          </h1>
        </div>
        <p className="text-base md:text-xl mt-4 text-description text-justify">
          Pahami berbagai bidang minat dan temukan yang paling menggambarkan
          dirimu. Fokus pada yang paling cocok, bukan yang paling umum.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6">
          {minatBakatList.map((item) => (
            <div>
              <Card className="bg-[#F9FAFC] h-full shadow-none border-[0.3px]">
                <CardContent className="flex flex-col">
                  <p className="text-xl font-semibold ">{item.title}</p>
                  <p className="mt-2 text-sm text-description">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MinatBakat;
