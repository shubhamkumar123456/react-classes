// ES7 react redux
// rafce , rfc, rfce, rafc
// 

import React from 'react'
import { useState } from 'react';

const CounterApp = () => {
    // let count = 0;
    const [count , setCount] = useState(0) //hello
    console.log(count)  // hello

    console.log("all is well")
    // function handleIncrement(){
    //     // console.log("running")
    //     count++;
    //     console.log(count)
    // }

    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
       if(count>0){
         setCount(count-1)
       }
    }
    function handleMultiply(){
        setCount(count*2)
    }
    function handleDivide(){
        setCount(count/2)
    }
    function handleReset(){
        setCount(0)
    }

  return (
    <div>
        <h1>Count : {count}</h1> 
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleMultiply}>Multiply by 2</button>
        <button onClick={handleDivide}>Divide by 2</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default CounterApp





