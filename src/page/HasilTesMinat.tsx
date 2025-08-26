import { Card, CardContent } from "@/components/ui/card";
import useIsMobile from "@/hooks/useIsMobile";
import { CircleArrowLeft } from "lucide-react";
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
function HasilTesMinat() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const isMobile = useIsMobile();
  const chartData = [
    {
      name: "Minat Ilmu Pengetahuan Alam",
      point: 30,
    },
    {
      name: "Minat Keagamaan",
      point: 23,
    },
    {
      name: "Minat Matematika",
      point: 11,
    },
    {
      name: "Minat Ilmu Pengetahuan Sosial",
      point: 8,
    },
    {
      name: "Minat Bahasa dan Budaya",
      point: 5,
    },
  ];

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
        {/* <div className="flex gap-6 items-center justify-start">
          <img src="/icon1.png" alt="" />
          <h1 className="text-4xl md:text-5xl text-left font-bold">
            Uji Coba Minat
          </h1>
        </div>
        <p className="text-base md:text-xl mt-4 text-description text-justify">
          Kenali minat belajarmu lewat tes sederhana dan akurat. Biar kamu nggak
          salah pilih jurusan!
        </p> */}
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
          Grafik Hasil Uji Coba Minat
        </p>
        <div className="h-[300px] md:h-[450px] mt-4">
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
        </div>
      </div>
    </div>
  );
}

export default HasilTesMinat;
