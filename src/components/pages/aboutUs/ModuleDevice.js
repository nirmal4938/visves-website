import React from "react";
import module1 from "../../assets/images/aboutusImages/moduleDevice1.svg";
import module2 from "../../assets/images/aboutusImages/moduleDevice2.svg";
import star1 from "../../assets/images/aboutusImages/moduleStarUpper.svg";
import star2 from "../../assets/images/aboutusImages/moduleStartLower.svg";
import vision from "../../assets/images/aboutusImages/module_service_goal_image.svg";
export const ModuleDevice = () => {
  return (
    <React.Fragment>
      <div className="module-device-section">
        <div className="upper-left-star">
          <img src={star1} className="" />
        </div>
        <div className="row module-device-row">
          <div className="module-device-title">
            Developing Modules & Devices
          </div>
          <div className="col-12 col-md-6">
            <div className="module-device">
              <div className="module-device-image">
                <img src={module1} className="img-fluid" />
              </div>
              <div className="module-device-text">
                <p>
                  From concept to production, we are committed to developing
                  ,building and maintaining quality automation systems that help
                  you reach your goals by reduced downtime, improved quality
                  ,increased efficiency and productivity ,enhanced safety and
                  reduced energy costs with consideration of environment global
                  effect. We think that business offers a chance to better
                  humanity. that's how we raise the bar for human success. We
                  consider our way of life as having limitless potential.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="module-device">
              <div className="module-device-image">
                <img src={module2} className="img-fluid" />
              </div>
              <div className="module-device-text">
                <p>
                  Since ten years, we have diligently worked in this industry to
                  serve our clients in the field of Pharmaceutical industry,
                  Food industry, Textile, Cement, Paper, Oil & Gas, Power,
                  Chemical, Petrochemical, Dairy & Beverages, and Infrastructure
                  automation. Our unique automated control systems are designed
                  and engineered to save expenses and provide your company with
                  the competitive advantage it needs to thrive.With a decade of
                  experience, we ensure reliability, efficiency, and innovation
                  in every solution we deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-right-star">
          <img src={star2} className="" />
        </div>
        <div className="card vision-card">
          <img
            className="vision-card-image img-fluid"
            src={vision}
            alt="Card image cap"
          />
          <div className="card-body vision-card-body">
            <p className="card-text">
              Our goal is to increase global productivity and sustainability in
              order to enhance people's quality of life using smart
              manufacturing.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
