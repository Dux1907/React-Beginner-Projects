import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Default from './Default'
import Search from './Search'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='*' element={<Default />}></Route>
        <Route path = '/search' element = {<Search />}></Route>
      </Routes>
    </>
  )
}

export default App