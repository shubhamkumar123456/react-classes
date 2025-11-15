import React from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import View from './pages/View'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route path='/'  element ={<Home/>}/>
              <Route path='/view'  element ={<View/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
