import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UsersTable } from "@/components/admin/users/users-table.tsx";
import { ProductsChart } from "@/components/admin/products/products-chart.tsx";
import ProductsStatistic from "@/components/admin/products/product-statistics/products-statistic.tsx";

const TabsContainer = () => {
  return (
    <Tabs defaultValue="products" className="m-auto px-20">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="products">Products</TabsTrigger>
        <TabsTrigger value="users">Users</TabsTrigger>
      </TabsList>
      <TabsContent value="users">
        <UsersTable />
      </TabsContent>
      <TabsContent value="products">
        <ProductsStatistic />
        <ProductsChart />
      </TabsContent>
    </Tabs>
  );
};

export default TabsContainer;
