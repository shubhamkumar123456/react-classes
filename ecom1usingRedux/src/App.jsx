import React, { useState } from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import { ToastContainer,toast } from 'react-toastify';
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useSelector } from 'react-redux'

const App = () => {

  let ctx = useSelector((state)=>state.users);  // {email:"", login:false};  //{email:one@gmail.com, login:true}
  console.log(ctx)


  
 
  return (
    <div>
      <BrowserRouter>
     <div className='h-[70px]'>
       <Navbar  />
     </div>
          <Routes>
              <Route path='/'  element ={ctx.login===true ? <Home /> : <Navigate to={'/login'}/>}/>
              <Route path='/view'  element ={<View/>}/>
              <Route path='/cart'  element ={<Cart />}/>
              <Route path='/login'  element ={ctx.login===false ? <Login /> : <Navigate to={'/'}/>}/>
              <Route path='/register'  element ={ctx.login===false ?<Signup /> : <Navigate to={'/'}/> }/>
          </Routes>
          <ToastContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App
