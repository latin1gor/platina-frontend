import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import EmailProvider from "@/providers/email-provider.tsx";
import { ThemeProvider } from "@/providers/theme-provider.tsx";
import ResponsiveProvider from "@/providers/responsive-provider.tsx";

const MainProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ResponsiveProvider>
          <EmailProvider>{children}</EmailProvider>
        </ResponsiveProvider>
      </ThemeProvider>
    </Provider>
  );
};
export default MainProvider;
