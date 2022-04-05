import './ProductListing.css' 
import { useState, useEffect } from "react";
import axios from "axios";
import { Filter } from "./components/Filter";
import { ProductCard } from "./components/ProductCard";

const ProductListing = () => {
    const [products, setProducts] = useState([]);
  
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
   return (
      <div className="product-container">
            <Filter />
        <main className="product">
      <h4 className="heading fw-500">
        Showing All Products
      </h4>
      <div className="product-cards">
    {products.map(product => (
              <ProductCard
                productImg={product.image}
                productAlt={product.title}
                productBadge={product.badge}
                productTitle={product.title}
                productPrice={product.price}
                productDiscount={product.discount}
              />
            ))}
    </div>
    </main>
</div>
        );
        };
        export { ProductListing };
        







 
       
    