import { Card, CardContent } from "./ui/card";
import type { SekolahResponseModel } from "@/api/apiSekolah";

function CardSekolah({
  item,
  sekolah,
}: {
  item: SekolahResponseModel;
  sekolah: string;
}) {
  return (
    <div>
      <div className="bg-secondary p-2 border-[0.2px] border-[#f1f2f5]">
        <p className="font-semibold">{item.kabupaten}</p>
      </div>
      <div className="mt-2">
        {sekolah == "sma"
          ? item?.sma?.map((sma) => (
              <Card className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 py-2 my-2">
                <CardContent className="flex flex-col h-full">
                  <p className=" my-2">{sma.nama}</p>
                </CardContent>
              </Card>
            ))
          : item?.smk?.map((smk) => (
              <Card className="bg-[#F9FAFC] flex flex-col h-full shadow-none border-[0.3px] w-full z-20 py-2 my-2">
                <CardContent className="flex flex-col h-full">
                  <p className=" my-2">{smk.nama}</p>
                </CardContent>
              </Card>
            ))}
        {}
      </div>
    </div>
  );
}

export default CardSekolah;
