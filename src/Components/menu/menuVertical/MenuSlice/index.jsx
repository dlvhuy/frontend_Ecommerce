import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isBack:true,
    isOpenModal:false,
    user:{},

}


const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        Open:(state) => {
            state.isBack = !state.isBack
        },
        OpenModal:(state) =>{
            state.isOpenModal = true
        },
        CloseModal:(state) =>{
            state.isOpenModal = false
        },
        GetUserData:(state,action) =>{
            state.user = action.payload
        }
    }

});

export const {Open,OpenModal,CloseModal} = menuSlice.actions
export default menuSlice.reducer