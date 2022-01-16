import { forwardRef, useContext, useEffect, useState } from "react"
import React from 'react';
import { ThemeContext } from "../../providers/ThemeProvider";
import './index.css'

export const BlogCell = forwardRef(({addCell, pos, pointer, visible}, ref) => {

  const {theme} = useContext(ThemeContext)

  const [value, setValue] = useState({html: '', text: ''})

  const _changeListener = (event) => {
    const [text, html] = [event.target.innerText, event.target.innerHTML]
    setValue({text: text, html: html})

  }

  const _handleKeyDown = (event) => {
    if (event.key === 'Enter')
    {
      event.preventDefault();
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
})
