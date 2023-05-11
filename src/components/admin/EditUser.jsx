import React, { useState } from 'react';
import './EditUser.css';
import AdminHeader from './partials/Header';
import AdminFooter from './partials/Footer';
const EditUser = ({ user, onUpdate }) => {
  const [name, setName] = useState(user.name);
  const [mobile, setMobile] = useState(user.mobile);
  const [email, setEmail] = useState(user.email);
  const [blocked, setBlocked] = useState(user.blocked);
  const [createdAt, setCreatedAt] = useState(user.createdAt);
  const [photo, setPhoto] = useState(user.photo);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBlockedChange = (event) => {
    setBlocked(event.target.checked);
  };

  const handleCreatedAtChange = (event) => {
    setCreatedAt(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };

  const handleUpdate = () => {
    onUpdate({ ...user, name, mobile, email, blocked, createdAt, photo });
  };

  return (
    <>
    <AdminHeader/>
     <div className="edit-user-container">
      <h2 className="edit-user-heading">Edit User</h2>
      <div className="edit-user-info">
        <div className="edit-user-label">Name:</div>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="edit-user-input"
        />
      </div>
      <div className="edit-user-info">
        <div className="edit-user-label">Mobile:</div>
        <input
          type="text"
          value={mobile}
          onChange={handleMobileChange}
          className="edit-user-input"
        />
      </div>
      <div className="edit-user-info">
        <div className="edit-user-label">Email:</div>
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          className="edit-user-input"
        />
      </div>
      <div className="edit-user-info">
        <div className="edit-user-label">Blocked:</div>
        <input
          type="checkbox"
          checked={blocked}
          onChange={handleBlockedChange}
        />
      </div>
      <div className="edit-user-info">
        <div className="edit-user-label">Created At:</div>
        <input
          type="text"
          value={createdAt}
          onChange={handleCreatedAtChange}
          className="edit-user-input"
        />
      </div>
      <div className="edit-user-info">
        <div className="edit-user-label">Photo:</div>
        <input
          type="text"
          value={photo}
          onChange={handlePhotoChange}
          className="edit-user-input"
        />
      </div>
      <div className='update-button'>
      <button onClick={handleUpdate} className="edit-user-button">
        Update
      </button>
      </div>
    </div>
    <AdminFooter/>
    </>
   
  );
};

export default EditUser;
