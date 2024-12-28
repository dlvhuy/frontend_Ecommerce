import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../../axios/Services/AuthenService/AuthenSlice"
import menuSlice from "../../Components/menu/menuVertical/menuSlice"
import storeSlice from "../../axios/Services/StoreService/StoreSlice"
import userSlice from "../../axios/Services/UserService/UserSlice"
export default configureStore({
    reducer: {
        menu: menuSlice,
        auth: authSlice,
        store: storeSlice,
        user:userSlice

    }
})