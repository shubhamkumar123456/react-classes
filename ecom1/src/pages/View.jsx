import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const View = () => {
  let location = useLocation();
  // console.log(location)
  let obj = location.state
  console.log(obj)

  const [selectedImage, setselectedImage] = useState('');
  // console.log(selectedImage)  //'' , 'awdawd'

  function handleImage(src){
    console.log(src)
    setselectedImage(src)
  }
  return (
    <div>
      <div className='border  p-5 w-[80%] m-auto my-[50px] flex md:flex-row flex-col justify-center items-center rounded-2xl gap-[25px]'>
          <div className=' md:w-[40%] w-full flex flex-col items-center'>
            <img className='min-w-[250px] mx-auto ' src={selectedImage ? selectedImage : obj.thumbnail} alt="" />

            <div className='flex justify-center gap-4'>
              {obj.images.map((src, i )=>{
                return <img key={src} onClick={()=>handleImage(src)} className='w-[20%] min-w-[70px] border rounded-2xl cursor-pointer' src={src} alt="" />
              })}
            </div>
          </div>
          <div>
            <h3><b>Title : </b> {obj.title}</h3>
            <h3><b>Category : </b> {obj.category}</h3>
            <h3><b>Availability Status : </b> {obj.availabilityStatus}</h3>
            <h3><b>Discount Percentage : </b> {obj.discountPercentage}</h3>
            <h3><b>Minimum Order Quantity : </b> {obj.minimumOrderQuantity}</h3>
            <h3><b>Price : </b> {obj.price}</h3>
            <h3><b>Rating : </b> {obj.rating}</h3>
            <h3><b>Return Policy : </b> {obj.returnPolicy}</h3>
            <h3>{obj.description}</h3>
          </div>
      </div>

      <div className=' w-[80%] p-6 my-[50px] mx-auto'>
        <h1 className='my-4'><b>Reviews</b></h1>
             <div className='grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
               {
                obj.reviews.map((ele, i)=>{
                  return <div className='bg-amber-200 p-4 rounded-2xl'>
                          <h3><b>Name : </b> {ele.reviewerName}</h3>
                          <h3><b>Email : </b> {ele.reviewerEmail}</h3>
                          <h3><b>Rating : </b> {ele.rating}</h3>
                          <h3><b>Rating : </b> {ele.date}</h3>
                          <h3><b>Comment : </b> {ele.comment}</h3>
                  </div>
                })
              }
             </div>
      </div>
    </div>
  )
}

export default View
