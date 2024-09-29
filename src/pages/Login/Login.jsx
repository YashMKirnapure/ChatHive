import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assets.js";

const Login = () => {

  const [currState,setCurrState] = useState("Sign up");

  return (
    <div className="login">
      <img className="logo" src={assets.logo_big} alt="" />
      <form className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign up" ? <input type="text" className="form-input" placeholder="Username" required/> : null}
        <input type="text" className="form-input" placeholder="Email Address" required/>
        <input type="text" className="form-input" placeholder="Password" required/>
        <button type="submit">{currState === "Sign up" ? "Create Account" : "Login Now"}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of Use & privacy policy</p>
        </div>
        <div className="login-forgot">
          {
            currState === "Sign up" 
            ? 
            <p className="login-toggle">Already have an account <span onClick={()=>{
              setCurrState("Login")
            }}>Login here!</span></p>
            :
            <p className="login-toggle">Create an account<span onClick={()=>{
            setCurrState("Sign up")
          }}>click here!</span></p>
          }
        </div>
      </form>
    </div>
  );
};

export default Login;
