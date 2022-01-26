import { useCallback, useContext, useState } from 'react'
import { ThemeContext } from '../../providers/ThemeProvider'
import PropTypes from 'prop-types'
import './index.css'
import { List, Map } from 'immutable'
import { guid } from '../../utils/guuid'
import debounce from 'lodash.debounce'

export const BlogCell = ({ addCell, pos, pointer, removeCellIfMultipleCellExist }) => {
  const { theme } = useContext(ThemeContext)

  const buildVersion = (value) => Map({value: Map(value), on: guid()})

  const [versions, setVersions] = useState(List())

  const newBlogCellModel = ({html, text}) => Map({ 
    html: html || '', 
    text: text || '',
    })


  const [value, setValue] = useState(newBlogCellModel('', ''))

  const _changeListener = ({target: {innerHTML, innerText}}) => {
    const newVersion = versions.push(buildVersion({html: innerHTML, text: innerText}))
    setVersions(newVersion)

    const newValue = value
      .set('html', innerHTML)
      .set('text', innerText)
    setValue(newValue)
  }

  const slowedChangedListener = useCallback(debounce(_changeListener, 400), [versions])

  const _handleKeyDown = (event) => {


    if (event.key === 'Backspace' && value.get('text').length === 0) {

      removeCellIfMultipleCellExist(pos)
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      addCell(pos)
    }
  }

  const showVersions = (versions) => {
    return <>
    {versions.map((version, index) => {
      return <div key={version.get('on')}><b>version {index}</b> {showValue(version.get('value'))}</div>
    })}</>
  }


  const showValue = (value) => {
    return <span>{value.get('text')}</span>
  }
  

  return (
    <div className='wrapper'>
    {showVersions(versions)}
    {/* current {showValue(value)} */}
    <div onInput={slowedChangedListener}
    ref={pointer}
    contentEditable="true"
    className={`blog-cell ${theme}`}
    onKeyDown={_handleKeyDown} ></div>
    </div>
  )
}

BlogCell.propTypes = {
  addCell: PropTypes.func,
  pos: PropTypes.number,
  pointer: PropTypes.object,
  removeCellIfMultipleCellExist: PropTypes.func.isRequired
}
