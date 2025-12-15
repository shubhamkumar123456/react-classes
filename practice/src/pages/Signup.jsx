import React, { useRef } from 'react'

const Signup = () => {
    let nameRef = useRef()   //{current: undefined}
    let emailRef = useRef()
    let passwordRef = useRef()

    async function handleSubmit(e){
        e.preventDefault()
        // console.log("hello")
        let obj = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
        }

        console.log(obj)

        let res = await fetch('http://localhost:8090/register',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        })

        let data = await res.json();
        console.log(data)
    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input ref={nameRef} type="text" />
        <label htmlFor="">Email</label>
        <input ref={emailRef} type="text" />
        <label htmlFor="">Password</label>
        <input ref={passwordRef} type="text" />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Signup
