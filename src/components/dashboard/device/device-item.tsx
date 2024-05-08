import { Device } from "@/types/device.ts";
import { FC } from "react";
import { Separator } from "@/components/ui/separator.tsx";
import { useNavigate } from "react-router-dom";
import { DeviceDrawer } from "@/components/dashboard/device/drawer/device-drawer.tsx";
import Image from "@/components/ui/custom/image.tsx";
import { cn } from "@/lib/utils.ts";
import { useResponsive } from "@/hooks/useResponsive.tsx";

const DeviceItem: FC<{ device: Device }> = ({ device }) => {
  const navigate = useNavigate();
  const { isSmallScreen } = useResponsive();
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-between w-full text-center border-2 border-stone-800 rounded-xl cursor-pointer bg-stone-900 hover:bg-stone-800 transition duration-300 ease-in-out",
        isSmallScreen ? "h-[400px]" : "h-80",
      )}
    >
      <div
        className={
          "flex flex-col items-center text-center justify-between h-full w-full"
        }
        onClick={() => {
          navigate(`/device/${device.id}`);
        }}
      >
        <Image
          src={import.meta.env.VITE_API_URL + "/" + device.img}
          className={cn(
            "w-full rounded-t-lg rounded-b-none",
            isSmallScreen ? "h-64" : "h-56",
          )}
          containerClassName={cn(
            "w-full rounded-b-none",
            isSmallScreen ? "h-64" : "h-56",
          )}
          isSkeletonFull={true}
        />
        <h2 className={"font-bold w-full px-2 text-sm text-center pb-3"}>
          {device.name}
        </h2>
      </div>
      <div className={"w-full px-2 "}>
        <Separator />
        <div className={"flex items-center justify-between px-2"}>
          <DeviceDrawer id={String(device.id)} />
          <h3 className={"pb-1 font-bold"}>{device.price + "$"}</h3>
        </div>
      </div>
    </div>
  );
};

export default DeviceItem;
