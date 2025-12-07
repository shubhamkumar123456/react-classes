import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Typed from 'typed.js';

const Signup = () => {
    let navigate = useNavigate()
    let arr = JSON.parse(localStorage.getItem('signup')) || []
    console.log(arr)
    const [obj, setobj] = useState({
        name:"",
        email:"",
        password:""
    });

    const el = useRef();

    useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Signup Form'],
      typeSpeed: 100,
      backSpeed:100,
      loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  function handleChanger(e){
    // e.target --> tag
    setobj({...obj, [e.target.name]:e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(obj)
    let find = arr.find((ele)=>ele.email === obj.email);
    if(find){
        return toast.error('user already exists',{position:"top-center"})
    }
    arr.push(obj);
    localStorage.setItem('signup',JSON.stringify(arr))
    toast.success('user registered successfully',{position:"top-center"})
    navigate('/login')
  }
  return (
    <div className='h-[calc(100vh-11vh)] bg-[#070505cb] flex items-center justify-center'>
        <form action="" className='p-5 min-w-[350px] rounded-2xl flex flex-col gap-2 bg-[#302e2e] text-white'>
            <h2 ref={el} className='text-center text-2xl font-semibold'> </h2>
            <label htmlFor="">Name</label>
            <input name='name' onChange={handleChanger} className='text-white  border px-4 py-2 rounded-md' type="text" placeholder='enter your name' />
            <label htmlFor="">Email</label>
            <input name='email' onChange={handleChanger} className='text-white  border px-4 py-2 rounded-md' type="email" placeholder='enter your email' />
            <label htmlFor="">Password</label>
            <input name='password' onChange={handleChanger} className='text-white  border px-4 py-2 rounded-md' type="password" placeholder='enter your Password' />
            <button onClick={handleSubmit} className='bg-green-800 text-white rounded-md w-full hover:bg-green-600 py-2'>Sign Up</button>
            <p className='text-center my-2'>Already have an account ? <Link to={'/login'}>Login</Link></p>
        </form>
    </div>
  )
}

export default Signup
