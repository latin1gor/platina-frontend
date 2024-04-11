import { createContext, PropsWithChildren, useState } from "react";

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

  const emailContextValue: IEmailContext = {
    email,
    setEmail,
  };

  return (
    <EmailContext.Provider value={emailContextValue}>
      {children}
    </EmailContext.Provider>
  );
};

export default EmailProvider;
