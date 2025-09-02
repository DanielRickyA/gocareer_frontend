import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const tesMinatList = [
  "Saya suka mempelajari kisah teladan tokoh agama",
  "Saya suka mendengarkan lagulagu religi",
  "Saya suka mempelajari kitab suci",
  "Saya suka melakukan kegiatan ukur mengukur",
  "Saya suka menggunakan hitungan, dalam memprediksi sesuatu",
  "Saya menyukai grafik",
  "Saya suka mengamati peristiwa alam",
  "Saya suka melakukan percobaan ilmiah",
  "Saya suka mengamati pertumbuhan tanaman",
  "Saya suka mempelajari peta",
  "Saya suka mempelajari budaya",
  "Saya suka mempelajari tentang kegiatan ekonomi",
  "Saya suka bermain peran",
  "Saya suka berpidato",
  "Saya suka menuangkan ide ke dalam hasil teknologi ",
];

function TesMinat() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [name, setName] = useState<string>("");
  const perPage = 5;

  const startIndex = page * perPage;
  const currentQuestions = tesMinatList.slice(startIndex, startIndex + perPage);

  const totalPages = Math.ceil(tesMinatList.length / perPage);

  const isAllAnswered = currentQuestions.every(
    (_, idx) => answers[startIndex + idx] !== undefined
  );

  const handleAnswer = (questionIndex: number, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: value,
    }));
  };

  const handleNext = () => {
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
  };

  const handleBack = () => {
    setPage((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (name == "") {
      toast.error("Nama Perserta Belum diisi!");
      setTimeout(() => {
        const element = document.getElementById("nama");
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 80; // 80 = tinggi navbar
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      toast.success("Data Berhasi disubmit");
      navigate("/uji-coba-minat/hasil");
      localStorage.setItem("name", name);
    }
  };
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
        <div className="mt-8 grid w-full max-w-sm items-center gap-3" id="nama">
          <Label htmlFor="nama">Nama Peserta</Label>
          <Input
            type="text"
            id="nama"
            placeholder="Masukan Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-8" id="Soal">
          {currentQuestions.map((soal, index) => {
            const globalIndex = startIndex + index;
            return (
              <>
                <div className="mb-8" id={soal}>
                  <p className="text-lg font-semibold">{soal}</p>
                  <div className="flex items-center justify-start gap-8 mt-8">
                    <div className="flex flex-col items-center">
                      <div className="flex space-x-4 items-center">
                        {/* Label kiri (desktop) */}
                        <span className="hidden md:block text-sm lg:text-base">
                          Tidak Setuju
                        </span>

                        <div className="w-full">
                          {/* Label bawah khusus untuk mobile */}
                          <div className="flex justify-between w-full mb-2 md:hidden px-1">
                            <span className="text-xs">Tidak Setuju</span>
                            <span className="text-xs">Setuju</span>
                          </div>
                          {/* Bulatan */}
                          <div className="flex space-x-2 md:space-x-4 items-end justify-center">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                              const sizes = [
                                "w-7 h-7", // 1
                                "w-8 h-8", // 2
                                "w-9 h-9", // 3
                                "w-10 h-10", // 4
                                "w-12 h-12", // 5
                                "w-14 h-14", // 6
                                "w-16 h-16", // 7
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

                          {/* <div className="flex justify-between w-full mt-4 px-9">
                            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                              <span key={num} className="text-xs font-semibold">
                                {num}
                              </span>
                            ))}
                          </div> */}
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
              </>
            );
          })}
          {/* Navigasi */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handleBack}
              disabled={page === 0}
              className={`px-4 py-2 rounded-full ${
                page === 0
                  ? "bg-gray-300 text-gray-500"
                  : "bg-gray-700 text-white"
              }`}
            >
              Back
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
                disabled={!isAllAnswered}
                className={`px-4 py-2 rounded-full ${
                  !isAllAnswered
                    ? "bg-gray-300 text-gray-500"
                    : "bg-primary text-white"
                }`}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TesMinat;
