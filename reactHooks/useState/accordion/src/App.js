import React,{useState} from 'react'
import {data} from './data'
import Accordion from './Accordion'

const App = () => {
  const state = data // or we can use hooks 
return (
  <>
  {
   state.map((val) => {
     const {id} = val
      return <Accordion key = {id} {...val} />
   })
  }
  </>
)
}
export default App

