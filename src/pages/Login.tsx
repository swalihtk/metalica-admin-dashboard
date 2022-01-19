import React, { useState } from "react";
import "../styles/Login.css";

function Login() {

    // form states
    let [emailOrPhone, setEmailOrPhone]=useState("");
    let [password, setPassword]=useState("");

    // form submit handler
    function loginSubmitHandler(e:React.SyntheticEvent){
        e.preventDefault();
        alert(emailOrPhone+password);
    }

  return (
    <div className="login-page">
      <div className="login--container">
        <h1>Admin Dashboard</h1>
        
        {/* Input useremail or phone and password */}
        <form className="login-form" onSubmit={loginSubmitHandler}>
          <div className="login-input">
            <p>Email or Phone Number</p>
            <input type="text" id="email-phone" 
            onChange={(e:React.FormEvent<HTMLInputElement>)=>{
                setEmailOrPhone(e.currentTarget.value);
            }}
            />
          </div>
          <div className="login-input">
            <p>Password</p>
            <input type="text" id="password" 
            onChange={(e:React.FormEvent<HTMLInputElement>)=>{
                setPassword(e.currentTarget.value);
            }}
            />
          </div>
          <button className="login-btn" type="submit">Login</button>
        </form>
        {/* End of input useremail or phone and password */}

        <h4>OR</h4>

        {/* Google auth button */}
        <button className="login-btn-google">
        <img src="https://img.icons8.com/office/16/000000/google-logo.png"/>
            Signup With Google</button>
        {/* End of google auth button */}

      </div>

    </div>
  );
}

export default Login;
