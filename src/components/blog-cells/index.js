
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { BlogCell } from '../blog-cell';

export const BlogCells = () => {

  const theme = useContext(ThemeContext)

  // const cellsRef = React.useRef([])
  const [cells, setCells] = useState([''])
  const addNewBlogCell = (cellPos) => {
    setCells([...cells, ''])
    console.log(cells)
    // cellsRef.current = cells.map((_, i) => cellsRef.)
  }


  return (
    <div className={theme}>
      theme is {theme}
      {cells.map((e, i) => <BlogCell key={i} 
      // ref={input => cellsRef[i] = input}
      addCell={(i) => addNewBlogCell(i)} />)}
    </div>
  )
}