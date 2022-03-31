import { Link } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
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
        
        <li className="badge">
            <Link to="/Login" >
            <i className="badge-icon fa-solid fa-user"></i>
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