import { Skeleton } from "@/components/ui/skeleton.tsx";
import { useEffect, useState } from "react";
import { useResponsive } from "@/hooks/useResponsive.tsx";

const SkeletonPlaceholder = () => {
  const [mock, setMock] = useState<number[] | null>([1, 2, 3, 4, 5, 6]);
  const { isSmallScreen } = useResponsive();

  useEffect(() => {
    if (isSmallScreen) {
      setMock([]);
      return;
    }
  }, [isSmallScreen]);

  if (mock?.length) {
    return mock?.map((i) => (
      <div
        className={
          "border min-w-28 w-full pr-1 text-sm border-stone-800 h-8 flex items-center justify-start pl-2 rounded-md cursor-pointer transition duration-300 ease-in-out"
        }
        key={i}
      >
        <Skeleton className={"w-[95%] h-[20px] rounded-md"} />
      </div>
    ));
  }

  return null;
};

export default SkeletonPlaceholder;
