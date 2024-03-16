import { useContext } from "react";
import { EmailContext } from "@/providers/email-provider.tsx";

export const useEmail = () => {
  const context = useContext(EmailContext);

  if (!context) {
    throw new Error("UseAuth must be used within AuthContext provider");
  }

  return context;
};
