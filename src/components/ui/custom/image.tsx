import { zoomies } from "ldrs";
import { cn } from "@/lib/utils.ts";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { useState } from "react";

interface ImageProps {
  src: string;
  className: string;
  containerClassName?: string;
  isSkeletonFull?: boolean;
  isSkeletonBordered?: boolean;
}
zoomies.register();

const Image = ({
  src,
  className,
  containerClassName,
  isSkeletonFull,
  isSkeletonBordered,
}: ImageProps) => {
  const [isLoaded] = useState<boolean>(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 300);
  // }, []);
  return (
    <div className={cn("flex items-center justify-center", containerClassName)}>
      {!isLoaded ? (
        <div className="flex flex-col w-full h-full space-y-6">
          {isSkeletonFull ? (
            <Skeleton
              className={cn(
                "h-full w-full rounded-b-none min-h-[80px] min-w-[80px]",
                isSkeletonBordered ? "rounded-md" : "rounded-t-lg",
              )}
            />
          ) : (
            <>
              <Skeleton className="h-full w-full rounded-2xl" />
              <div className="space-y-4">
                <Skeleton className="h-7 w-full" />
                <Skeleton className="h-7 w-[70%]" />
              </div>
            </>
          )}
        </div>
      ) : (
        <img
          src={src}
          alt={"device img"}
          className={cn("object-cover rounded-2xl", className)}
        />
      )}
    </div>
  );
};

export default Image;
