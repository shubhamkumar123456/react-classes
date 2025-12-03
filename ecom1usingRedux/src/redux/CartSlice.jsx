import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState = {
  cartArr:[]
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add:(state,action)=>{
        action.payload.quantity = 1;
        let find = state.cartArr.find((ele)=>ele.id === action.payload.id);
        if(find){
            toast.error('item already exists',{position:"top-center"})
            return state
        }
        else{
            toast.success('item added successfully',{position:"top-center"})
            state.cartArr.push(action.payload)
        }
    },
    increment:(state,action)=>{

    },
    decrement:(state,action)=>{

    },
    removeItem:(state,action)=>{  //action =={type:'cart', payload:{i, ele}}
        console.log(action);
        state.cartArr.splice(action.payload.i, 1);
        toast.success('item removed successfully',{position:"top-center"})
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, add, removeItem } = CartSlice.actions

export default CartSlice.reducer