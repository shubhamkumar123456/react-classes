import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SiderComponent from '../components/SiderComponent';

const Home = () => {
  const [allProducts, setallProducts] = useState([]);  //[{},{},..194]

    async function getData(){
      let res = await fetch('https://dummyjson.com/products?skip=0&limit=0');
      let data = await res.json();
      console.log(data)
      console.log(data.products) //[]
      setallProducts(data.products)
    }

    useEffect(()=>{
      getData()
    },[])

    let smartPhones = allProducts.filter((ele)=>ele.category==='smartphones')
    let laptops = allProducts.filter((ele)=>ele.category==="laptops");
    console.log(laptops)
    console.log(smartPhones)
  return (
    <div>
       <div className='bg-black my-10 text-white p-4 w-[95%] mx-auto'>
          <h1>SmartPhones</h1>
          <SiderComponent arr={smartPhones}/>
        </div>

       <div className='bg-black my-10 text-white p-4 w-[95%] mx-auto'>
          <h1>Laptops</h1>
          <SiderComponent arr={laptops}/>
        </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 grid-cols-1 w-[90%] m-auto'>
        {
          allProducts.map((ele, i)=>{
            return <div className='border-gray-400 p-5 gap-3  bg-amber-200 flex flex-col justify-between items-center rounded-lg'>
                <img src={ele.thumbnail} alt="" />
                <h3>{ele.title}</h3>
                <Link to={'/view'} state={ele} className='bg-green-950 cursor-pointer hover:bg-green-700 text-white  w-full px-4 py-2 rounded-md text-center'>View Details</Link>
                <button className='bg-[black] cursor-pointer hover:bg-[#161616] text-white  w-full px-4 py-2 rounded-md text-center'>Add to Cart</button>
            </div>
          })
        }
      </div>

    </div>
  )
}

export default Home
