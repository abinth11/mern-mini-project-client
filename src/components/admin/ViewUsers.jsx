import React, { useState, useEffect } from 'react';
import AdminHeader from './partials/Header';
import AdminFooter from './partials/Footer';
import './UserList.css';
import { Link } from 'react-router-dom';
import { filterUsers } from '../../Helpers/filterAlgorithm';

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [isDeleted, setIsDeleted] = useState(false)
  useEffect(() => {
    fetch('http://localhost:3000/admin/get-user-details')
      .then(async response => {
        const parsedResponse = await response.json()
        const { data } = parsedResponse
        setUsers(data)
        setFilteredUsers(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [isDeleted])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const result = filterUsers(e.target.value, users)
    // console.log(result)
    setFilteredUsers(result)
  };

  // const filteredUsers = users.filter((user) =>
  //   user.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handleEdit = (userId) => {
    // Handle edit action
    console.log('Edit user with ID:', userId);
  };

  const handleDelete = (userId) => {
    // Handle delete action
    const userData = {
      id:userId
    }
    fetch('http://localhost:3000/admin/delete-user',{
      method: "DELETE",
      body: JSON.stringify(userData),
      headers: {
          'Content-Type': 'application/json'
      }  
    }).then(async response=>{
      const parsedResponse = await response.json()
      if(parsedResponse.status){
        setIsDeleted(true)
        alert(parsedResponse.successMessage)
      } else {
        alert(parsedResponse?.errorMessage)
      }
    }).catch(error=>{
      console.log(error)
      alert(error)
    })
    console.log('Delete user with ID:', userId);
  };

  return (
    <>
      <AdminHeader />
      <div className="user-list-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <table className="user-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Blocked</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>
                    <div className="user-info">
                      <img className="user-photo" src={user.photo??'https://res.cloudinary.com/dwucedjmy/image/upload/v1681709064/rojcd14ychu49eukhjuk.png'} alt="User" />
                      <span className="user-name">{user.name}</span>
                    </div>
                  </td>
                  <td>{user?.mobile}</td>
                  <td>{user?.email}</td>
                  <td>{user?.blocked ? 'Blocked' : 'Not Blocked'}</td>
                  <td>{user?.createdAt}</td>
                  <td>
                    <div className="actions">
                      <button className="edit-button">
                        <Link className="edit-link" to={`/admin/edit-user/${user?._id}`}>
                          Edit
                        </Link>
                      </button>
                      <button className="delete-button" onClick={() => handleDelete(user?._id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-results">No users found...!</td>
              </tr>)}
          </tbody>
        </table>
      </div>
      <AdminFooter />
    </>
  );
};

export default UserList;
