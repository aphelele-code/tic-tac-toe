import React from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/styles/Theme';
import ThemeContext from './components/context/ThemeContext';
import { useContext } from 'react';
import { ModalContextProvider } from './components/context/ModalContext';
import InnerApp from './components/InnerApp';






const App = () => {
  const { theme } = useContext(ThemeContext);
  const mode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={mode}>
      <ModalContextProvider>
        <InnerApp />
      </ModalContextProvider>
    </ThemeProvider>
  );
};


export default App
