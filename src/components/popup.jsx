import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setModalOpen,setModalClose } from "../features/expiration";
import './Popup.css'; // Import CSS file for styling
Modal.setAppElement('#root')

const SessionExpiredModal = () => {
  const isModalOpens = useSelector((state) => state?.setModalReducer?.isModalOpen);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (isModalOpens) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isModalOpens]);
  const handleCancel = () => {
    dispatch(setModalClose())
  };
  const handleLogin = () =>{
    dispatch(setModalClose())
    navigate('/admin')
  }

  return (
    <Modal
      isOpen={isModalOpens}
      onRequestClose={()=>{
        dispatch(setModalClose())
      }}
      contentLabel="Session Expired"
      className="modal"
      // appElement={document.getElementById('#root')}
      // ariaHideApp={false}
      overlayClassName="overlay"
    >
      <h2>Session Expired</h2>
      <p>Your session has expired. Please log in again.</p>
      <button className="modal-button login" onClick={handleLogin} > Login</button>
      <button className="modal-button cancel" onClick={handleCancel}>Cancel</button>
    </Modal>
  );
}; 

export default SessionExpiredModal;
