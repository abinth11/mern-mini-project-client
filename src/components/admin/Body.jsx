import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminLogin from "./Login";
import Dashboard from "./Dashboard";
const AdminBody = () => {
    // const [isLoggedIn,setIsLoggedIn] = useState(false)
    // const isLoggedIn = useSelector((state) => state?.adminLoggedInReducer?.isLoggedIn);
    // console.log(isLoggedIn)
    const isLoggedIn = true
    return (
        <>
            {
                isLoggedIn ?
                    <Dashboard />
                    : <AdminLogin />
            }
        </>
    )
}
export default AdminBody