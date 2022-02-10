/* eslint-disable no-unused-vars */
import { useCallback, useContext, useState } from 'react'
import { ThemeContext } from '../../providers/ThemeProvider'
import PropTypes from 'prop-types'
import './index.css'
import { Map } from 'immutable'
import debounce from 'lodash.debounce'
import { wsConnect, wsSend } from './ws'
import { getChannelIdFromUrl, getSendorFromUrl } from '../../utils/url'

import { useVersion } from './versioning'

export const BlogCell = ({ addCell, pos, pointer, removeCellIfMultipleCellExist }) => {
  const { theme } = useContext(ThemeContext)

  const { versions, addVersion, showVersions } = useVersion()


  const [wsUrl, setWsUrl] = useState("ws://localhost:9000")
  const [channel, setChannel] = useState(getChannelIdFromUrl())
  const [sendor, setSendor] = useState(getSendorFromUrl())

  const onWSMessage = (value) => {
    if (value !== undefined) {
      const wsMessage = JSON.parse(value.data)
      const change = {text:wsMessage.message.text, sendor:wsMessage.message.sendor}
      if (sendor !== change.sendor) {
        addVersion(change)
      }
    }
  }

  const ws = wsConnect(wsUrl, channel, onWSMessage)
  

  const newBlogCellModel = ({html, text}) => Map({ 
    text: text || ''
    })


  const [value, setValue] = useState(newBlogCellModel('', ''))

  const _changeListener = ({target: {innerHTML, innerText}}) => {
    const change = {text: innerText, sendor: sendor}
    addVersion(change)
    const newValue = value
      .set('html', innerHTML)
      .set('text', innerText)
    setValue(newValue)
    sendChange(change)
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


  const sendChange = (message) => {
    console.log('message', message)
    wsSend({wsClient: ws, channel, sendor, message})
  }

  return (
    <div className='wrapper'>
      {showVersions()}
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
