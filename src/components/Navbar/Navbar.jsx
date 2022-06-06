import React from "react";
import "./Navbar.css";
import { useNavigate, Link  } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../hooks";
import { toast } from "react-toastify";
const Navbar = () => {

    const navigate = useNavigate();
    const { authState,  authDispatch } = useAuth();
    const { cartState, cartDispatch  } = useCart();
    const { wishlistState, wishlistDispatch } = useWishlist();
    const userName = authState.user;
    const cart = cartState.cart;
    const wishlist = wishlistState.wishlist;

    const checkStatus = (userName) => {
        return userName ? "Logout" : "Login";
       
    };
    const logoutHandler = () => {
        navigate("/");
        cartDispatch({ type: "EMPTY_CART" });
        wishlistDispatch({ type: "EMPTY_WISHLIST"})
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        authDispatch({ type: "LOGOUT"});
        toast.success("Successfully Loggedout ")
    }
    
    const userHandler = async (type) => {
        type === "LOGIN" ?  navigate("/login") : logoutHandler();
    }
     
    const CartRouteHandler = () => {
       authState.token ? navigate("/cart") : navigate("/login");

    }
    const wishlistRouteHandler = () => {
        authState.token ? navigate("/wishlist") : navigate("/login");
    }

    return (
<nav>
    <ul className="left-nav">
        
        <Link to="/">CartMax</Link>
     </ul>
     <ul className="navbar-search">
    <input className="search-box" type="search" placeholder="Search" /><span className="search-icon">
   <i className="fas fa-search" aria-hidden="true"></i></span>
  </ul>
    <ul className="right-nav">
        <li>
    <Link to="/products">Shop Now</Link>
    </li>
        <li >
            <Link to="/Login"  className= "btn btn-default"
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
        <div className="btn-check" onClick={wishlistRouteHandler}>
            <i className="badge-icon far fa-heart"></i>
            {wishlist.length !== 0 ? <span className="badge-number">{wishlist.length}</span>: null }
           </div>
        </li>
        
    </ul>
</nav>
    )
}
export { Navbar }