import React, { useRef, useState } from 'react'
import { FaEye } from "react-icons/fa";

const Form = () => {

    let nameRef = useRef()  //{current:undefined}
    let emailRef = useRef()
    let passwordRef = useRef()

    const [showPassword, setshowPassword] = useState(false);
    console.log(showPassword)

    function handleShow(){
        if(showPassword == false){
            setshowPassword(true)
        }
        else{
            setshowPassword(false)
        }
    }

    function handleSubmit(){
        // console.log("hello")
        let obj = {
            name: nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        console.log(obj)
    }

    function nameChanger(e){
        // console.log("all good")
        // console.log(e.target)  // tag
        console.log(e.target.value)  // tag value

    }
  return (
    <div className='formPage'>
      <label htmlFor="">Name</label>
      <input onChange={nameChanger} ref={nameRef} type="text" placeholder='enter your name' />

      <label htmlFor="">Email</label>
      <input ref={emailRef} type="email" />

      <label htmlFor="">Password</label>
     <div className='passwordBox'>
         <input ref={passwordRef} type={  showPassword ? 'text' : 'password'} />
        <FaEye onClick={handleShow}  id='eyeIcon'/>
     </div>

      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Form
