import React, { useState } from 'react'

function App() {
  let [x, y] = useState(new Date().toLocaleTimeString())
  const Refresh = () => {
    y(new Date().toLocaleTimeString())
  }
  return (
    <>
    <h1>Current Time : {x}</h1>
      <button type='submit' onClick={Refresh}>Refresh Time</button>
      </>
  );
}

export default App;
