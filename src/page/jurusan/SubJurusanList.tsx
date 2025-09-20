import { getItemJurusan, type SubJurusanResponseModel } from "@/api/apiJurusan";
import LazyYoutube from "@/components/LazyYoutube";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { CircleArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import noData from "../../assets/Emptybox.json";
import { formatTitle } from "@/lib/utils";
function SubJurusanList() {
  const { sekolah, jurusan } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function parseJurusan(slug: string) {
    const parts = slug.split("-"); 
    const id = parts.pop(); 
    const nama = parts.join("-"); 
    return { nama, id: id ? Number(id) : null };
  }

  const parsedJurusan = jurusan ? parseJurusan(jurusan) : null;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["itemjurusan", parsedJurusan?.id],
    queryFn: () => getItemJurusan(parsedJurusan?.id as number),
    enabled: !!parsedJurusan?.id,
    retry: false,
  });

  const filteredItemJurusan = useMemo(() => {
    if (!data?.data) return [];
    return data.data.filter((j: SubJurusanResponseModel) =>
      j.nama.toLowerCase().includes(search.toLowerCase())
    );
  }, [data?.data, search]);

  if (isError) {
    const err = error as { message: string };
    return toast.error(err.message);
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 md:px-8 py-12 min-h-[84.1dvh]">
      <div
        className="flex justif-start items-center gap-2 cursor-pointer"
        onClick={() => navigate(`/jurusan/${sekolah}`)}
      >
        <CircleArrowLeft size={16} />
        <p>Kembali</p>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end mt-2 mb-4 gap-4">
        <div>
          <p className="font-semibold text-left text-3xl ">
            {formatTitle(parsedJurusan?.nama)}
          </p>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Input
            type="email"
            id="email"
            placeholder="Cari Berdasarkan Judul"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div
        className={`grid grid-cols-1 ${
          sekolah == "smk" || jurusan == "19"
            ? "md:grid-cols-3"
            : "md:grid-cols-2"
        } gap-6 mt-6`}
      >
        {isLoading ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3].map(() => (
            <div>
              <Skeleton className="h-[200px] w-full rounded-xl" />

              <Skeleton className="h-[20px] w-full rounded-xl mt-4" />
            </div>
          ))
        ) : filteredItemJurusan.length == 0 ? (
          <div
            className={`flex flex-col justify-center items-center w-full h-full mt-6 ${
              sekolah == "sma" || jurusan == "19" ? "col-span-2" : "col-span-3"
            }`}
          >
            <Lottie animationData={noData} className="mx-auto w-[40%]" />
            <p className="text-xl font-semibold  mt-4">Data Kosong</p>
          </div>
        ) : (
          filteredItemJurusan?.map((jurusan: SubJurusanResponseModel) => (
            <div className="mb-4">
              <div className=" relative w-full pb-[56.25%] h-0">
                <LazyYoutube url={jurusan.youtube} title={jurusan.nama} />
              </div>
              <p className="text-center mt-2 text-lg font-semibold">
                {jurusan.nama}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SubJurusanList;
