import React, { useState } from 'react'
import CHildComponent from '../components/CHildComponent'
import Child1 from '../components/Child1'

const Home1 = () => {
    let x = 10
    const [value, setvalue] = useState('');
    function getData(a){
        console.log(a)
        setvalue(a)
    }
  return (
    <div>
      <h1>THis is Home page</h1>
      <h3>Name = {value.name}</h3>
      <h3>Name = {value.age}</h3>
      <h3>Name = {value.course}</h3>
      <CHildComponent data={x} title ={'home1'}/>
      <Child1 data={getData}/>
    </div>
  )
}

export default Home1
