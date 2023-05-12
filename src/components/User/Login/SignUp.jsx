import React, { useState,useEffect } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate,Link } from "react-router-dom";

import './SignUp.css';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error,setError] = useState(false)
    const [errorMessage,setErrorMessage]=useState('')
    const navigate = useNavigate()
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    useEffect(() => {
        if (error) {
            var timerId = setTimeout(() => {
                setError(false);
                setErrorMessage('');
            }, 5000);
        }
        return () => {
            clearTimeout(timerId)
        }
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            mobile,
            password,
            confirmPassword
        }
        if (formData.password !== formData.confirmPassword) {
            setError(true);
            setErrorMessage('Password does not match');
            return;
        }

        fetch('http://localhost:3000/user-register', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(async response => {
            const parsedResponse = await response.json()
            console.log(parsedResponse)
            const {data} = parsedResponse
            if(data.status){
                alert('successfully registered')
                // navigate('/')
            } else {
                // alert('unable to register')
                setError(true)
                setErrorMessage(data?.Message)
            }
          })
          .then(data => {
            console.log(data); // Here, you can access the response object
          })
          .catch(error => {
            console.log(error)
            console.error('There was a problem with the API call:', error);
          });
    };

    return (
        <div className="signup-form-container" style={{ margin: "95px 500px 100px 500px" }}>
            <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
            <div className="notification">
                <p className={error ? 'error' : ''}>{errorMessage}</p>
            </div>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} name="name" required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                </div>
                <div className="form-control">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="tel" id="mobile" name="mobile" value={mobile} onChange={(e) => { setMobile(e.target.value) }} pattern="[0-9]{10}" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <div className="password-input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
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
                            value={confirmPassword}
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                        />
                        {showConfirmPassword ? (
                            <FiEyeOff className="password-icon" onClick={handleShowConfirmPassword} />
                        ) : (
                            <FiEye className="password-icon" onClick={handleShowConfirmPassword} />
                        )}
                    </div>
                </div>
                <div className="form-actions">
                <button type="submit">Submit</button>
                <p className="signup-link">Already have an account? <Link to="/login">Log in</Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
