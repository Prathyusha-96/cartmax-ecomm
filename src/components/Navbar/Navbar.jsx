import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/context/auth-context";
import { useCart } from "../../hooks/context/cart-context";

const Navbar = () => {
    const navigate = useNavigate();
    const { authState, authDispatch } = useAuth();
    const { cartState } = useCart()
    const userName = authState.user;
    const cart = cartState.cart

    const checkStatus = (userName) => {
        return userName ? "Logout" : "Login";
    }
    const logoutHandler = () => {
        navigate("/");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        authDispatch({ type: "LOGOUT"})
    }
    const userHandler = async (type) => {
        type === "Login" ? navigate("/login") : logoutHandler();
    }
     
    const CartRouteHandler = () => {
       authState.token ? navigate("/cart") : navigate("/login");

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
            <Link to="/Login" className=" btn btn-default"
             onClick={() => userHandler(checkStatus(userName))}>
            {checkStatus(userName)}
             </Link>
             </li>
        <li className="badge">
            <div className="btn-check" onClick={CartRouteHandler}>
            <i className="badge-icon fas fa-cart-plus"></i>
           {cart.length !== 0 ? <span className="badge-number">{cart.length}</span>: null }
        </div></li>
        <li className="badge">
            <Link to="/Wishlist">
            <i className="badge-icon fas fa-heart" aria-hidden="true"></i>
            <span className="badge-number">0</span> 
        </Link></li>
  
    </ul>
</nav>
    )
}
export { Navbar }