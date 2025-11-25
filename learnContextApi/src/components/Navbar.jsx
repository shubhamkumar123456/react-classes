import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <h3>Website</h3>
        <ul>
            <li> <Link to={'/'}>Home</Link> </li>
            <li> <Link to={'/about'}>About</Link> </li>
            <li> <Link to={'/contact'}>Contact</Link> </li>
        </ul>
    </div>
  )
}

export default Navbar
