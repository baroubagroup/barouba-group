'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => null,
  toggleTheme: () => null,
  isDark: true,
});

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
}

export function ThemeProvider({ 
  children, 
  attribute = 'data-theme', 
  defaultTheme = 'dark' 
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Determine initial theme from DOM attribute or localStorage
    const saved = (typeof window !== 'undefined' && localStorage.getItem('theme')) as Theme | null;
    const initial = saved === 'light' || saved === 'dark' ? saved : defaultTheme;
    setThemeState(initial);
    document.documentElement.setAttribute(attribute, initial);
    document.body.setAttribute(attribute, initial);
    setMounted(true);
  }, [attribute, defaultTheme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute(attribute, newTheme);
    document.body.setAttribute(attribute, newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  }, [attribute]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute(attribute, next);
      document.body.setAttribute(attribute, next);
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', next);
      }
      return next;
    });
  }, [attribute]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
