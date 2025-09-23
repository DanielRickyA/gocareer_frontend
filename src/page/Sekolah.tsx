import { getSekolah, type SekolahResponseModel } from "@/api/apiSekolah";
import CardSekolah from "@/components/CardSekolah";
import SkeletonSekolah from "@/components/SkeletonSekolah";
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
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
// import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import noData from "../assets/Emptybox.json";
import { Card, CardContent } from "@/components/ui/card";
function Sekolah() {
  const [tab, setTab] = useState<string>("sma");
  const [kabupaten, setKabupaten] = useState<string>("0");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const isMobile = useIsMobile();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["sekolah", kabupaten],
    queryFn: () => getSekolah(Number(kabupaten)),
    retry: false,
  });

  const filteredData = useMemo(() => {
    if (!data?.data) return [];

    const lowerSearch = searchTerm.toLowerCase();

    return (
      data.data
        .map((item: SekolahResponseModel) => {
          const filteredSMA = item.sma.filter((sma) =>
            sma.nama.toLowerCase().includes(lowerSearch)
          );
          const filteredSMK = item.smk.filter((smk) =>
            smk.nama.toLowerCase().includes(lowerSearch)
          );

          return {
            ...item,
            sma: filteredSMA,
            smk: filteredSMK,
          };
        })
        // Hapus kabupaten yang hasilnya kosong semua
        .filter((item) => item.sma.length > 0 || item.smk.length > 0)
    );
  }, [data, searchTerm]);

  if (isError) {
    const message =
      error instanceof Error ? error.message : "Terjadi kesalahan";
    toast.error(message);
    return null;
  }

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

        <div className="flex justify-between items-end mt-6 ">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="grid w-full md:max-w-sm items-center gap-2">
              <Label htmlFor="email" className="font-semibold">
                Cari Sekolah
              </Label>
              <Input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari Berdasarkan Nama Sekolah"
              />
            </div>
            <div className="grid w-full md:max-w-sm items-center gap-2">
              <Label className="font-semibold">Filter Kabupaten</Label>
              <Select
                value={kabupaten}
                onValueChange={(value) => setKabupaten(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Semua Kabupaten" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Semua Kabupaten</SelectItem>
                  <SelectItem value="1">Bantul</SelectItem>
                  <SelectItem value="2">Gunung Kidul</SelectItem>
                  <SelectItem value="3">Kulon Progo</SelectItem>
                  <SelectItem value="4">Sleman</SelectItem>
                  <SelectItem value="5">Kota Yogyakarta</SelectItem>
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
              {isLoading ? (
                <SkeletonSekolah />
              ) : (
                <>
                  <h1 className="text-2xl font-semibold mt-4">
                    {tab == "sma" ? "SMA" : "SMK"}
                  </h1>
                  {filteredData.length == 0 ? (
                    <div className="flex flex-col justify-center items-center w-full h-full mt-6">
                      <Lottie
                        animationData={noData}
                        className="mx-auto w-[40%]"
                      />
                      <p className="text-xl font-semibold  mt-4">Data Kosong</p>
                    </div>
                  ) : (
                    filteredData?.map((item: SekolahResponseModel, index) => (
                      <div className="mt-2" key={index}>
                        <CardSekolah item={item} sekolah={tab} />
                      </div>
                    ))
                  )}
                </>
              )}
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
            {isLoading ? (
              <SkeletonSekolah />
            ) : (
              <div className="mt-2">
                {filteredData.length === 0 ? (
                  <div className="flex flex-col justify-center items-center w-full h-full mt-6">
                    <Lottie
                      animationData={noData}
                      className="mx-auto w-[40%]"
                    />
                    <p className="text-xl font-semibold mt-4">Data Kosong</p>
                  </div>
                ) : (
                  filteredData.map((item: SekolahResponseModel, index) => {
                    const smaList = item.sma || [];
                    const smkList = item.smk || [];

                    return (
                      <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                      >
                        {/* Kolom SMA */}
                        <div>
                          <div className="bg-secondary p-2 border-[0.2px] border-[#f1f2f5]">
                            <p className="font-semibold">{item.kabupaten}</p>
                          </div>
                          <div className="mt-2">
                            {smaList.length === 0 ? (
                              <p className="text-gray-400 italic">
                                Tidak ada data
                              </p>
                            ) : (
                              smaList.map((sma) => (
                                <Card
                                  className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 py-2 my-2"
                                  key={sma.id}
                                >
                                  <CardContent className="flex flex-col h-full">
                                    <p className="my-2">{sma.nama}</p>
                                  </CardContent>
                                </Card>
                              ))
                            )}
                          </div>
                        </div>

                        {/* Kolom SMK */}
                        <div>
                          <div className="bg-secondary p-2 border-[0.2px] border-[#f1f2f5]">
                            <p className="font-semibold">{item.kabupaten}</p>
                          </div>
                          <div className="mt-2">
                            {smkList.length === 0 ? (
                              <p className="text-gray-400 italic">
                                Tidak ada data
                              </p>
                            ) : (
                              smkList.map((smk) => (
                                <Card
                                  className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 py-2 my-2"
                                  key={smk.id}
                                >
                                  <CardContent className="flex flex-col h-full">
                                    <p className="my-2">{smk.nama}</p>
                                  </CardContent>
                                </Card>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Sekolah;
