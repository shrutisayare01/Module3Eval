import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute=({user,role})=>{
if(!user) return <Navigate to='/'/>
if(user.role!==role) return <Navigate to='/'/>
return <Outlet/>

}

export default PrivateRoute;