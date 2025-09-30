import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative mx-auto bg-secondary pt-16 min-h-[85dvh] h-full">
        <Card className="p-0 px-6 md:px-10 mx-auto bg-secondary z-10 shadow-none border-0 h-full">
          <CardContent className="p-0 h-full">
            <div className="flex flex-col items-center justify-between gap-10 h-full">
              <div className="text-black w-full pt-8 pb-8 text-left md:text-center lg:text-left max-w-full md:max-w-2xl lg:max-w-7xl mx-auto ">
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
                <div className="grid grid-cols-1 md:flex md:flex-wrap justify-center lg:justify-start gap-2 mt-4">
                  <Button
                    className="bg-primary rounded-full lg:w-auto font-medium "
                    onClick={() => navigate("/asesmen-minat")}
                  >
                    Asesmen Minat
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
                    Referensi Karir
                  </Button>
                  <Button
                    className="bg-primary rounded-full lg:w-auto font-medium block"
                    onClick={() => navigate("/rencana-karir")}
                  >
                    Rencana Karir Hebatmu
                  </Button>
                </div>
              </div>
              <div className="w-full order-last lg:w-[65%]">
                <img src="/Foto3.png" alt="photo1" className="h-full w-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* <FiturWebsite /> */}
    </>
  );
}

export default LandingPage;
