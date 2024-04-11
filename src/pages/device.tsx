import DevicePage from "@/components/dashboard/device/device-page.tsx";
import { useEffect } from "react";
import withLayout from "@/providers/withLayout.tsx";

const Device = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DevicePage />
      <div className={"h-1"} />
    </>
  );
};

export default withLayout(Device);
