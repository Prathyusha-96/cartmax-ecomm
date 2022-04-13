
import React from "react";
const CartBill = ({cartItem, itemPrice, cartAmount, cartDelivery, cartDiscount}) => {
    return (
        
       
        <div className="bill-container">
        <div className="cart-vertical">
         <h3 className="cart-heading">Price details</h3>
         <hr/>
         <div className="cart-price--distribution ">
         <p>Price <span className="cart-quantity--items">({cartItem} items)</span>
         
             <span className="cart-price--value">Rs.{itemPrice}</span></p>
            <p>Discount <span className="cart-price--value">Rs.{cartDiscount}</span></p>
        <p>Delivery Charges <span className="cart-price--value">{cartDelivery}</span></p>
         </div>
         <hr />
         <h3 className="cart-total">Total amount <span className="cart-price--value">Rs.{cartAmount}</span></h3>
         <hr/>
         <button className="btn btn-primary">Place your order</button>
     </div>
</div>
       
        
    );
};
 export { CartBill }