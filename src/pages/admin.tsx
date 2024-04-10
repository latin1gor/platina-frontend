import TabsContainer from "@/components/admin/tabs-container.tsx";
import withLayout from "@/providers/withLayout.tsx";
import { useAppSelector } from "@/hooks/useStore.tsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes.ts";

const Admin = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);
  useEffect(() => {
    if (user?.role !== "ADMIN") {
      navigate(routes.DASHBOARD);
    }
  }, []);
  return (
    <>
      <TabsContainer />
    </>
  );
};

export default withLayout(Admin);
