import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { MdHome } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/UserSlice';


const Navbar = () => {
  let ctx = useSelector((state)=>state.cart);
  console.log(ctx)
  console.log(ctx)  //{cartArr, setcartArr, getItem}
  let dispatch = useDispatch()

  function handleLogOut(){
      dispatch(logoutUser())
  }
  return (
    <div className='flex z-50 fixed top-0 left-0 right-0 items-center justify-between px-10 h-[65px] bg-red-300 '>
      <h1>Website</h1>
      <ul className='flex items-center gap-10'>
        <li className='flex items-center'><MdHome/> <Link to={'/'}>Home</Link> </li>
        <li className='flex items-center'><Link to={'/'}>About</Link> </li>
        <li className='flex items-center'><Link to={'/'}>Contact</Link> </li>
        <li className='flex items-center'><CiShoppingCart/> <Link to={'/cart'}>Cart</Link> <sup>{ctx.cartArr.length}</sup> </li>
        <li><button onClick={handleLogOut}>Logout</button></li>
      </ul>
    </div>
  )
}

export default Navbar
