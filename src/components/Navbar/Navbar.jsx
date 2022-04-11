import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/context/auth-context";

const Navbar = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useAuth();
    const userName = authState.user;

    const checkStatus = (userName) => {
        return userName ? "Logout" : "Login";
    }
    const logoutHandler = () => {
        navigate("/");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        authDispatch({ type: "LOG_OUT"})
    }
    const userHandler = async (type) => {
        type === "Login" ? navigate("/login") : logoutHandler();
    }
    return (
<nav>
    <div className="left-nav">
        <Link to="/">CartMax</Link>
       </div>
     <ul className="navbar-search">
    <input className="search-box" type="search" placeholder="Search" /><span className="search-icon">
   <i className="fas fa-search" aria-hidden="true"></i></span>
  </ul>
    <ul className="right-nav">
        
        <li>
            
          {/* <button className="btn-login" onClick={() => userHandler(checkStatus(userName))}>{checkStatus(userName)}</button>  */}
            
        <Link to="/Login" className=" btn btn-default"
             onClick={() => userHandler(checkStatus(userName))}>
            {checkStatus(userName)}
             </Link>
             </li>
        <li className="badge">
            <Link to="/Cart">
            <i className="badge-icon fas fa-cart-plus"></i>
            <span className="badge-number">0</span> 
        </Link></li>
        <li className="badge">
            <Link to="/Wishlist">
            <i className="badge-icon fas fa-heart" aria-hidden="true"></i>
            <span className="badge-number">0</span> 
        </Link></li>
  
    </ul>
</nav>
    )
}
export {Navbar}