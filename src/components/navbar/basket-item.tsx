import { useEffect, useState } from "react";
import { Device } from "@/types/device.ts";
import { fetchOneDevice } from "@/store/services/deviceService.ts";
import Image from "@/components/ui/custom/image.tsx";

interface IBasketItemProps {
  id: string;
}
const BasketItem = ({ id }: IBasketItemProps) => {
  const [device, setDevice] = useState<Device | null>(null);

  useEffect(() => {
    const getDevice = async () => {
      const response = await fetchOneDevice(id);
      return response.data;
    };
    getDevice().then((data) => {
      setDevice(data);
    });
  }, []);

  return (
    <div>
      {device && (
        <div className={"flex justify-between items-start p-4 space-y-0"}>
          <div className={"flex space-x-3 "}>
            <Image
              className={"w-[80px] h-[80px] rounded-md"}
              containerClassName={"min-w-[80px] min-h-[80px] ml-0 rounded-md"}
              isSkeletonFull={true}
              isSkeletonBordered={true}
              src={import.meta.env.VITE_API_URL + "/" + device.img}
            />
            <div className={"font-semibold"}>{device.name}</div>
          </div>
          <div
            className={"flex justify-end text-gray-200 text-sm pt-1 min-w-20"}
          >
            {device.price + " $"}{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketItem;
