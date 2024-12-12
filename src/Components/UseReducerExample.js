import React from 'react'
import { useReducer } from 'react'


function jana(state,actions){
    switch(actions.type){
     case '+':
         return{count:state.count+1}
    
    case '-':
         return{count:state.count-1}
    default:
        return {count:0}
    }
 }
const UseReducerExample = () => {

    
    
const [state,dispatch]=useReducer(jana,{count:1})


  return (
    <div>
      <button onClick={()=>dispatch({type:'+'})}>+</button>
      <h4>{state.count}</h4>
      <button onClick={()=>dispatch({type:'-'})}>-</button>
      <button onClick={()=>dispatch({type:'('})}>Reset</button>
    </div>
  )
}

export default UseReducerExample
