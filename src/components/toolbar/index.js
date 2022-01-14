import { useContext } from "react"
import { ThemeContext } from "../../providers/ThemeProvider"
import './index.css'
export const Toolbar = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className={'toolbar ' + theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )

}