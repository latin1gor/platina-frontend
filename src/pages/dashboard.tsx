import Typebar from "@/components/dashboard/typebar.tsx";
import Brandbar from "@/components/dashboard/brandbar.tsx";
import DeviceList from "@/components/dashboard/device/device-list.tsx";
import withLayout from "@/providers/withLayout.tsx";

const Dashboard = () => {
  return (
    <div className={"flex justify-between px-20 items-start h-screen w-full"}>
      <Typebar />
      <div className={"flex flex-col w-[90%] ml-5"}>
        <Brandbar />
        <DeviceList />
      </div>

      <div className={"justify-self-start"}></div>
      <div></div>
    </div>
  );
};

export default withLayout(Dashboard);
