import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useIsMobile from "@/hooks/useIsMobile";
// import { ChevronDown } from "lucide-react";
import { useState } from "react";

const sekolahList = [
  {
    kabupaten: "KABUPATEN BANTUL",
    sma: [
      "SMAN 1 Bambanglipuro",
      "SMAN 1 Banguntapan",
      "SMAN 2 Banguntapan",
      "SMAN 1 Bantul",
      "SMAN 2 Bantul",
      "SMAN 3 Bantul",
      "SMAN 1 Dlingo",
    ],
    smk: [
      {
        nama: "SMKN 1 Bantul",
        jurusan: [
          "Akuntansi",
          "Bisnis Digital",
          "Bisnis Retail",
          "Desain Komunikasi Visual",
          "Layanan Perbankan Syariah",
          "Manajemen Perkantoran",
          "Rekayasa Perangkat Lunak",
          "Teknik Komputer dan Jaringan",
        ],
      },
      {
        nama: "SMKN 1 Dlingo",
        jurusan: [
          "Desain dan Produksi Busana",
          "Kriya Kreatif Kayu dan Rotan",
          "Teknik Audio Video",
        ],
      },
      {
        nama: "SMKN 1 Pajangan",
        jurusan: [
          "Desain Pemodelan dan Informasi Bangunan",
          "Kriya Kreatif Kayu dan Rotan",
          "Rekayasa Perangkat Lunak",
          "Desain Komunikasi Visual",
          "Layanan Perbankan Syariah",
          "Manajemen Perkantoran",
          "Rekayasa Perangkat Lunak",
          "Teknik Komputer dan Jaringan",
        ],
      },
    ],
  },
  {
    kabupaten: "KABUPATEN GUNUNGKIDUL",
    sma: [
      "SMAN 1 Karangmojo",
      "SMAN 1 Panggang",
      "SMAN 1 Patuk",
      "SMAN 1 Playen",
      "SMAN 2 Playen",
      "SMAN 1 Rongkop",
      "SMAN 1 Semanu",
      "SMAN 1 Semin",
      "SMAN 1 Tanjungsari",
      "SMAN 1 Wonosari",
    ],
    smk: [
      {
        nama: "SMKN 1 Gedangsari",
        jurusan: [
          "Bisnis Digital menjadi Bisnis Retail",
          "Teknik Elektronika Industri",
          "Teknik Sepeda Motor",
        ],
      },
      {
        nama: "SMKN 2 Gedangsari",
        jurusan: [
          "Desain dan Produksi Busana",
          "Kriya Kreatif Kayu dan Rotan",
          "Teknik Audio Video",
        ],
      },
      {
        nama: "SMKN 1 Girisubo",
        jurusan: [
          "Akuntansi",
          "Desain dan Produksi Busana",
          "Teknik Kendaraan Ringan",
        ],
      },
      {
        nama: "SMKN 1 Ngawen",
        jurusan: [
          "Akuntansi",
          "Desain Komunikasi Visual",
          "Kuliner",
          "Teknik Kendaraan Ringan",
          "Teknik komputer dan Jaringan",
        ],
      },
    ],
  },
];

const mapelList = [
  {
    mapel: [
      "Pendidikan Agama",
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
  },
];

function Sekolah() {
  // const [openSmk, setOpenSmk] = useState<string[]>([]);
  const [tab, setTab] = useState<string>("sma");
  const [tabMain, setTabMain] = useState<string>("sekolah");
  const isMobile = useIsMobile();

  // const toggleSmk = (namaSmk: string) => {
  //   setOpenSmk((prev) =>
  //     prev.includes(namaSmk)
  //       ? prev.filter((nama) => nama !== namaSmk)
  //       : [...prev, namaSmk]
  //   );
  // };
  return (
    <div className="relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 min-h-[85dvh]">
        <div className="flex gap-6 items-center justify-start">
          <img src="/icon5.png" alt="" />
          <h1 className="text-4xl md:text-5xl text-left font-bold">Sekolah</h1>
        </div>
        <p className="text-base md:text-xl mt-4 text-description text-justify">
          Temukan berbagai pilihan SMA dan SMK terbaik di seluruh wilayah DIY.
          Jelajahi berdasarkan kabupaten, dan jurusan. Dapatkan informasi
          lengkap untuk menentukan sekolah impianmu.
        </p>
        <Tabs defaultValue="sma" className="w-full mt-4 mb-12">
          <TabsList className="w-full">
            <TabsTrigger
              value="sma"
              className="w-full"
              onClick={() => setTabMain("sekolah")}
            >
              Sekolah
            </TabsTrigger>
            <TabsTrigger
              value="smk"
              className="w-full"
              onClick={() => setTabMain("mapel")}
            >
              Mata Pelajaran / Jurusan
            </TabsTrigger>
          </TabsList>
        </Tabs>
        {tabMain == "sekolah" ? (
          <>
            <div className="flex justify-between items-end mt-6 ">
              <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className="grid w-full md:max-w-sm items-center gap-2">
                  <Label htmlFor="email" className="font-semibold">
                    Cari Sekolah
                  </Label>
                  <Input
                    type="text"
                    id="email"
                    placeholder={`Cari Berdasarkan Nama Sekolah `}
                  />
                </div>
                <div className="grid w-full md:max-w-sm items-center gap-2">
                  <Label className="font-semibold">Filter Kabupaten</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Semua Kabupaten" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semua">Semua Kabupaten</SelectItem>
                      <SelectItem value="gunungKidul">Gunung Kidul</SelectItem>
                      <SelectItem value="kulonProgo">Kulon Progo</SelectItem>
                      <SelectItem value="sleman">Sleman</SelectItem>
                      <SelectItem value="yogyakarta">
                        Kota Yogyakarta
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {isMobile ? (
              <>
                <Tabs defaultValue="sma" className="w-full mt-4">
                  <TabsList className="w-full">
                    <TabsTrigger
                      value="sma"
                      className="w-full"
                      onClick={() => setTab("sma")}
                    >
                      SMA
                    </TabsTrigger>
                    <TabsTrigger
                      value="smk"
                      className="w-full"
                      onClick={() => setTab("smk")}
                    >
                      SMK
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                <div>
                  <h1 className="text-2xl font-semibold mt-4">
                    {tab == "sma" ? "SMA" : "SMK"}
                  </h1>

                  {sekolahList.map((item) => (
                    <>
                      <div>
                        <div className="bg-secondary p-2 border-[0.2px] border-[#f1f2f5]">
                          <p className="font-semibold">{item.kabupaten}</p>
                        </div>
                        <div className="mt-2">
                          {tab == "sma"
                            ? item?.sma?.map((sma) => (
                                <Card className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 py-2 my-2">
                                  <CardContent className="flex flex-col h-full">
                                    <p className=" my-2">{sma}</p>
                                  </CardContent>
                                </Card>
                              ))
                            : item?.smk?.map((smk) => {
                                // const isOpen = openSmk.includes(smk.nama);
                                return (
                                  <Card
                                    className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 py-2 my-2 cursor-pointer"
                                    // onClick={() => toggleSmk(smk.nama)}
                                  >
                                    <CardContent className="flex flex-col h-full">
                                      <div className="flex justify-between items-center gap-4">
                                        <p className=" my-2">{smk.nama}</p>
                                        {/* <div className="flex items-center gap-2">
                                          <p>Jurusan</p>
                                          <ChevronDown
                                            className={`${
                                              isOpen && "rotate-180"
                                            } transition-all duration-500 ease-in-out`}
                                          />
                                        </div> */}
                                      </div>
                                      {/* {openSmk.includes(smk.nama) && (
                                        <div>
                                          <ul className="list-disc ps-4">
                                            {smk.jurusan.map(
                                              (jurusan, index) => (
                                                <li key={index}>{jurusan}</li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )} */}
                                    </CardContent>
                                  </Card>
                                );
                              })}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <>
                    <h1 className="text-2xl font-semibold">SMA</h1>
                    <h1 className="text-2xl font-semibold">SMK</h1>
                  </>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                  {sekolahList.map((item) => (
                    <>
                      <div>
                        <div className="bg-secondary p-2 border-[0.2px] border-[#f1f2f5]">
                          <p className="font-semibold">{item.kabupaten}</p>
                        </div>
                        <div className="mt-2">
                          {item?.sma?.map((sma) => (
                            <Card className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 py-2 my-2">
                              <CardContent className="flex flex-col h-full">
                                <p className=" my-2">{sma}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="bg-secondary p-2 border-[0.2px] border-[#f1f2f5]">
                          <p className="font-semibold">{item.kabupaten}</p>
                        </div>
                        <div className="mt-2">
                          {item?.smk?.map((smk) => {
                            // const isOpen = openSmk.includes(smk.nama);
                            return (
                              <Card
                                className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 py-2 my-2 "
                                // onClick={() => toggleSmk(smk.nama)}
                              >
                                <CardContent className="flex flex-col h-full">
                                  {/* <div className="flex justify-between items-center gap-4"> */}
                                  <p className=" my-2">{smk.nama}</p>
                                  {/* <div className="flex items-center gap-2">
                                      <p>Jurusan</p>
                                      <ChevronDown
                                        className={`${
                                          isOpen && "rotate-180"
                                        } transition-all duration-500 ease-in-out`}
                                      />
                                    </div> */}
                                  {/* </div> */}
                                  {/* {openSmk.includes(smk.nama) && (
                                    <div>
                                      <ul className="list-disc ps-4">
                                        {smk.jurusan.map((jurusan, index) => (
                                          <li key={index}>{jurusan}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )} */}
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <>
                <div className="flex-1">
                  <h1 className="text-2xl font-semibold">SMA</h1>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {mapelList[0]?.mapel?.map((smk) => (
                      <div>
                        <Card className="bg-[#F9FAFC] flex flex-col shadow-none border-[0.3px] z-20 py-4">
                          <CardContent className="">
                            <p className="text-sm">{smk}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-semibold">SMK</h1>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {mapelList[0]?.jurusan?.map((smk) => (
                      <div>
                        <Card className="bg-[#F9FAFC] flex flex-col shadow-none border-[0.3px] z-20 py-4 px-0">
                          <CardContent className="px-4">
                            <p className="text-sm">{smk}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Sekolah;
