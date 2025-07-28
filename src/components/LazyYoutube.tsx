import { useState } from "react";

interface LazyYoutubeProps {
  url: string;
  title: string;
}

function LazyYoutube({ url, title }: LazyYoutubeProps) {
  const [loaded, setLoaded] = useState(false);

  const videoId = url.split("/embed/")[1]?.split("?")[0];
  const baseParams = url.includes("?") ? "&" : "?";
  const finalUrl = loaded ? `${url}${baseParams}autoplay=1` : url;

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="relative w-full pb-[56.25%] h-0 bg-black">
      {loaded ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={finalUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          onClick={() => setLoaded(true)}
        >
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#FF0033] text-white text-2xl px-6 py-2 rounded-xl shadow-lg">
              ▶
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LazyYoutube;
