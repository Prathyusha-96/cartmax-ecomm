import React from "react";

const ProductCard = ({
    productId,
    productImg,
    productAlt,
    productBadge,
    productTitle,
    productPrice,
    productDiscount,
    productRating,
    checkCartAction,
    checkCartRouteHandler,
    checkWishlistAction,
    checkWishlistActionHandler

  }) => {
     const ratingArray = [ 1, 2, 3, 4, 5 ]
    return (
        <div className="example-div">
         <div className="card ecomm">
        <div className="product-image">
          <img src={productImg} alt={productAlt} className="img-responsive" />
          </div>
           <button className="ico">
           <i className={`${checkWishlistAction(productId) === "Remove" ? "fas" : "far"} fa-heart`} onClick={() => checkWishlistActionHandler(productId)}></i>
           </button>
         {productBadge !== "None" ? <span className="card-badge">{productBadge} </span> : ""}
          <div className="card-title">{productTitle}</div>
          <div className="price-rating-container">
          <div className="card-price">₹ {productPrice}
          <span className="discount">{productDiscount}</span>
          </div>
          <div className="rating-container">
             {ratingArray.map(item => (
              <i key={item}  className={`${item <= Number(productRating) ? "fas" : "far"} fa-star`} ></i>
               ))}
            </div>
            </div>
          <button className="btn btn-primary" onClick={() => checkCartRouteHandler(productId)}>{checkCartAction(productId)}</button>
        </div>
      </div>
      );
  };
  
  export { ProductCard };