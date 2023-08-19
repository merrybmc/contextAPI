import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Footer() {
  // const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    // setIsDark(!isDark);
  };

  return (
    <footer>
      <button onClick={toggleTheme}>Dark Mode</button>
    </footer>
  );
}
