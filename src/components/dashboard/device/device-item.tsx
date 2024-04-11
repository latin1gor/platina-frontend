import { Device } from "@/types/device.ts";
import { FC } from "react";
import { Separator } from "@/components/ui/separator.tsx";
import { useNavigate } from "react-router-dom";
import { DeviceDrawer } from "@/components/dashboard/device/drawer/device-drawer.tsx";
import Image from "@/components/ui/custom/image.tsx";

const DeviceItem: FC<{ device: Device }> = ({ device }) => {
  const navigate = useNavigate();

  return (
    <div
      className={
        "flex flex-col items-center justify-between h-72 w-full text-center border-2 border-stone-800 rounded-xl cursor-pointer bg-stone-900 hover:bg-stone-800 transition duration-300 ease-in-out"
      }
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
          className={"h-44 w-full rounded-t-lg rounded-b-none"}
          containerClassName={"w-full  rounded-b-none h-44"}
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
