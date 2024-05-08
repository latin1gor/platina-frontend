import { useAppDispatch, useAppSelector } from "@/hooks/useStore.tsx";
import DeviceItem from "@/components/dashboard/device/device-item.tsx";
import { useEffect } from "react";
import { fetchDevices } from "@/store/services/deviceService.ts";
import { setActivePage } from "@/store/features/devices/deviceSlice.ts";
import { HeartCrack } from "lucide-react";
import LoadingDelayProvider from "@/providers/loading-delay-provider.tsx";

const DeviceList = () => {
  const dispatch = useAppDispatch();
  const { devices, activePage, limit } = useAppSelector(
    (state) => state.device,
  );
  const selectedType = useAppSelector((state) => state.type.selectedType);
  const selectedBrand = useAppSelector((state) => state.brand.selectedBrand);

  useEffect(() => {
    dispatch(
      fetchDevices({
        brandId: null,
        typeId: null,
        limit,
        page: activePage,
      }),
    );
  }, []);

  useEffect(() => {
    dispatch(
      fetchDevices({
        brandId: selectedBrand?.id,
        typeId: selectedType?.id,
        limit,
        page: activePage,
      }),
    );
  }, [activePage, selectedType, selectedBrand]);

  useEffect(() => {
    dispatch(setActivePage(1));
  }, [selectedType, selectedBrand]);
  return (
    <>
      {devices?.rows?.length ? (
        <div
          className={
            "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4 md:m-4 ml-0 min-h-[70vh]"
          }
        >
          {devices?.rows?.map((device) => (
            <DeviceItem key={device.id} device={device} />
          ))}
        </div>
      ) : (
        <div
          className={
            "flex flex-col items-center justify-center w-full gap-4 min-h-[70vh]"
          }
        >
          <LoadingDelayProvider>
            <HeartCrack color={"red"} size={96} />
            <h2 className={"text-center text-2xl font-semibold text-gray-400"}>
              Sorry but there isn't products according to your parameters
            </h2>
          </LoadingDelayProvider>
        </div>
      )}
    </>
  );
};

export default DeviceList;
