import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Data:[],
    InputData:{},
    loading:false,
    error:null,
    message:""
}

const userSlice = createSlice({
    name:'store',
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
export const {Start,Fail,Success} = userSlice.actions

export default userSlice.reducer    