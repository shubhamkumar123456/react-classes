import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../redux/UserSlice'

const Login = () => {
    let emailRef = useRef()  //{current:input email}
    let passwordRef = useRef()
    let navigate = useNavigate()
    let dispatch = useDispatch()

    let arr = JSON.parse(localStorage.getItem('signup')) || [];
    console.log(arr)
    function handleSubmit(e){
        e.preventDefault();
        let obj ={
            email:emailRef.current.value,
            password:passwordRef.current.value
        }
        console.log(obj)

        let find = arr.find((ele)=>ele.email===obj.email); //{} , undefined
        if(find){
            if(find.password === obj.password){
                localStorage.setItem('login',JSON.stringify({email:obj.email, login:true}))
                dispatch(loginUser(obj.email))
            }
            else{
                return toast.error('wrong password',{position:"top-center"})
            }
        }
        else{
            return toast.error('user not found',{position:"top-center"})
        }

    }
  return (
    <div className='h-[calc(100vh-11vh)] bg-[#070505cb] flex items-center justify-center'>
        <form action=""  className='p-5 min-w-[350px] rounded-2xl flex flex-col gap-2 bg-[#302e2e] text-white'>
            <h2 className='text-center text-2xl font-semibold'>Login Form</h2>
            <label htmlFor="">Email</label>
            <input ref={emailRef} className='text-white  border px-4 py-2 rounded-md' type="email" placeholder='enter your email' />
            <label htmlFor="">Password</label>
            <input ref={passwordRef} className='text-white  border px-4 py-2 rounded-md' type="password" placeholder='enter your Password' />
            <button onClick={handleSubmit} className='bg-green-800 mt-2 text-white rounded-md w-full hover:bg-green-600 py-2'>Login</button>
            <p className='text-center my-2'>Don't have an account ? <Link to={'/register'}>register</Link></p>
        </form>
    </div>
  )
}

export default Login
