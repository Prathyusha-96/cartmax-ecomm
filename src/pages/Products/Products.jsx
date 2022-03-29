import { Footer, Navbar } from '../../components'
import img1 from '../../assets/images/product6.jpg'
import img2 from '../../assets/images/product4.jpg'
import img3 from '../../assets/images/product3.jpg'
import img4 from '../../assets/images/product2.jpg'
import img5 from '../../assets/images/product1.jpg'
import img6 from '../../assets/images/product5.jpg'
import { Filter } from '../../pages'

 import './products.css' 

export default function Products() {
    return (
        <div>
            <Navbar />
        <div className="product-container">
            
<Filter />
        <main className="product">
      <h4 className="heading fw-500">
        Showing All Products
      </h4>
      
 <div className="product-cards">

    <div className="example-div">

        <div className="card ecomm">
            <div className="product-image">
             <img src= { img1 } alt="card-pic"/>
            </div>
            <div className="card-badge">NEW</div>
            <button className="ico">
                <i className="fa fa-heart"></i>
            </button>
            <div className="card-title">Denim Jacket</div>
            <div className="card-price">
                <span className="price-now">Rs.350</span>
                <span className="price-before">Rs.899</span>
                <span className="discount">(60% OFF)</span>
            </div>
            <button className="btn btn-primary">ADD TO CART</button>
        </div>
    </div>
    
    <div className="example-div">
        <div className="card ecomm">
            <div className="product-image">
             <img src= { img2 } alt="card-pic"/>
            </div>
            <button className="ico">
                <i className="fa fa-heart"></i>
            </button>
            <div className="card-title">Men's Jacket</div>
            <div className="card-price">
                <span className="price-now">Rs.550</span>
                <span className="price-before">Rs.1000</span>
                <span className="discount">(50% OFF)</span>
            </div>
            <button className="btn btn-primary">ADD TO CART</button>
        </div>
    </div>
    
    
    <div className="example-div">
        <div className="card ecomm">
            <div className="product-image">
             <img src={ img3 } alt="card-pic"/>
            </div>
            <button className="ico">
                <i className="far fa-heart"></i>
            </button>
            <div className="card-title">Puma Shoes</div>
            <div className="card-price">
                <span className="price-now">Rs.350</span>
                <span className="price-before">Rs.899</span>
                <span className="discount">(60% OFF)</span>
            </div>
            <button className="btn btn-primary">ADD TO CART</button>
        </div>
    </div>
    
    <div className="example-div">
        <div className="card ecomm">
            <div className="product-image">
             <img src={ img4 }alt="card-pic"/>
            </div>
            <button className="ico">
                <i className="far fa-heart"></i>
            </button>
            <div className="card-title">Hand Bag</div>
            <div className="card-price">
                <span className="price-now">Rs.350</span>
                <span className="price-before">Rs.899</span>
                <span className="discount">(60% OFF)</span>
            </div>
            <button className="btn btn-primary">ADD TO CART</button>
        </div>
    </div>
    
    <div className="example-div">
        <div className="card ecomm">
            <div className="product-image">
             <img src= { img5 } alt="card-pic"/>
            </div>
            <button className="ico">
                <i className="far fa-heart"></i>
            </button>
            <div className="card-title">Kid's Wear</div>
            <div className="card-price">
                <span className="price-now">Rs.350</span>
                <span className="price-before">Rs.899</span>
                <span className="discount">(60% OFF)</span>
            </div>
            <button className="btn btn-primary">ADD TO CART</button>
        </div>
    </div>
    
    <div className="example-div">
        <div className="card ecomm">
            <div className="product-image">
             <img src={ img6 } alt='card-pic' />
            </div>
            <button className="ico">
                <i className="far fa-heart"></i>
            </button>
            <div className="card-title">Trendy Kurti</div>
            <div className="card-price">
                <span className="price-now">Rs.350</span>
                <span className="price-before">Rs.899</span>
                <span className="discount">(60% OFF)</span>
            </div>
            <button className="btn btn-primary">ADD TO CART</button>
        </div>
    </div>

</div>
 </main>
 </div>
 <Footer />
 </div>
       
    )
}