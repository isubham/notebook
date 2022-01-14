import './App.css';
import { BlogCells } from './components/blog-cells';
import { ThemeProvider, themes } from './providers/ThemeProvider';
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState(themes.light)

  const getNextTheme = () => theme === themes.light ? themes.dark : themes.light

  const toggleTheme = () => {
    setTheme(getNextTheme())
  }

  return (
    <div className={'App ' + theme }>
      <ThemeProvider theme={theme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <BlogCells />
      </ThemeProvider>
    </div>
  );
}

export default App;
