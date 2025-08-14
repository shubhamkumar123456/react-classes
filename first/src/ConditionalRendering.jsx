import React from 'react'
import { useState } from 'react';

const ConditionalRendering = () => {
    // let text = true;
    const [text, setText] = useState(true); //false
    const [show, setshow] = useState(false);
    console.log(text)

    function handleChange(){
        // if(text===true){
        //    setText(false)
        // }
        // else{
        //     setText(true)
        // }

        setText(!text)
    }

    function handleClose(e){
        e.preventDefault()
        setshow(false)
    }
  return (
    <div>
      <h1>THis is conditional rendering page</h1>

      {/* { text ?  <h3>THis is text one</h3> :  <h3>This is text two</h3> } */}
{/* 
    { text===true && <h3>THis is text one</h3> }
    { text===false  && <h3>THis is text two</h3> } */}
     

      
      <button onClick={handleChange}>click me</button>

      <button onClick={()=>setshow(true)}>show</button>

     { show&&<form action="" style={{border:"1px solid",position:"relative",padding:"20px"}}>

        <button onClick={handleClose} style={{position:"absolute", right:"10px",top:"5px"}}>X</button>
        <label htmlFor="">Name</label><br />
        <input type="text" placeholder='enter your name' /><br />

        <label htmlFor="">Email</label>
        <input type="email" />
    
      </form>}
    </div>
  )
}

export default ConditionalRendering
