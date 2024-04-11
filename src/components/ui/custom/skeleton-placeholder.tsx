import { Skeleton } from "@/components/ui/skeleton.tsx";

interface SkeletonPlaceholderProps {
  type?: boolean;
  brand?: boolean;
}
const SkeletonPlaceholder = ({ type, brand }: SkeletonPlaceholderProps) => {
  console.log(type, brand);
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
    <div
      className={
        "border min-w-28 pr-1 text-sm border-stone-800 h-8 flex items-center justify-start pl-2 rounded-md cursor-pointer transition duration-300 ease-in-out"
      }
      key={i}
    >
      <Skeleton className={"w-[95%] h-[20px] rounded-md "} />
    </div>
  ));
};

export default SkeletonPlaceholder;
