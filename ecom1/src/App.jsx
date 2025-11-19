import React, { useState } from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'

const App = () => {

  const [cartItem, setcartItem] = useState([]);  //[{powder}]   ,[{powder},{gucchi}]
  console.log(cartItem)
  function recieveItem(obj){
    // console.log(obj)  //  {gucchi}
    obj.quantity = 1
    setcartItem([...cartItem, obj])  //  [{powder},{gucchi}]
  }
  return (
    <div>
      <BrowserRouter>
     <div className='h-[70px]'>
       <Navbar/>
     </div>
          <Routes>
              <Route path='/'  element ={<Home recieveItem={recieveItem}/>}/>
              <Route path='/view'  element ={<View/>}/>
              <Route path='/cart'  element ={<Cart cartItem={cartItem}/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
