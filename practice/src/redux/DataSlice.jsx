import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr:[
    {id:1,task:'html study',status:"incompleted"},
    {id:2,task:'css study',status:"incompleted"},
    {id:3,task:'js study',status:"incompleted"},
  ] ,
}


// dispatch(action)
// redeucers(state,action){

// }
export const DataSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask:(state,action)=>{
        console.log(action)
    },

    deleteTask:(state,action)=>{
        console.log(action)   //{type:defult , payload: value};
        state.arr.splice(action.payload , 1)

    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask ,deleteTask} = DataSlice.actions

export default DataSlice.reducer