import { Outlet } from "react-router-dom"
import MenuVertical from "../../Components/menu/menuVertical"
import { memo } from "react"

const LayoutAdmin = memo(() =>{
    return(<div className=" relative flex h-screen justify-between shadow-2xl rounded-lg ">
        <MenuVertical />
        <Outlet/>
    </div>)
})
export default LayoutAdmin