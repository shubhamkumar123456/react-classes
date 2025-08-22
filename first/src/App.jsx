
import './App.css'
import ConditionalRendering from './ConditionalRendering'
import CounterApp from './CounterApp'
import EffectHookPractice from './EffectHookPractice'
import Home from './Home'
import Home1 from './Home1'
import Navbar from './Navbar'


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

    {/* <EffectHookPractice/> */}
    <Home1/>
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
