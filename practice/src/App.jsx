import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import One from './pages/One'
import {BrowserRouter, Routes , Route } from 'react-router-dom'
import Home1 from './pages/Home1'
import HookPractice from './pages/HookPractice'
import Todo from './pages/Todo'

const App = () => {
  const [arr, setarr] = useState([]);
  
  function abc(a){
    console.log(a)
    setarr(a);
  }
  return (
    <div>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home1 arr={arr}/>}/>
            <Route path='/xyz' element={<One abc={abc}/>}/>
            <Route path='/hookPractice' element={<Todo/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
