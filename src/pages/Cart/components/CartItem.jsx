import React from "react"

const CartItem = ({ cartId, cartImg, cartAlt, cartTitle, cartPrice, cartDiscount, cartQuantity, callRemoveFromCartHandler, callUpdateCartHandler, callMoveToWishlistHandler  }) => {
return (
     
     <div className="cart-horizontal">
        <div className="cart-image">
          <img src={ cartImg } alt={cartAlt} className="img-responsive"/>
        </div>
        <div className="cart-content">
          <p className="card-title">{cartTitle}</p>
          <h3 className="card-price"> ₹{cartPrice} 
            <span className="discount"> {cartDiscount}</span>
           </h3>
           <div className="cart-quantity">
           <p className="cart-text">Quantity:</p>
          
           <button className="btn-control decrease-btn" onClick={() => cartQuantity === 1 ? callRemoveFromCartHandler(cartId) : callUpdateCartHandler(cartId, "decrement")}>
            <i className={`fas ${cartQuantity === 1 ? "fa-trash-alt" : "fa-minus"}`}></i>
          </button>
          <p className="cart-quantity-number">{cartQuantity}</p>
         <button className="btn-control increase-btn" onClick={() => callUpdateCartHandler(cartId, "increment")}>
            <i className="fas fa-plus"></i>
          </button>
          </div>
          <div className="product-button">
            <button className="btn btn-primary" onClick={() => callMoveToWishlistHandler(cartId)}>Move to Wishlist</button>
            <button className="btn btn-secondary cart-remove-btn" onClick={() => callRemoveFromCartHandler(cartId)}>Remove From Cart</button>
          </div>
        </div>
        </div>
        
       
        
        
)

}
export { CartItem }