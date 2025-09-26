import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function IntroRencanaKarir() {
  const navigate = useNavigate();
  return (
    <div className="relative bg-secondary">
      <div className="container mx-auto max-w-6xl px-4 md:px-8 min-h-[85dvh] items-center flex flex-col justify-center z-10 relative">
        <div className="flex gap-6 items-center justify-center ">
          <img src="/success.png" alt="" className="w-32 h-32" />
          <h1 className="text-3xl md:text-7xl text-left font-bold">
            Rencana Karir Hebatku
          </h1>
        </div>
        <p className="text-2xl md:text-3xl mt-4 text-black/60 text-center">
          Berikut adalah rencana pendidikan dan karirmu yang telah kamu susun.
          Gunakan ini sebagai panduan untuk melangkah ke masa depan dengan lebih
          terarah.
        </p>

        <Button
          className="bg-primary text-lg md:text-2xl h-12 px-6 md:h-16 md:px-8 rounded-full mt-20 w-auto font-medium mx-auto flex justify-center"
          onClick={() => navigate("/rencana-karir/rencana")}
        >
          Mengerjakan Rencana Karir
        </Button>
      </div>
      <div className="absolute top-[10%] right-0 h-[15%] w-[20%] md:w-[15%] z-0">
        <img src="/assets1.png" alt="" className="w-full" />
      </div>
      <div className="absolute bottom-[10%] md:bottom-[15%] lg:bottom-[40%] left-0 h-[15%] w-[25%] md:w-[15%] z-0">
        <img src="/assets2.png" alt="" className="w-full" />
      </div>
    </div>
  );
}

export default IntroRencanaKarir;
