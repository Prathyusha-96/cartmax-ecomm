import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider } from "./hooks/context/auth-context";
import { FilterProvider } from "./hooks/context/filter-context";
import { CartProvider }  from "./hooks/context/cart-context";
import { WishlistProvider } from "./hooks/context/wishlist-context";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
      <WishlistProvider>
    <FilterProvider>
    <App/>
    </FilterProvider>
    </WishlistProvider>
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
