import { List } from 'immutable'
import { useState } from 'react'
import { guid } from '../../utils/guuid'
export const Versions = () => {
 
  const [versions, setVersions] = useState(List())

  const addVersion = () => {
    const newVersions = versions.push(`version - ${versions.size}`)
    setVersions(newVersions) 
  }

  return <div>{
    versions.map(version => 
    (
      <div key={guid()}>{version}</div>
    ))
  }
      <button onClick={addVersion}>Add Version</button>
  </div>

}
