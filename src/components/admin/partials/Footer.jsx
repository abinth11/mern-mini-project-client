import React from 'react';

const AdminFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3 className="footer-logo">Fresh Bite</h3>
          <p className="footer-description">Delicious and Healthy Food</p>
        </div>
        {/* <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">&copy; 2023 Fresh Bite. All rights reserved.</p>
        <p className="footer-policy">Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default AdminFooter;
