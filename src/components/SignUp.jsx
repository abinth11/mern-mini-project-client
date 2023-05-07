import React, { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import './SignUp.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit logic
  };

  return (
    <div className="signup-form-container" style={{margin:"80px 500px 100px 500px"}}>
      <h2 style={{textAlign:'center'}}>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="mobile">Mobile</label>
          <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
            />
            {showPassword ? (
              <FiEyeOff className="password-icon" onClick={handleShowPassword} />
            ) : (
              <FiEye className="password-icon" onClick={handleShowPassword} />
            )}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="password-input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              required
            />
              {showConfirmPassword ? (
              <FiEyeOff className="password-icon" onClick={handleShowConfirmPassword} />
            ) : (
              <FiEye className="password-icon" onClick={handleShowConfirmPassword} />
            )}
          </div>
        </div>
        <div className="form-actions">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
