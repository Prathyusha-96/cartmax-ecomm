import React from "react";
import './cart.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "./components/CartItem";
 import { CartBill } from "./components/CartBill";
import { useCart } from "../../hooks/context/cart-context";
import { useAuth } from "../../hooks/context/auth-context";
import { useWishlist } from "../../hooks";
import { getCartItemsHandler, removeFromCartHandler, updateCartHandler, getCartBill, moveToWishlistHandler } from "../../utils";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { authState } = useAuth();
  const { wishlistDispatch } = useWishlist();
  const { token } = authState;
  const { cart } = cartState;
  const { cartQuantity, itemsPrice, totalPrice } = getCartBill(cart);

  const callUpdateCartHandler = (_id, actionType) => {
    updateCartHandler(_id, actionType, token, cartDispatch);
  }

  const callRemoveFromCartHandler = (_id) => {
    removeFromCartHandler(_id, token, cartDispatch)
  }

 const callMoveToWishlistHandler = (_id) => {
  const item = cart.find(item => item._id === _id);
  moveToWishlistHandler(_id, item, wishlistDispatch, token, cartDispatch);
 }
  

  useEffect(() => getCartItemsHandler(token, cartDispatch), []);

    return (   
    <div className="container">
      <div className="cart-container">
        <main className="empty-cart  text-center">
      {cart.length !== 0 ?
       
       <>
       <h2 className="content-heading text-center">My Cart
              ({cart.length !== 0 ? <span>{cart.length}</span> : null})
          </h2>
          <section className="cart">
        <div className="cart-content">
              {cart.map(item => (
                <CartItem
                  key={item._id}
                  cartId={item._id}
                  cartImg={item.image}
                  cartAlt={item.title}
                  cartTitle={item.title}
                  cartPrice={item.price}
                  cartQuantity={item.qty}
                  callRemoveFromCartHandler={callRemoveFromCartHandler}
                  callUpdateCartHandler={callUpdateCartHandler}
                  callMoveToWishlistHandler={callMoveToWishlistHandler}
                  />
              ))}
            </div>
        <div className="bill-container">
              <CartBill
                cartItem={cartQuantity}
                itemPrice={itemsPrice}
                cartDiscount={300}
                cartDelivery={"FREE"}
                cartAmount={totalPrice}
              />
            </div>
            
          </section>
         
         </>
      :<>
       <h2>Your Cart is empty</h2>
          <Link to="/products">
            <button className="btn btn-solid-primary btn-link-products">Start Shopping</button></Link>
        </>}
        
        </main>
        </div>
        </div>
      
      )
     }
        export { Cart };










    
    //     <div className="container" >
          
    //  <main className="cart-container">
    // <h3 className="content-heading text-center">MY Cart</h3>
    // <div className="cart">
    //   <div className="cart-horizontal">
    //     <div className="cart-image">
    //       <img src={ img2 } alt="img"/>
    //     </div>
    //     <div className="cart-content">
    //       <div className="card-title">Men's Jacket</div>
    //       <div className="card-price">
    //         <span className="price-now">Rs.350</span>
    //        <span className="price-before">Rs.899</span>
    //        <span className="discount">(60% OFF)</span>
    //       </div>
    //       <div className="cart-quantity">
    //         <p className="cart-text">Quantity:</p>
    //         <p>
    //         <i className="fas fa-minus-circle"></i>
    //         </p>
    //         <p className="cart-quantity-number">1</p>
    //         <p>
    //         <i className="fas fa-plus-circle"></i>
    //         </p>
    //       </div>
    //       <div className="product-button">
    //         <button className="btn btn-primary">Move to Wishlist</button>
    //         <button className="btn btn-secondary">Remove From Cart</button>
    //       </div>
    //     </div>
    //     </div>
        
    //   <div className="cart-vertical">
    //     <h3 className="cart-heading">Price details</h3>
    //     <hr/>
    //     <div className="cart-price--distribution">
    //     <p>Price (2 items) <span className="cart-price--value">Rs.1299</span></p>
    //     <p>Discount <span className="cart-price--value">Rs.600</span> </p>
    //     <p>Delivery Charges <span className="cart-price--value">Rs.199</span></p>
    //     </div>
    //     <hr />
    //     <h3 className="cart-total">Total amount <span className="cart-price--value">Rs.899</span></h3>
    //     <hr/>
    //     <p className="cart-text">You will save 499 on this order</p>
    //     <button className="btn btn-primary">Place your order</button>
    // </div>
    // </div>
    //    </main>
      
    //    </div>

        
     