
import './cart.css'
import { Footer, Navbar } from '../../components';
import img2 from '../../assets/images/product4.jpg'

export default function Cart(){
    return (   
      <div>
         <Navbar />
    
        <div className="container" >
          
     <main className="cart-container">
    <h3 className="content-heading text-center">MY Cart</h3>
    <div className="cart">
      <div className="cart-horizontal">
        <div className="cart-image">
          <img src={ img2 } alt="img"/>
        </div>
        <div className="cart-content">
          <div className="card-title">Men's Jacket</div>
          <div className="card-price">
            <span className="price-now">Rs.350</span>
           <span className="price-before">Rs.899</span>
           <span className="discount">(60% OFF)</span>
          </div>
          <div className="cart-quantity">
            <p className="cart-text">Quantity:</p>
            <p>
            <i className="fas fa-minus-circle"></i>
            </p>
            <p className="cart-quantity-number">1</p>
            <p>
            <i className="fas fa-plus-circle"></i>
            </p>
          </div>
          <div className="product-button">
            <button className="btn btn-primary">Move to Wishlist</button>
            <button className="btn btn-secondary">Remove From Cart</button>
          </div>
        </div>
        </div>
        
      <div className="cart-vertical">
        <h3 className="cart-heading">Price details</h3>
        <hr/>
        <div className="cart-price--distribution">
        <p>Price (2 items) <span className="cart-price--value">Rs.1299</span></p>
        <p>Discount <span className="cart-price--value">Rs.600</span> </p>
        <p>Delivery Charges <span className="cart-price--value">Rs.199</span></p>
        </div>
        <hr />
        <h3 className="cart-total">Total amount <span className="cart-price--value">Rs.899</span></h3>
        <hr/>
        <p className="cart-text">You will save 499 on this order</p>
        <button className="btn btn-primary">Place your order</button>
    </div>
    </div>
       </main>
      
       </div>
       <Footer />
       </div>
        
      )
}