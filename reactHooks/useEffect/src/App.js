import React,{useState,useEffect} from 'react'

const App = () => {

  const [counter, setCounter] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleChange = () => {
    setCounter({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  useEffect(() => {
    window.addEventListener('resize', handleChange)
    console.log(counter)
    return() => {
      window.removeEventListener('resize',handleChange)
    }
    },[counter])
  return (
    <>
      <h1>Width: {counter.width}</h1>
      <h1>Height: {counter.height}</h1>
      </>
    )
}

export default App