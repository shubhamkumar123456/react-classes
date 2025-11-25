import React from 'react'
import UserContext from './UserContext'
import { useState } from 'react';

const UserState = (props) => {
        const [data, setdata] = useState({name:"", age:"", course:"" });
        let x = 10;
        

        function dummy(){
            console.log("hello")
        }

  return (
    <UserContext.Provider value={{data, dummy, x, setdata}}>
            {props.children}
    </UserContext.Provider>
  )
}

export default UserState
