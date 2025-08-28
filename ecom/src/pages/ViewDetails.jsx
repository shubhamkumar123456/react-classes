import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ViewDetails = () => {

    let location = useLocation();
    console.log(location)
    console.log(location.state)
    let obj = location.state;

    const [selectedImage, setselectedImage] = useState('');

    const handleImage=(url)=>{
        console.log(url)
        setselectedImage(url);
    }
  return (
    <div>
      {/* <h1>This is view Deatil page</h1> */}
      <div className='flex gap-2 bg-green-300 min-h-[75vh]'>
        <div className="bg-red-200 w-[40%] flex relative justify-center items-center">
            <img className='max-w-[350px]' src={selectedImage?selectedImage:obj.thumbnail} alt="" />
            <div className='absolute w-full h-[130px] flex justify-around bottom-0'>
                {
                    obj.images.map((url, i)=>{
                        return <img onClick={()=>handleImage(url)} className='cursor-pointer' key={url} src={url} alt="" />
                    })
                }
            </div>
        </div>
        <div className="bg-black text-white w-[60%] p-4 flex flex-col gap-4 justify-center">
            <h1><b>Title : </b>{obj.title}</h1>
            <h1><b>Brand : </b>{obj.brand}</h1>
            <h1><b>Category : </b>{obj.category}</h1>
            <h1><b>Price : </b>{obj.price}</h1>
            <h1><b>Rating : </b>{obj.rating}</h1>
            <h1><b>shippingInformation : </b>{obj.shippingInformation}</h1>
            <h1>{obj.description}</h1>
        </div>
      </div>

      <input type="password"  className='border'/>
    </div>
  )
}

export default ViewDetails
