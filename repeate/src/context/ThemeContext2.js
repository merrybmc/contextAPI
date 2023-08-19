import { createContext, useState } from 'react';

export const ThemeContext2 = createContext();

export function ThemeContext2Provider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };
  return (
    //
    <ThemeContext2.Provider value={(isDark, toggleDarkMode)}>
      {/* value에 넣은 isDark와 toggleDarkMode를 children에 제공해준다. */}
      {children}
    </ThemeContext2.Provider>
  );
}

/**
 * <App>
 * import {ThemeContext2} from ...
 *
 * return (
 *   <ThemeContext2>
 *     <Header />
 *     <Content />
 *     <Footer />
 *   </ThemeContext2>
 * )
 *
 * <Header>
 * const {isDark, toggleDarkMode} = useContext(ThemeContext2);
 */
