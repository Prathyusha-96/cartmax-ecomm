import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Login, Signup, Landingpage, Cart, Wishlist,   ProductListing } from "./pages/index";
import MockmanEs from "mockman-js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
     
     <Routes>
     <Route path="/" element={<Landingpage />} />
     <Route path="/Login" element={<Login />} />
     <Route path="/Signup" element={<Signup />} />
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
