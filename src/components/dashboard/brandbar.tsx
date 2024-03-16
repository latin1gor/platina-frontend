import { useAppDispatch, useAppSelector } from "@/hooks/redux.tsx";
import { clsx } from "clsx";
import { setSelectedBrand } from "@/store/deviceSlice.ts";

const Brandbar = () => {
  const { brands, selectedBrand } = useAppSelector((state) => state.device);
  const dispatch = useAppDispatch();
  return (
    <div className={"grid grid-cols-7 gap-3 mt-3.5"}>
      {brands &&
        brands.map((brand) => (
          <div
            className={clsx(
              "border border-stone-800 h-8 text-sm flex items-center justify-center rounded-md cursor-pointer transition duration-300 ease-in-out",
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
        ))}
    </div>
  );
};
export default Brandbar;
