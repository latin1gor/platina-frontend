import { primaryColor as loaderColor } from "@/lib/constants.ts";
import { grid } from "ldrs";
grid.register();
const Loader = () => {
  return (
    <div className={"flex items-center justify-center h-screen"}>
      <l-grid size="60" speed="1.2" color={loaderColor}></l-grid>{" "}
    </div>
  );
};
export default Loader;
