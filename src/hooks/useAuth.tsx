import { useContext } from "react";
import { AuthContext } from "@/providers/auth-provider.tsx";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("UseAuth must be used within AuthContext provider");
  }

  return context;
};
