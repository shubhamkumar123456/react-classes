
import './App.css'
import ConditionalRendering from './pages/ConditionalRendering'
import CounterApp from './pages/CounterApp'
import EffectHookPractice from './pages/EffectHookPractice'
import Home from './pages/Home'
import Home1 from './pages/Home1'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Form from './pages/Form'
import Form1 from './pages/Form1'
import Effect1 from './pages/Effect1'
import ApiFetch from './pages/ApiFetch'
import ViewRecipe from './pages/ViewRecipe'

// normal function
// function xyz(){
//   // console.log("hello")
//   return 'hello'
// }


// let ans = xyz()
// console.log(ans)

function App() {
  
  // variable and function decleration should be here ...
  // let x = 'hello'
  // let num = 0

  return (
    <>

    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/'  element={<ApiFetch/>}/>
            <Route path='/effect'  element={<EffectHookPractice/>}/>
            <Route path='/conditional'  element={<ConditionalRendering/>}/>
            <Route path='/counter'  element={<CounterApp/>}/>
            <Route path='/home'  element={<Home/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/form1' element={<Form1/>}/>
            <Route path='/effect1' element={<Effect1/>}/>
            <Route path='/view' element={<ViewRecipe/>}/>
        </Routes>
    </BrowserRouter>


    {/* <EffectHookPractice/> */}
    {/* <Home1/> */}
    {/* <ConditionalRendering/> */}
    {/* <CounterApp/> */}
      {/* <Navbar/>
      <h1 id='one'></h1>

      <h1> {x}  </h1>
      <h1>{num}</h1>

      <h1>num</h1> */}
      


      {/* <script>
          let tag = document.querySelector('#one');
          tag.innerHTML = 'hello'
      </script> */}
     
      {/* <h1>This is my first webpage</h1> */}

      {/* <Home/> */}
    </>
  )
}

export default App
