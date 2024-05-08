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
import { setTypeOpen as setModalOpen } from "@/store/ui/modalSlice.ts";
import { toast } from "sonner";
import React, { useState } from "react";
import { createType, fetchTypes } from "@/store/services/typeService.ts";
import { getNiceDateString } from "@/lib/utils.ts";

const CreateType = () => {
  const dispatch = useAppDispatch();
  const [type, setType] = useState<string>("");
  const { isTypeOpen: isModalOpen } = useAppSelector((state) => state.modal);

  const addType = async () => {
    if (!type.trim()) return;
    createType(type).then((res) => {
      if (res) {
        toast.success(`Type "${type}" has been created`, {
          description: getNiceDateString(),
        });
        dispatch(fetchTypes());
      } else {
        toast.error(`Type hasn't been created`, {
          description: "Try again later.",
        });
      }
    });
    setType("");
  };

  const onInputSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addType();
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
            New type
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
          <DialogTitle>Create new type</DialogTitle>
          <DialogDescription>
            Add new type name to your store here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div>
            <Input
              value={type}
              onChange={(e) => setType(e.target.value)}
              onKeyDown={(e) => onInputSubmit(e)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type="submit" onClick={addType}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateType;
