import { Route, Routes } from "react-router"
import Login from '../pages/login/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import Signup from '../pages/signup/Signup'
import PrivateRoute from "./PrivateRoute"
import Home from "../pages/dashboard/sidebar/menu/Home"
import Contact from "../pages/dashboard/sidebar/menu/Contact"
import Call from "../pages/dashboard/sidebar/menu/Call"
import Address from "../pages/dashboard/sidebar/menu/Address"

export const RoutesComp=()=>{
    return(
        <>
        <Routes>
            <Route exact path="/" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/call" element={<Call/>}/>
            <Route exact path="/address" element={<Address></Address>}/>
        </Routes>
        </>
    )
}

