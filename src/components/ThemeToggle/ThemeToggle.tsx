'use client';

import { useTheme } from '../ThemeProvider';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.skeleton} />;
  }

  return (
    <button
      className={styles.toggleBtn}
      onClick={toggleTheme}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      type="button"
    >
      {isDark ? (
        <Sun size={18} className={styles.icon} />
      ) : (
        <Moon size={18} className={styles.icon} />
      )}
    </button>
  );
}
