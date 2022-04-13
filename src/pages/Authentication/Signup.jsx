import React from "react";
import './auth.css'
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from '../../hooks/context/auth-context';

const SignUp = () => {
  const navigate = useNavigate();

    const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  })

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value })
  }

 
 const checkPasswordHandler = () => {
   if (user.password !== user.confirmPassword) {
     alert("your confirm password is different then the real password")
   }  else {
     return true;
   }
 }
  
  const SignUpHandler = async (event) => {

    event.preventDefault();
   

    if (checkPasswordHandler()) {
      try {
        const response = await axios.post("/api/auth/signup", {user} );
         
        if (response.status === 201) {

          localStorage.setItem("token", response.data.encodedToken);

          localStorage.setItem("user", JSON.stringify(response.data.createdUser));

          authDispatch({ type: "SIGN_UP", payload: { user: response.data.createdUser, token: response.data.encodedToken } })

          navigate("/");
        }
        else if (response.status === 422) {
          alert("User already exists");
        }
        else if (response.status === 500) {
          alert("Server Error");
        }
      }
       catch (error) {

       }
    }
  }
    return (
    <main className="container">
        <div className="signup-form">
            <div className="signup-title">
                <h2 className="heading text-center">Signup</h2>
                </div>
              
        <div className="input">
                <label htmlFor="first-name">First Name</label>
                <input className="input-txt"
                //    id="first-name" 
                   type="text"
                   placeholder="Enter your name"
                   name="firstName"
                   value={user.firstName}
                   required
                   onChange={changeHandler}
                   />
              </div>
              <div className="input">
                <label htmlFor="last-name">Last Name</label>
                <input className="input-txt"
                //    id="first-name" 
                   type="text"
                   placeholder="Enter your name"
                   name="lastName"
                   value={user.lastName}
                   required
                   onChange={changeHandler}
                   />
              </div>
            
            <div className="input">
                <label htmlFor="email">Email</label>
                <input  className="input-txt"
                //    id="email"
                   type="email" 
                   placeholder="abcd@gmail.com"
                   name="email"
                   value={user.email}
                   required
                   onChange={changeHandler}/>
            </div>
            <div className="input">
                <label htmlFor="password">Password</label>
                <input  className="input-txt"
                //   id="password"
                  type="password"
                  placeholder="*******"
                  name="password"
                  value={user.password}
                  required
                  onChange={changeHandler} />
            </div>
            <div className="input">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input className="input-txt"
                //   id="confirm-password"
                  type="password"
                  placeholder="*******"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  required
                  onChange={changeHandler} />
            </div>
            <div className="btn-signup text-center">
                <button type="submit" className="btn btn-primary" onClick={SignUpHandler}>
                Create New Account</button>
            </div>
          
            <div className="text-center">
            Already have an Account ?
            <Link to="/Login" className="login-link fw-400">
          Login 
        </Link>
        </div>
            
        </div>
    </main> 

    );
    }

    export{ SignUp }