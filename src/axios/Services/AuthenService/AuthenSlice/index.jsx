import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    error:null,
    message:""
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        Start:(state) =>{
            state.loading = true;
            state.error = null;
            
        },
        Success:(state,action) =>{
            state.loading = false;
            state.message = action.payload;
        },
        Fail:(state,action) =>{
            state.loading = false;
            state.error = action.payload;
        }

    }
})
export const {Start,Fail,Success} = authSlice.actions

export default authSlice.reducer    