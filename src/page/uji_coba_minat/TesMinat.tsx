import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState, useMemo } from "react"; // Tambahkan useMemo
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { dataTemp } from "./DataTemp";
// import { getInterestDescription } from "./Helper";

function TesMinat() {
  const navigate = useNavigate();
  const [part, setPart] = useState<number>(1);
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [name, setName] = useState<string>("");
  const [alamat, setAlamat] = useState<string>("");
  const [namaSekolah, setNamaSekolah] = useState<string>("");
  const [kelas, setKelas] = useState<string>("");
  const [umur, setUmur] = useState<string>("");

  const categories = useMemo(() => {
    return [...new Set(dataTemp.map((item) => item.cat))];
  }, []);

  const currentCategory = categories[page];
  const totalPages = categories.length;

  const currentQuestions = useMemo(() => {
    return dataTemp
      .map((item, index) => ({ ...item, globalIndex: index }))
      .filter((item) => item.cat === currentCategory);
  }, [currentCategory]);

  const isAllAnswered = currentQuestions.every(
    (question) => answers[question.globalIndex] !== undefined
  );

  const handleAnswer = (questionIndex: number, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: value,
    }));
  };

  const handleNext = () => {
    if (part == 1) {
      if (!name) {
        return toast.error("Nama tidak boleh kosong");
      }
      if (!alamat) {
        return toast.error("Alamat tidak boleh kosong");
      }
      if (!namaSekolah) {
        return toast.error("Nama sekolah tidak boleh kosong");
      }
      if (!kelas) {
        return toast.error("Kelas tidak boleh kosong");
      }
      if (!umur) {
        return toast.error("Umur tidak boleh kosong");
      }

      setPart(2);
      console.log("masuk Part 1");
    } else {
      console.log("masuk Part 2");
      if (isAllAnswered) {
        setPage((prev) => prev + 1);
        setTimeout(() => {
          const element = document.getElementById("Soal");
          if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80; // 80 = tinggi navbar
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  const handleBack = () => {
    if (page == 0) {
      if (part == 2) {
        setPart(1);
      }
    } else {
      setPage((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (name === "") {
      toast.error("Nama Peserta Belum diisi!");
      setTimeout(() => {
        const element = document.getElementById("nama");
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 80; // 80 = tinggi navbar
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      const categoryLimits: {
        [key: string]: { minScore: number; maxScore: number };
      } = {};

      categories.forEach((cat) => {
        const totalBobot = dataTemp
          .filter((q) => q.cat === cat)
          .reduce((sum, q) => sum + q.bobot, 0);

        // Skor terendah adalah jika semua jawaban dikalikan -3
        // Skor tertinggi adalah jika semua jawaban dikalikan +3
        categoryLimits[cat] = {
          minScore: totalBobot * -3,
          maxScore: totalBobot * 3,
        };
      });

      const rawUserScores: { [key: string]: number } = {
        AGM: 0,
        AGR: 0,
        BDB: 0,
        BDM: 0,
        IPA: 0,
        IPS: 0,
        KES: 0,
        KOR: 0,
        MTK: 0,
        PDK: 0,
        PRW: 0,
        SDK: 0,
        TDR: 0,
        TIK: 0,
      };

      const scoreMultiplier: { [key: number]: number } = {
        1: -3,
        2: -2,
        3: -1,
        4: 0,
        5: 1,
        6: 2,
        7: 3,
      };

      dataTemp.forEach((question, index) => {
        const userAnswer = answers[index];
        if (userAnswer !== undefined) {
          const multiplier = scoreMultiplier[userAnswer];
          const score = multiplier * question.bobot;
          rawUserScores[question.cat] += score;
        }
      });

      const normalizedScores: { [key: string]: number } = {};

      for (const cat in rawUserScores) {
        const { minScore, maxScore } = categoryLimits[cat];
        const userScore = rawUserScores[cat];

        const scoreRange = maxScore - minScore;

        if (scoreRange === 0) {
          normalizedScores[cat] = 0;
        } else {
          const normalized = ((userScore - minScore) / scoreRange) * 100;
          normalizedScores[cat] = Math.round(normalized);
        }
      }

      toast.success("Data Berhasil disubmit");
      localStorage.setItem("name", name);
      localStorage.setItem("testResults", JSON.stringify(normalizedScores));

      navigate("/asesmen-minat/hasil");
    }
  };

  const disableNext = () => {
    if (part == 1) {
      if (!name && !alamat && !namaSekolah && !kelas && !umur) return true;
      else return false;
    } else {
      if (isAllAnswered) {
        return false;
      } else {
        return true;
      }
    }
  };

  return (
    <div className="relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 min-h-[85dvh]">
        <div className="flex gap-6 items-center justify-start">
          <img src="/icon1.png" alt="" />
          <h1 className="text-4xl md:text-5xl text-left font-bold">
            Asesmen Minat
          </h1>
        </div>
        <p className="text-base md:text-xl mt-4 text-description text-justify">
          Kenali minat belajarmu lewat tes sederhana dan akurat. Biar kamu nggak
          salah pilih jurusan!
        </p>
        {part == 1 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-8 print:ms-10">
              <div className="mt-8 grid w-full items-center gap-3" id="nama">
                <Label htmlFor="nama">Nama Peserta</Label>
                <Input
                  type="text"
                  id="nama"
                  placeholder="Masukan Nama Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div
                className="mt-8 grid w-full items-center gap-3 print:hidden"
                id="alamat"
              >
                <Label htmlFor="alamat">Alamat</Label>
                <Input
                  type="text"
                  id="alamat"
                  placeholder="Masukan Alamat Anda"
                  value={alamat}
                  className="bg-white"
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-8 print:ms-10">
              <div
                className="mt-8 grid w-full items-center gap-3 print:hidden"
                id="namaSekolah"
              >
                <Label htmlFor="namaSekolah">Nama Sekolah</Label>
                <Input
                  type="text"
                  id="namaSekolah"
                  placeholder="Masukan Nama Sekolah Anda"
                  value={namaSekolah}
                  className="bg-white"
                  onChange={(e) => setNamaSekolah(e.target.value)}
                />
              </div>
              <div
                className="mt-8 grid w-full items-center gap-3 print:hidden"
                id="kelas"
              >
                <Label htmlFor="kelas">Kelas</Label>
                <Input
                  type="text"
                  id="kelas"
                  placeholder="Masukan Kelas Anda"
                  value={kelas}
                  className="bg-white"
                  onChange={(e) => setKelas(e.target.value)}
                />
              </div>
              <div
                className="mt-8 grid w-full items-center gap-3 print:hidden"
                id="umur"
              >
                <Label htmlFor="umur">Umur</Label>
                <Input
                  type="number"
                  id="umur"
                  placeholder="Masukan Umur Anda"
                  value={umur}
                  className="bg-white"
                  onChange={(e) => setUmur(e.target.value)}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="mt-8" id="Soal">
            {currentQuestions.map((item) => {
              const globalIndex = item.globalIndex;
              return (
                <div key={globalIndex}>
                  <div className="mb-8" id={item.soal}>
                    <p className="text-lg font-semibold">{item.soal}</p>
                    <div className="flex items-center justify-start gap-8 mt-8">
                      <div className="flex flex-col items-center">
                        <div className="flex space-x-4 items-center">
                          {/* Label kiri (desktop) */}
                          <span className="hidden md:block text-sm lg:text-base">
                            Tidak Setuju
                          </span>
                          <div className="w-full">
                            {/* Label bawah khusus untuk mobile */}
                            <div className="flex justify-between w-full mb-2 md:hidden px-1 ">
                              <span className="text-xs">Tidak Setuju</span>
                              <span className="text-xs">Setuju</span>
                            </div>
                            {/* Bulatan */}
                            <div className="flex space-x-2 md:space-x-4 items-end justify-center">
                              {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                                const sizes = [
                                  "w-6 h-6",
                                  "w-7 h-7",
                                  "w-8 h-8",
                                  "w-9 h-9",
                                  "w-10 h-10",
                                  "w-11 h-11",
                                  "w-12 h-12",
                                ];
                                const sizeClass = sizes[num - 1];
                                let borderColor = "border-gray-400";
                                let checkedColor =
                                  "peer-checked:bg-gray-400 peer-checked:border-gray-400";

                                if (num < 4) {
                                  borderColor = "border-[#FFC444]";
                                  checkedColor =
                                    "peer-checked:bg-[#FFC444] peer-checked:border-[#FFC444]";
                                } else if (num > 4) {
                                  borderColor = "border-[#4298B4]";
                                  checkedColor =
                                    "peer-checked:bg-[#4298B4] peer-checked:border-[#4298B4]";
                                }

                                return (
                                  <Label
                                    key={num}
                                    className="flex flex-col items-center cursor-pointer"
                                  >
                                    <Input
                                      type="radio"
                                      name={`soal-${globalIndex}`}
                                      value={num}
                                      checked={answers[globalIndex] === num}
                                      onChange={() =>
                                        handleAnswer(globalIndex, num)
                                      }
                                      className="hidden peer"
                                    />
                                    <div
                                      className={`rounded-full border-2 ${sizeClass} ${borderColor} ${checkedColor} transition`}
                                    />
                                    <span className="mt-1 text-xs font-semibold">
                                      {num}
                                    </span>
                                  </Label>
                                );
                              })}
                            </div>
                          </div>

                          {/* Label kanan (desktop) */}
                          <span className="hidden md:block text-sm lg:text-base">
                            Setuju
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-8" />
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-8" id="Soal">
          {/* <h2 className="text-2xl font-bold mb-6">
            Kategori: {getInterestDescription(currentCategory)}
          </h2> */}

          {/* Navigasi */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handleBack}
              disabled={part == 1 ? true : part == 0}
              className={`px-4 py-2 rounded-full ${
                part == 1
                  ? page === 0
                    ? "bg-gray-300 text-gray-500"
                    : "bg-gray-700 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              Kembali
            </button>
            {page === totalPages - 1 ? (
              // Kalau sudah halaman terakhir
              <button
                onClick={handleSubmit}
                disabled={!isAllAnswered}
                className={`px-4 py-2 rounded-full ${
                  !isAllAnswered
                    ? "bg-gray-300 text-gray-500"
                    : "bg-primary text-white"
                }`}
              >
                Submit
              </button>
            ) : (
              // Kalau belum halaman terakhir
              <button
                onClick={handleNext}
                disabled={disableNext()}
                className={`px-4 py-2 rounded-full ${
                  part == 1
                    ? !name && !alamat && !namaSekolah && !kelas && !umur
                      ? "bg-gray-300 text-gray-500"
                      : "bg-primary text-white"
                    : part == 2
                    ? !isAllAnswered
                      ? "bg-gray-300 text-gray-500"
                      : "bg-primary text-white"
                    : "bg-primary text-white"
                }`}
              >
                Selanjutnya
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TesMinat;
