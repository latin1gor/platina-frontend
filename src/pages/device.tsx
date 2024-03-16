import DeviceDescription from "@/components/dashboard/device/device-description.tsx";
import { useEffect } from "react";
import withLayout from "@/providers/withLayout.tsx";

const Device = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DeviceDescription />
      <div className={"m-20"}></div>
      <div className={"h-1"} />
      <div className={"justify-self-start"}></div>
    </>
  );
};

export default withLayout(Device);
