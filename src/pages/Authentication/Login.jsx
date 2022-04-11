import React from "react";
import './auth.css'
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/context/auth-context"

 const  Login = () => {
   const navigate = useNavigate();

   const { authDispatch } = useAuth();

   const[ user, setUser] = useState({
       
       email: "",
       password: "",
   })

   const guestUser = {
       email: "adarshbalika@gmail.com",
       password: "adarshbalika",
   }

   const changeHandler = (event) => {
       const { name, value } = event.target;
       setUser({ ...user, [name]: value })
   }

   const guestUserHandler = (event) => {
       event.preventDefault();
       setUser(guestUser);
   }
   const loginHandler = async (event) => {

       event.preventDefault();
       try {
        const response = await axios.post("/api/auth/login", user);
        if (response.status === 200) {
  
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem("user", JSON.stringify(response.data.foundUser));
  
          authDispatch({ type: "LOG_IN", payload: { user: response.data.foundUser, token: response.data.encodedToken } })
  
          navigate("/");  
       }
       else if (response.status === 404) {
        alert("email not found");
      }
      else if (response.status === 401) {
        alert("Wrong Password");
      }
      else if (response.status === 500) {
        alert("Server Error");
      }
    }
    catch (error) {
      console.log(error);
    }
  }


    return (

    <main className="container">
        
        <div className="login-form">
            <div className="login-title">
                <h2 className="heading text-center">Login</h2>
            </div>
           
            <div className="input">
                <label htmlFor="email">email</label>
                <input 
                className="input-txt" 
                type="email"
                placeholder="abc@gmail.com"
                name="email" 
                value={user.email}
                required
                onChange={changeHandler} />
            </div>
            <div className="input">
                <label htmlFor="password">Password</label>
                <input 
                className="input-txt" 
                type="password"
                placeholder="********"
                name="password" 
                value={user.password}
                required
                onChange={changeHandler}
                />
            </div>
            <div className="input">
                <label className="input-checkbox"></label>
                <input type="checkbox" />
                <span className="text">Remember Me</span>
         <Link to="./Put route forget  password" className="login-forget">Forget your Password?</Link>
            </div>
            <div className="text-center login-submit ">
             <button 
              type="submit"
              className=" btn btn-primary" 
              onClick={guestUserHandler}
              > 
              Guest Login 
              </button>
             <button 
                type="submit"
                className=" btn btn-primary"
                onClick={loginHandler} >
              Login
              </button>
              </div>
            <div className="text-center">
            <span> Create New Account
                     <Link to="/SignUp" className="login-link fw-400">SignUp</Link></span>
            </div>
           
        </div>
    </main>

     );
    }

export { Login }