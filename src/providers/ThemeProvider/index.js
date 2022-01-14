import { createContext } from "react";

export const ThemeContext = createContext('light')

export const themes = {light: 'light', dark: 'dark'}

const ThemeProvider = ({children, theme}) => {

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }
