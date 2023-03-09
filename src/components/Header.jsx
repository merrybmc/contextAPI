import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.js';
import { UserContext } from '../context/UserContext.js';

export default function Header() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  console.log(isDark);

  const user = useContext(UserContext);
  console.log(user);

  return <div>Header</div>;
}
