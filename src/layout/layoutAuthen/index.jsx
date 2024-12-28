import Title from "../../Components/common/title"
import Login from "../../pages/authen/Login"
import Register from "../../pages/authen/Register"
import logo from "../../../../customized-products-vector-removebg.png"
import { Outlet } from "react-router-dom"


function LayoutAuthen()
{
    return (
        <div className="flex items-center w-screen h-screen ">
            <div className="w-4/6 h-full flex justify-center items-center bg-mainColorDark">
                <img className="w-3/4" src={logo}/>
            </div>
            <div className="w-2/6 h-full bg-lightTextColor flex flex-col justify-center items-center">
                <Outlet/>
            </div>
        </div>
    )
}
export default LayoutAuthen