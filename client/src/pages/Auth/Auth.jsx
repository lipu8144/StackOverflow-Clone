import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import "./auth.css";
import icon from '../../../public/logo.png';
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password){
      alert('Enter email or password')
    }
    if(isSignup){
      if(!name){
          alert("Enter a name to continue")
      }
      dispatch( signup({ name, email, password }, navigate))
    }else{
      dispatch( login({ email, password}, navigate))
    }
  }


  return (
    <section className="auth-section">
      { isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img src={icon} alt="stack overflow" className="login-logo" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="">
              <h4>Display Name</h4>
              <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)}} />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}} />
          </label>
          <label htmlFor="password">
            <div id="passwords">
              <h4>Password</h4>
              {!isSignup && <Link to={"/forgot-password"} style={{color: "#007ac6", fontSize: "14px", textDecoration:"none", paddingTop:"8px"}}>forgot password?</Link>}
            </div>
            <input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}} />
            {isSignup && (
              <p className="pass">
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p>
                Opt-in to receive occasional product updates, user research
                invitations, company announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
          {isSignup && (
            <p className="terms">
              By clicking “Sign up”, you agree to our 
              <span> terms of service </span> and acknowledge that you have read
              and understand our <span> privacy policy </span> and <span> code of
              conduct</span>.
            </p>
          )}
        </form>
        <p>
          {isSignup ? "already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
