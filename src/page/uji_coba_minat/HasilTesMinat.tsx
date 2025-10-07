import { Card, CardContent } from "@/components/ui/card";
import useIsMobile from "@/hooks/useIsMobile";
import { CircleArrowLeft, Printer } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import {
  getAreaBelajar,
  getInterestDescription,
  getInterestDescription2,
  getJenjangPT,
  getKarirLain,
  getKarirNegara,
  getKarirSwasta,
  getRekomendasiSekolah,
} from "./Helper";
import { Button } from "@/components/ui/button";

interface ChartData {
  name: string;
  point: number;
}

interface FormData {
  name: string;
  alamat: string;
  namaSekolah: string;
  kelas: string;
  umur: string;
  sekolah: string;
}

type Rekomendasi = {
  SMA: string[];
  SMK: string[];
};

function HasilTesMinat() {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [topCategories, setTopCategories] = useState<string[]>([]);
  const [dataProgramStudi, setDataProgramStudi] = useState<string[]>([]);
  const [dataKarirNegara, setDataKarirNegara] = useState<string[]>([]);
  const [dataKarirSwasta, setDataKarirSwasta] = useState<string[]>([]);
  const [dataKarirLain, setDataKarirLain] = useState<string[]>([]);
  const [dataRekSekolah, setDataRekSekolah] = useState<Rekomendasi>({
    SMA: [],
    SMK: [],
  });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    alamat: "",
    namaSekolah: "",
    kelas: "",
    umur: "",
    sekolah: "",
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    const localData = localStorage.getItem("formData");
    const localCharData = localStorage.getItem("testResults");

    if (localCharData) {
      const parsedData = JSON.parse(localCharData);
      const formattedData = Object.entries(parsedData)
        .map(([name, point]) => ({
          name,
          point: Number(point),
        }))
        .filter((item) => item.point !== 0) as ChartData[];

      const maxPoint = Math.max(...formattedData.map((item) => item.point));
      const topCategories = formattedData
        .filter((item) => item.point === maxPoint)
        .map((item) => item.name);

      const slicedTopCategories = topCategories.slice(0, 3);
      if (topCategories.length > 3) {
        alert("Hasil tes minat tidak valid. Silakan coba lagi.");
        navigate("/asesmen-minat");
        return;
      }

      const sortedData = [...formattedData].sort((a, b) => b.point - a.point);
      const top6Data = sortedData.slice(0, 6);

      setTopCategories(slicedTopCategories);
      setDataProgramStudi(topCategories.flatMap((item) => getJenjangPT(item)));
      setDataKarirNegara(topCategories.flatMap((item) => getKarirNegara(item)));
      setDataKarirSwasta(topCategories.flatMap((item) => getKarirSwasta(item)));
      setDataKarirLain(topCategories.flatMap((item) => getKarirLain(item)));
      const hasilRekomendasi = topCategories
        .map((item) => getRekomendasiSekolah(item))
        .filter((rek): rek is Rekomendasi => !("error" in rek)); // hilangkan yang error

      const gabunganSMA = hasilRekomendasi.flatMap((rek) => rek.SMA);
      const gabunganSMK = hasilRekomendasi.flatMap((rek) => rek.SMK);

      setDataRekSekolah({
        SMA: gabunganSMA,
        SMK: gabunganSMK,
      });
      setChartData(top6Data);
    } else {
      setChartData([]);
    }

    setFormData(JSON.parse(localData ?? ""));
  }, [navigate]);

  const date = new Date().toISOString();

  function formatDate(dateString: string): string {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("id-ID", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }

  return (
    <div className="relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 print:py-0 min-h-[85dvh] ">
        <div className="flex justify-between items-center">
          <div
            className="flex justif-start items-center gap-2 cursor-pointer print:hidden"
            onClick={() => navigate("/asesmen-minat")}
          >
            <CircleArrowLeft size={16} />
            <p>Kembali</p>
          </div>
          <Button
            className="flex gap-2 print:hidden"
            onClick={() => window.print()}
          >
            <Printer />
            Cetak Hasil
          </Button>
        </div>
        <div className="LPP ">
          <div className="print:m-5">
            <div className="flex justify-between items-center relative z-50">
              <p className="text-xl mt-4 print:mt-0">
                Hasil Asesmen Minat untuk Peserta{" "}
                <span className="font-semibold text-primary">
                  {formData.name} ({formData.umur}) .
                </span>
              </p>
              <p>{formatDate(date)}</p>
            </div>
            <div>
              <p>
                Alamat {formData.name}: {formData.alamat}
              </p>
              <p>
                {formData.namaSekolah}, Kelas {formData.kelas}{" "}
              </p>
            </div>
            <Card className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 mt-4 print:mt-2 relative">
              <CardContent>
                <p className="text-xl font-semibold print:text-lg">
                  Minat bakat yang paling sesuai untuk kamu:
                </p>
                <p className="text-4xl font-semibold mt-4 text-primary print:text-2xl">
                  {topCategories
                    .map((item) => getInterestDescription(item))
                    .join(", ")}
                </p>
              </CardContent>
            </Card>

            <div className="print:hidden">
              <p className="text-xl mt-6 font-semibold">Pilihan Sekolah</p>
              <p className="mt-2">
                Peserta didik dapat direkomendasikan memilih sekolah:
              </p>
              <ol className="list-decimal pl-4 space-y-2 mt-2">
                {dataRekSekolah.SMA.length > 0 && (
                  <li>
                    Sekolah Menengah Atas (SMA):{" "}
                    {dataRekSekolah.SMA.join(", ") || "Tidak ada"}
                  </li>
                )}
                {dataRekSekolah.SMK.length > 0 && (
                  <li>
                    Sekolah Menengah Kejuruan (SMK):{" "}
                    {dataRekSekolah.SMK.join(", ") || "Tidak ada"}
                  </li>
                )}
                {dataRekSekolah.SMA.length === 0 &&
                  dataRekSekolah.SMK.length === 0 && (
                    <li>Tidak ada rekomendasi sekolah.</li>
                  )}
              </ol>
              <hr className="my-6 border-t border-gray-300" />
            </div>

            <p className="text-xl print:text-base mt-6 print:mt-2 font-semibold">
              Deskripsi Hasil Asesmen Minat
            </p>
            <p className="mt-2 print:mt-0 print:text-sm">
              Kecenderungan pilihan peserta didik menyukai kegiatan bidang{" "}
              {topCategories
                .map((item) => getInterestDescription2(item))
                .join(", ")}
            </p>
            <Card className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 mt-4 print:mt-2 relative">
              <CardContent>
                <p>
                  <span className="font-semibold text-green-800">
                    Area Belajar{" "}
                  </span>
                  Sekolah Menengah Atas/Kejuruan:{" "}
                  <span className="font-semibold">
                    {topCategories
                      .map((item) => {
                        const area = getAreaBelajar(item);
                        return area;
                      })
                      .join(", ")}
                  </span>
                </p>
                <p className="mt-2">
                  Bidang yang{" "}
                  <span className="font-semibold text-red-800">
                    Tidak Kamu Kuasai{" "}
                  </span>
                  pada Sekolah Menengah Atas/Kejuruan:{" "}
                  <span className="font-semibold">
                    {chartData
                      .filter(
                        (item) =>
                          item.name !== topCategories[0] && item.point !== 0
                      )
                      .sort((a, b) => a.point - b.point)
                      .slice(0, 3)
                      .map((item) => getInterestDescription2(item.name))
                      .join(", ") || "Tidak ada"}
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="absolute top-[10%] right-0 h-[10%] w-[15%] z-30 hidden print:block">
            <img src="/assets1.png" alt="" className="w-full" />
          </div>
          <div className="absolute bottom-[3%] left-0 h-[5%] w-[12%] z-50 hidden print:block">
            <img src="/assets2.png" alt="" className="w-full" />
          </div>
        </div>

        <div className="print:hidden">
          <hr className="my-6 border-t border-gray-300" />
          <p className="mt-4 font-semibold mb-2">Jenjang Perguruan Tinggi : </p>
          <ul className="list-decimal pl-4 space-y-2">
            {dataProgramStudi.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <li>Dll</li>
          </ul>
          <hr className="my-6 border-t border-gray-300" />
          <p className="mt-4 font-semibold mb-2">Prospek Karir : </p>
          <ol className="list-decimal pl-4 space-y-2">
            <li>
              Instansi Negara
              <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                {dataKarirNegara.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </li>

            <li>
              Industri Swasta
              <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                {dataKarirSwasta.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </li>

            <li>
              Lain-lain
              <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                {dataKarirLain.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </li>
          </ol>
          <hr className="my-6 border-t border-gray-300" />
          <p className="text-xl mt-6 font-semibold">
            Grafik Hasil Asesmen Minat
          </p>
          <div className="h-[700px] md:h-[450px] mt-4 flex flex-col md:flex-row items-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx={`${isMobile ? "50%" : "35%"}`}
                cy="50%"
                outerRadius={`${isMobile ? "50%" : "80%"}`}
                data={chartData}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Tooltip />
                {/* <Legend layout="vertical" align="right" verticalAlign="middle" /> */}
                <Radar
                  name="Skor Minat"
                  dataKey="point"
                  stroke="#4298b4"
                  fill="#4298b4"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
            <div className="w-fit h-fit md:w-1/2 bg-[#F9FAFC] px-10 py-5 rounded-lg">
              <p className="font-bold -ml-4">Keterangan:</p>
              <p className="mt-2">
                {chartData
                  .filter((item) => item.point !== 0)
                  .map((item) => {
                    return (
                      <li>
                        <b>{item.name}</b>: {getInterestDescription2(item.name)}
                      </li>
                    );
                  })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HasilTesMinat;
