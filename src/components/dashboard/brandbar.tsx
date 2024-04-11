import { useAppDispatch, useAppSelector } from "@/hooks/useStore.tsx";
import { clsx } from "clsx";
import { setSelectedBrand } from "@/store/features/brands/brandSlice.ts";
import { useEffect } from "react";
import { fetchBrands } from "@/store/services/brandService.ts";
import SkeletonPlaceholder from "@/components/ui/custom/skeleton-placeholder.tsx";

const Brandbar = () => {
  const { brands, selectedBrand } = useAppSelector((state) => state.brand);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchBrands());
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch]);
  console.log(brands, "brands");
  return (
    <div className={"flex flex-wrap gap-3 mt-3.5 min-h-8"}>
      {brands ? (
        brands.map((brand) => (
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
        ))
      ) : (
        <SkeletonPlaceholder brand={true} />
      )}
    </div>
  );
};
export default Brandbar;
