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
import { getInterestDescription, getInterestDescription2 } from "./Helper";
import { Button } from "@/components/ui/button";

interface ChartData {
  name: string;
  point: number;
}

function HasilTesMinat() {
  const navigate = useNavigate();
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [topCategories, setTopCategories] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const isMobile = useIsMobile();

  useEffect(() => {
    const localName = localStorage.getItem("name");
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

      setTopCategories(topCategories);
      setChartData(formattedData);
    } else {
      setChartData([]);
    }

    setName(localName ?? "");
  }, []);

  const date = new Date().toLocaleString();

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
            onClick={() => navigate("/uji-coba-minat")}
          >
            <CircleArrowLeft size={16} />
            <p>Kembali</p>
          </div>
          <Button
            className="flex gap-2 print:hidden"
            onClick={() => window.print()}
          >
            <Printer />
            Cetak Kartu
          </Button>
        </div>
        <div className="LPP">
          <div className="flex justify-between items-center">
            <p className="text-xl mt-4 print:mt-0">
              Hasil Uji Coba Minat untuk Peserta{" "}
              <span className="font-semibold text-primary">{name}</span>.
            </p>
            <p>{formatDate(date)}</p>
          </div>
          <Card className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 mt-4 ">
            <CardContent>
              <p className="text-xl font-semibold ">
                Minat bakat yang paling sesuai untuk kamu:
              </p>
              <p className="text-4xl font-semibold mt-4 text-primary">
                {topCategories
                  .map((item) => getInterestDescription(item))
                  .join(", ")}
              </p>
            </CardContent>
          </Card>
          <p className="text-xl mt-6 font-semibold">
            Deskripsi Hasil Uji Coba Minat
          </p>
          <p className="mt-2">
            Kecenderungan pilihan peserta didik menyukai kegiatan bidang{" "}
            {topCategories
              .map((item) => getInterestDescription2(item))
              .join(", ")}
          </p>
          <Card className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 mt-4">
            <CardContent>
              <p>
                <span className="font-semibold text-green-800">
                  Area Belajar{" "}
                </span>
                Sekolah Menengah Atas/Kejuruan:{" "}
                <span className="font-semibold">
                  Kimia, Fisika, Biologi, Biokimia, dll
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
        <div className="print:hidden">
          <hr className="my-6 border-t border-gray-300" />
          <p className="mt-4 font-semibold mb-2">Jenjang Perguruan Tinggi : </p>
          <ul className="list-decimal pl-4 space-y-2">
            <li>Program Studi Kimia (Chemistry)</li>
            <li>Program Studi Fisika (Physics)</li>
            <li>Program Studi Biologi (Biology) </li>
            <li>Program Studi Biokimia (Biochemistry)</li>
            <li>Program Studi Oseanografi (Oceanography)</li>
            <li>Program Studi Ilmu Kelautan (Marine Science)</li>
            <li>Program Studi Mikrobiologi (Microbiology)</li>
            <li>Dll</li>
          </ul>
          <hr className="my-6 border-t border-gray-300" />
          <p className="mt-4 font-semibold mb-2">Prospek Karir : </p>
          <ol className="list-decimal pl-4 space-y-2">
            <li>
              Instansi Negara
              <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>
                  Peneliti di lembaga penelitian Negara, seperti LIPI, BATAN,
                  dan lain-lain
                </li>
                <li>Badan Pengawas Obat-Obatan dan Makanan (BPOM)</li>
                <li>
                  Badan Usaha Milik Negara (BUMN) bidang perminyakan dan gas
                  bumi, serta pertambangan seperti: PT. Pertamina, PT.
                  Perusahaan Gas Negara, PT. Aneka Tambang, PT. Tambang Batubara
                  Bukit Asam, PT. Timah, dll.
                </li>
                <li>
                  Badan Usaha Milik Negara (BUMN) bidang transportasi, teknologi
                  dan telekomunikasi, seperti: PT. Angkasa Pura, PT. KAI, PT.
                  Pelayaran Nasional Indonesia, PT. Energy Management Indonesia,
                  PT. PLN, PT. PDAM, PT. Pindad, PT. Dirgantara Indonesia, PT.
                  Telekomunikasi Indonesia, dll.
                </li>
                <li>
                  Lembaga riset dan pengembangan, seperti: LIPI, BATAN, BPPT
                </li>
                <li>
                  Pegawai Negeri Sipil (PNS) di Departemen Pertanian, Departemen
                  Peternakan, Departemen Kelautan dan Perikanan, Departemen
                  Kesehatan, Kementerian Lingkungan Hidup
                </li>
                <li>
                  Lembaga penelitian milik negara, seperti: Lembaga Ilmu
                  Pengetahuan Indonesia (LIPI), dll.
                </li>
              </ol>
            </li>

            <li>
              Industri Swasta
              <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>Industri di bidang makanan</li>
                <li>Industri obat-obatan</li>
                <li>Industri kosmetik</li>
                <li>
                  Industri yang membutuhkan ilmu kimia seperti: perusahaan
                  pupuk, perusahaan semen, perusahaan tekstil, dll.
                </li>
                <li>
                  Staf ahli di perusahaan peternakan, perikanan, dan pertanian
                </li>
                <li>
                  Staf ahli di perusahaan bahan makanan seperti: PT. Nestle, PT.
                  Indofood, PT. Unilever, dll
                </li>
                <li>
                  Staf ahli di perusahaan obat-obatan, seperti: PT. Bio Farma,
                  PT. Kimia Farma, PT. Indo Farma, dll
                </li>
                <li>Staf ahli di kebun binatang</li>
              </ol>
            </li>

            <li>
              Lain-lain
              <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                <li>
                  Wirausaha dalam pembuatan makanan, kosmetik, atau pupuk.
                </li>
                <li>
                  Wirausaha dalam pembuatan alat-alat yang menggunakan prinsip
                  keilmuan fisika, seperti: pembuatan alat-alat pabrik,
                  pembuatan peralatan-peralatan praktik di laboratorium, dll.
                </li>
                <li>
                  Organisasi lingkungan hidup seperti WHO, WWF, Flora Fauna
                  International, dll
                </li>
              </ol>
            </li>
          </ol>
          <hr className="my-6 border-t border-gray-300" />
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
    </div>
  );
}

export default HasilTesMinat;
