
import React, { useState, useContext, createRef  } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { BlogCell } from '../blog-cell';
import {getRef, getVisibility, newBlogCell, createListFromArray, insertInList} from './logic'

export const BlogCells = () => {

  const {theme} = useContext(ThemeContext)

  const [cells, setCells] = useState(createListFromArray([newBlogCell(createRef()), newBlogCell(createRef())]))

  const addNewBlogCell = (cellPos) => {
    setCells(insertInList(
      {
        list: cells, 
        pos: cellPos + 1, 
        value: newBlogCell(createRef())
      }))
    const ref = getRef(cells.get(cellPos + 1))
    ref.current.focus()
  }


  return (
    <div className={theme}>
      {(cells).map((value, index) => <BlogCell key={index} pos={index} 
      forwardRef={getRef(value)} pointer={getRef(value)}
      addCell={(i) => addNewBlogCell(i)} visible={getVisibility(index, cells)}/>)}
    </div>
  )
}