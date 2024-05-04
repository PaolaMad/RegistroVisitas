import { Route, Routes } from "react-router-dom"
import Login from "../components/Login"
import { PublicRoute } from "./PublicRoute"
import Register from "../components/Register"
import NewPlace from "../Pages/NewPlace"

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

        </Routes>
    )
}

export default AppRouter