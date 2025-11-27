import React, { useState } from 'react'
import CartContext from './CartContext'
import { toast } from 'react-toastify';

const CartState = (props) => {
    const [cartArr, setcartArr] = useState([]);  //[{},{},{},{}]
    console.log(cartArr)

    function getItem(obj){
      
        obj.quantity = 1;
        // setcartArr([...cartArr, obj])

        let find = cartArr.find((ele)=>ele.id=== obj.id);  // {}, undefined
        if(find){
            toast.error('item already exists',{position:"top-center"})
            return
        }
        else{
            toast.success('item added successfully',{position:"top-center"})
            setcartArr([...cartArr, obj])
        }

    }

    function handleIncrement(obj,i){
        console.log(obj)
        console.log(i)
        obj.price = obj.price + (obj.price/obj.quantity);
        obj.quantity = obj.quantity +1
        let copyArr = [...cartArr]  //[{},{},{},{}]
        copyArr[i] = obj;
        setcartArr(copyArr)
    }
    function handleDecrement(obj,i){
        console.log(obj)
        console.log(i)
        if(obj.quantity > 1){
             obj.price = obj.price - (obj.price/obj.quantity);
        obj.quantity = obj.quantity -1
        let copyArr = [...cartArr]  //[{},{},{},{}]
        copyArr[i] = obj;
        setcartArr(copyArr)
        }
    }
  return (
    <CartContext.Provider value={{cartArr, setcartArr,handleDecrement, getItem, handleIncrement}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartState
