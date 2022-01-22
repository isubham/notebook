import { useContext, useState } from 'react'
import { ThemeContext } from '../../providers/ThemeProvider'
import PropTypes from 'prop-types'
import './index.css'

export const BlogCell = ({ addCell, pos, pointer, onValueChange }) => {
  const { theme } = useContext(ThemeContext)

  const [value, setValue] = useState({ html: '', text: '' })

  const _changeListener = (event) => {
    const [text, html] = [event.target.innerText, event.target.innerHTML]
    setValue({ text: text, html: html })
    onValueChange(value)
  }

  const _handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      addCell(pos)
    }
  }

  return (
    <div onInput={(event) => _changeListener(event)}
    ref={pointer}
    contentEditable="true"
    className={`blog-cell ${theme}`}
    onKeyDown={_handleKeyDown} ></div>
  )
}

BlogCell.propTypes = {
  addCell: PropTypes.func,
  pos: PropTypes.number,
  pointer: PropTypes.object,
  onValueChange: PropTypes.func
}
