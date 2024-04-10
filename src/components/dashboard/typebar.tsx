import { useAppDispatch, useAppSelector } from "@/hooks/useStore.tsx";
import { setSelectedType } from "@/store/features/types/typeSlice.ts";
import { clsx } from "clsx";
import { useEffect } from "react";
import { fetchTypes } from "@/store/services/typeService.ts";
import SkeletonPlaceholder from "@/components/ui/custom/skeleton-placeholder.tsx";

const Typebar = () => {
  const { types, selectedType } = useAppSelector((state) => state.type);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchTypes());
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch]);
  return (
    <div className={"w-64 flex flex-col border-2 rounded-2xl p-3 space-y-3 "}>
      {types ? (
        types.map((type) => (
          <div
            className={clsx(
              "border text-sm border-stone-800 h-8 flex items-center justify-start pl-2 rounded-md cursor-pointer transition duration-300 ease-in-out",
              {
                "bg-purple-800 transition duration-300 ease-in-out":
                  selectedType?.id === type.id,
              },
            )}
            key={type.id}
            onClick={() => dispatch(setSelectedType({ id: type.id }))}
          >
            {type.name}
          </div>
        ))
      ) : (
        <SkeletonPlaceholder type={true} />
      )}
    </div>
  );
};

export default Typebar;
