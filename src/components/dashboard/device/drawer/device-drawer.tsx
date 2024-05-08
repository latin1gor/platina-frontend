import { Search } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer.tsx";
import DrawerTable from "@/components/dashboard/device/drawer/drawer-table.tsx";
import { useAppDispatch } from "@/hooks/useStore.tsx";
import { setDrawerOpen } from "@/store/ui/modalSlice.ts";
import { useNavigate } from "react-router-dom";
import Image from "@/components/ui/custom/image.tsx";
import { useEffect, useState } from "react";
import { Device } from "@/types/device.ts";
import { fetchOneDevice } from "@/store/services/deviceService.ts";

type DeviceDrawerProps = {
  id: string;
};
export function DeviceDrawer({ id }: DeviceDrawerProps) {
  const [device, setDevice] = useState<Device | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const getDevice = async () => {
      const response = await fetchOneDevice(id);
      return response.data;
    };

    getDevice().then((data) => setDevice(data));
  }, []);
  return (
    <>
      {device ? (
        <Drawer onOpenChange={(e) => dispatch(setDrawerOpen(e))}>
          <DrawerTrigger asChild>
            <Button
              variant="secondary"
              className="bg-stone-900 pr-5 hover:bg-purple-700 text-xs h-6"
            >
              <Search className="mr-1" size={18} />
              Quick
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className={"flex flex-col"}>
              <div
                className={"flex flex-col md:flex-row w-full justify-between"}
              >
                <Image
                  className={"w-[90vw] md:w-[350px] h-[350px]"}
                  containerClassName={
                    "h-[350px] mt-2 md:m-10 w-full md:w-[350px]"
                  }
                  src={import.meta.env.VITE_API_URL + "/" + device.img}
                />
                <div className={"flex flex-col w-full md:w-[80%]"}>
                  <div
                    className={
                      "mb-10 w-full overflow-x-scroll overflow-y-auto h-40 md:h-72"
                    }
                  >
                    <DrawerTable description={device.info} />
                  </div>
                  <div
                    className={
                      "md:space-x-3 gap-2 flex flex-col m-auto md:m-0 md:flex-row"
                    }
                  >
                    <Button
                      className={"w-[90vw] md:w-56"}
                      onClick={() => {
                        navigate(`/device/${id}`);
                        dispatch(setDrawerOpen(false));
                      }}
                    >
                      See more
                    </Button>

                    <DrawerClose asChild>
                      <Button
                        className={"w-[90vw] md:w-56 mb-4 md:mb-0"}
                        variant="outline"
                        onClick={() => dispatch(setDrawerOpen(false))}
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
      ) : (
        <Button
          variant="secondary"
          className="bg-stone-900 pr-5 hover:bg-purple-700 text-xs h-6"
        >
          <Search className="mr-1" size={18} />
          Quick
        </Button>
      )}
    </>
  );
}
