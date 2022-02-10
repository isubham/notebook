
import { guid } from '../../utils/guuid'
import { useState } from 'react'
import { List, Map } from 'immutable'

export const useVersion = () => {


  const buildVersion = ({text, sendor}) => {
    const version = Map({value: Map({text, sendor}), on: guid() })
    return version
  }

  const getTextOfVersion = (version) => {
    return version.get('value').get('text')
  }
  const [versions, setVersions] = useState(List())

  const showValue = (value) => {
    return <span>{value.get('text')}</span>
  }
  const showVersions = () => {
    return <>
    {versions.map((version, index) => {
      return <div key={version.get('on')}><b>version {index}</b> {showValue(version.get('value'))}</div>
    })}</>
  }

  const addVersion = ({text, sendor}) => {
    const newVersion = versions.push(buildVersion({text, sendor}))
    setVersions(newVersion)
  } 

  

  return {showVersions, addVersion, versions, getTextOfVersion }

}