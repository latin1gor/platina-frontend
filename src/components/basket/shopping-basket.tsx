import { Button } from "@/components/ui/button.tsx";
import { ShoppingCart, SmilePlus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { useAppSelector } from "@/hooks/useStore.tsx";
import BasketItem from "@/components/basket/basket-item.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { cn } from "@/lib/utils.ts";

const ShoppingBasket = () => {
  const { products, count, total } = useAppSelector((state) => state.basket);

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          className={
            "relative mr-5 p-1.5 h-10 w-10 bg-gradient hover:shadow-2xl"
          }
        >
          <ShoppingCart />

          <span
            className={cn(
              "absolute top-0 right-0 bg-red-500 h-4 w-4 rounded-full text-xs transition duration-300",
              count ? "visible" : "hidden",
            )}
          >
            {count}
          </span>
        </Button>
      </PopoverTrigger>

      <PopoverContent className={"min-w-[380px] p-0"}>
        <div className={"p-4"}>{count} items in bag</div>
        <Separator />
        {products.length ? (
          products.map((item) => (
            <BasketItem key={crypto.randomUUID()} id={item.id} />
          ))
        ) : (
          <div className={"flex flex-col justify-center items-center h-40"}>
            <SmilePlus size={32} />
            <div>Your shopping bag is empty</div>
          </div>
        )}
        <div
          className={
            "flex items-center justify-between border-t border-stone-800 p-4"
          }
        >
          <div>Total</div>
          <div>{total} $</div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ShoppingBasket;
