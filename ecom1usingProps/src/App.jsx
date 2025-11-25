import React, { useState } from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import { ToastContainer,toast } from 'react-toastify';

const App = () => {

  const [cartItem, setcartItem] = useState([]);  //[{powder}]   ,[{powder},{gucchi},{},{}]
  console.log(cartItem)
  function recieveItem(obj){
    // console.log(obj)  //  {gucchi}
    obj.quantity = 1

    let find = cartItem.find((ele)=>ele.id == obj.id)   //ele , undefined

    if(find){
        toast.error('item already exists',{position:"top-center"})
      return
    }

    setcartItem([...cartItem, obj])  //  [{powder},{gucchi}]
    toast.success('item added successfully',{position:"top-center"})
  }
  return (
    <div>
      <BrowserRouter>
     <div className='h-[70px]'>
       <Navbar cartItem = {cartItem} />
     </div>
          <Routes>
              <Route path='/'  element ={<Home recieveItem={recieveItem}/>}/>
              <Route path='/view'  element ={<View/>}/>
              <Route path='/cart'  element ={<Cart cartItem={cartItem} setcartItem={setcartItem}/>}/>
          </Routes>
          <ToastContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App
