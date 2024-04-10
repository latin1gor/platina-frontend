import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import EmailProvider from "@/providers/email-provider.tsx";
import { ThemeProvider } from "@/providers/theme-provider.tsx";

const MainProvider = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <EmailProvider>{children}</EmailProvider>
      </ThemeProvider>
    </Provider>
  );
};
export default MainProvider;
