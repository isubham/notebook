import { useState } from "react"
import React from 'react';

export const BlogCell = () => {

  const formats = {
    'p' : 'p',
    'h1' : 'h1'
  }

  const [currentFormat, setCurrentFormatting] = useState(formats.p)

  const _changeListener = (editorState) => {
    console.log(editorState)
  }

  return (<div>
    <p>Current Format {currentFormat}</p>
    <button onClick={() => setCurrentFormatting(formats.h1)}>h1</button>
    <button onClick={() => setCurrentFormatting(formats.p)}>p</button>
    <br />
    <br />
    <div onInput={(event) => _changeListener(event)} contentEditable="true" className='blog-cell' >{}</div>
 
  </div>)
}
