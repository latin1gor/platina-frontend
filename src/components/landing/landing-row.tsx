import { Button } from "@/components/ui/button.tsx";
import { Car, CaravanIcon, CircleDollarSign, ShoppingCart } from "lucide-react";

const LandingRow = () => {
  return (
    <div className={"flex items-center justify-between mt-12 px-40 "}>
      <h2 className={"font-bold text-2xl"}>There's so much more.</h2>
      <Button
        variant={"secondary"}
        className={"rounded-2xl bg-black border border-stone-800"}
      >
        <CaravanIcon className={"mr-2"} /> About
      </Button>
      <Button
        variant={"secondary"}
        className={"rounded-2xl bg-black border border-stone-800"}
      >
        <ShoppingCart className={"mr-2"} /> Products
      </Button>
      <Button
        variant={"secondary"}
        className={"rounded-2xl bg-black border border-stone-800"}
      >
        <Car className={"mr-2"} />
        Delivery
      </Button>
      <Button
        variant={"secondary"}
        className={"rounded-2xl bg-black border border-stone-800"}
      >
        <CircleDollarSign className={"mr-2"} />
        Benefit
      </Button>
    </div>
  );
};

export default LandingRow;
