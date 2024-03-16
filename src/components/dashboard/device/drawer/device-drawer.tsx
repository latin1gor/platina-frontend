import { Search } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer.tsx";
import DrawerTable from "@/components/dashboard/device/drawer/drawer-table.tsx";
import { useAppDispatch } from "@/hooks/redux";
import { setOpen } from "@/store/ui/drawerSlice.ts";
import { useNavigate } from "react-router-dom";
import Image from "@/components/ui/image.tsx";

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
];

type DeviceDrawerProps = {
  id: number;
};
export function DeviceDrawer({ id }: DeviceDrawerProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <Drawer onOpenChange={(e) => dispatch(setOpen(e))}>
      <DrawerTrigger asChild>
        <Button
          variant="secondary"
          className="bg-stone-900 pr-5 hover:bg-black text-xs h-6"
        >
          <Search className="mr-1" size={18} />
          Quick
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className={"flex flex-col"}>
          <div className={"flex justify-around items-center w-full h-[26rem]"}>
            <Image className={"w-96 h-96 m-20"} src={device.img} />
            <div className={"flex flex-col w-full"}>
              <div
                className={
                  "mb-10 w-full overflow-x-scroll overflow-y-auto h-72"
                }
              >
                <DrawerTable description={description} />
              </div>
              <div className={" space-x-3"}>
                <Button
                  className={"w-56"}
                  onClick={() => navigate(`/device/${id}`)}
                >
                  See more
                </Button>

                <DrawerClose asChild>
                  <Button
                    className={"w-56"}
                    variant="outline"
                    onClick={() => dispatch(setOpen(false))}
                  >
                    Cancel
                  </Button>
                </DrawerClose>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
