import React, { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import "./Login.css";
import { setToken } from "../../../features/authSlice";

const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [err, showErr] = useState(true)
    const [errMsg, setErrMsg] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        if (err) {
            var timerId = setTimeout(() => {
                showErr(false);
                setErrMsg('');
            }, 5000);
        }
        console.log('useeffect')
        return () => {
            clearTimeout(timerId)
        }
    }, [err]);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            username,
            password
        }
        fetch('http://localhost:3000/user-login', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async response => {
            const parsedResponse = await response.json()
            const { data } = parsedResponse
            if (!data?.status) {
                setErrMsg(data?.Message)
                showErr(true)
            } else {
                dispatch(setToken(data?.accessToken))
                localStorage.setItem('accessToken',data?.accessToken)
                navigate('/')
            }
            console.log(parsedResponse)
        }).catch(err => {
            console.log(err)
            setErrMsg("Something went wrong")
            showErr(true)
        })

    }
    return (
        <div className="login-form-container">
            <h2>Login here</h2>
            <div className="notification">
                <p className={err ? 'error' : ''}>{errMsg}</p>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" onChange={(e) => setUserName(e.target.value)} value={username} required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <div className="password-input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
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
                    <p className="signup-link">Don&rsquo;t have an account? <Link to="/sign-up">Sign up</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
 