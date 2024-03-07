import React from "react";
import "../../assets/images/gallery/gallery_hero_bg1.png";
import img_ from "../../assets/images/img_.svg";
export const Hero = () => {
  return (
    <div className="hero-section ">
      <div className="container p-5">
        <h1 className="text-white fs-5 mt-5">WELCOME TO VISVES ENGINEERING</h1>

        <h1 className="text-white mt-4 fs-1">Gallery</h1>
        <p className="text-white mt-4">
          We have added our products images as well as our other images for user
          refrences
        </p>

        <button type="button" className="brand-button mt-5">
          Our products
          <img src={img_} alt="Icon" />
        </button>
      </div>
    </div>
  );
};
