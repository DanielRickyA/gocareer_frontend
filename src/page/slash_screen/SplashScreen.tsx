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
          navigate("/home"); // redirect ke /home
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [navigate]);
  return (
    <div className="min-h-screen h-full w-full bg-secondary flex flex-row items-center justify-center">
      <div className="w-[400px]">
        <p className="text-5xl font-semibold text-center">
          Go <span className="text-primary">Career</span>
        </p>
        <Progress value={progress} className="mt-5 w-full" />
      </div>
    </div>
  );
}

export default SplashScreen;
