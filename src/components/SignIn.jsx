import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form-container">
      <h2>Login here</h2>
      <form className="login-form">
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
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
        <div className="form-actions">
          <button type="submit">Login</button>
          <p className="signup-link">Don&rsquo;t have an account? <Link to="/signup">Sign up</Link></p> 
        </div>
      </form>
    </div>
  );
};

export default Login;
