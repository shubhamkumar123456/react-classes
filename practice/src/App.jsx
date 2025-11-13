import React from 'react'
import './App.css'
import Home from './pages/Home'
import One from './pages/One'
import {BrowserRouter, Routes , Route } from 'react-router-dom'
import Home1 from './pages/Home1'
const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home1/>}/>
            <Route path='/xyz' element={<One/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
