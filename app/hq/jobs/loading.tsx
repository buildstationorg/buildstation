import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-2 py-6 pl-4 h-[768px]">
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[100px] h-8" />
        <Skeleton className="w-[150px] h-4" />
      </div>
      <Skeleton className="w-[100px] h-8 mt-8" />
    </div>
  );
}