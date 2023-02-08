import React from 'react'
import './login.css'
export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Buzz socials</h3>
                <span className="loginDescription">
                    Connect with friends and the world around you with Buzz Socials
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input className="loginInput" placeholder='Email'/>
                    <input className="loginInput" placeholder='Password'/>
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="registerButton">Create a new Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
