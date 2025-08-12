import LazyYoutube from "@/components/LazyYoutube";
import { Input } from "@/components/ui/input";
import { CircleArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const smaList = {
  subject: "Pendidikan Agama dan Budi Pekerti",
  videos: [
    {
      title: "Prasangka Baik Husnuzzan",
      url: "https://www.youtube.com/embed/GNoSc20cPd4",
    },
    {
      title: "Menghormati dan Menyayangi Orang tua dan Guru",
      url: "https://www.youtube.com/embed/sNe9n_UqIes",
    },
  ],
};

const smkList = {
  subject: "Teknik Komputer dan Jaringan",
  videos: [
    {
      title: "Merancang Pengalamatan Jaringan",
      url: "https://www.youtube.com/embed/QZPYoozLzvY",
    },
    {
      title: "Menyiapkan Kabel Jaringan",
      url: "https://www.youtube.com/embed/BzQCu8X5CA4",
    },
    {
      title: "Merakit Komputer",
      url: "https://www.youtube.com/embed/MgxRiLe_7kY",
    },
    {
      title: "Mengkonfigurasi VLAN",
      url: "https://www.youtube.com/embed/xMvHQD1Bxpk",
    },
    {
      title: "Mengkonfigurasi Switch Pada Jaringan",
      url: "https://www.youtube.com/embed/STzP7NLbM9s",
    },
    {
      title: "Mengkonfigurasi Sistem Keamanan Jaringan",
      url: "https://www.youtube.com/embed/Yfa28sTxmM0",
    },
    {
      title: "Mengkomfigurasi Routing Statis",
      url: "https://www.youtube.com/embed/OKXGIL5g9y8",
    },
    {
      title: "Mengkonfigurasi Roouting Dinamis",
      url: "https://www.youtube.com/embed/Yd8shJ3l36c",
    },
    {
      title: "Mengkonvigurasi DNS Server",
      url: "https://www.youtube.com/embed/ZuQ7dPppqGI",
    },
    {
      title: "Mengkonfigurasi DHCP Server",
      url: "https://www.youtube.com/embed/nOgEFQKKiMU",
    },
    {
      title: "Menginstalasi Sistem Operasi",
      url: "https://www.youtube.com/embed/xB7OF_DuEhI",
    },
    {
      title: "Menginstalasi Jaringan Local (LAN)",
      url: "https://www.youtube.com/embed/83l7zEQ0IL4",
    },
    {
      title: "Menginstalasi Software Aplikasi",
      url: "https://www.youtube.com/embed/5wXD-51u7bc",
    },
    {
      title: "Mendesain Topologi Jaringan",
      url: "https://www.youtube.com/embed/OvLT6yv_OOM",
    },
    {
      title: "Membangun Jaringan Nirkabel",
      url: "https://www.youtube.com/embed/pGeNwBjqaF8",
    },
    {
      title: "Memasang Kabel Jaringan",
      url: "https://www.youtube.com/embed/d4o5kXhpYPQ",
    },
    {
      title: "Melakukan Setting BIOS",
      url: "https://www.youtube.com/embed/e3NXG4WTp1w",
    },
  ],
};

function SubJurusanList() {
  const { sekolah } = useParams();
  const navigate = useNavigate();

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
            {sekolah == "sma"
              ? "Pendidikan Agama dan Budi Pekerti"
              : "Teknik Komputer dan Jaringan"}
          </p>
        </div>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Input type="email" id="email" placeholder="Cari Berdasarkan Judul" />
        </div>
      </div>
      {sekolah == "sma" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {smaList?.videos?.map((jurusan) => (
            <div className="mb-4">
              <div className=" relative w-full pb-[56.25%] h-0">
                <LazyYoutube url={jurusan.url} title={jurusan.title} />
              </div>
              <p className="text-center mt-2 text-lg font-semibold">
                {jurusan.title}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {smkList?.videos?.map((jurusan) => (
            <div className="mb-4">
              <div className=" relative w-full pb-[56.25%] h-0">
                <LazyYoutube url={jurusan.url} title={jurusan.title} />
              </div>
              <p className="text-center mt-2 text-lg font-semibold">
                {jurusan.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SubJurusanList;
