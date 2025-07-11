import { Button } from "@/components/ui/button";
import { ClipboardList } from "lucide-react";

const fiturList = [
  {
    title: "Tes Minat",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    buttonText: "Coba Tes",
    icon: ClipboardList,
  },
  {
    title: "Tes Bakat",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    buttonText: "Coba Tes",
    icon: ClipboardList,
  },
  {
    title: "Tes Kepribadian",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    buttonText: "Coba Tes",
    icon: ClipboardList,
  },
  {
    title: "Rekomendasi Karir",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    buttonText: "Lihat Karir",
    icon: ClipboardList,
  },
];

function FiturWebsite() {
  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-12">
        <h1 className="text-center text-4xl font-semibold">
          <span className="border-b-4 border-[#4298B4]">Fitur Go Career</span>
        </h1>
        <div className="flex flex-wrap justify-center w-full mt-10">
          {fiturList.map((fitur, index) => {
            const Icon = fitur.icon;
            return (
              <div
                key={index}
                className="flex flex-col w-full md:w-1/2 lg:w-1/4 items-center px-4 mb-8"
              >
                <Icon size={32} />
                <p className="text-2xl font-semibold my-2">{fitur.title}</p>
                <p className="text-justify">{fitur.description}</p>
                <Button className="w-full mt-2">{fitur.buttonText}</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FiturWebsite;
