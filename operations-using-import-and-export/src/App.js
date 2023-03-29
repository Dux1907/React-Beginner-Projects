import {add,subtract,multiply,divide} from './Calc'

function App() {
  return (
    <ul>
      <li>The result on addition gives {add(10, 15)}</li>
      <li>The result on addition gives {subtract(37, 230)}</li>
      <li>The result on addition gives {multiply(13, 78)}</li>
      <li>The result on addition gives {divide(81, 99)}</li>
  </ul>
  )
}

export default App