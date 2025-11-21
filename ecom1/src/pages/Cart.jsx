import React from 'react'

const Cart = (props) => {
  console.log(props.cartItem)  //props are read only you can not delete or modify the data of props
  

  function handleDelete(ele,i){
    console.log(ele)
    console.log(i)
    let copyArr = [...props.cartItem]  //[{},{},{},{}]
    copyArr.splice(i,1)  //[{},{},{}]
    props.setcartItem(copyArr)
  }
  return (
    <div>
      {/* <h1>This is Cart Page</h1> */}
     { props.cartItem.length >0 ? <table className=' w-[85%] text-center mx-auto text-white'>
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
              props.cartItem.map((ele, i)=>{
                return <tr key={ele.id} className='bg-black'>
                  <td className='p-2'>{i+1}</td>
                  <td><img className='w-[150px] mx-auto' src={ele.thumbnail} alt="" /></td>
                  <td>{ele.title}</td>
                  <td>{ele.price}</td>
                  <td>
                    <button className='bg-blue-900 px-2 py-1 rounded-md hover:bg-blue-700 cursor-pointer'>+</button>
                    {ele.quantity}
                    <button className='bg-blue-900 px-2 py-1 rounded-md hover:bg-blue-700 cursor-pointer'>-</button>
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(ele,i)} className='bg-red-950 text-white cursor-pointer hover:bg-red-700 px-4 py-2 rounded-md'>Delete Item</button>
                  </td>
                </tr>
              })
            }
        </tbody>
      </table>  : <h1 className='text-3xl font-bold mx-auto w-max mt-[100px]'>No item in The cart</h1>}
    </div>
  )
}

export default Cart
