
import styles from './index.css'
const d = new Date().toLocaleDateString();
const t = new Date().toLocaleTimeString()
export default function App() {
  return (
    <>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, harum.</h2>
      <p>{`Current Date is : ${d}`}</p>
      <p>{`Current Time is : ${t}`}</p>
    </>
  )
}