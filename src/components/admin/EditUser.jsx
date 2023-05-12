import React, { useState, useEffect } from 'react';
import './EditUser.css';
import AdminHeader from './partials/Header';
import AdminFooter from './partials/Footer';
import { useParams } from 'react-router-dom';
const EditUser = () => {
  const [_id,setId] = useState('id')
  const [name, setName] = useState('name');
  const [mobile, setMobile] = useState('mobile');
  const [email, setEmail] = useState('email');
  const [blocked, setBlocked] = useState(false);
  const [isUpdated,setIsUpdated] = useState(false)
  // const [createdAt, setCreatedAt] = useState('data');
  // const [photo, setPhoto] = useState('image');
  const { userId } = useParams()
  useEffect(() => {
    fetch(`http://localhost:3000/admin/get-individual-user-data?userId=${userId}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      const parsedResponse = await response.json()
      console.log(parsedResponse)
      const { data } = parsedResponse
      if (parsedResponse.status) {
        setId(data?._id)
        setName(data?.name)
        setMobile(data?.mobile)
        setEmail(data?.email)
        setBlocked(data?.blocked)
        // setCreatedAt(data?.createdAt)
        // setPhoto(data?.photo)
        // alert(parsedResponse.successMessage)
      } else {
        alert(parsedResponse?.errorMessage)
      }
    }).catch(error => {
      console.log(error)
      alert(error)
    })
  }, [isUpdated])
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

  // const handlePhotoChange = (event) => {
  //   setPhoto(event.target.value);
  // };

  const handleUpdate = (e) => {
    e.preventDefault()
    const formData = {
      _id,
      name,
      mobile,
      email,
      blocked,
    }
    fetch('http://localhost:3000/admin/update-user-info', {
      method: "PUT",
      body:JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      const parsedResponse = await response.json()
      if (parsedResponse.status) {
        alert(parsedResponse?.successMessage)
        setIsUpdated(true)
        
      } else {
        alert(parsedResponse?.errorMessage)
      }
    }).catch(error => {
      alert(error)
    })


  };

  return (
    <>
      <AdminHeader />
      <form onSubmit={handleUpdate}>
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
          {/* <div className="edit-user-info">
            <div className="edit-user-label">Created At:</div>
            <input
              type="text"
              value={createdAt}
              onChange={handleCreatedAtChange}
              className="edit-user-input"
            />
          </div> */}
          {/* <div className="edit-user-info">
        <div className="edit-user-label">Photo:</div>
        <input
          type="text"
          value={photo}
          onChange={handlePhotoChange}
          className="edit-user-input"
        />
      </div> */}
          <div className='update-button'>
            <button type='submit' className="edit-user-button">
              Update
            </button>
          </div>
        </div>
        <AdminFooter />
      </form>
    </>
  );
};

export default EditUser;
