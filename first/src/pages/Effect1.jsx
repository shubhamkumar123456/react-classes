import React, { useEffect, useState } from 'react'

const Effect1 = () => {

    const [x, setx] = useState(0);  //0 , 1 , 2, 3, 4, 5 ,6


    // useeffect will run after the page fully render , if its array of dependency is blank it will run only one time
    useEffect(()=>{
        console.log("hello")
    },[x>5])   //false  ,, false , false, false ,false, false, true

    console.log(x)  //true  , //false

    // console.log("hello")  //hello //hello

    


    function handleClick(){
        //true
      setx(x+1)
    }

    
  return (
    <div>
        <h1>This is  useEffect Practice Page</h1>
        <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Effect1
