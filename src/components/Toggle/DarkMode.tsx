import React, { useState, useEffect } from 'react';
import Toggle from 'react-toggle';
import { useMediaQuery } from 'react-responsive';

const darkModeClass = 'dark';

export const ThemeToggle = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    (prefersDark) => {
      setDarkMode(prefersDark);
    }
  );
  const [darkMode, setDarkMode] = useState(systemPrefersDark);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(darkModeClass);
    } else {
      document.documentElement.classList.remove(darkModeClass);
    }
  }, [darkMode]);

  console.log(darkMode);
  return (
    <Toggle
      className="DarkToggle"
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
      icons={{ checked: '🌙', unchecked: '🔆' }}
      aria-label="Dark mode"
    />
  );
};

export default ThemeToggle;
