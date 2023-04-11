import React,{useReducer} from 'react'

const reducer = (state,action) =>{
  switch(action.type){
    case 'Increment' :
      return {
        count : state.count + 1,showText : false
      }
      case 'Show' :
      return {
        count : state.count + 5,showText : true
      }
      default:
        return state;
  }
}
const App = () =>{
const [state,dispatch] = useReducer(reducer,{count:0,showText:true});

return (
  <>
  <h1>{state.count}</h1>
  <button onClick = {() =>
    dispatch({type:'Increment'})}>Increment</button>
  <button onClick = {() =>
    dispatch({type:'Show'})}> Show and increment</button>
    {
      state.showText && <p>Count is {state.count}</p>
    }
  </>
)

}

export default App