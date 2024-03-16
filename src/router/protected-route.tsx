import { PropsWithChildren, useEffect, useState } from "react";
import { routes } from "@/router/routes.ts";
import { Navigate, useLocation } from "react-router-dom";
import { grid } from "ldrs";
import { loaderColor } from "@/lib/constants.ts";
import { useAppDispatch } from "@/hooks/redux.tsx";
import { checkAuth, clearUser } from "@/store/userSlice.ts";
grid.register();

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState<boolean | unknown>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const checkAuthStatus = async () => {
      const action = await dispatch(checkAuth());
      if (!action.payload) {
        dispatch(clearUser());
      }
      setIsAuth(action.payload);
      setIsLoading(false);
    };
    checkAuthStatus();
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div className={"flex items-center justify-center h-screen"}>
        <l-grid size="60" speed="1.2" color={loaderColor}></l-grid>{" "}
      </div>
    );
  }

  if (!isAuth) {
    return <Navigate to={routes.SIGNIN} replace />;
  }
  return children;
};

export default ProtectedRoute;
