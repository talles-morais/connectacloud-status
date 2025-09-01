import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function ServiceCardSkeleton() {
  return (
    <div className="border border-border drop-shadow-sm rounded-lg col-span-1 px-5 py-4 max-w-[300px] md:max-w-full hover:scale-105 transition-all">
      <div className="flex flex-col gap-2 w-full">
        <Skeleton className="h-5 w-1/2" />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-10" />
            <Skeleton className="h-5 w-20" />
          </div>

          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-10" />
            <Skeleton className="h-5 w-20" />
          </div>
        </div>

        {/* last checked */}
        <Skeleton className="self-end h-5 w-2/3" />
      </div>
    </div>
  );
}

export default React.memo(ServiceCardSkeleton);
