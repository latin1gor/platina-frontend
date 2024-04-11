import Header from "@/components/header/header.tsx";
import { useAppSelector } from "@/hooks/useStore.tsx";
import { ComponentType } from "react";

const withLayout = (WrappedComponent: ComponentType<any>) => {
  const WithLayoutWrapper = () => {
    const isAuth = useAppSelector((state) => state.user.user);
    console.log(isAuth);
    return (
      <div className="max-w-screen-2xl m-auto">
        <Header isAuth={!!isAuth} />
        <div className="mt-20">
          <WrappedComponent />
        </div>
      </div>
    );
  };

  return WithLayoutWrapper;
};

export default withLayout;
