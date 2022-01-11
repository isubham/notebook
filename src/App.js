import './App.css';
import { BlogCell } from './components/blog-cell/blog-cell';
import { useState } from 'react';

function App() {
  const [cells, setCells] = useState([''])
  let cellFocused = {}

  const addNewBlogCell = () => {
    setCells([...cells, ''])
    cellFocused[`cell-${cells.length - 1}`].focus()
  }

  return (
    <div className="App">
      {cells.map((e, i) => <BlogCell key={i} addCell={addNewBlogCell} ref={div =>  cellFocused[`cell-${i}`] = div} />)}
      <button onClick={addNewBlogCell}>Add New Cell</button>
    </div>
  );
}

export default App;
