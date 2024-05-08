import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface IResponsiveContext {
  isSmallScreen: boolean;
}

const defaultValue: IResponsiveContext = {
  isSmallScreen: false,
};

export const ResponsiveContext =
  createContext<IResponsiveContext>(defaultValue);

const ResponsiveProvider = ({ children }: PropsWithChildren) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsiveContextValue: IResponsiveContext = {
    isSmallScreen,
  };

  return (
    <ResponsiveContext.Provider value={responsiveContextValue}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveProvider;
