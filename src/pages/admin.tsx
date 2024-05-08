import TabsContainer from "@/components/admin/tabs-container.tsx";
import withLayout from "@/providers/withLayout.tsx";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore.tsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes.ts";
import { setSelectedTab } from "@/store/ui/headerSlice.ts";
import { adminTabs } from "@/router/tabs.ts";

const Admin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);
  useEffect(() => {
    if (user?.role !== "ADMIN") {
      navigate(routes.DASHBOARD);
      return;
    }
    dispatch(setSelectedTab({ id: adminTabs[1].id }));
  }, []);
  return (
    <>
      <TabsContainer />
    </>
  );
};

export default withLayout(Admin);
