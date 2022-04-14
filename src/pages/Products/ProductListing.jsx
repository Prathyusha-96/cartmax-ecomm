import React from "react";

import './ProductListing.css' 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Filter } from "./components/Filter";
import { useFilter, useAuth, useCart, useWishlist } from "../../hooks";
import { getProductsService } from "../../services";
import { ProductCard } from "./components/ProductCard";

import { categoryFilter, priceFilter, sortData, inStockFilter, ratingFilter, addToCartHandler, addToWishlistHandler, removeFromWishlistHandler } from "../../utils";


const ProductListing = () => {
  const navigate = useNavigate();

    const [ products, setProducts ] = useState([]);
    const { cartState, cartDispatch } = useCart();
    const { wishlistState, wishlistDispatch } = useWishlist();
    const { authState } = useAuth();
    const { token } = authState;
    const { cart } = cartState;
    const { wishlist } = wishlistState;
    const { state}   = useFilter();

    const checkCartAction = (_id) => {
      const item = cart.find(item => item._id === _id);
      return item ? "Go to Cart" : "Add to Cart";
    }
    const callAddToCartHandler = (_id) => {
      if (token) {
        const product = products.find(item => item._id === _id);
        addToCartHandler(product, cartDispatch, token);
      }
      else {
        navigate("/login")
      }
    }
    const checkCartRouteHandler = (_id) => {
    return checkCartAction(_id) === "Add to Cart" ? callAddToCartHandler(_id) : navigate("/cart")
    }
    const checkWishlistAction = (_id) => {
      const item = wishlist.find(item => item._id === _id);
      return item ? "Remove" : "Add";
    }
    const callAddToWishlistHandler = (_id) => {
      if (token) {
        const product = products.find(item => item._id === _id);
        addToWishlistHandler(product, wishlistDispatch, token);
      }
      else {
        navigate("/login")
      }
    }
  
    const checkWishlistActionHandler = (_id) => {
      return checkWishlistAction(_id) === "Remove" ? removeFromWishlistHandler(_id, token, wishlistDispatch) : callAddToWishlistHandler(_id);
    }
    const loadProducts = async () => {
      try {
        const response = await getProductsService();
        if (response.status === 200) {
          setProducts(response.data.products);
        }
      
      else {
        throw new Error();
      }
    }
    catch (error) {
      alert(error);
    }
  }

  
    useEffect(() => loadProducts(), [])
    
    const categoryFilteredData = categoryFilter(products, state);
    const ratingFilteredData = ratingFilter(categoryFilteredData, state);
    const inStockFilteredData = inStockFilter(ratingFilteredData, state);
    const priceFilteredData = priceFilter(inStockFilteredData, state);
    const sortedData = sortData(priceFilteredData, state);
   
    return (
      <div className="product-container">
            <Filter />
        <main className="product">
      <h4 className="heading fw-500">
        Showing All Products
      </h4>
      <div className="product-cards">
    {sortedData.map(product => (
              <ProductCard
                key={product._id}
                productId={product._id}
                productImg={product.image}
                productAlt={product.title}
                productBadge={product.badge}
                productTitle={product.title}
                productPrice={product.price}
                productDiscount={product.discount}
                productRating={product.rating}
                checkCartAction={checkCartAction}
                checkCartRouteHandler={checkCartRouteHandler}
                checkWishlistAction={checkWishlistAction}
                checkWishlistActionHandler={checkWishlistActionHandler}
              />
            ))}
    </div>
    </main>
</div>
        );
        };
        export { ProductListing };
        







 
       
    