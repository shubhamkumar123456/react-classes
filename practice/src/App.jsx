import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import One from './pages/One'
import {BrowserRouter, Routes , Route } from 'react-router-dom'
import Home1 from './pages/Home1'
import HookPractice from './pages/HookPractice'
import Todo from './pages/Todo'
import Multiwork from './pages/Multiwork'
import ReduxTask from './pages/ReduxTask'
import AnimationPage from './pages/AnimationPage'
import AnimationOne from './pages/AnimationOne'

const App = () => {
  const [arr, setarr] = useState([]);
  
  function abc(a){
    console.log(a)
    setarr(a);
  }

  const [count, setcount] = useState(0);

  return (
    <div>
      {/* <p>count: {count}</p>
      <button onClick={()=>setcount(count+1)}>click me</button> */}
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<AnimationOne arr={arr} count={count}/>}/>
            <Route path='/xyz' element={<One abc={abc}/>}/>
            <Route path='/hookPractice' element={<Multiwork/>}/>
            <Route path='/redux' element={<ReduxTask/>}/>
        </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App
