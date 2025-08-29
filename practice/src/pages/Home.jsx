import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { XYZ } from './One'
import Trial from '../components/Trial'

const Home = () => {
    let navigate = useNavigate()
    let obj = {
        name:"one",
        age:45,
        course:"fullstack"
    }

    function handleClick(){
        // console.log("running")
        
        navigate('/xyz',{state:obj})
    }
  return (
    <div>
      <h1>Home page</h1>
      <p>{obj.name}</p>
      <p>{obj.age}</p>
      <p>{obj.course}</p>
      <Link to={'/xyz'} state={obj}>click me 1</Link>
      <button onClick={handleClick}>click me 2 </button>
      <XYZ x="no" y="yes"/>
      <Trial color="green" text="Home, hii all is well"/>
    </div>
  )
}

export default Home
