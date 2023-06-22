import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Home } from "../pages/Home"
import { useState } from "react"

export const RoutesMain = () => {
  const [user, setUser] = useState([]); 

    return (
        <Routes>
            <Route path="/" element={<Login user={user} setUser={setUser}/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Home user={user} setUser={setUser}/>} />
        </Routes>
    )
}