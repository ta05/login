import React, { useState } from "react";

import { FaLock, FaUser } from "react-icons/fa";

import "../styles/LoginForm.css";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (event) => {
        if (event.target.name === "username") {
            setUsername(event.target.value);
        } else if (event.target.name === "password") {
            setPassword(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={handleInputChange}
                        required
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleInputChange}
                        required
                    />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />
                        Remember Me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" onSubmit={handleSubmit}>
                    Login
                </button>
                <div className="register-link">
                    <p>
                        Don't have an account? <a href="#">Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
