import { Button } from "@/components/ui/button.tsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import DeviceRating from "@/components/dashboard/device/device-rating.tsx";
import { FaApple } from "react-icons/fa";
import Image from "@/components/ui/custom/image.tsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "@/store/services/deviceService.ts";
import { Device } from "@/types/device.ts";

const DevicePage = () => {
  const [device, setDevice] = useState<Device | null>(null);
  const { id } = useParams();
  console.log(device);
  useEffect(() => {
    const getDevice = async () => {
      const response = await fetchOneDevice(id);
      return response.data;
    };

    getDevice().then((data) => setDevice(data));
  }, []);
  console.log(device);
  return (
    <>
      {device && (
        <div
          className={
            "mx-24 mt-28 mb-20  px-10 border-2 border-stone-800 flex flex-col"
          }
        >
          <div className={"flex w-full justify-between"}>
            <Image
              className={"w-[500px] h-[500px]"}
              containerClassName={"w-[500px] h-[500px] m-10 ml-0  w-[39%]"}
              src={import.meta.env.VITE_API_URL + "/" + device.img}
            />
            <div className={"flex flex-col justify-around w-[55%]"}>
              <div className={"flex flex-col space-y-3"}>
                <h1 className={"text-4xl font-bold"}>{device.name}</h1>
                <div className={"flex"}>
                  <DeviceRating />
                </div>
                <h2 className={"text-4xl font-bold"}>{device.price + "$"} </h2>
              </div>

              <div className={"flex flex-col w-[40%]"}>
                <div className={"flex space-x-3"}>
                  <div className={"flex flex-grow space-x-3"}>
                    <Button
                      className={
                        "hover:shadow-lg hover:shadow-indigo-500/40 transition duration-300 ease-in-out flex-grow"
                      }
                    >
                      Buy now
                    </Button>
                    <Button variant={"secondary"} className={"flex-grow"}>
                      Add to bag
                    </Button>
                  </div>
                </div>
                <div className={"flex mt-2"}>
                  <Button
                    className={
                      "bg-gray-100 text-black hover:bg-gray-200 transition duration-300 flex items-center justify-center flex-grow"
                    }
                  >
                    <FaApple className={"text-xl"} /> <span>Pay</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Table className={"mb-10"}>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Description</TableHead>
                <TableHead className={"pl-60"}></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {device.info.map((property) => (
                <TableRow key={property.number}>
                  <TableCell className="font-medium">
                    {property.title}
                  </TableCell>
                  <TableCell className={"pl-60"}>
                    {property.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};

export default DevicePage;
