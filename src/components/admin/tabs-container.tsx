import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsContainer = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div>hello</div>
      </TabsContent>
      <TabsContent value="password">
        <div>hello</div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsContainer;
