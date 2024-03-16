import { createContext, PropsWithChildren, useState } from "react";
import { User } from "@/types/user.ts";

interface AuthContext {
  user: User | null;
}

export const AuthContext = createContext<AuthContext | null>(null);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user] = useState<User | null>(null);

  const authContextValue: AuthContext = {
    user,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
