import { createSlice } from '@reduxjs/toolkit'

let UserDetails = JSON.parse(localStorage.getItem('login')) //{login:true, email:"awdw"}, null

const initialState = {
  login:UserDetails?.login? UserDetails.login:  false, //true
  email:UserDetails?.email ? UserDetails.email : '' 
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser:(state,action)=>{
        state.login = true,
        state.email = action.payload
    },
    logoutUser:(state,action)=>{
        localStorage.removeItem('login')
        state.login = false;
        state.email = ''
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = UserSlice.actions

export default UserSlice.reducer