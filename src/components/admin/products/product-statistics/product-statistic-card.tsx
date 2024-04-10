import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card.tsx";
import { cloneElement, ReactElement } from "react";
import { primaryColor } from "@/lib/constants.ts";

interface StatisticsCardProps {
  entities: string;
  quantity: number;
  Icon: ReactElement;
  iconSize?: number;
}
const ProductStatisticCard = ({
  entities,
  quantity,
  Icon,
  iconSize,
}: StatisticsCardProps) => {
  return (
    <Card className={"flex flex-col h-44 w-72 p-4"}>
      <CardTitle className={"text-4xl"}>{quantity + " " + entities}</CardTitle>
      <CardDescription>are currently added in the store</CardDescription>
      <CardFooter className={"self-end text-4xl p-0 pt-12"}>
        {cloneElement(Icon, { color: primaryColor, size: iconSize })}
      </CardFooter>
    </Card>
  );
};

export default ProductStatisticCard;
