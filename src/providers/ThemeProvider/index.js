import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export const ThemeContext = createContext('light')

export const themes = { light: 'light', dark: 'dark' }

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light)

  const getNextTheme = () => theme === themes.light ? themes.dark : themes.light

  const toggleTheme = () => {
    setTheme(getNextTheme())
  }

  const value = { theme, toggleTheme }
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.object
}

export { ThemeProvider }
