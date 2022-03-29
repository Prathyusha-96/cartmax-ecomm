import './App.css';
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "./components/index";
import { Login, Signup, Landingpage, Cart, Wishlist, Products } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
     <Route path="/" element={< Landingpage />} />
     <Route path="/Products" element={<Products />} />
     <Route path="/Login" element={<Login />} />
     <Route path="/Signup" element={<Signup />} />
     <Route path="/Cart" element={<Cart />} />
     <Route path="/Wishlist" element={<Wishlist/>} />
</Routes>
 <Footer/>
    </div> 
  )
}

export default App;
