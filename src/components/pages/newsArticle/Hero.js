import React from "react";
import imagex from "../../assets/images/aboutusImages/about_us_hero_right_image.svg";
export const Hero = () => {
  return (
    <div className="hero-section">
      <div className="row d-flex">
        {/* <div className="col-12 col-md-2"></div> */}
        <div className="col-12 col-md-5">
          <div className="hero-text-section">
            <h3 className="text-about">News</h3>
            <h1 className="hero-title">Articles & Resources</h1>

            <p className="hero-p">
              Visves Advance engineering is one stop solution provider for all
              innovative Automation solution
            </p>
          </div>
        </div>
        <div className="col-12 col-md-5">
          {/* <img src={imagex} className="hero-image img-fluid" /> */}
        </div>
      </div>
    </div>
  );
};
