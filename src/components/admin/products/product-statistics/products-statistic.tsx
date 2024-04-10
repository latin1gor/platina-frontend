import ProductStatisticList from "@/components/admin/products/product-statistics/product-statistic-list.tsx";
import AdminActions from "@/components/admin/products/admin-actions/admin-actions.tsx";

const ProductsStatistic = () => {
  return (
    <div className={"flex items-center justify-between"}>
      <AdminActions />
      <ProductStatisticList />
    </div>
  );
};

export default ProductsStatistic;
