import React, { useRef, useState } from 'react'

const FormCOmponent = () => {

    let nameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef();
    console.log(nameRef)  // {current : undefined}


    function handleSubmit(e){
        e.preventDefault();
        // console.log("hello")
        let obj = {
            name :nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
        }

        console.log(obj)
    }

    const [x, setx] = useState(false);
    console.log(x)

    function handleSwitch(){
        if(x==false){
            setx(true)
        }
        else{
            setx(false)
        }
    }
  return (
    <div>
      {x ? <form action="">
        <label htmlFor="">Name</label>
        <input ref={nameRef} type="text" placeholder='' />

        <label htmlFor="">Email</label>
        <input ref={emailRef} type="email"  placeholder='email'/>

        <label htmlFor="">Password</label>
        <input ref={passwordRef} type="password" />

        <button onClick={handleSubmit}>submit</button>
      </form> : ''}

      <button onClick={handleSwitch}>switch</button>
    </div>
  )
}

export default FormCOmponent
