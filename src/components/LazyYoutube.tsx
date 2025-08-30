import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
interface LazyYoutubeProps {
  url: string;
  title: string;
}

function LazyYoutube({ url, title }: LazyYoutubeProps) {
  const [open, setOpen] = useState(false);

  const getYoutubeId = (url?: string | null) => {
    if (!url) return null; // <-- amanin kalau null/undefined
    const regExp =
      /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  };

  const videoId = getYoutubeId(url);

  if (!videoId) {
    // thumbnail custom (video tidak tersedia)
    return (
      <div
        className="relative w-full pb-[56.25%] h-0 bg-gray-300 rounded-lg flex items-center justify-center cursor-not-allowed"
        title={title}
      >
        <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
          <span className="text-black text-base mt-2 font-semibold">Video tidak tersedia</span>
        </div>
      </div>
    );
  }

  const finalUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="relative w-full pb-[56.25%] h-0 bg-black cursor-pointer rounded-lg"
          title={title}
        >
          <img
            src={thumbnail}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#FF0033] text-white text-2xl px-6 py-2 rounded-xl shadow-lg">
              ▶
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-sm md:max-w-2xl lg:max-w-3xl w-full max-h-[90vh] p-0 overflow-hidden bg-transparent border-none">
        <div className="w-full aspect-video">
          {open && (
            <iframe
              className="w-full h-full"
              src={finalUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LazyYoutube;
