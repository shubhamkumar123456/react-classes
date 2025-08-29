import React from 'react'
import './App.css'
import Home from './pages/Home'
import One from './pages/One'
import {BrowserRouter, Routes , Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/xyz' element={<One/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
