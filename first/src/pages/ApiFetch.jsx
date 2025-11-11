import React, { useEffect, useState } from 'react'

const ApiFetch = () => {

    const [allRecipies, setallRecipies] = useState([]);  // []  , [{},{}]
    console.log(allRecipies) // [] , [{},{},{}]

    let api = `https://dummyjson.com/recipes?skip=0&limit=0`

   async function getRecipes(){
        let res = await fetch(api);
        let data = await res.json();
        // console.log(data)  //{recipe, total, skip , limit}
        // console.log(data.recipes)  // [{}, {}, ...50]
        setallRecipies(data.recipes)
    }
    // getRecipes();
    useEffect(()=>{
        getRecipes()
    },[])
  return (
    <div className='px-5'>
      <h1>This is Api Page</h1>

       <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
         {
            allRecipies.map((obj, i)=>{
                return <div className='bg-[#f0e89b] p-3 rounded-md text-center flex gap-3 flex-col'>
                    <img src={obj.image} alt="" />
                    <h3>{obj.name}</h3>
                    <button className='bg-green-950 text-white hover:bg-green-700'>View Recipe</button>
                </div>
            })
        }
       </div>
    </div>
  )
}

export default ApiFetch
