import { useState } from 'react'

export function Greeting(){
  const [changedText, setChangedText] = useState(false)

  function changeTextHandler(){
    setChangedText(true)
  }

  return (
    <div>
      <h2>Hello world</h2>
      {!changedText && <p>Good morning</p>}
      {changedText && <p>Changed</p>}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  )
}