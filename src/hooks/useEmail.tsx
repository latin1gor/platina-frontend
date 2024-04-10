import { useContext } from "react";
import { EmailContext } from "@/providers/email-provider.tsx";

export const useEmail = () => useContext(EmailContext);
