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
import { setBrandOpen as setModalOpen } from "@/store/ui/modalSlice.ts";
import { toast } from "sonner";
import React, { useState } from "react";
import { createBrand } from "@/store/services/brandService.ts";
import { getNiceDateString } from "@/lib/utils.ts";

const CreateBrand = () => {
  const dispatch = useAppDispatch();
  const [brand, setBrand] = useState<string>("");
  const { isBrandOpen: isModalOpen } = useAppSelector((state) => state.modal);
  const addBrand = async () => {
    if (!brand.trim()) return;
    createBrand(brand).then((res) => {
      if (res) {
        toast.success(`Brand "${brand}" has been created`, {
          description: getNiceDateString(),
        });
      } else {
        toast.error(`Brand hasn't been created`, {
          description: "Try again later.",
        });
      }
    });
    setBrand("");
  };

  const onInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addBrand();
      dispatch(setModalOpen(false));
    }
  };
  return (
    <Dialog onOpenChange={(e) => dispatch(setModalOpen(e))} open={isModalOpen}>
      <DialogTrigger asChild>
        <Card className={"group opacity-80 hover:opacity-100"}>
          <CardTitle
            className={
              "flex justify-between items-center text-2xl pl-5 p-2 cursor-pointer"
            }
          >
            New brand
            <IoMdAddCircleOutline
              className={
                "transition-transform duration-300 transform group-hover:rotate-180"
              }
            />
          </CardTitle>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new brand</DialogTitle>
          <DialogDescription>
            Add new brand name to your store here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div>
            <Input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              onKeyDown={(e) => onInputSubmit(e)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type="submit" onClick={addBrand}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBrand;
