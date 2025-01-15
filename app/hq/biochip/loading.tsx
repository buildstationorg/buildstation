import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex flex-col gap-2 py-6 pl-4 h-[900px]">
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[20px] h-6" />
        <Skeleton className="w-[100px] h-6" />
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <Skeleton className="w-[400px] h-[400px] rounded-lg" />
        <Skeleton className="w-[400px] h-[400px] rounded-lg" />
      </div>
      <Skeleton className="w-[20px] h-6" />
      <Skeleton className="w-[400px] h-[200px]" />
    </div>
  );
}