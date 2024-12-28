import { createSlice } from "@reduxjs/toolkit";
import { addCategory } from "..";

const initialState = {
    Data:[],
    CategoryData:[],
    loading:false,
    error:null,
    message:""
}

const storeSlice = createSlice({
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
        },
        AddProduct:(state,action) =>{
            state.Data.push(action.payload)
        },
        AddCategory:(state,action) =>{
            state.CategoryData.push(action.payload)
        },
        GetDataProduct:(state,action) =>{
            state.Data = action.payload
        },
        GetCategory:(state,action) =>{
            state.CategoryData = action.payload
        }
    }
})
export const {Start,Fail,Success,GetCategory,GetDataProduct,AddCategory,AddProduct} = storeSlice.actions

export default storeSlice.reducer    