
import './Navbar.css';

export default function Navbar() {
    return (

    
    <nav>
    <div className="left-nav">
        <a href="/index.html">CartMax</a>
      
 </div>
 <ul className="navbar-search">
    <input className="search-box" type="search" placeholder="Search" /><span className="search-icon">
   <i className="fas fa-search" aria-hidden="true"></i></span>
  </ul>
    <ul className="right-nav">
        
        <li className="badge"><a href="../../login.jsx" >
            <i className="badge-icon fa-solid fa-user"></i>
            </a></li>
        <li className="badge"><a href="/pages/cart.html">
            <i className="badge-icon fas fa-cart-plus"></i>
            <span className="badge-number">0</span> 
        </a></li>
        <li className="badge"><a href="/pages/wishlist.html">
            <i className="badge-icon fas fa-heart" aria-hidden="true"></i>
            <span className="badge-number">0</span> 
        </a></li>
  
    </ul>
</nav>
    )
}