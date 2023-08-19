import React, { useContext } from 'react';
import { ThemeContext2 } from '../context/ThemeContext2';

export default function Content() {
  const { isDark, toggleDarkMode } = useContext(ThemeContext2);
  console.log('header', isDark);
  return <div>Content</div>;
}
