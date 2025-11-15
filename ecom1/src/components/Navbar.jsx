import React from 'react'
import {Link} from 'react-router-dom'
import { MdHome } from "react-icons/md";
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 h-[65px] bg-red-300 '>
      <h1>Website</h1>
      <ul className='flex items-center gap-10'>
        <li className='flex items-center'><MdHome/> <Link to={'/'}>Home</Link> </li>
        <li className='flex items-center'><Link to={'/'}>About</Link> </li>
        <li className='flex items-center'><Link to={'/'}>Contact</Link> </li>
      </ul>
    </div>
  )
}

export default Navbar
