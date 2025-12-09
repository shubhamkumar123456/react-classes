import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Trial from '../components/Trial'
import CHildComponent from '../components/CHildComponent'
import ThemeState from '../../Context/ThemeState'

export function XYZ(props){
  console.log(props)  //{abc:function}



   return <div style={{backgroundColor:"lightgreen"}}>
      <h1>I am child component</h1>
      <h3>{props.x}</h3>
      <h3>{props.y}</h3>
   </div>
}



const One = (props) => {
  let location = useLocation();
  console.log(location)

  let arr = [10, 12,11,9]
  
  useEffect(()=>{
    props.abc(arr)
  },[])

  return (
    <ThemeState>
    <div>
      <h1>This is one page</h1>
   {location.state && <div>
       <p>{location.state.name}</p>
     <p>{location.state.age}</p>
     <p>{location.state.course}</p>
    </div>}

    <XYZ x='10' y='my name is jhon'/>
    <Trial color={'red'} text="One,, Hii all is not well"/>

    <CHildComponent x={'red'} data={20} title={"one component"}/>
    <Link to={'/'}>Home1</Link>
    </div>
    </ThemeState>
  )
}



export default One

