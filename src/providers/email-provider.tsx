import { createContext, PropsWithChildren, useState } from "react";
import { cn } from "@/lib/utils.ts";
import { useAppSelector } from "@/hooks/redux.tsx";

export type Email = string | null | undefined;
interface IEmailContext {
  email: Email;
  setEmail: (email: Email) => void;
}

const defaultValues: IEmailContext = {
  email: null,
  setEmail: () => {},
};

export const EmailContext = createContext<IEmailContext | null>(defaultValues);

const EmailProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState<Email>(null);
  const isOpen = useAppSelector((state) => state.drawer.isOpen);

  const emailContextValue: IEmailContext = {
    email,
    setEmail,
  };

  return (
    <EmailContext.Provider value={emailContextValue}>
      <div
        className={cn(
          "absolute inset-0 bg-black z-0 transition duration-300 ease-in-out",
          {
            "scale-[97%] transition duration-300 ease-in-out": isOpen,
          },
        )}
      >
        {children}
      </div>
    </EmailContext.Provider>
  );
};

export default EmailProvider;
