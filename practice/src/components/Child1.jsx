import React, { useEffect } from 'react'

const Child1 = (props) => {
    let obj = {
        name:"peter",
        age:37,
        course:"fullstack"
    }
    console.log(props)
   useEffect(()=>{
     props.data(obj)
   },[])
  return (
    <div>
      <h1>THis is CHild 1 Component</h1>
    </div>
  )
}

export default Child1
