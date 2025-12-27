import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {
    let navigate = useNavigate()
    let nameRef = useRef()
    let emailRef = useRef()
    let passwordRef = useRef()

   async function handleSubmit(e){
        e.preventDefault()
        
        let obj = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
        }

        console.log(obj)

        try {
            let res =await fetch('http://localhost:8080/api/users/register',{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(obj)
        })

        let data = await res.json();
        console.log(data) // {msg, user}
        if(res.status==200 || res.status==201){
            toast.success(data.msg)
            // localStorage.setItem('user',JSON.stringify(data.user))
            navigate('/login')
        }
        else{
            toast.error(data.msg)
        }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
      <form action="" className='flex flex-col gap-2 w-[60%] m-auto'>
         <label htmlFor="">Name</label>
         <input ref={nameRef} className='border px-4 py-2' type="text" placeholder='enter your name' />
         <label htmlFor="">Email</label>
         <input ref={emailRef} className='border px-4 py-2' type="email" placeholder='enter your email' />
         <label htmlFor="">Password</label>
         <input ref={passwordRef} className='border px-4 py-2' type="password" placeholder='enter your password' />
         <button className='bg-green-300 px-4 py-2 rounded' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Signup
