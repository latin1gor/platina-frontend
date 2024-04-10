import { TbBrandReactNative } from "react-icons/tb";
import { Dumbbell, MonitorSmartphone } from "lucide-react";
import ProductStatisticCard from "@/components/admin/products/product-statistics/product-statistic-card.tsx";
import { useId } from "react";

const data = [
  { quantity: 4, entities: "brands", icon: <TbBrandReactNative /> },
  { quantity: 7, entities: "types", icon: <Dumbbell />, iconSize: 30 },
  {
    quantity: 32,
    entities: "devices",
    icon: <MonitorSmartphone />,
    iconSize: 33,
  },
];
const ProductStatisticList = () => {
  const id = useId();
  return (
    <ul className={"flex items-center justify-between py-10  w-full"}>
      {data &&
        data.map((item) => (
          <ProductStatisticCard
            key={id}
            entities={item.entities}
            quantity={item.quantity}
            Icon={item.icon}
            iconSize={item?.iconSize}
          />
        ))}
    </ul>
  );
};

export default ProductStatisticList;
