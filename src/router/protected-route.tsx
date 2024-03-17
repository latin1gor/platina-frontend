import { PropsWithChildren, useEffect, useState } from "react";
import { routes } from "@/router/routes.ts";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "@/hooks/redux.tsx";
import { checkAuth, clearUser } from "@/store/userSlice.ts";
import Cookies from "js-cookie";
import Loader from "@/components/ui/custom/loader.tsx";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState<boolean | unknown>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = Cookies.get("token");
      if (!token) {
        dispatch(clearUser());
        setIsLoading(false);
        return;
      }
      const action = await dispatch(checkAuth());
      if (!action.payload) {
        dispatch(clearUser());
      }
      setIsAuth(action.payload);
      setIsLoading(false);
    };

    checkAuthStatus();
  }, [dispatch, location.pathname]);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuth) {
    return <Navigate to={routes.SIGNIN} replace />;
  }
  return children;
};

export default ProtectedRoute;
