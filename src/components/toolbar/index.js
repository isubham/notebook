import { useContext } from 'react'
import { ThemeContext } from '../../providers/ThemeProvider'
import './index.css'

export const Toolbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={'toolbar flex bg-black ' + theme}>
      <button className="px-2 text-gray-100 dark:text-white rounded-md py-2 bg-blue-500 
      dark:text-white shadow-lg shadow-blue-500/50" 
      onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
