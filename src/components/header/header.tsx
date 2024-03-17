import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes.ts";
import { LogoutDropdown } from "@/components/header/logout-dropdown.tsx";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ShoppingCart } from "lucide-react";
import { Tab, Tabs } from "@/router/tabs.ts";
import { setSelectedTab } from "@/store/ui/headerSlice.ts";
import { clsx } from "clsx";

interface HeaderProps {
  isAuth: boolean;
}
const Header = ({ isAuth }: HeaderProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { userTabs, adminTabs, publicTabs, selectedTab } = useAppSelector(
    (state) => state.header,
  );

  const logout = () => {
    Cookies.remove("token");
    navigate(routes.SIGNIN);
  };

  const onTabSelect = (tab: Tab) => {
    navigate(`${tab?.path}`);
    dispatch(setSelectedTab({ id: tab.id }));
  };

  const onLogoClick = () => {
    if (!isAuth) {
      navigate(routes.LANDING);
      dispatch(setSelectedTab(null));
    }
  };

  const tabs: Tabs = isAuth
    ? user?.role === "ADMIN"
      ? adminTabs
      : userTabs
    : publicTabs;

  return (
    <div
      className={
        "fixed top-0 left-0 w-full bg-transparent border-b border-stone-900 backdrop-blur-lg z-40"
      }
    >
      <div
        className={
          "px-5 h-14 flex justify-between items-center text-sm text-zinc-400 max-w-screen-2xl m-auto"
        }
      >
        <div className={"flex justify-between items-center space-x-6"}>
          <div
            className={"flex items-center justify-between cursor-pointer "}
            onClick={() => onLogoClick()}
          >
            <img src={"/logo.png"} className={"h-14 w-16"} alt={"logo"} />
            <h1 className={"font-bold text-stone-300 mr-1"}>platina/ua</h1>
          </div>
          {tabs &&
            tabs.map((tab) => (
              <h1
                key={tab.id}
                className={clsx("cursor-pointer transition duration-200", {
                  "text-white": tab.id === selectedTab?.id,
                  "hover:text-stone-300": tab.id !== selectedTab?.id,
                })}
                onClick={() => onTabSelect(tab)}
              >
                {tab.title}
              </h1>
            ))}
        </div>
        <div></div>
        {isAuth ? (
          <div className={"flex items-center"}>
            <Button
              className={
                "relative mr-5 p-1.5 h-10 w-10 bg-gradient hover:shadow-2xl"
              }
            >
              <ShoppingCart />

              <span className="absolute top-0 right-0 bg-red-500 h-4 w-4 rounded-full text-xs">
                2
              </span>
            </Button>
            <LogoutDropdown logout={logout} />
          </div>
        ) : (
          <div className={"flex justify-between items-center"}>
            <Button
              variant={"ghost"}
              className={"mr-2"}
              onClick={() => navigate(routes.SIGNIN)}
            >
              Log in
            </Button>
            <Button
              variant={"secondary"}
              onClick={() => navigate(routes.REGISTER)}
            >
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
