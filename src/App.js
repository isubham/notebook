import './App.css'
import { BlogCells } from './components/blog-cells'
import { ThemeProvider } from './providers/ThemeProvider'
import { Toolbar } from './components/toolbar'

function App () {
  return (
    <div className='app'>
      <ThemeProvider >
        <Toolbar />
        <BlogCells />

        {/* <Versions /> */}
      </ThemeProvider>
    </div>
  )
}

export default App
