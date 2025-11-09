import './App.css'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route  path='/'  element={<Home/>}/>
              <Route path='/xyz' element={<About/>}/>
              <Route path='/abcd' element = {<ContactUs/>}/>
              <Route path='*' element={<PageNotFound/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
