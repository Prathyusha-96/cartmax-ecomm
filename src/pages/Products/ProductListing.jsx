import './ProductListing.css' 
import { useState, useEffect } from "react";
import axios from "axios";
import { Filter } from "./components/Filter";
import { useFilter } from "../../hooks";
import { ProductCard } from "./components/ProductCard";

import { categoryFilter, priceFilter, sortData, inStockFilter, ratingFilter } from "../../utils";

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    const {state}  = useFilter();

    const loadProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data.products);
      }
      catch (error) {
        console.log(error);
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
              key={product.id}
                productImg={product.image}
                productAlt={product.title}
                productBadge={product.badge}
                productTitle={product.title}
                productPrice={product.price}
                productDiscount={product.discount}
                productRating={product.rating}
              />
            ))}
    </div>
    </main>
</div>
        );
        };
        export { ProductListing };
        







 
       
    