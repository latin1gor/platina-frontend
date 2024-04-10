import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Card, CardTitle } from "@/components/ui/card.tsx";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore.tsx";
import { setDeviceOpen as setModalOpen } from "@/store/ui/modalSlice.ts";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { ChangeEvent, useEffect, useState } from "react";
import { DeviceDescription } from "@/types/device.ts";
import { fetchBrands } from "@/store/services/brandService.ts";
import { fetchTypes } from "@/store/services/typeService.ts";
import { createDevice } from "@/store/services/deviceService.ts";

const CreateDevice = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [file, setFile] = useState<Blob | string>("");
  const [brand, setBrand] = useState<{ id: number; name: string } | null>(null);
  const [type, setType] = useState<{ id: number; name: string } | null>(null);
  const [info, setInfo] = useState<DeviceDescription[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchTypes());
  }, []);

  const { brands } = useAppSelector((state) => state.brand);
  const { types } = useAppSelector((state) => state.type);
  const addPropertyField = () => {
    setInfo([...info, { number: Date.now(), title: "", description: "" }]);
  };

  const removeProperty = (id: any) => {
    setInfo(info.filter((field) => field.number !== id));
  };

  const handleSelectBrand = (value: string) => {
    const selectedBrand = brands?.find((brand) => brand.name === value);
    setBrand(selectedBrand || null);
  };
  const handleSelectType = (value: string) => {
    const selectedType = types?.find((brand) => brand.name === value);
    setType(selectedType || null);
  };
  const changeProperty = (key: string, value: string, number: number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i)),
    );
  };
  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", String(brand?.id));
    formData.append("typeId", String(type?.id));
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((res) => {
      if (res) {
        toast.success(`Device "${name}" has been created`, {
          description: "Sunday, December 03, 2023 at 9:00 AM",
        });
      } else {
        toast.error("Device hasn't been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
        });
      }
    });
  };
  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (!file) return;
    setFile(file[0]);
  };
  return (
    <Dialog onOpenChange={(e) => dispatch(setModalOpen(e))}>
      <DialogTrigger asChild>
        <Card className={"group opacity-80 hover:opacity-100"}>
          <CardTitle
            className={
              "flex justify-between items-center text-2xl pl-5 p-2 cursor-pointer"
            }
          >
            New Device
            <IoMdAddCircleOutline
              className={
                "transition-transform duration-300 transform group-hover:rotate-180"
              }
            />
          </CardTitle>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]  overflow-y-scroll max-h-[95%]">
        <DialogHeader>
          <DialogTitle>Create new device</DialogTitle>
          <DialogDescription>
            Add new device name to your store here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-5">
          {types?.length ? (
            <Select onValueChange={(e) => handleSelectType(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Types</SelectLabel>
                  {types.map((type) => (
                    <SelectItem value={type.name}>{type.name}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <div className={"text-sm text-red-500"}>
              First add at least 1 type
            </div>
          )}
          {brands?.length ? (
            <Select onValueChange={(e) => handleSelectBrand(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Brands</SelectLabel>
                  {brands.map((brand) => (
                    <SelectItem value={brand.name}>{brand.name}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <div className={"text-sm text-red-500"}>
              First add at least 1 brand
            </div>
          )}
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Enter device name"}
          />
          <Input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder={"Enter device price"}
            type={"number"}
          />

          <Input type={"file"} onChange={selectFile} />
          <Button
            variant={"ghost"}
            className={"border"}
            onClick={addPropertyField}
          >
            Add new property
          </Button>
          {info &&
            info.map((property: any) => (
              <div key={property.id} className={"flex gap-5"}>
                <Input
                  value={property.title}
                  placeholder={"Property title"}
                  onChange={(e) =>
                    changeProperty("title", e.target.value, property.number)
                  }
                />
                <Input
                  value={property.description}
                  onChange={(e) =>
                    changeProperty(
                      "description",
                      e.target.value,
                      property.number,
                    )
                  }
                  placeholder={"Property description"}
                />
                <Button
                  variant={"destructive"}
                  onClick={() => removeProperty(property.id)}
                >
                  Remove field
                </Button>
              </div>
            ))}
        </div>
        <DialogFooter>
          <DialogClose>
            <Button
              type="submit"
              onClick={() => {
                addDevice();
              }}
            >
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateDevice;
