import React, { useState } from "react";
import AdminLogin from "./Login";
const AdminBody = ()=>{
    const [isLoggedIn,setIsLoggedIn] = useState(true)
    return (
        <div className="admin-body" >
            {
                isLoggedIn?<h2>hii</h2>:<AdminLogin/>
            }
        </div>
    )
}
export default AdminBody