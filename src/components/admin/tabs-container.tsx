import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UsersTable } from "@/components/admin/users/users-table.tsx";
import { ProductsChart } from "@/components/admin/products/products-chart.tsx";

const TabsContainer = () => {
  return (
    <Tabs defaultValue="users" className="m-auto px-20">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="users">Users</TabsTrigger>
        <TabsTrigger value="products">Products</TabsTrigger>
      </TabsList>
      <TabsContent value="users">
        <UsersTable />
      </TabsContent>
      <TabsContent value="products">
        <ProductsChart />
      </TabsContent>
    </Tabs>
  );
};

export default TabsContainer;
