import Header from "@/components/header/header.tsx";
import { useAppSelector } from "@/hooks/redux.tsx";

const withLayout = (WrappedComponent: React.ComponentType<any>) => {
  const WithLayoutWrapper: React.FC<any> = (props) => {
    const isAuth = useAppSelector((state) => state.user.user);
    console.log(isAuth);
    return (
      <div className="max-w-screen-2xl m-auto">
        <Header isAuth={!!isAuth} />
        <div className="mt-20">
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };

  return WithLayoutWrapper;
};

export default withLayout;
