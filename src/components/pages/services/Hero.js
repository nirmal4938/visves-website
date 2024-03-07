import React from "react";
import imagex from "../../assets/images/aboutusImages/about_us_hero_right_image.svg";
import heroImage from "../../assets/images/hero_alt.png";

export const Hero = () => {
  return (
    <div className="hero-section">
      <div className="row d-flex">
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-5">
          <div className="hero-text-section">
            <h3 className="text-about">WELCOME TO VISVES ENGINEERING</h3>
            <h1 className="hero-title">Our Services</h1>

            <p className="hero-p">
              We provided different kind of services to our clients and users.
              Our team is easy to solve all types of problems. 
            </p>
            <p className="hero-w">24x7 Available</p>
            <p className="hero-w">User Satisfaction is our goal</p>
            <button type="button" className="brand-button">
              Our Products
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={heroImage} className="hero-image img-fluid" />
        </div>
      </div>
    </div>
  );
};
