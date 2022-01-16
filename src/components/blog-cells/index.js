
import React, { useState, useContext, createRef, useEffect  } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { BlogCell } from '../blog-cell';
import {getRef, getVisibility, newBlogCell, createListFromArray, insertInList} from './logic'

export const BlogCells = () => {

  const {theme} = useContext(ThemeContext)

  const [cells, setCells] = useState(createListFromArray([newBlogCell(createRef())]))
  const [createdIndex, setCreatedIndex] = useState(0)

  const addNewBlogCell = (cellPos) => {
    const newlyCreatedIndex = cellPos + 1
    setCreatedIndex(newlyCreatedIndex)
    setCells(insertInList(
      {
        list: cells, 
        pos: newlyCreatedIndex, 
        value: newBlogCell(createRef())
      }))
  }

  useEffect(() => {
    const ref = getRef(cells.get(createdIndex))
    ref.current.focus()
  }, [createdIndex, cells])


  return (
    <div className={theme}>
      {(cells).map((value, index) => <BlogCell key={index} pos={index} 
      forwardRef={getRef(value)} pointer={getRef(value)}
      addCell={(i) => addNewBlogCell(i)} visible={getVisibility(index, cells)}/>)}
    </div>
  )
}