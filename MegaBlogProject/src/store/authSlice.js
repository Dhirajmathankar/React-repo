import { createSlice } from '@reduxjs/toolkit'


const initialState = {
	statur  :false ,
	userData : null
}
const authSlice = createSlice({
  name: 'auth',
  initialState, 
  reducers: {
    login: (state, action)=>{
       state.statur = true ;
	   state.userData = action.payload.userData ;
	},
	logout:(state, action)=>{
		state.statur = false ;
		state.userData = null ;
	}
  },
})


export const  {login, logout} =  authSlice.actions ;
export default authSlice.reducer ;