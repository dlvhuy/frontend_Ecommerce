import { Route, Routes } from "react-router-dom"
import AdminLayoutRoute from "./adminLayoutRoute"
import AuthenLayoutRoute from "./authenLayoutRoute"
import App from "../App"
import LayoutAuthen from "../layout/layoutAuthen"
import { Login, Register } from "../pages/authen"
import LayoutAdmin from "../layout/layoutAdmin"
import LayoutSeller from "../layout/layoutAdmin/layoutSeller"
import BodySeller from "../layout/layoutAdmin/layoutSeller/BodySeller"
import LayoutDashBoard from "../layout/layoutAdmin/layoutDashboard"
import { Analyze, Setting } from "../pages/seller"
import LayoutSetting from "../layout/layoutAdmin/layoutSetting"


const RouteApp = () => {
    return (

        <Routes>
            {/* Route gốc */}
            <Route path="/" element={<App />}> 

                {/* Layout Authen */}
                <Route  path="Authen" element={<LayoutAuthen />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                {/* Layout Admin */}
                <Route path="Admin" element={<LayoutAdmin />}>
                    {/* Layout Seller */}
                    <Route path="Products" element={<LayoutSeller />}>
                        <Route index element={<BodySeller />} />
                    </Route>

                    {/* Layout Dashboard */}
                    <Route path="Analyze" element={<LayoutDashBoard />}>
                        <Route index element={<Analyze />} />
                    </Route>

                    {/* Layout Setting */}
                    <Route path="Setting" element={<LayoutSetting />}>
                        <Route index element={<Setting />} />
                    </Route>
                </Route>

            </Route>
        </Routes>


    )
}

export default RouteApp