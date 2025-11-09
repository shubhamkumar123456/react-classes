import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h3>Website</h3>
      <ul>
        <li> <Link to={'/'}>Home</Link> </li>
        {/* <li> <a href="/xyz">About</a> </li> */}   
        <li> <Link to={'/xyz'}>About</Link> </li>
        <li> <Link to={'/abcd'}>Contact Us</Link> </li>
      </ul>
    </div>
  )
}

export default Navbar
