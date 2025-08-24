import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    let navigate = useNavigate()

    const handleSignup = ()=>{
        console.log("hello")
        navigate('/abc')

    }
  return (
    <div>
      {/* <h1>This is Navbar</h1> */}
      <h1>Webite</h1>
      <ul>
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
