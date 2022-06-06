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
     
      <main className="cart-container">
        <div className="container">
        <div className="example-div">
        <div className="empty-cart">
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
        </div>
        </div>
        </div>
        </main>
       )
     }
        export { Cart };










    
    
     