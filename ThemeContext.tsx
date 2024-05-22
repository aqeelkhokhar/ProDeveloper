import React, { createContext, useState, useContext } from 'react';
import { ColorBlindTheme, DarkThemes, LightTheme, ReverseTheme } from './MyApp/AppTheme';


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(LightTheme);
    const [themeName, setThemeName] = useState('light');
    
    console.log('light theme', theme)

    const toggleTheme = (newTheme) => {
        console.log('toggleTheme hits theme', newTheme)
         console.log('light theme', theme)
    switch (newTheme) {
      case 'light':
            setTheme(LightTheme);
            setThemeName('light');
        break;
      case 'dark':
            setTheme(DarkThemes);
             setThemeName('dark');
        break;
      case 'reverse':
            setTheme(ReverseTheme);
             setThemeName('reverse');
        break;
      case 'colorBlind':
            setTheme(ColorBlindTheme);
             setThemeName('colorBlind');
        break;
      default:
        setTheme(LightTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeName}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
