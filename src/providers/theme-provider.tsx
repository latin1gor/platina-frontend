import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { cn } from "@/lib/utils.ts";
import { useAppSelector } from "@/hooks/useStore.tsx";
import { Toaster } from "sonner";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );
  const { isDrawerOpen, isTypeOpen, isBrandOpen, isDeviceOpen } =
    useAppSelector((state) => state.modal);
  const isModalOpen = isTypeOpen || isBrandOpen || isDeviceOpen;
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      <div
        className={cn(
          "absolute inset-0 bg-black z-0 transition duration-300 ease-in-out",
          {
            "scale-[96%] transition duration-500 ease-in-out blur-sm":
              isDrawerOpen,
            "transition duration-300 ease-in-out blur-sm": isModalOpen,
          },
        )}
      >
        {children}
      </div>
      <Toaster
        toastOptions={{
          classNames: {
            success:
              "rounded-lg border bg-card text-card-foreground shadow-sm border-stone-800",
            icon: `text-primary`,
          },
        }}
      />
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
