

import Cart  from "./pages/Cart/Cart";
import Products from "./pages/Products/Products"
import  Login  from "./pages/Authentication/Login";
import Signup  from "./pages/Authentication/Signup";
import Wishlist  from "./pages/Wishlist/Wishlist";
import  Landingpage from "./pages/Landing-page/Landingpage";

function App() {
  return (
    <div className="App">
  < Landingpage />
    < Products />
    < Cart />
    < Login />
    < Signup />
    < Wishlist/> 
    </div> 
  )
}

export default App;
