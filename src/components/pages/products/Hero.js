import React from "react";
import imagex from "../../assets/images/aboutusImages/about_us_hero_right_image.svg";
import heroImage from "../../assets/images/hero_alt.png";
import arrowRightIcon from "../../assets/images/img_.svg";

import { useNavigate } from "react-router-dom";
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="row d-flex">
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-5">
          <div className="hero-text-section">
            <h3 className="text-about">WELCOME TO VISVES ENGINEERING</h3>
            <h1 className="hero-title">Our Products</h1>

            <p className="hero-p">
              We design and engineer custom - automated control solutions that
              reduce your costs and give your business the competitive edge it
              needs to succeed.
            </p>
            <div>
              <button
                type="button"
                className="brand-button"
                onClick={() => navigate("/products")}
              >
                Our products
                <img src={arrowRightIcon} alt="Icon" className="btn-icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={heroImage} className="hero-image img-fluid" />
        </div>
      </div>
    </div>
  );
};
