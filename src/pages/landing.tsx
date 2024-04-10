import LandingHeader from "@/components/landing/landing-header.tsx";
import LandingCompanies from "@/components/landing/landing-companies.tsx";
import LandingFooter from "@/components/landing/landing-footer.tsx";
import LandingPrices from "@/components/landing/landing-prices.tsx";
import LandingRow from "@/components/landing/landing-row.tsx";
import { useAppDispatch } from "@/hooks/useStore.tsx";
import { useEffect } from "react";
import { clearError, clearUser } from "@/store/features/auth/userSlice.ts";
import { checkAuth } from "@/store/services/authService.ts";
import withLayout from "@/providers/withLayout.tsx";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes.ts";

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearError());
    const checkAuthStatus = async () => {
      const action = await dispatch(checkAuth());
      console.log(action.payload);
      if (!action.payload) {
        dispatch(clearUser());
      } else {
        navigate(routes.DASHBOARD);
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  return (
    <>
      <div className={"md:m-32 md:mt-48 border border-stone-800"}>
        <LandingHeader />
        <LandingCompanies />
        <LandingPrices />
        <LandingRow />
        <LandingFooter />
      </div>
      <div className={"h-1"} />
    </>
  );
};

export default withLayout(Landing);
