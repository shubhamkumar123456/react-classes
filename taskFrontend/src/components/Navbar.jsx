import React, { useContext } from 'react'
import userContext from '../context/userContext';

const Navbar = () => {
    let ctx = useContext(userContext)  //

    function handleLogout(){
        localStorage.removeItem('tasksAuth');
        ctx.setuserData({_id:"",name:"",email:"",password:"",login:false})
    }
  return (
    <div className='flex bg-amber-500 justify-between px-4 py-2 border rounded'>
      <h3>TaskApp</h3>
      <ul>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  )
}

export default Navbar
