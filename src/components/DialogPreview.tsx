import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Label } from "./ui/label";

interface DialogPreviewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  name: string;
  jurusan: string;
  prodi: string;
  karir: string;
  sekolah: string;
}

function DialogPreview({
  open,
  onOpenChange,
  name,
  jurusan,
  prodi,
  karir,
  sekolah,
}: DialogPreviewProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-5xl !w-full ">
        <DialogHeader>
          <DialogTitle>Preview Sertifikat</DialogTitle>
        </DialogHeader>
        <div className="bg-secondary w-full p-4 md:p-8 rounded-lg py-12">
          <div className="flex gap-2 md:gap-6 items-center justify-center w-full">
            <img
              src="/success.png"
              alt=""
              className="w-10 h-10 md:w-16 md:h-16"
            />
            <h1 className="text-xl md:text-5xl text-left font-bold print:text-4xl">
              Rencana Karir Hebatku
            </h1>
          </div>
          <p className="text-center font-medium text-base md:text-xl mt-2">
            Halloo semua, namaku <span className="font-bold">{name}</span>
          </p>
          <p className="text-center font-medium text-base md:text-xl">
            dan inilah rencana karir hebatkuu
          </p>

          <div className="grid  md:mt-12 mb-10 gap-8 md:ms-10 grid-cols-2">
            <div className="flex justify-start gap-2 items-end">
              <img
                src="/school.png"
                alt="logo"
                className="w-10 h-10 print:w-12 print:h-12 object-cover"
              />
              <div className="mt-8 grid w-full max-w-sm items-center gap-3 print:gap-1 ">
                <Label
                  htmlFor="sekolah"
                  className="font-medium text-xs md:text-base"
                >
                  Rencana Sekolah Setelah Lulus SMP
                </Label>

                <p className="text-sm md:text-xl font-semibold">{sekolah}</p>
              </div>
            </div>
            <div className="flex justify-start gap-2 items-end">
              <img
                src="/book-stack.png"
                alt="logo"
                className="w-10 h-10 print:w-12 print:h-12 object-cover"
              />
              <div className="mt-8 grid w-full max-w-sm items-center gap-3 print:gap-1 ">
                <Label
                  htmlFor="jurusan"
                  className="font-medium text-xs md:text-base"
                >
                  Rencana jurusan yang aku pilih
                </Label>

                <p className="text-sm md:text-xl font-semibold">{jurusan}</p>
              </div>
            </div>
            <div className="flex justify-start gap-2 items-end print:mt-8">
              <img
                src="/university.png"
                alt="logo"
                className="w-10 h-10 print:w-12 print:h-12 object-cover"
              />
              <div className="mt-8 grid w-full max-w-sm items-center gap-3 print:gap-1 ">
                <Label
                  htmlFor="prodi"
                  className="font-medium text-xs md:text-base"
                >
                  Rencana program studi jenjang perguruan tinggi
                </Label>

                <p className="text-sm md:text-xl font-semibold">{prodi}</p>
              </div>
            </div>
            <div className="flex justify-start gap-2 items-end print:mt-8">
              <img
                src="/businessman.png"
                alt="logo"
                className="w-10 h-10 print:w-12 print:h-12 object-cover"
              />
              <div className="mt-8 grid w-full max-w-sm items-center gap-3 print:gap-1  ">
                <Label
                  htmlFor="karir"
                  className="font-medium text-xs md:text-base"
                >
                  Rencana karir pekerjaan di masa depan
                </Label>

                <p className="text-sm md:text-xl font-semibold">{karir}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogPreview;
