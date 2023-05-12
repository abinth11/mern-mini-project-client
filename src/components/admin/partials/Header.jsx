import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {logoImageUrl} from '../../../constants'
import { useNavigate } from 'react-router-dom';
import './Header.css';

const logo = (
    <div className="logo">
      <img src={logoImageUrl} alt="logo" />
    </div>
  );
const AdminHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate()

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Implement your logout functionality here
    localStorage.removeItem('accessTokenAdmin')
    console.log('Logging out...');
    navigate('/admin')
    location.reload()
  };

  return (
    <header>
      <div className="header-logo"><a href="/admin">{logo}</a></div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li>
            <Link to="/admin/view-users">View Users</Link>
          </li>
          {/* <li>
            <Link to="/profile">Profile</Link>
          </li> */}
          <li>
            <Link to="/admin" onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
        {/* <div className="header-dropdown">
          <button className="dropdown-toggle" onClick={handleDropdownToggle}>
            Menu
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">View Users</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div> */}
      </nav>
    </header>
  );
};

export default AdminHeader;
