import React, { useContext } from 'react';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { ThemeContext } from '../context/ThemeContext';

export default function Page() {
  const data = useContext(ThemeContext);
  console.log(data); // isDark, setIsDark
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
