import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SiderComponent from '../components/SiderComponent';

const Home = () => {
  const [allProducts, setallProducts] = useState([]);  //[{},{},..194]
  console.log(allProducts)
    async function getData(){
      let res = await fetch('https://dummyjson.com/products?skip=0&limit=0');
      let data = await res.json();
      // console.log(data)
      // console.log(data.products) //[]
      setallProducts(data.products)
    }

    useEffect(()=>{
      getData()
    },[])

    let smartPhones = allProducts.filter((ele)=>ele.category==='smartphones')
    let laptops = allProducts.filter((ele)=>ele.category==="laptops");
    // console.log(laptops)
    // console.log(smartPhones)

    // Pagination Code start here
    const [currentPage, setcurrentPage] = useState(1);
    let itemPerPage = 10;
    let lastIndex = itemPerPage * currentPage;
    let firstIndex = lastIndex - itemPerPage;
    let slicedArr = allProducts.slice(firstIndex, lastIndex);
    // console.log(slicedArr)
    let totalBtn = Math.ceil(allProducts.length /itemPerPage)
    // console.log(totalBtn)   //

    let btnArr =[];
    for(let i=1; i<=totalBtn; i++){
      btnArr.push(i)
    } 
    // console.log(btnArr)

    function handleNext(){
      if(currentPage< totalBtn){
        setcurrentPage(currentPage+1)
      }
    }

    function handlePrev(){
      if(currentPage > 1){
        setcurrentPage(currentPage - 1)
      }
    }


    function handleAddToCart(obj){
        // props.recieveItem(obj)
    }

   useEffect(() => {
  window.scrollTo(0, 0);
}, [currentPage]);
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
          slicedArr.map((ele, i)=>{
            return <div key={ele.id} className='border-gray-400 p-5 gap-3  bg-amber-200 flex flex-col justify-between items-center rounded-lg'>
                <img src={ele.thumbnail} alt="" />
                <h3>{ele.title}</h3>
                <Link to={'/view'} state={ele} className='bg-green-950 cursor-pointer hover:bg-green-700 text-white  w-full px-4 py-2 rounded-md text-center'>View Details</Link>
                <button onClick={()=>handleAddToCart(ele)} className='bg-[black] cursor-pointer hover:bg-[#161616] text-white  w-full px-4 py-2 rounded-md text-center'>Add to Cart</button>
            </div>
          })
        }
      </div>

      <div className='flex flex-wrap justify-center gap-1 my-5'>
        <button onClick={handlePrev} className='px-2 py-1 rounded cursor-pointer bg-green-950 text-white hover:bg-green-700'>Prev</button>
        {
          btnArr.map((item, i)=>{
            return <button key={item} onClick={()=>setcurrentPage(item)} className={  `px-2 py-1 rounded cursor-pointer ${currentPage==item ? 'bg-green-950':'bg-green-700'}  text-white hover:bg-black`}>{item}</button>
          })
        }

        <button onClick={handleNext} className='px-2 py-1 rounded cursor-pointer bg-green-950 text-white hover:bg-green-700'>Next</button>
      </div>

    </div>
  )
}

export default Home
