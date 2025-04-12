"use client";
import setGlobalColorTheme from "../lib/theme-colors";
import { useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes";
import React, {
  createContext,
  JSX,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext<ThemeColorStateParams>(
  {} as ThemeColorStateParams
);

export default function ThemeDataProvider({
  children,
}: ThemeProviderProps): JSX.Element | null {
  const getSavedThemeColor = (): ThemeColors => {
    try {
      return (localStorage.getItem("themeColor") as ThemeColors) || "Zinc";
    } catch {
      return "Zinc" as ThemeColors;
    }
  };

  const [themeColor, setThemeColor] = useState<ThemeColors>(
    getSavedThemeColor() as ThemeColors
  );
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setGlobalColorTheme(theme as "light" | "dark", themeColor);

    if (!isMounted) {
      setIsMounted(true);
    }
  }, [themeColor, theme, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext(): ThemeColorStateParams {
  return useContext(ThemeContext);
}
