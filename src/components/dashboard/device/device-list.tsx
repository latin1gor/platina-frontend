import { useAppDispatch, useAppSelector } from "@/hooks/useStore.tsx";
import DeviceItem from "@/components/dashboard/device/device-item.tsx";
import { useEffect } from "react";
import { fetchDevices } from "@/store/services/deviceService.ts";

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

  useEffect(() => {}, []);
  return (
    <div
      className={
        "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-4 ml-0 min-h-[70vh]"
      }
    >
      {devices &&
        devices.map((device) => <DeviceItem key={device.id} device={device} />)}
    </div>
  );
};

export default DeviceList;
