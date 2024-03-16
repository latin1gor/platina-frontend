import TabsContainer from "@/components/admin/tabs-container.tsx";
import withLayout from "@/providers/withLayout.tsx";

const Admin = () => {
  return (
    <>
      <TabsContainer />
    </>
  );
};

export default withLayout(Admin);
