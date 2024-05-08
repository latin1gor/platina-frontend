import { useAppDispatch, useAppSelector } from "@/hooks/useStore.tsx";
import { clsx } from "clsx";
import { setSelectedBrand } from "@/store/features/brands/brandSlice.ts";
import { useEffect } from "react";
import { fetchBrands } from "@/store/services/brandService.ts";
import SkeletonPlaceholder from "@/components/ui/custom/skeleton-placeholder.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { useResponsive } from "@/hooks/useResponsive.tsx";
import LoadingDelayProvider from "@/providers/loading-delay-provider.tsx";

const Brandbar = () => {
  const { brands, selectedBrand } = useAppSelector((state) => state.brand);
  const { isSmallScreen } = useResponsive();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);
  const renderSelect = () => (
    <Select
      onValueChange={(e) => dispatch(setSelectedBrand({ id: Number(e) }))}
      defaultValue={selectedBrand ? String(selectedBrand.id) : undefined}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Choose brand" />
      </SelectTrigger>
      <SelectContent>
        {brands?.rows?.map((brand) => (
          <SelectItem value={String(brand.id)} key={brand.id}>
            {brand.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  const renderBrandbar = () =>
    brands?.rows?.map((brand) => (
      <div
        className={clsx(
          "px-2.5 border border-stone-800 h-8 text-sm flex items-center justify-center rounded-md cursor-pointer transition duration-300 ease-in-out",
          {
            "bg-purple-800 transition duration-300 ease-in-out":
              selectedBrand?.id === brand.id,
          },
        )}
        key={brand.id}
        onClick={() => dispatch(setSelectedBrand({ id: brand.id }))}
      >
        {brand.name}
      </div>
    ));

  return (
    <div className={"flex flex-wrap gap-3 mt-3.5 min-h-8"}>
      {brands?.rows ? (
        isSmallScreen ? (
          renderSelect()
        ) : (
          renderBrandbar()
        )
      ) : (
        <LoadingDelayProvider>
          <SkeletonPlaceholder />
        </LoadingDelayProvider>
      )}
    </div>
  );
};
export default Brandbar;
