import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import {ToastContainer} from 'react-toastify'
import { useContext } from 'react'
import userContext from './context/userContext'
import Navbar from './components/Navbar'

function App() {

  let ctx = useContext(userContext);
  console.log(ctx)
  console.log(ctx.userData)
  let login = ctx.userData.login
  console.log(login) //false

  return (
    <>
      <BrowserRouter>
      <Navbar/>
          <Routes>
              <Route path='/' element={login===true ? <Home/> : <Navigate to={'/login'}/>}/>
              <Route path='/login' element={login===false? <Login/> : <Navigate to="/"/>}/>
              <Route path='/signup' element={login ==false ?<Signup/> : <Navigate to='/'/>}/>
          </Routes>

          <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App
