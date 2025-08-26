import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
function HasilTesMinat() {
  const [name, setName] = useState<string>("");
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
        <div className="flex gap-6 items-center justify-start">
          <img src="/icon1.png" alt="" />
          <h1 className="text-4xl md:text-5xl text-left font-bold">
            Uji Coba Minat
          </h1>
        </div>
        <p className="text-base md:text-xl mt-4 text-description text-justify">
          Kenali minat belajarmu lewat tes sederhana dan akurat. Biar kamu nggak
          salah pilih jurusan!
        </p>
        <p className="text-xl mt-8">
          Hasil Uji Coba Minat Pada Peserta{" "}
          <span className="font-semibold">{name}</span>
        </p>
        <p className="text-xl mt-6">
          Minat Bakat yang cocok untuk Peserta{" "}
          <span className="font-semibold">{name}</span> Adalah{" "}
          <span className="font-semibold">Minat Ilmu Pengetahuan Alam</span>
        </p>
        <p className="text-xl mt-6">
          Peserta yang memiliki Minat Bakat pada bidang{" "}
          <span className="font-semibold">Minat Ilmu Pengetahuan Alam</span>{" "}
          Kecenderungan pilihan peserta didik menyukai atau tidak menyukai
          kegiatan bidang Ilmu Pengetahuan Alam
        </p>
        <p className="text-xl mt-6 font-semibold">
          Grafik Hasil Uji Coba Minat
        </p>
        <div className="md:h-[450px] mt-4">
          {/* {isLoading ? (
            <Skeleton className="h-full w-full bg-gray-100 rounded-xl mb-6" />
          ) : ( */}
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="35%"
              cy="50%"
              outerRadius="80%"
              data={chartData}
              margin={{ top: 0, right: 30, left: 20, bottom: 5 }}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Tooltip />
              <Legend />
              <Radar
                name="Skor Minat"
                dataKey="point"
                stroke="#4298b4"
                fill="#4298b4"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default HasilTesMinat;
