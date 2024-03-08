import React from "react";
import "../../assets/images/gallery/gallery_hero_bg1.png";
import img_ from "../../assets/images/img_.svg";
import arrowRightIcon from "../../assets/images/img_.svg";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section ">
      <div className="container p-5">
        <h1 className="text-white fs-5 mt-5">WELCOME TO VISVES ENGINEERING</h1>

        <h1 className="text-white mt-4 fs-1">Gallery</h1>
        <p className="text-white mt-4">
          We have added our products images as well as our other images for user
          refrences
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
  );
};
