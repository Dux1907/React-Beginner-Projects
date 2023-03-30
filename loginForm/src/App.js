import React,{ useState } from "react";
import './index.css'
export default function App() {
  const [initial,final] = useState();
  const [heading, newhg] = useState();
  const [last, lastNew] = useState();
  const [full, fullNew] = useState();
  const change = (e) => {
    final(e.target.value)
  }
  const changeOne = (e) => {
    lastNew(e.target.value)
  }
  const set = (event) => {
    event.preventDefault()  // to prevent of refeshing the page as when the submit button is clicked in a form,the page is refreshed immediately and automatically.
    newhg(initial)
    fullNew(last)
    final('')
    lastNew('')
  }
  return(
    <>
      <h2 className='mb-3'>Hello {heading} {full} </h2>
      <form>
      <input id='input' type='text' placeholder='Enter your first name' value={initial} onChange={change} />
      <input id='input' type='text' placeholder='Enter your last name' value={last} onChange={changeOne} />
      <br/>
        <button onClick={set} type='submit' className="btn btn-primary mt-3">Click to submit</button>
        </form>
    </>
  );
};
