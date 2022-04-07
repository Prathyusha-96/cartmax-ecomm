const ProductCard = ({
    productImg,
    productAlt,
    productBadge,
    productTitle,
    productPrice,
    productDiscount,
    productRating
  }) => {
      const ratingArray = [ 1, 2, 3, 4, 5 ]
    return (
        <div className="example-div">
         <div className="card ecomm">
        <div className="product-image">
          <img src={productImg} alt={productAlt} className="img-responsive" />
          </div>
           <button className="ico">
          <i className="far fa-heart"></i>
          </button>
         {productBadge !== "None" ? <span className="card-badge">{productBadge} </span> : ""}
          <div className="card-title">{productTitle}</div>
          <div className="card-price">₹ {productPrice}
          <span className="discount">{productDiscount}</span>
          </div>
          <div className="rating-container">
             {ratingArray.map(item => (
              <i key={item}  className={`${item <= Number(productRating) ? "fas" : "far"} fa-star`} ></i>
               ))}
            </div>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
      );
  };
  
  export { ProductCard };