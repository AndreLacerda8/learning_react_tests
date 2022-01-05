import { useState } from 'react'
import { Output } from './Output'

export function Greeting(){
  const [changedText, setChangedText] = useState(false)

  function changeTextHandler(){
    setChangedText(true)
  }

  return (
    <div>
      <h2>Hello world</h2>
      {!changedText && <Output>Good morning</Output>}
      {changedText && <Output>Changed</Output>}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  )
}