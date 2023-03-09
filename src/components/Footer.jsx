import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export default function Footer() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return <div>Footer</div>;
}
