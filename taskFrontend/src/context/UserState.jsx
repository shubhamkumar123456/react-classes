import React, { useState } from 'react'
import userContext from './userContext'

const UserState = (props) => {
    let userDetails = JSON.parse(localStorage.getItem('tasksAuth'))
    const [userData, setuserData] = useState({
        name:userDetails?userDetails?.name :"",
        email:userDetails?userDetails.email:"",
        password:userDetails?userDetails.password :"",
        _id:userDetails? userDetails.password :"",
        login:userDetails?true:false
    });

    function setLogin(obj){
        console.log(obj)  // {msg, user:{_id , name , email, password}}
        // localStorage.setItem('tasksAuth',JSON.stringify(data.user))
        setuserData({...userData, ...obj.user , login:true})  // {_id:"awawdawd", name:"one", email:"", password:""}
    }

  return (
    <userContext.Provider value={{userData , setLogin ,setuserData }}>
        {props.children}
    </userContext.Provider>
  )
}

export default UserState
