import './Wishlist.css'
import img1 from '../../assets/images/product6.jpg'
import img2 from '../../assets/images/product3.jpg'
import img3 from '../../assets/images/product5.jpg'
import { Footer, Navbar } from '../../components'
export default function Wishlist() {
    return (
        <div>
            <Navbar />
        <main className="wishlist-container">
        <h3 className="heading">My Wishlist</h3>
        <div className="wishlist">
            <div className="product-card">
         <div className="example-div">
         <div className="card ecomm">
             <div className="product-image">
              <img src={img1} alt="card-pic"/>
            </div>
            <span className="product-favourite"><i className="fas fa-heart"></i></span>
    
            <div className="card-title">Denim Jacket</div>
           <div className="card-price">
             <span className="price-now">Rs.350</span>
            <span className="price-before">Rs.899</span>
            <span className="discount">(60% OFF)</span>
           </div>
           <button className="btn btn-primary">Move to Cart</button>
       </div>
      </div>
      </div>
      <div className="product-card">
      <div className="example-div">
          <div className="card ecomm">
              <div className="product-image">
               <img src={img2} alt="card-pic"/>
              </div>
              <span className="product-favourite">
                <i className="fas fa-heart"></i>              
              </span>
              <div className="card-title">Puma Shoes</div>
              <div className="card-price">
                  <span className="price-now">Rs.350</span>
                  <span className="price-before">Rs.899</span>
                  <span className="discount">(60% OFF)</span>
                </div>
                <button className="btn btn-primary">Move to Cart</button>
            </div>
           </div>
           </div>
           <div className="product-card">
            <div className="example-div">
                <div className="card ecomm">
                    <div className="product-image">
                     <img src={img3} alt="card-pic"/>
                    </div>
                    <span className="product-favourite">
                      <i className="fas fa-heart"></i>              
                    </span>
                    <div className="card-title">Kid's Wear</div>
                    <div className="card-price">
                        <span className="price-now">Rs.350</span>
                        <span className="price-before">Rs.899</span>
                        <span className="discount">(60% OFF)</span>
                    </div>
                    <button className="btn btn-primary">Move to Cart</button>
                </div>
            </div>
            </div>
            </div>
             </main>
             <Footer />
             </div>
    )
}