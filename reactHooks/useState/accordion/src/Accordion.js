
import React,{useState} from 'react'

const Accordion = ({question,answer}) => {
  const [data,setData] = useState(false)
    return (
      <>
      <div>
        <p style = {{display:'inline',marginRight:'7px'}} onClick = {() => setData(!data)}class = 'button'>{data ? '-': '+'}</p>
      <h2 style = {{display:'inline'}}>{question}</h2>
      </div>
      {data && <p>{answer}</p>}
      </>
    )
}

export default Accordion