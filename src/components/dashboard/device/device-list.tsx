import { useAppSelector } from "@/hooks/redux.tsx";
import DeviceItem from "@/components/dashboard/device/device-item.tsx";

const DeviceList = () => {
  const { devices } = useAppSelector((state) => state.device);

  return (
    <div
      className={
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 m-4 ml-0"
      }
    >
      {devices &&
        devices.map((device) => <DeviceItem key={device.id} device={device} />)}
    </div>
  );
};

export default DeviceList;
