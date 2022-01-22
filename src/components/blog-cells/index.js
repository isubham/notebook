
import { useState, useContext, createRef, useEffect } from 'react'
import { ThemeContext } from '../../providers/ThemeProvider'
import { BlogCell } from '../blog-cell'
import { getRef, newBlogCell, createListFromArray, insertInList } from './logic'

export const BlogCells = () => {
  const { theme } = useContext(ThemeContext)

  const [cells, setCells] = useState(createListFromArray([newBlogCell(createRef())]))
  const [createdIndex, setCreatedIndex] = useState(0)

  const addNewBlogCell = (cellPos, value) => {
    const newlyCreatedIndex = cellPos + 1
    setCreatedIndex(newlyCreatedIndex)
    const newCells = insertInList(
      {
        list: cells,
        pos: newlyCreatedIndex,
        value: newBlogCell(createRef())
      })
    setCells(newCells)
  }

  useEffect(() => {
    const ref = getRef(cells.get(createdIndex))
    ref.current.focus()
  }, [createdIndex, cells])

  return (
    <div className={theme}>
      {(cells).map((value, index) => <BlogCell key={value.get('id')} pos={index}
      pointer={getRef(value)}
      addCell={(i) => addNewBlogCell(i)} />)}
    </div>
  )
}
