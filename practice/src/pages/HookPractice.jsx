import React, { useReducer, useState } from 'react'

const HookPractice = () => {
    // useReducer hook --> it is a alternative of useState hook
    // redux

    // const [count, setcount] = useState(0);
    // console.log(count)  //1

    function reducers( state, action){
            if(action==='increment karwao'){
                return state+1
            }
            if(action==='minus karwao'){
                return state-1
            }
    }

    const [count, dispatch] = useReducer(reducers , 0)
    console.log(count)

    function handleIncrement(){
       dispatch('increment karwao')   // 
    }
    function handleDecrement(){
       dispatch('minus karwao')
    }
  return (
    <div>
      <h1>THis is useReducer hook</h1>

            <h1>Count :  {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default HookPractice
