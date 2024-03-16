import LandingHeader from "@/components/landing/landing-header.tsx";
import LandingCompanies from "@/components/landing/landing-companies.tsx";
import LandingFooter from "@/components/landing/landing-footer.tsx";
import LandingPrices from "@/components/landing/landing-prices.tsx";
import LandingRow from "@/components/landing/landing-row.tsx";
import { useAppDispatch } from "@/hooks/redux.tsx";
import { useEffect } from "react";
import { clearError } from "@/store/userSlice.ts";
import withLayout from "@/providers/withLayout.tsx";

const Landing = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, []);
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
