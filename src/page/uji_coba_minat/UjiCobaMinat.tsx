import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function UjiCobaMinat() {
  const navigate = useNavigate();
  return (
    <div className="relative bg-secondary">
      <div className="container mx-auto max-w-6xl px-4 md:px-8  min-h-[85dvh] items-center flex flex-col justify-center ">
        <div className="flex gap-6 items-center justify-center">
          <img src="/icon1.png" alt="" />
          <h1 className="text-4xl md:text-7xl text-left font-bold">
            Uji Coba Minat
          </h1>
        </div>
        <p className="text-2xl md:text-3xl mt-4 text-black/60 text-center">
          Kenali minat belajarmu lewat tes sederhana dan akurat. Biar kamu nggak
          salah pilih jurusan!
        </p>

        <Button
          className="bg-primary text-2xl h-16 px-8 rounded-full mt-20 w-full lg:w-auto font-medium mx-auto flex justify-center"
          onClick={() => navigate("/uji-coba-minat/tes")}
        >
          Uji Coba Minat Sekarang
        </Button>
      </div>
    </div>
  );
}

export default UjiCobaMinat;
