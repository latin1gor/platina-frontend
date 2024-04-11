import { zoomies } from "ldrs";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils.ts";
import { Skeleton } from "@/components/ui/skeleton.tsx";

interface ImageProps {
  src: string;
  className: string;
  containerClassName?: string;
  isSkeletonFull?: boolean;
}
zoomies.register();

const Image = ({
  src,
  className,
  containerClassName,
  isSkeletonFull,
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);
  return (
    <div className={cn("flex items-center justify-center", containerClassName)}>
      {!isLoaded ? (
        <div className="flex flex-col space-y-6 w-full h-full">
          {isSkeletonFull ? (
            <Skeleton className="h-full w-full rounded-t-lg rounded-b-none" />
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
