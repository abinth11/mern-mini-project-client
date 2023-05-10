import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { FiUser } from 'react-icons/fi';
import { clearToken } from '../../features/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const UserProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleLogOut = () => {
    // const result = dispatch(clearToken())
    localStorage.removeItem('accessToken')
    // navigate('/')
    location.reload()
  }

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <div>
        <FiUser style={{ cursor: 'pointer', fontSize: '21px', verticalAlign: 'text-top' }} />
        <span style={{ marginLeft: '5px',marginTop:"10px"}}>Abin</span>
      </div>      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '200px',
            marginTop: '25px'
          }
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Link to='/view-profile' ><MenuItem >Profile</MenuItem></Link>
        <MenuItem onClick={handleClose}>Favorites</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
};
export default UserProfile;
