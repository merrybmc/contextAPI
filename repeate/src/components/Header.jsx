import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
  // const { isDark, setIsDark } = useContext(ThemeContext);
  const isDark = 'black';
  return (
    <header
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>Welcome!</h1>
    </header>
  );
}
