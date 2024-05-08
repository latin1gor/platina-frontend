import { useAppDispatch, useAppSelector } from "@/hooks/useStore.tsx";
import { setSelectedType } from "@/store/features/types/typeSlice.ts";
import { clsx } from "clsx";
import SkeletonPlaceholder from "@/components/ui/custom/skeleton-placeholder.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { useResponsive } from "@/hooks/useResponsive.tsx";
import { useEffect } from "react";
import { fetchTypes } from "@/store/services/typeService.ts";
import LoadingDelayProvider from "@/providers/loading-delay-provider.tsx";
import { cn } from "@/lib/utils.ts";

const containerClassname: string =
  "w-full md:w-64 flex flex-col rounded-2xl md:p-3 space-y-3 items-center md:items-start h-fit";

const Typebar = () => {
  const { types, selectedType, loading } = useAppSelector(
    (state) => state.type,
  );
  const dispatch = useAppDispatch();
  const { isSmallScreen } = useResponsive();

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const renderSelect = () => (
    <Select
      onValueChange={(e) => dispatch(setSelectedType({ id: Number(e) }))}
      defaultValue={selectedType ? String(selectedType.id) : undefined}
    >
      <SelectTrigger className="md:w-full w-[90%]">
        <SelectValue placeholder="Choose type" />
      </SelectTrigger>
      <SelectContent>
        {types?.rows?.map((type) => (
          <SelectItem value={String(type.id)} key={type.id}>
            {type.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  const renderTypebar = () =>
    types?.rows?.map((type) => (
      <div
        className={clsx(
          "border text-sm border-stone-800 w-full ml-5 md:ml-0 h-8 flex items-center justify-start pl-2 rounded-md cursor-pointer transition duration-300 ease-in-out",
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
    ));

  if (loading) {
    return (
      <div className={containerClassname}>
        <LoadingDelayProvider>
          <SkeletonPlaceholder />
        </LoadingDelayProvider>
      </div>
    );
  }

  return (
    <>
      {types?.rows?.length && (
        <div className={cn(containerClassname, "md:border-2")}>
          {isSmallScreen ? renderSelect() : renderTypebar()}
        </div>
      )}
    </>
  );
};

export default Typebar;
