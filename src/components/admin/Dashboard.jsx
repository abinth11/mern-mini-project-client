import React, { useState } from "react";
import AdminHeader from "./partials/Header";
import AdminFooter from "./partials/Footer";
import SessionExpiredModal from "../popup";
import {useSelector,useDispatch} from 'react-redux'
import { setModalOpen,setModalClose } from "../../features/expiration";
import './admin.css'
const Dashboard = () => {
  // const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch()
  const isModalOpens = useSelector((state) => state?.setModalReducer?.isModalOpen);
  console.log(isModalOpens)


  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSessionExpiration = () => {
    dispatch(setModalOpen())
  };
  return (
    <>
      <AdminHeader />
      <div className="admin-dash">
        <h2>Hello welcome to admin dashboard...!</h2>
        <div>
          {/* <button onClick={handleSessionExpiration}>Simulate Session Expiration</button> */}
          <SessionExpiredModal />
        </div>
      </div>
      <AdminFooter />
    </>
  )
}
export default Dashboard