import apiClient from "../../apiClient";
import { GetDataProduct } from "../StoreService/StoreSlice";
import { Start, Success,Fail } from "./AuthenSlice";


const URL = "/Authen"
export const authenLogin = (data,navigate) => async (dispatch) =>{
    try{
        
        dispatch(Start())
        const response = await apiClient.post(`${URL}/login`,data,{
            headers: {
                "Content-Type": "application/json" // Header
            }
        })
        const {_data,_message} = response.data
        localStorage.setItem("token",_data) 
        dispatch(Success(_message))
        navigate("/Admin/Products")
        

    }catch(error)
    {
        dispatch(Fail(error.response?.data?._message || 'Login failed'));
        console.error('Login Error:', error);
    }
}

export const authenRegister = (data) => async (dispatch) =>{
    try{
        dispatch(Start())
        const response = await apiClient.post(`${URL}/register`,data)
        const {_message} = response.data
        dispatch(Success(_message))

    }catch(error)
    {
        dispatch(Fail(error.response?.data?._message || 'Register failed'));
        console.error('Register Error:', error);
    }
   
}

export const authenLogout = () =>{
    if(localStorage.getItem("token"))
        localStorage.removeItem("token")
    else console.log("token không tồn tại")

}