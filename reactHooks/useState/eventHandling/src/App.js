import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import styles from './index.css'
// const style = {
//   backgroundColor: 'orange'
// }


const App = () => {
  const hi = () => {
    console.log('clicked')
    newBg('blue')
    newText('Unhover')
  }
  const bye = () => {
    newBg('green')
    newText('Hover Again')
  }
  const [bg, newBg] = useState('red')
  const [text,newText] = useState('Hover over me!')
  return (
    <>
      <html style = {{backgroundColor : bg}}>
        <button onMouseEnter={hi} onMouseLeave={bye}>{text}</button>
        </html>
    </>
  )
}

export default App;
