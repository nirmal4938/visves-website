import React from "react";
import img_ from "../../assets/images/aboutusImages/hero_page_wire.svg";
import imagex from "../../assets/images/aboutusImages/about_us_hero_right_image.svg";
import heroImage from "../../assets/images/hero_alt.png";

export const Hero = () => {
  return (
    <div className="hero-section">
      <div className="wire">
        <img src={img_} alt="Icon" />
      </div>
      <div className="row d-flex">
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-5">
          <div className="hero-text-section">
            <h3 className="text-about">About Us</h3>
            <h1 className="hero-title">Visves Automation</h1>

            <p className="hero-p">
              We design and engineer custom – automated control solutions that
              reduce your costs and give your business the competitive edge it
              needs to succeed.
            </p>
            <button type="button" className="brand-button">
              Our products
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
