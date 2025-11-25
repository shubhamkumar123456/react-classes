import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Contact = () => {
        let ctx = useContext(UserContext);
        console.log(ctx)

  return (
    <div>
      <h1>This is contact page</h1>

       

        <p><b>UserName =  {ctx.data.name}</b></p>
        <p><b>UserAge =  {ctx.data.age}</b></p>
        <p><b>UserCourse =  {ctx.data.course}</b></p>

    </div>
  )
}

export default Contact
