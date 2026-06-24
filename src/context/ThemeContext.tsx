import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export type ThemeVars = Record<string, string>;

export const themeVars: Record<Theme, ThemeVars> = {
  dark: {
    "--bg": "#0a0a0f",
    "--bg2": "#11111a",
    "--bg3": "#18182a",
    "--accent": "#4f8ef7",
    "--accent2": "#7c6af5",
    "--text": "#e8e8f0",
    "--muted": "#6b6b88",
    "--border": "rgba(255, 255, 255, 0.07)",
    "--card-bg": "rgba(255, 255, 255, 0.03)",
    "--navbar-bg": "rgba(10, 10, 15, 0.75)",
    "--text-stroke": "rgba(255, 255, 255, 0.25)",
  },
  light: {
    "--bg": "#eef2f7",
    "--bg2": "#f8fafc",
    "--bg3": "#e2e8f0",

    "--accent": "#4f8ef7",
    "--accent2": "#7c6af5",

    "--text": "#1e293b",
    "--muted": "#64748b",

    "--border": "rgba(15, 23, 42, 0.08)",
    "--card-bg": "rgba(255, 255, 255, 0.75)",
    "--navbar-bg": "rgba(248, 250, 252, 0.8)",

    "--text-stroke": "rgba(15, 23, 42, 0.15)",
    }
};

function getInitialTheme(): Theme {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
  return "dark";
}

function applyThemeImmediate(theme: Theme) {
  const vars = themeVars[theme];
  const root = document.documentElement;
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }
}

/* @react-refresh */ export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyThemeImmediate(theme);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
  

    applyThemeImmediate(next)

    setTheme(next);
    localStorage.setItem("theme", next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
