import { useContext } from "react";
import { EmailContext } from "@/providers/email-provider.tsx";

export const useEmail = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("Use email should be used within the EmailProvider");
  }
  return context;
};
