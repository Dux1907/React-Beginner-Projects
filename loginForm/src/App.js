import React,{useState} from 'react';
import './App.css';


const App = () => {
  
  const [heading, newHeading] = useState('')
  const [initial, final] = useState();
  const hg = (event) =>{
    newHeading(event.target.value)
  }
  const set = () => {
    final(heading)
  }
  return (
    <>
      <div>
        <h3>Hello {initial} </h3>
      <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
          <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" value={heading} onChange={hg} />
        </div>
        <button onClick={set} style={{ display: 'block', margin:'10px',borderRadius:'5px'}}>Click here to submit</button>
        </div>
    </>
  )
}

export default App;
