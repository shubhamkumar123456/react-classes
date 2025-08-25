import React from 'react'

import Signup from './pages/Signup'
import Login from './pages/Login'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PNF from './pages/PNF'
import Navbar from './components/Navbar'
import FormState from './pages/FormState'

const App = () => {
  return (
    <div>
       {/* <BrowserRouter>
       <Navbar/>
            <Routes>
                <Route path='/'  element ={<Home/>}/>
                <Route path='/xyz'  element ={<Login/>}/>
                <Route path='/abc'  element ={<Signup/>}/>
                <Route path='/*'  element ={<PNF/>}/>
            </Routes>
       </BrowserRouter> */}

      
      <FormState/>
    </div>
  )
}

export default App

