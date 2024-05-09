import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes.ts";
import { LogoutDropdown } from "@/components/navbar/logout-dropdown.tsx";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Tab, Tabs } from "@/router/tabs.ts";
import { setSelectedTab } from "@/store/ui/headerSlice.ts";
import { clsx } from "clsx";
import ShoppingBasket from "@/components/basket/shopping-basket.tsx";
import { useResponsive } from "@/hooks/useResponsive.tsx";
import { clearUser } from "@/store/features/auth/userSlice.ts";

interface HeaderProps {
  isAuth: boolean;
}
const Navbar = ({ isAuth }: HeaderProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { userTabs, adminTabs, publicTabs, selectedTab } = useAppSelector(
    (state) => state.header,
  );
  const { isSmallScreen } = useResponsive();

  const logout = () => {
    Cookies.remove("token");
    navigate(routes.SIGNIN);
    dispatch(clearUser());
  };

  const onTabSelect = (tab: Tab) => {
    navigate(`${tab?.path}`);
  };

  const onLogoClick = () => {
    if (!isAuth) {
      navigate(routes.LANDING);
      dispatch(setSelectedTab(null));
    } else {
      navigate(routes.DASHBOARD);
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
            <img src={"/logo.png"} className={"h-14 min-w-16"} alt={"logo"} />
            {!isAuth && !isSmallScreen && (
              <h1 className={"font-bold text-stone-300 mr-1"}>platina/ua</h1>
            )}
          </div>

          {tabs &&
            !isSmallScreen &&
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
            <ShoppingBasket />
            <LogoutDropdown logout={logout} />
          </div>
        ) : (
          <div className={"flex justify-between items-center"}>
            <Button
              variant={"ghost"}
              className={"mr-2 border"}
              onClick={() => navigate(routes.SIGNIN)}
            >
              Log in
            </Button>
            <Button onClick={() => navigate(routes.REGISTER)}>Sign Up</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
