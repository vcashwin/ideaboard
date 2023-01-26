import * as React from "react";

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const DarkModeContext = React.createContext<
  DarkModeContextProps | undefined
>(undefined);

export const DarkModeProvider = ({ children }: ProviderProps) => {
  const [darkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const value = React.useMemo(() => ({ darkMode, toggleDarkMode }), [darkMode]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = React.useContext(DarkModeContext);

  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }

  return context;
};
