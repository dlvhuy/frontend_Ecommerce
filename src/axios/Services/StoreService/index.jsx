import apiClient from "../../apiClient"
import { Success,Start,Fail, GetDataProduct, AddCategory, AddProduct, GetCategory, } from "./StoreSlice"
const URL = "/Store"


export const addProduct = (data) => async (dispatch) =>{
    try{
        
        dispatch(Start())
        const response = await apiClient.post(`${URL}/Product`,data)
        const {_data,_message} = response.data
        dispatch(AddProduct(_data))
        dispatch(Success(_message))

    }catch(error)
    {
        dispatch(Fail(error.response?.data?._message || 'Add product fail'));
        console.error('Add product fail:', error);
    }
}

export const addCategory = (data) => async (dispatch) =>{
    try{
        dispatch(Start())
        const response = await apiClient.post(`${URL}/Category`,data)
        const {_data,_message} = response.data
        dispatch(AddCategory(_data))
        dispatch(Success(_message))
    }
    catch(error)
    {
        dispatch(Fail(error.response?.data?._message || 'Add Category fail'));
        console.error('Add Category fail:', error);
    }
}

export const GetProducts = () => async (dispatch) =>{
    try{
        
        const token = localStorage.getItem("token")
        dispatch(Start())
        const response = await apiClient.get(`/Store/Products/1`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        const {_data,_message} = response.data

        console.log(response.data)
        dispatch(GetDataProduct(_data))
        dispatch(Success(_message))
    }
    catch(error)
    {
        dispatch(Fail(error.response?.data?._message || 'Get Products fail'));
        console.error('Get Products fail:', error);
    }
}
export const GetCategorys = () => async (dispatch) =>{
    try{
        const token = localStorage.getItem("token")
        dispatch(Start())
        const response = await apiClient.get(`${URL}/Category`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        const {_data,_message} = response.data
        dispatch(GetCategory(_data))
        dispatch(Success(_message))
    }
    catch(error)
    {
        dispatch(Fail(error.response?.data?._message || 'Add Category fail'));
        console.error('Add Category fail:', error);
    }
}

