import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    let navigate = useNavigate()

    const handleSignup = ()=>{
        console.log("hello")
        navigate('/abc')

    }
  return (
    <div className='bg-yellow-200 h-[70px] items-center justify-between flex px-7 '>
      {/* <h1>This is Navbar</h1> */}
      <h1>Webite</h1>
      <ul className='flex gap-7'>
        {/* <li><a href="/">Home</a></li>
        <li><a href="/xyz">Login</a></li>
        <li><a href="/abc">Signup</a></li> */}

        <li><Link to="/">Home</Link></li>
        <li><Link to={'/xyz'}>Login</Link></li>
        <li><Link to={'/abc'}>Signup</Link></li>
        <li onClick={handleSignup}><p>Signup</p></li>
      </ul>
    </div>
  )
}

export default Navbar
