import { useState } from 'react';
import './login.css';

function LoginPage() {
    return(
        <>
            <div className="auth-container">
            <div className="login-form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
            </div>
            <div className="links">
            <a href="/create-account">Create Account</a>
            <a href="/forgot-password">Forgot Password</a>
            </div>
            </div>
        </>
    )
}

export default LoginPage
