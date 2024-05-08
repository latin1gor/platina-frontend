import { useContext } from "react";
import { ResponsiveContext } from "@/providers/responsive-provider.tsx";

export const useResponsive = () => useContext(ResponsiveContext);
