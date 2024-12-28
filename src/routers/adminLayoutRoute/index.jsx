import { Route, Routes } from "react-router-dom"

import { Analyze, ProductSellers, Setting } from "../../pages/seller"


import BodySeller from "../../layout/layoutAdmin/layoutSeller/BodySeller"
import LayoutSeller from "../../layout/layoutAdmin/layoutSeller"
import LayoutDashBoard from "../../layout/layoutAdmin/layoutDashboard"
import LayoutSetting from "../../layout/layoutAdmin/layoutSetting"
import LayoutAdmin from "../../layout/layoutAdmin"

const AdminLayoutRoute = () => {
    return (


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


    )
}

export default AdminLayoutRoute