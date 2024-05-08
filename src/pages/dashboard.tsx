import Typebar from "@/components/dashboard/typebar.tsx";
import Brandbar from "@/components/dashboard/brandbar.tsx";
import DeviceList from "@/components/dashboard/device/device-list.tsx";
import withLayout from "@/providers/withLayout.tsx";
import ProductPagination from "@/components/dashboard/pagination/pagination.tsx";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore.tsx";
import { useEffect } from "react";
import { setSelectedTab } from "@/store/ui/headerSlice.ts";
import { userTabs } from "@/router/tabs.ts";

const Dashboard = () => {
  const { devices } = useAppSelector((state) => state.device);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelectedTab({ id: userTabs[0].id }));
  }, [dispatch]);
  return (
    <div
      className={
        "flex flex-col md:flex-row justify-start px-0 sm:px-5 md:px-10 lg:px-20 h-screen w-full"
      }
    >
      <div
        className={
          "flex flex-col items-center md:items-start md:flex-row w-full"
        }
      >
        <Typebar />
        <div className={"flex flex-col px-7 md:px-0 w-full md:ml-5"}>
          <Brandbar />
          <DeviceList />
          {!!devices?.rows?.length && <ProductPagination />}
        </div>
      </div>
    </div>
  );
};

export default withLayout(Dashboard);
