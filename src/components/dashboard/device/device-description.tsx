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
import Image from "@/components/ui/image.tsx";

const DeviceDescription = () => {
  const device = {
    id: 2,
    name: "Apple iPhone 15 Pro 256GB (Black Titanium)",
    price: 990,
    rating: 5,
    img: "https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp",
  };
  const description = [
    { id: 1, title: "RAM", description: "8gb" },
    { id: 2, title: "Camera", description: "12MP" },
    { id: 3, title: "Processor", description: "M1 Pro" },
    { id: 4, title: "Units amount", description: "6" },
    { id: 5, title: "Battery", description: "5000 m/Ah" },
    { id: 3, title: "Processor", description: "M1 Pro" },
    { id: 4, title: "Units amount", description: "6" },
    { id: 5, title: "Battery", description: "5000 m/Ah" },
  ];

  return (
    <div
      className={
        "mx-24 mt-28 mb-20  px-10 border-2 border-stone-800 flex flex-col"
      }
    >
      <div className={"flex"}>
        <Image className={"w-[600px] h-[600px] m-10 ml-0"} src={device.img} />
        <div className={"flex flex-col justify-around"}>
          <div className={"flex flex-col space-y-3"}>
            <h1 className={"text-4xl font-bold"}>{device.name}</h1>
            <div className={"flex"}>
              <DeviceRating />
            </div>
            <h2 className={"text-4xl font-bold"}>{device.price + "$"} </h2>
          </div>

          <div className={"flex flex-col w-[45%]"}>
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
          {description.map((property) => (
            <TableRow key={property.id}>
              <TableCell className="font-medium">{property.title}</TableCell>
              <TableCell className={"pl-60"}>{property.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DeviceDescription;
