import LayoutAuthen from "../../layout/layoutAuthen"
import { Route, Routes } from "react-router-dom"
import { Login, Register } from "../../pages/authen"
const AuthenLayoutRoute = () => {
    return (
       
             <Route path="Authen" element={<LayoutAuthen />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
      
       
    )
}

export default AuthenLayoutRoute