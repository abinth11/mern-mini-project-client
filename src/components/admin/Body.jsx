import React, { useState } from "react";
import { useSelector } from "react-redux";
import AdminLogin from "./Login";
const AdminBody = ()=>{
    // const [isLoggedIn,setIsLoggedIn] = useState(false)
    const isLoggedIn = useSelector((state) => state?.adminLoggedInReducer?.isLoggedIn);
    console.log(isLoggedIn)
    return (
        <div className="admin-body" >
            {
                isLoggedIn?<h2>hii</h2>:<AdminLogin/>
            }
        </div>
    )
}
export default AdminBody