import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { useEffect } from 'react'

const Home = () => {
    let obj = {
        name:"shubham",
        age:34,
        course:"fullstack"
    }

    let ctx = useContext(UserContext);
    console.log(ctx)
    useEffect(()=>{
        ctx.setdata(obj)
    },[])
  return (
    <div>
      <h1>THis is Home Page</h1>
    </div>
  )
}

export default Home
