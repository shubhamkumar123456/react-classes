import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewRecipe = () => {
    let location = useLocation(); // gives you an object
    console.log(location)  //{path, state,}
    console.log(location.state)// {recipe wala object}
    let obj = location.state
  return (
    <div>

      <div className='flex  justify-center items-center md:flex-row flex-col w-[80%] gap-[20px] m-auto my-[50px]'>
        <div className='md:w-[300px] object-cover object-center'>
            <img className='w-full h-full' src={location.state.image} alt="" />
        </div>
        <div className='flex flex-col gap-3'>
            <h1><b>Title :</b> {obj.name}</h1>
            <h1><b>Cuisine :</b> {obj.cuisine}</h1>
            <h1><b>CookTimeMinutes :</b> {obj.cookTimeMinutes} minute</h1>
            <h1><b>Difficulty :</b> {obj.difficulty}</h1>
            <h1><b>Meal Type :</b> {obj.mealType}</h1>
            <h1><b>Rating :</b> {obj.rating}</h1>
            <h1><b>Servings :</b> {obj.servings}</h1>

        </div>
      </div>

      <div className='mt-10px w-[80%] mx-auto'>
        <h1 className='my-3'><b>Ingredients</b></h1>
        <ul className='list-disc'>
            {
                obj.ingredients.map((line, i)=>{
                    return <li className='list'>{line}</li>
                })
            }
        </ul>

      </div>

    </div>
  )
}

export default ViewRecipe
