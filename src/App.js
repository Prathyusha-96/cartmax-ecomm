import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Login, SignUp, Landingpage, Cart, Wishlist } from "./pages";
import MockmanEs from "mockman-js";
import { ProductListing } from './pages/Products/ProductListing';
function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
    
     <Route path="/" element={<Landingpage />} />
     <Route path="/Login" element={<Login />} />
     <Route path="/SignUp" element={<SignUp />} />
     <Route path="/Cart" element={<Cart />} />
     <Route path="/Wishlist" element={<Wishlist/>} />
     <Route path="/Products" element={<ProductListing/>} />

     <Route path="/mock" element={<MockmanEs />} />
</Routes>
 <Footer/>
    </div> 
  )
}

export default App;
