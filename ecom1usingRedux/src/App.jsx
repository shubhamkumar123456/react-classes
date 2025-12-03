import React, { useState } from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import { ToastContainer,toast } from 'react-toastify';

const App = () => {

 
  return (
    <div>
      <BrowserRouter>
     <div className='h-[70px]'>
       <Navbar  />
     </div>
          <Routes>
              <Route path='/'  element ={<Home />}/>
              <Route path='/view'  element ={<View/>}/>
              <Route path='/cart'  element ={<Cart />}/>
          </Routes>
          <ToastContainer/>
      </BrowserRouter>
    </div>
  )
}

export default App
