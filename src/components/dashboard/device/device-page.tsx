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
import { useAppDispatch, useAppSelector } from "@/hooks/useStore.tsx";
import { addProduct, setTotal } from "@/store/features/navbar/basketSlice.ts";

const DevicePage = () => {
  const [device, setDevice] = useState<Device | null>(null);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.basket);

  useEffect(() => {
    const getDevice = async () => {
      const response = await fetchOneDevice(id);
      return response.data;
    };
    getDevice().then((data) => setDevice(data));
  }, []);

  const addToBag = () => {
    dispatch(addProduct(id));
    dispatch(setTotal(Number(device?.price)));
  };

  return (
    <>
      {device && (
        <div
          className={
            "mx-2 xl:mx-24 mt-28 mb-20 px-5 lg:px-5 xl:px-10 lg:border-2 md:border-stone-800 flex flex-col overflow-x-hidden"
          }
        >
          <div className={"flex flex-col md:flex-row w-full justify-between"}>
            <Image
              className={"w-[90vw] h-96 md:w-[500px] md:h-[500px]"}
              containerClassName={
                " lg:w-[500px] lg:h-[500px] m-0 md:m-10  md:ml-0  lg:w-[39%]"
              }
              src={import.meta.env.VITE_API_URL + "/" + device.img}
            />
            <div className={"flex flex-col justify-around w-full md:w-[55%]"}>
              <div
                className={
                  "flex flex-col space-y-1 md:mb-0 mb-4 gap-5 md:gap-0"
                }
              >
                <h1 className={"text-4xl font-bold pt-5 md:pt-0"}>
                  {device.name}
                </h1>
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
                    {!products?.find((product) => product.id === id) ? (
                      <Button
                        variant={"secondary"}
                        className={"flex-grow"}
                        onClick={addToBag}
                      >
                        Add to bag
                      </Button>
                    ) : (
                      <Button
                        variant={"secondary"}
                        className={"flex-grow bg-green-400 px-7 min-w-[105px]"}
                        disabled
                        onClick={addToBag}
                      >
                        Added
                      </Button>
                    )}
                  </div>
                </div>
                <div className={"flex mt-2"}>
                  <Button
                    className={
                      "bg-gray-100 text-black min-w-[204px] hover:bg-gray-200 transition duration-300 flex items-center justify-center flex-grow"
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
                  <TableCell className={"sm:pl-0 md:pl-60 italic"}>
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
