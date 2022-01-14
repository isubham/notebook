import { useContext, useState } from "react"
import React from 'react';
import { ThemeContext } from "../../providers/ThemeProvider";
import './index.css'

export const BlogCell = ({addCell}) => {

  const {theme} = useContext(ThemeContext)

  const [value, setValue] = useState({html: '', text: ''})

  const _changeListener = (event) => {
    const [text, html] = [event.target.innerText, event.target.innerHTML]
    setValue({text: text, html: html})

  }

  const _handleKeyDown = (event) => {
    if (event.key === 'Enter')
    {
        addCell()
    }   
  }

  return (<div className={theme}>
    {/* <p>Current Format {currentFormat}</p>
    <button onClick={() => setCurrentFormatting(formats.h1)}>h1</button>
    <button onClick={() => setCurrentFormatting(formats.p)}>p</button> */}

    {/* <p>{value.text}</p>
    <p>{value.html}</p> */}
    {/* <br /> */}
    <br />
    <div onInput={(event) => _changeListener(event)} 
    contentEditable="true" 
    className={'blog-cell ' + theme} 
    onKeyDown={_handleKeyDown} ></div>
 
  </div>)
}
