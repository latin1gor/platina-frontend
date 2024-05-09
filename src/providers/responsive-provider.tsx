import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface IResponsiveContext {
  isSmallScreen: boolean;
  isMediumScreen: boolean;
}

const defaultValue: IResponsiveContext = {
  isSmallScreen: false,
  isMediumScreen: false,
};

export const ResponsiveContext =
  createContext<IResponsiveContext>(defaultValue);

const ResponsiveProvider = ({ children }: PropsWithChildren) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      setIsMediumScreen(window.innerWidth < 1200);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsiveContextValue: IResponsiveContext = {
    isSmallScreen,
    isMediumScreen,
  };

  return (
    <ResponsiveContext.Provider value={responsiveContextValue}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveProvider;
