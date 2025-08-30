import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import CategorySlider from '../components/CategorySlider';

const Home = () => {
  const [products, setproducts] = useState([]);
  console.log(products);// [], [{},{},{}]
  async function getData(){
    let res = await fetch('https://dummyjson.com/products?limit=0&skip=0');
    let data = await res.json();
    // console.log(data);
    // console.log(data.products);
    setproducts(data.products)
  }


  let mobiles = products.filter((ele)=>ele.category==='smartphones'); //[]
  let laptops = products.filter((ele)=>ele.category==='laptops'); //[]
  console.log(mobiles)
  console.log(laptops)



useEffect(()=>{
  getData()
},[])
  return (
    <div className='p-5'>
      <div className='bg-black text-white h-[300px] p-5 mb-5'>
      <h1 className='mb-3 underline'>SmartPhones</h1>
        <CategorySlider data = {mobiles}/>
      </div>
      <div className='bg-black text-white h-[300px] p-5 mb-5'>
      <h1 className='mb-3 underline'>Laptops</h1>
        <CategorySlider data = {laptops}/>
      </div>


        <div className='grid lg:grid-cols-4 gap-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>
          {
          products.map((ele, i)=>{
            return <div key={ele.id} className='bg-black gap-2 rounded-md flex flex-col p-3  text-center text-white'>
                  <img src={ele.thumbnail} alt="" />
                  <h1>{ele.title}</h1>
                  <Link to={'/view'} state={ele} className='bg-green-950 hover:bg-green-300 px-4 py-2 rounded-md'>View Details</Link>
                  <button className='bg-blue-950 hover:bg-blue-300 px-4 py-2 rounded-md'>Add To Cart</button>
            </div>
          })
        }
        </div>
    </div>
  )
}

export default Home







