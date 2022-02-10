
import { useState, useContext, createRef, useEffect } from 'react'
import { ThemeContext } from '../../providers/ThemeProvider'
import { BlogCell } from '../blog-cell'
import { getRef, newBlogCell, createListFromArray, insertInList } from './logic'

export const BlogCells = () => {
  const { theme } = useContext(ThemeContext)

  const [cells, setCells] = useState(createListFromArray([newBlogCell(createRef())]))
  const [createdIndex, setCreatedIndex] = useState(0)

  const addNewBlogCell = (cellPos) => {
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

  const removeCellIfMultipleCellExist = (cellPos) => {
    if (cells.size > 1)
    {
      setCreatedIndex(cellPos - 1 > -1 ? cellPos - 1 : 0)
      setCells(cells.remove(cellPos))
    }
  }

  useEffect(() => {
    const ref = getRef(cells.get(createdIndex))
    ref.current.focus()
  }, [createdIndex, cells])


  return (
    <div className={`blog-cells ${theme}`}>
      {(cells).map((value, index) => <BlogCell key={value.get('id')} pos={index}
      value={value}
      pointer={getRef(value)}
      addCell={(i) => addNewBlogCell(i)} 
      removeCellIfMultipleCellExist={(i) => removeCellIfMultipleCellExist(i)}
      />)}
      <hr />
    </div>
  )
}
