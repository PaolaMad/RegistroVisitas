import { Outlet, Route, Routes } from "react-router-dom"
import Login from "../components/Login"
import { PublicRoute } from "./PublicRoute"
import Register from "../components/Register"
import NewPlace from "../Pages/NewPlace"
import Sidebar from "../components/Sidebar"
import { Home } from "../Pages/Home"
import Visits from "../Pages/Visits"
import Map from "../Pages/Map"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={
                <PublicRoute>
                    <Login />
                </PublicRoute>
            } />

            <Route path="/registro" element={
                <PublicRoute>
                    <Register />
                </PublicRoute>
            } />
            <Route path="/nuevaVisita" element={
                <PublicRoute>
                    <NewPlace />
                </PublicRoute>
            } />


            <Route 
            element={
                <div className="flex w-full flex-1 h-screen bg-gray-blue">
                    <Sidebar/>
                    <div className="flex-1 container-md mx-10">
                        <Outlet/>
                    </div>
                </div>
            }>

                <Route path="/home" element={<Home/>}/>
                <Route path="/visitas" element={<Visits/>}/>
                <Route path="/mapa" element={<Map/>}/>

            </Route>

        </Routes>
    )
}

export default AppRouter