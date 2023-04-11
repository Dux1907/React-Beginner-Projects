
import React,{useState} from "react";
import ReactDOM from "react-dom";


function App(){
  let [curr,temp] = useState(new Date().toLocaleTimeString())
  const Temp1 = () =>{
    temp(new Date().toLocaleTimeString())
  }
  setInterval(Temp1,1000)
  return (
    <>
    <h1>{curr}</h1>
    </>
  )
}

export default App
