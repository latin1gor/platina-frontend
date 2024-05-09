import { Button } from "@/components/ui/button.tsx";
import { Car, CaravanIcon, CircleDollarSign, ShoppingCart } from "lucide-react";

const LandingRow = () => {
  return (
    <>
      <h2 className={"font-bold text-xl md:text-2xl mt-14 text-center"}>
        There's so much more.
      </h2>
      <div
        className={
          "gap-3 grid md:grid-cols-2 lg:flex items-center justify-center md:justify-between mt-16 md:px-20 lg:px-40 place-content-center"
        }
      >
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
    </>
  );
};

export default LandingRow;
