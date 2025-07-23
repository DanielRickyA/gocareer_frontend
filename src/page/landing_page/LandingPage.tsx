// import photo1 from "../../assets/images/photo1.jpg";
import { Card, CardContent } from "@/components/ui/card";
import photo1 from "../../assets/images/Foto2.png";
import FiturWebsite from "./FiturWebsite";
import "./LandingPage.css";
import { Button } from "@/components/ui/button";
function LandingPage() {
  return (
    <>
      <div className="relative " id="heroSectionId">
        <Card className="bg-secondary p-0 px-10 pt-2 z-10">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-start gap-10 h-full">
              <div className="text-black w-full md:w-[80%] pt-8">
                <h1 className="text-4xl font-semibold">
                  Temukan{" "}
                  <span className="text-primary">
                    Arah Pendidikan dan Jurusan Terbaikmu
                  </span>{" "}
                  di sini!
                </h1>
                <p className="text-base text-justify mt-4">
                  Go-Career membantumu memahami potensi diri, menemukan jurusan
                  yang sesuai, dan mendapat dukungan terbaik dari orang tua &
                  sekolah. Semua dalam satu platform.
                </p>
                <Button className="bg-primary rounded-full mt-4">
                  Tes Minat Sekarang
                </Button>
              </div>
              <div className="h-full">
                <img src={photo1} alt="photo1" className="" />
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
