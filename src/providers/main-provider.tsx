import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import AuthProvider from "@/providers/auth-provider.tsx";
import EmailProvider from "@/providers/email-provider.tsx";
import { ThemeProvider } from "@/providers/theme-provider.tsx";

const MainProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <EmailProvider>
          <AuthProvider>{children}</AuthProvider>
        </EmailProvider>
      </Provider>
    </ThemeProvider>
  );
};
export default MainProvider;
