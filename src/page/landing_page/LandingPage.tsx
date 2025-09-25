import { Card, CardContent } from "@/components/ui/card";
import FiturWebsite from "./FiturWebsite";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 md:px-8 py-4">
        <Card className="bg-secondary p-0 px-6 md:px-10 z-10 shadow-none border-0">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row items-end justify-between gap-10 h-full">
              <div className="text-black w-full lg:w-[75%] pt-8 pb-8 text-left md:text-center lg:text-left max-w-full md:max-w-2xl lg:max-w-full mx-auto ">
                <h1 className="text-3xl md:text-4xl font-semibold ">
                  Temukan{" "}
                  <span className="text-primary">
                    Arah Pendidikan dan Jurusan Terbaikmu
                  </span>{" "}
                  di sini!
                </h1>
                <p className="text-sm md:text-base mt-4 text-description text-justify md:text-center lg:text-justify">
                  Go-Career membantumu memahami potensi diri, menemukan jurusan
                  yang sesuai, dan mendapat dukungan terbaik dari orang tua &
                  sekolah. Semua dalam satu platform.
                </p>
                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 mt-4">
                  <Button
                    className="bg-primary rounded-full lg:w-auto font-medium "
                    onClick={() => navigate("/asesmen-minat")}
                  >
                    Asesmen Minat Sekarang
                  </Button>
                  <Button
                    className="bg-primary rounded-full lg:w-auto font-medium block"
                    onClick={() => navigate("/minat-bakat")}
                  >
                    Macam Minat
                  </Button>
                  <Button
                    className="bg-primary rounded-full lg:w-auto font-medium block"
                    onClick={() => navigate("/refrensi-karir")}
                  >
                    Refrensi Karir
                  </Button>
                  <Button
                    className="bg-primary rounded-full lg:w-auto font-medium block"
                    onClick={() => navigate("/rencana-karir")}
                  >
                    Rencana Karir harbatmu
                  </Button>
                </div>
              </div>
              <div className="min-h-full object-fill">
                <img src="/Foto3.png" alt="photo1" className="h-full w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <FiturWebsite />
    </>
  );
}

export default LandingPage;
