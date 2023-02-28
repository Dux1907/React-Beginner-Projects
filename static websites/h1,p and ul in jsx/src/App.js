import styles from './index.css'
let series = 'Farzi'
export default function App(){
  return(
    <div className = 'App'>
      <h1>Hi,this is anonymous!</h1>
      <p>I am Learning React.</p>
      <ul>
        <li>Family Man</li>
        <li>Special Ops</li>
        <li>{`last one is ${series}`}</li>
      </ul>
     </div>
  )
}