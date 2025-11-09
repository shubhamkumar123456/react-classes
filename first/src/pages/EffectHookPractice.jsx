import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const EffectHookPractice = () => {

    const [swap, setswap] = useState(false);

    
    // setTimeout(()=>{
        
        // },100)
        
        let sum = 0
        useEffect(()=>{
    let arr = [10, 20, 30, 40, 50]
    for(let val of arr){
        sum = sum+val
    }
    console.log(sum)
    }, [swap])

    console.log("hello")
  return (
    <div>
      <h1>Use Effect Hook Component</h1>


     {
        swap==true ?<h2>This is one</h2> : <h2>This is two</h2>
}
      <button onClick={()=>setswap(!swap)}>click me</button>

      {/* <h1>Sum = {sum}</h1> */}
    </div>
  )
}

export default EffectHookPractice
