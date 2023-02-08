import React from 'react'
import './register.css'
export default function Register() {
  return (
    <div className='register'>
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">Buzz socials</h3>
                <span className="registerDescription">
                    Connect with friends and the world around you with Buzz Socials
                </span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input className="registerInput" placeholder='Username'/>
                    <input className="registerInput" placeholder='Email'/>
                    <input className="registerInput" placeholder='Password'/>
                    <input className="registerInput" placeholder='Password again'/>
                    <button className="registerButton">Sign Up</button>
                    <span className="registerForgot">Forgot Password?</span>
                    <button className="loginButton">Login to your account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
