import React, { useState } from 'react'

const Form1 = () => {

    const [obj, setObj] = useState({
        name:"",//p
        email:"",  //k
        password:""
    })

    // console.log(obj)

    function handleSubmit(e){
        e.preventDefault();
        // console.log("hello")
        console.log(obj)
    }

    function handleChanger(e){
        // console.log(e.target)  //tag    //name
        // console.log(e.target.name) //  value of name attribute  //name
        // console.log(e.target.value)   // tag value  //p

        setObj({...obj,[e.target.name] : e.target.value})   //  {name:"p",email:"k",password:""}

    }
  return (
    <div>
      <h1>This is Form Page using On change</h1>
      <form action="" style={{display:"flex",flexDirection:"column",margin:"auto" ,gap:"10px",width:"350px",padding:"10px", backgroundColor:"orange"}}>
        <label htmlFor="">Name</label>
        <input name='name' onChange={handleChanger} type="text" placeholder='enter your name' />

        <label htmlFor="">Email</label>
        <input name='email' onChange={handleChanger} type="email" />

        <label htmlFor="">Password</label>
        <input name='password' onChange={handleChanger} type="password" />
        
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}

export default Form1
