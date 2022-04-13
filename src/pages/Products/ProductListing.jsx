import React from "react";

import './ProductListing.css' 
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Filter } from "./components/Filter";
import { useFilter, useAuth, useCart } from "../../hooks";
import { getProductsService } from "../../services";
import { ProductCard } from "./components/ProductCard";

import { categoryFilter, priceFilter, sortData, inStockFilter, ratingFilter } from "../../utils";
import { addToCartHandler } from "../../utils"

const ProductListing = () => {
  const navigate = useNavigate();

    const [ products, setProducts ] = useState([]);
    const { cartState, cartDispatch } = useCart();
    const { authState } = useAuth();
    const { token } = authState;
    const { cart } = cartState;
    const { state}   = useFilter();

    const checkAction = (_id) => {
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
    const checkRouteHandler = (_id) => {
      
      return checkAction(_id) === "Add to Cart" ? callAddToCartHandler(_id) : navigate("/cart")
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
                checkAction={checkAction}
                checkRouteHandler={checkRouteHandler}
              />
            ))}
    </div>
    </main>
</div>
        );
        };
        export { ProductListing };
        







 
       
    