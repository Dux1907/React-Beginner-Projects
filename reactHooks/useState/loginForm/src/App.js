import { getValue } from "@testing-library/user-event/dist/utils";
import React,{ useState } from "react";
import './index.css'
export default function App() {
  const [initial, final] = useState({
    fname: '',
    lname: ''
  });
  const change = (e) => {
    let n = e.target.name
    
    final((random) => {
      if (n === 'fName') {
        return {
          fname: e.target.value,
          lname: random.lname
        }
      }
      else {
        return {
          fname: random.fname,
          lname: e.target.value
        }
      }
        })
   }
  
  const set = (event) => {
    event.preventDefault()  // to prevent of refeshing the page as when the submit button is clicked in a form,the page is refreshed immediately and automatically.
    alert('saved')
  }
  return(
    <>
      <h2 className='mb-3'>Hello {initial.fname} {initial.lname} </h2>
      <form>
      <input id='input' type='text' placeholder= 'Enter your first name' name = 'fName' onChange={change} />
      <input id='input' type='text' placeholder='Enter your last name'  name = 'lName' onChange={change} />
      <br/>
        <button onClick={set} type='submit' className="btn btn-primary mt-3">Click to submit</button>
        </form>
    </>
  );
};
