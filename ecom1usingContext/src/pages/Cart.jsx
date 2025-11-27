import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {
    let ctx = useContext(CartContext);
    console.log(ctx)   // {cartArr, setcartArr, getItem}
    console.log(ctx.cartArr)

    let sum = 0;
    ctx.cartArr.forEach((ele)=>{
      sum = sum +ele.price
    })

    function handleDelete(obj,i){
      console.log(obj)
      console.log(i)

      let copyArr = [...ctx.cartArr]
      copyArr.splice(i,1);
      ctx.setcartArr(copyArr)

    }
 
  return (
    <div>
      {/* <h1>This is Cart Page</h1> */}
     { ctx.cartArr.length >0 ? <table className=' w-[85%] text-center mx-auto text-white'>
        <thead>
          <tr className='bg-black border-b'>
            <th className='p-2'>S.No</th>
            <th>Product</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {
              ctx.cartArr.map((ele, i)=>{
                return <tr key={ele.id} className='bg-black'>
                  <td className='p-2'>{i+1}</td>
                  <td><img className='w-[150px] mx-auto' src={ele.thumbnail} alt="" /></td>
                  <td>{ele.title}</td>
                  <td>${ele.price.toFixed(2)}</td>
                  <td>
                    <button onClick={()=>ctx.handleIncrement(ele,i)} className='bg-blue-900 px-2 py-1 rounded-md hover:bg-blue-700 cursor-pointer'>+</button>
                    {ele.quantity}
                    <button onClick={()=>ctx.handleDecrement(ele, i)} className='bg-blue-900 px-2 py-1 rounded-md hover:bg-blue-700 cursor-pointer'>-</button>
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(ele,i)} className='bg-red-950 text-white cursor-pointer hover:bg-red-700 px-4 py-2 rounded-md'>Delete Item</button>
                  </td>
                </tr>
              })
            }
        </tbody>
      </table>  : <h1 className='text-3xl font-bold mx-auto w-max mt-[100px]'>No item in The cart</h1>}


     { ctx.cartArr.length>0 && <h1 className='text-4xl font-semibold w-max m-auto my-5'>Total = ${sum.toFixed(2)}</h1>}

      { ctx.cartArr.length >0 && <button className='bg-green-900 text-white py-2 px-4 rounded-md hover:bg-green-600 w-max m-auto block'>Buy Now</button>}
    </div>
  )
}

export default Cart
