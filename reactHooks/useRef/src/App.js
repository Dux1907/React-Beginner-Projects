
import { useEffect, useState,useRef } from 'react';
export default function App() {
  const [val,setVal] = useState('');
    const count = useRef(0);
    const inputRef = useRef();
    const changeRef = (e) => {
      setVal(e.target.value)
      inputRef.current.style.color = 'red'
      inputRef.current.style.fontSize = '4rem'
    }
  useEffect(() =>{
    console.log(val + ' ' + count.current)
    count.current += 1
  })
  return (
    <>
      <h1 ref = {inputRef} >Number of time it changed: {count.current}</h1>
      <input type = 'text' value = {val} onChange = {changeRef}/>
    </>
  )
}
