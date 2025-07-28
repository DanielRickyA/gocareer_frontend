// import photo1 from "../../assets/images/photo1.jpg";
import { Card, CardContent } from "@/components/ui/card";
import FiturWebsite from "./FiturWebsite";
import "./LandingPage.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 py-4">
        <Card className="bg-secondary p-0 px-6 md:px-10 z-10 shadow-none border-0">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row items-start gap-10 h-full">
              <div className="text-black w-full lg:w-[80%] pt-8 pb-4">
                <h1 className="text-3xl md:text-4xl font-semibold ">
                  Temukan{" "}
                  <span className="text-primary">
                    Arah Pendidikan dan Jurusan Terbaikmu
                  </span>{" "}
                  di sini!
                </h1>
                <p className="text-sm md:text-base text-justify mt-4 text-description">
                  Go-Career membantumu memahami potensi diri, menemukan jurusan
                  yang sesuai, dan mendapat dukungan terbaik dari orang tua &
                  sekolah. Semua dalam satu platform.
                </p>
                <Button
                  className="bg-primary rounded-full mt-4 w-full md:w-auto  md:text-[16px] font-medium"
                  size={"lg"}
                  onClick={() => navigate("/tes-minat")}
                >
                  Tes Minat Sekarang
                </Button>
              </div>
              <div className="h-full">
                <img src="/Foto2.png" alt="photo1" className="" />
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
