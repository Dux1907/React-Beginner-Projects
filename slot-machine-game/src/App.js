import NotMatching from "./NotMatching";
import Matching from './Matching'
const Result = (props) => {
  // let { x, y, z } = props
  // console.log(y)
  return(
    (props.x === props.y && props.y === props.z) ?
      <Matching x={props.x}
                y={props.y}
                z = {props.z}
       /> : <NotMatching x = {props.x}
                         y={props.y}
                         z={props.z} />
  )
    
}
const App = () => {
  return (
  <>
      <h1>🎰Welcome to slot machine game.</h1>
      <hr/>
      <Result 
        x='😄'
        y='😄'
        z = '😄'
      />
      <hr />
      <Result 
        x='😄'
        y='😢'
        z = '🤣'
      />
      <hr />
      <Result 
        x='🎅'
        y='👧'
        z = '👦'
      />
      <hr />
      <h6>Change the values of props in the code to get more outputs.</h6>
    </>
  )
}
export default App;
