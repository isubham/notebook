import './App.css';
import { BlogCells } from './components/blog-cells';
import { ThemeProvider } from './providers/ThemeProvider';
import { Toolbar } from './components/toolbar';

function App() {

  return (
      <ThemeProvider >
        <Toolbar />
        <BlogCells />
      </ThemeProvider>
  );
}

export default App;
