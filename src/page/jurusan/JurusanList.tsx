import { getJurusan, type JurusanResponseModel } from "@/api/apiJurusan";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleArrowLeft } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useMemo, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Lottie from "lottie-react";
import noData from "../../assets/Emptybox.json";
import { slugify } from "@/lib/utils";

function JurusanList() {
  const { sekolah } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // Query ke API
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["jurusan"],
    queryFn: getJurusan,
    retry: false,
  });

  const filteredJurusan = useMemo(() => {
    if (!data?.data) return [];
    return data.data.filter(
      (j: JurusanResponseModel) =>
        j.tipe_sekolah === sekolah &&
        j.nama.toLowerCase().includes(search.toLowerCase())
    );
  }, [data?.data, sekolah, search]);

  if (isError) {
    const err = error as { message: string };
    return toast.error(err.message);
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 min-h-[84.1dvh]">
      <div
        className="flex justif-start items-center gap-2 cursor-pointer"
        onClick={() => navigate("/jurusan")}
      >
        <CircleArrowLeft size={16} />
        <p>Kembali</p>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end mt-2 mb-4 gap-4">
        <div>
          <p className="font-semibold text-left text-3xl ">
            {sekolah == "sma" ? "SMA/MA" : "SMK"}
          </p>
          <p className="text-description ">
            {sekolah == "sma"
              ? "Berikut adalah mata pelajaran yang terdapat pada SMA/MA."
              : "Berikut jurusan-jurusan yang terdapat pada SMK."}
          </p>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="email" className="font-semibold">
            Cari {sekolah == "sma" ? "Mata Pelajaran" : "Jurusan"}
          </Label>
          <Input
            type="email"
            id="email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Cari Berdasarkan Nama ${
              sekolah == "sma" ? "Mata Pelajaran" : "Jurusan"
            }`}
          />
        </div>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13].map((index) => (
            <div key={index}>
              <Skeleton className="h-[60px] w-full rounded-xl" />
            </div>
          ))}
        </div>
      ) : (
        <>
          {filteredJurusan.length == 0 && (
            <div className="flex flex-col justify-center items-center w-full h-full mt-6">
              <Lottie animationData={noData} className="mx-auto w-[40%]" />
              <p className="text-xl font-semibold  mt-4">Data Kosong</p>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
            {filteredJurusan
              ?.filter((j) => j.tipe_sekolah == sekolah)
              .map((jurusan: JurusanResponseModel) => (
                <Link
                  to={`/jurusan/${sekolah}/${slugify(jurusan.nama)}-${
                    jurusan.id
                  }`}
                  key={jurusan.id}
                  className="h-full"
                >
                  <Card className="bg-[#F9FAFC] flex flex-col shadow-none border-[0.3px] z-20 py-4 px-0 h-full">
                    <CardContent className="px-4">
                      <p className="text-sm">{jurusan.nama}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default JurusanList;
