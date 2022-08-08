import React from "react";
import './landingpage.css'
import { Link } from "react-router-dom";
import {premiumjacket, longkurti , kidsdress, levisbag } from "../../assets/images"

export default function Landingpage() {
return (
<div className="container">
         <section id="hero">
            <div className="hero-overlay hero-image">
              <div className="hero-content">
                <h1 className="hero-heading">Welcome to CartMax</h1>
                <h3 className="hero-subheading">For all Fashion Wear</h3>
                <Link to="/products" className="btn btn-default">Shop Now</Link>
              </div>
              </div>
            <section className="categories">
                <h3 className="subheading text-center">Top Categories to choose from</h3>
                <div className="categories-cards ">
                 <div className="categories-card  zoom">
                    <div className="categories-images">
                      <img src= {premiumjacket} alt="random"/>
                      <h2 className="categories-heading text-center">Men</h2>
                    </div>
                  </div>
                  <div className="categories-card zoom">
                    <div className="categories-images">
                      <img src= {longkurti} alt="random"/>
                      <h2 className="categories-heading text-center">Women</h2>
                    </div>
                  </div>
                  <div className="categories-card zoom">
                    <div className="categories-images">
                      <img src= {kidsdress} alt="random"/>
                      <h2 className="categories-heading text-center">Kid's</h2>
                    </div>
                </div>
                <div className="categories-card zoom">
                    <div className="categories-images">
                      <img src= {levisbag} alt="random"/>
                      <h2 className="categories-heading text-center">Fashion</h2>
                    </div>
                </div>

              </div>
              
            
            </section>
            </section>
          </div>
)

}

                  
              

