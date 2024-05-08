import { PropsWithChildren, useEffect, useState } from "react";
import { routes } from "@/router/routes.ts";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "@/hooks/useStore.tsx";
import { clearUser } from "@/store/features/auth/userSlice.ts";
import { checkAuth } from "@/store/services/authService.ts";
import Loader from "@/components/ui/custom/loader.tsx";

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
  }, [dispatch, location.pathname]);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuth) {
    return <Navigate to={routes.LANDING} replace />;
  }
  return children;
};

export default ProtectedRoute;
