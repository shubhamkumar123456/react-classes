import React, { useRef } from 'react'

const Display = () => {

    // let headingRef = useRef()//  gives you object with a key current
    // console.log(headingRef)  // undefined

   

    let inputRef = useRef()

    const handleSubmit=()=>{

        console.log(inputRef.current.value)

        // console.log(headingRef)
        // console.log(headingRef.current)
        // console.log(headingRef.current.innerHTML)
// let text = document.querySelector('#one');
//     console.log(text.innerHTML)
    }
  return (
    <div>

        {/* <h1 ref={headingRef} id='one'>Hello how are you</h1> */}
        <input ref={inputRef} type="text"  placeholder='enter your name'/>

        <button onClick={handleSubmit}>click me</button>

    </div>
  )
}

export default Display
