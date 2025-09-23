import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const duration = 3000; // 3 detik
    const intervalTime = 100; // update setiap 100ms
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          // navigate("/home"); // redirect ke /home
          navigate("/asesmen-minat"); // redirect ke /home
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [navigate]);
  return (
    <div className="h-screen w-full  flex flex-row items-center justify-center relative">
      <div className="absolute top-[10%] right-0 h-[15%] w-[30%] md:w-[15%]">
        <img src="/assets1.png" alt="" className="w-full" />
      </div>
      <div className="absolute bottom-[25%] left-0 h-[15%] w-[30%] md:w-[15%]">
        <img src="/assets2.png" alt="" className="w-full" />
      </div>
      <div className="w-[400px]">
        <p className="text-5xl font-semibold text-center">
          Go <span className="text-primary">Career</span>
        </p>
        <div className="w-full px-8 md:px-0">
          <Progress value={progress} className="mt-5 w-full" />
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;
