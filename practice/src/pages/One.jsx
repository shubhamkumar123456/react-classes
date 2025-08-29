import React from 'react'
import { useLocation } from 'react-router-dom'
import Trial from '../components/Trial'

export function XYZ(props){
  console.log(props)
   return <div style={{backgroundColor:"lightgreen"}}>
      <h1>I am child component</h1>
      <h3>{props.x}</h3>
      <h3>{props.y}</h3>
   </div>
}



const One = () => {
  let location = useLocation();
  console.log(location)


  return (
    <div>
      <h1>This is one page</h1>
   {location.state && <div>
       <p>{location.state.name}</p>
     <p>{location.state.age}</p>
     <p>{location.state.course}</p>
    </div>}

    <XYZ x='10' y='my name is jhon'/>
    <Trial color={'red'} text="One,, Hii all is not well"/>
    </div>
  )
}



export default One

