import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Home } from "../pages/Home"
import { ProtectedRoutes } from "../components/ProtectedRoutes"
import { PublicRoutes } from "../components/PublicRoutes"

export const RoutesMain = () => {

    return (
        <Routes>
            <Route element={ <PublicRoutes />}>
                <Route path="/" element={<Login />}/>
                <Route path="/register" element={<Register/>}/>
            </Route>
            <Route element={ <ProtectedRoutes />}>
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    )
}