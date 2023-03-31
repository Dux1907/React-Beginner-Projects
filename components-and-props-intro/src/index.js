import React from 'react'
import ReactDOM from 'react-dom'
import Data from './Data'
import Card, { center } from './App'

ReactDOM.render(
  <>
  <h1 style = {center}>Some series worth watching</h1>
  {Data.map((val,index,arr) => {
    console.log(arr)
      return(
        <Card 
        imgsrc = {val.imgsrc}
        alt = {val.alt}
        title = {val.title}
        link = {val.link}
        content = {val.content}
        />
       )
   }
  )
}
  </>,
  document.getElementById('root')
)