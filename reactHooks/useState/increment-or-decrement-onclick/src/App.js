import React,{ useState } from "react";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

 function App() {
  let [count,state] = useState(0);
  const Increment = () => {
  state(count + 1)
}
   const Decrement = () => {
  if(count > 0)
    state(count - 1)
  else
    alert('limit reached')
}
  return (
    <>
      <h1>{count}</h1>
      <Tooltip title="Add">
        <Button variant="contained" onClick={Increment} type='submit'><i class="fa-solid fa-plus"></i></Button>
        </Tooltip>
      <Tooltip title="Subtract">
        <Button variant="contained" onClick={Decrement} type='submit'><i class="fa-solid fa-minus"></i></Button>
        </Tooltip>
  </>
  );

  }
  export default App