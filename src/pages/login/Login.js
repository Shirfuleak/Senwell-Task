import React, { useState } from "react";
import { useNavigate } from "react-router";
import { UserAuthentication } from "../../consts/UserAuthentication";
import './Login.css';

const Login=()=>{
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [errorEmail,setErrorEmail]=useState("");

    const [password,setPassword]=useState("");
    const [errorPassword,setErrorPassword]=useState("");

    const [successMsg,setSuccessMsg]=useState('');

    const handleEmailChange=(e)=>{
        setSuccessMsg('');
        setErrorEmail('');
        setEmail(e.target.value)
    }

    const handlePasswordChange=(e)=>{
        setSuccessMsg('');
        setErrorPassword('');
        setPassword(e.target.value)
    }

    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        const emailCheck=UserAuthentication[0].email;
        const passCheck=UserAuthentication[0].password;
        if(pattern.test(email) && password.length>=8 && emailCheck===email && passCheck===password ){
            navigate('/dashboard')
            localStorage.setItem("token",UserAuthentication[0].token)
        }

        if(emailCheck!==email)
        {
            setErrorEmail('Email is invalid')            
        }

        if(passCheck!==password){
            setErrorPassword('password is wrong')
        }
        
    }

    return(
     <div className="outerdiv"> 
      <div className="innerdiv">
<form action="#" className="sign-in-form"  onSubmit={handleFormSubmit}>
            <h2 className="title"> Welcome</h2>
            <h3 >Log in to your to continue</h3>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" className="" onChange={handleEmailChange}  value={email} autoComplete="off" placeholder="akash.shirfule@gmail.com"/>
              {errorEmail && <p className="error-msg">{errorEmail}</p>}
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              
              <input id="password" type="password" className="" value={password}  onChange={handlePasswordChange} autoComplete="off" placeholder="Akash@123"/>
             <div> {errorPassword && <p className="error-msg">{errorPassword}</p>}</div>
            </div>
            <a href="#">Forget your password?</a>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Don't have an account?<a href="#" >Sign up</a></p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          </div> 
     </div>
    );
}

export default Login;