import { Skeleton } from "./ui/skeleton";

function SkeletonSekolah() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {[1, 2, 3, 4].map((col) => (
        <div key={col}>
          <div className="bg-secondary p-2 border-[0.2px] border-[#f1f2f5]">
            <div className="h-5 w-40 rounded-md" />
          </div>

          <div className="mt-3 space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-[60px] w-full rounded-xl" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonSekolah;
