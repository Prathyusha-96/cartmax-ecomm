
import './landingpage.css';
import img1 from '../../assets/images/product6.jpg'
import img2 from '../../assets/images/product2.jpg'
import img3 from '../../assets/images/product5.jpg'
import { Footer, Navbar } from '../../components';

export default function Landingpage(){
    return(
        <div className="container">
          <Navbar />

        <section id="hero">
            <div className="hero-overlay hero-image">
              <div className="hero-content">
                <h1 className="hero-heading">Welcome to CartMax</h1>
                <h3 className="hero-subheading">For all Fashion Wear</h3>
                <a href="/pages/products.html" className="btn btn-default">Shop Now</a>
              </div>
              </div>
             </section>
    
             <section className="categories">
                <h3 className="subheading text-center">Top Categories to choose from</h3>
                <div className="categories-cards">
                  <div className="categories-card">
                    <div className="categories-images">
                      <img src= {img1} alt="random"/>
                      <h2 className="categories-heading text-center">Men's jacket</h2>
                    </div>
                  </div>
                  <div className="categories-card">
                    <div className="categories-images">
                      <img src= {img2} alt="random"/>
                      <h2 className="categories-heading text-center">Girl's fashion</h2>
                    </div>
                  </div>
                  <div className="categories-card">
                    <div className="categories-images">
                      <img src= {img3} alt="random"/>
                      <h2 className="categories-heading text-center">Kid's Wear</h2>
                    </div>
                </div>
              </div>
            </section>
            < Footer />
          </div>
    
    )
}

