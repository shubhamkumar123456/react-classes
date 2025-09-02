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
  
  // ___________________________________________________________________________________
  // Pagination Part
  const [currentPage, setcurrentPage] = useState(18);
  console.log(currentPage)
  let itemPerPage = 10;
  let lastIndex = currentPage * itemPerPage;
  let firstIndex = lastIndex - itemPerPage;

  let slicedArr = products.slice(firstIndex, lastIndex);
  console.log(slicedArr)

  let noOfBtn = Math.ceil(products.length/itemPerPage);
  console.log(noOfBtn) //20
  // [1,2,3,...20];

  // method -1
  // let arr=[];
  // for(let i=1;i<=noOfBtn;i++){
  //   arr.push(i)
  // }
  // console.log(arr)

  // method -2
  // console.log(Array(noOfBtn).fill('0'))

  // let arr = [] //decleration
  // let arr = new Array(10).fill('0');
  // console.log(arr)





useEffect(()=>{
  getData()
},[])


const handleNext = ()=>{
  if(currentPage< noOfBtn){
    setcurrentPage(currentPage+1)
  }
}

const handlePrev = ()=>{
  if(currentPage>1){
    setcurrentPage(currentPage-1)
  }
}

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
          slicedArr.map((ele, i)=>{
            return <div key={ele.id} className='bg-black gap-2 rounded-md flex flex-col p-3  text-center text-white'>
                  <img src={ele.thumbnail} alt="" />
                  <h1>{ele.title}</h1>
                  <Link to={'/view'} state={ele} className='bg-green-950 hover:bg-green-300 px-4 py-2 rounded-md'>View Details</Link>
                  <button className='bg-blue-950 hover:bg-blue-300 px-4 py-2 rounded-md'>Add To Cart</button>
            </div>
          })
        }
        </div>

        <div>
          {/* ['-','-','-'...] */}
          {/* <button className='bg-green-800 px-2 mx-1 rounded-md py-2'>prev</button>
            {Array(noOfBtn).fill('-').map((item, i)=>{
              return <button className='bg-green-800 px-2 mx-1 rounded-md py-2'>{i+1}</button>
            })}

             <button className='bg-green-800 px-2 mx-1 rounded-md py-2'>Next</button> */}

        </div>

        <nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px text-sm">
    <li onClick={handlePrev}>
      <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
   
    {Array(noOfBtn).fill('-').map((item, i)=>{
              return <li className='active'>
      <a href="#" class="flex  items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i+1}</a>
    </li>
            })}
   
    <li>
      <Link to="#" onClick={handleNext} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default Home







