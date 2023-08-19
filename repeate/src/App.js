import { useState } from 'react';
import './App.css';
import Page from './pages/Page';
import { ThemeContext } from './context/ThemeContext';
import { ThemeContext2 } from './context/ThemeContext2';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      {/* <ThemeContext2> */}
      {/* <ThemeContext.Provider value={{ isDark, setIsDark }}> */}
      <Page />
      {/* </ThemeContext.Provider> */}
      {/* </ThemeContext2> */}
    </>
  );
}

export default App;
