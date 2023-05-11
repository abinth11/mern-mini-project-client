import React, { useState } from 'react';
import './UserList.css';

const users = [
  {
    name: 'Nikhil',
    mobile: '9072175118',
    email: 'abin@gmail.com',
    blocked: false,
    createdAt: '2023-05-07T10:44:36.548+0000',
    photo: 'https://res.cloudinary.com/dwucedjmy/image/upload/v1683790677/profile.png',
  },
  // Add more user objects here...
];

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (userId) => {
    // Handle edit action
    console.log('Edit user with ID:', userId);
  };

  const handleDelete = (userId) => {
    // Handle delete action
    console.log('Delete user with ID:', userId);
  };

  return (
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
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>
                <div className="user-info">
                  <img className="user-photo" src={user.photo} alt="User" />
                  <span className="user-name">{user.name}</span>
                </div>
              </td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>{user.blocked ? 'Blocked' : 'Not Blocked'}</td>
              <td>{user.createdAt}</td>
              <td>
                <div className="actions">
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
