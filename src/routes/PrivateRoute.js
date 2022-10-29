import { Navigate, React, Redirect, Route, useNavigate } from "react-router-dom";

const PrivateRoute=(props)=>{
const Component=props.Component;
const navigate=useNavigate();
if(!localStorage.getItem('token')){
    return <Navigate to="/"></Navigate> 
}
return props.children;
}

export default PrivateRoute;
