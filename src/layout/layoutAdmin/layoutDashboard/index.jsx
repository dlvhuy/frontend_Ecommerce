import { Analyze } from "../../../pages/seller"
import HeaderDashboard from "./HeaderDashboard"

const LayoutDashBoard = () =>{
    return (<div className="w-[95%] mt-[30px] overflow-y-scroll">
        <HeaderDashboard/>
        <Analyze/>
    </div>)
}
export default LayoutDashBoard