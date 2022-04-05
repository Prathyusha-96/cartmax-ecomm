const ProductCard = ({productImg,
    productAlt,
    productBadge,
    productTitle,
    productPrice,
    productDiscount
  }) => {
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
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
      );
  };
  
  export { ProductCard };