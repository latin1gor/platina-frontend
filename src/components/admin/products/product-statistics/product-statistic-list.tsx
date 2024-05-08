import { TbBrandReactNative } from "react-icons/tb";
import { Dumbbell, MonitorSmartphone } from "lucide-react";
import ProductStatisticCard from "@/components/admin/products/product-statistics/product-statistic-card.tsx";
import { useId } from "react";
import { useAppSelector } from "@/hooks/useStore.tsx";

const ProductStatisticList = () => {
  const id = useId();
  const { brands } = useAppSelector((state) => state.brand);
  const { types } = useAppSelector((state) => state.type);
  const { devices } = useAppSelector((state) => state.device);
  const data = [
    {
      quantity: brands?.count || 0,
      entities: "brands",
      icon: <TbBrandReactNative />,
    },
    {
      quantity: types?.count || 0,
      entities: "types",
      icon: <Dumbbell />,
      iconSize: 30,
    },
    {
      quantity: devices?.count || 0,
      entities: "devices",
      icon: <MonitorSmartphone />,
      iconSize: 33,
    },
  ];

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
