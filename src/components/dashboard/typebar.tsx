import { useAppDispatch, useAppSelector } from "@/hooks/redux.tsx";
import { setSelectedType } from "@/store/deviceSlice.ts";
import { clsx } from "clsx";

const Typebar = () => {
  const { types, selectedType } = useAppSelector((state) => state.device);
  const dispatch = useAppDispatch();
  console.log(selectedType);
  console.log(types);
  return (
    <div className={"w-64 flex flex-col border-2 rounded-2xl p-3 space-y-3 "}>
      {types &&
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
        ))}
    </div>
  );
};

export default Typebar;
