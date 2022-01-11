import { useState } from "react"
import React from 'react';

export const BlogCell = ({addCell}) => {

  // const formats = {
  //   'p' : 'p',
  //   'h1' : 'h1'
  // }

  // const [currentFormat, setCurrentFormatting] = useState(formats.p)

  const [value, setValue] = useState({html: '', text: ''})

  const _changeListener = (event) => {
    // console.log(event)
    const [text, html] = [event.target.innerText, event.target.innerHTML]
    setValue({text: text, html: html})
  }

  const _handleKeyDown = (event) => {
    if (event.key === 'Enter')
    {
        addCell()
    }
    console.log(event)
  }

  return (<div>
    {/* <p>Current Format {currentFormat}</p>
    <button onClick={() => setCurrentFormatting(formats.h1)}>h1</button>
    <button onClick={() => setCurrentFormatting(formats.p)}>p</button> */}

    <p>{value.text}</p>
    <p>{value.html}</p>
    <br />
    <br />
    <div onInput={(event) => _changeListener(event)} contentEditable="true" className='blog-cell' onKeyDown={_handleKeyDown} ></div>
 
  </div>)
}
