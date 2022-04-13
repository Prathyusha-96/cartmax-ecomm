import React from "react";

import { Link } from "react-router-dom";


import img1 from "../../assets/images/product6.jpg"
import img2 from "../../assets/images/product2.jpg"
import img3 from "../../assets/images/product5.jpg"
import img4 from "../../assets/images/product1.jpg"
import img5 from "../../assets/images/product10.jpg"
import img6 from "../../assets/images/product3.jpg"
import img7 from "../../assets/images/product9.jpg"


import './landingpage.css'

export default function Landingpage() {
return (

        <div className="container">
         <section id="hero">
            <div className="hero-overlay hero-image">
              <div className="hero-content">
                <h1 className="hero-heading">Welcome to CartMax</h1>
                <h3 className="hero-subheading">For all Fashion Wear</h3>
                <Link to="/Products" className="btn btn-default">Shop Now</Link>
              </div>
              </div>
             
             <section className="categories">
                <h3 className="subheading text-center">Top Categories to choose from</h3>
                <div className="categories-cards ">
                  <div className="categories-card  zoom">
                    <div className="categories-images">
                      <img src= {img1} alt="random"/>
                      <h2 className="categories-heading text-center">Men</h2>
                    </div>
                  </div>
                  <div className="categories-card  zoom">
                    <div className="categories-images">
                      <img src= {img4} alt="random"/>
                      <h2 className="categories-heading text-center">Women</h2>
                    </div>
                  </div>
                  <div className="categories-card zoom">
                    <div className="categories-images">
                      <img src= {img2} alt="random"/>
                      <h2 className="categories-heading text-center">Fashion</h2>
                    </div>
                  </div>
                  <div className="categories-card zoom">
                    <div className="categories-images">
                      <img src= {img3} alt="random"/>
                      <h2 className="categories-heading text-center">Kid's</h2>
                    </div>
                </div>
              </div>
              <section className="categories">
                <h3 className="subheading text-center">Trending</h3>
                <div className="categories-cards">
                  <div className="categories-card">
                    <div className="categories-images">
                      <img src= {img5} alt="random"/>
                    </div>
                  </div>
                  <div className="categories-card">
                    <div className="categories-images">
                      <img src= {img6} alt="random"/>
                       </div>
                  </div>
                  <div className="categories-card">
                    <div className="categories-images">
                      <img src= {img7} alt="random"/>
                
                    </div>
                </div>
              </div>
              </section>
            </section>
            </section>
          </div>


    )
}

