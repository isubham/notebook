import { createContext, useState } from "react";
import './index.css'

export const ThemeContext = createContext('light')

export const themes = {light: 'light', dark: 'dark'}

const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState(themes.light)

  const getNextTheme = () => theme === themes.light ? themes.dark : themes.light

  const toggleTheme = () => {
    setTheme(getNextTheme())
  }

  const value = {theme, toggleTheme}
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider }
