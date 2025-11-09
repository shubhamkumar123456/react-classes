import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Home1 = () => {

    const [arr, setarr] = useState([]);
    console.log(arr)  //''

   
    
    useEffect(()=>{
         async function getData() {
        let res =await fetch('https://dummyjson.com/products');
        let data = await res.json()
        console.log(data);
        // console.log(data.products); //[{},{},{}...30]
        setarr(data.products)
    }
        getData()
    },[])

  return (
    <div>
      {
        arr.map((ele, i) =>{
            return <div>
                <img src={ele.thumbnail} alt="" />
                <h1>{ele.title}</h1>
            </div>
        })
      }
    </div>
  )
}

export default Home1
