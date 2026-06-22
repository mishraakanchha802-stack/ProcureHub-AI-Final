import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any>(null);

export function ThemeProvider({ children }: any) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}