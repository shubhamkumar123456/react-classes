import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { MdHome } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import CartContext from '../context/CartContext';

const Navbar = () => {
  let ctx = useContext(CartContext);
  console.log(ctx)  //{cartArr, setcartArr, getItem}
  return (
    <div className='flex z-50 fixed top-0 left-0 right-0 items-center justify-between px-10 h-[65px] bg-red-300 '>
      <h1>Website</h1>
      <ul className='flex items-center gap-10'>
        <li className='flex items-center'><MdHome/> <Link to={'/'}>Home</Link> </li>
        <li className='flex items-center'><Link to={'/'}>About</Link> </li>
        <li className='flex items-center'><Link to={'/'}>Contact</Link> </li>
        <li className='flex items-center'><CiShoppingCart/> <Link to={'/cart'}>Cart</Link> <sup>{ctx.cartArr.length}</sup> </li>
      </ul>
    </div>
  )
}

export default Navbar
