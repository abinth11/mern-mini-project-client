import React from "react";
import AdminHeader from "./partials/Header";
import AdminFooter from "./partials/Footer";
import './admin.css'
const Dashboard = () =>{
    return (
        <>
        <AdminHeader/>
         <div className="admin-dash">
            <h2>Hello welcome to admin dashboard...!</h2>
        </div>
        <AdminFooter/>
        </>
       
    )
}
export default Dashboard