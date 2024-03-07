import React from "react";
import visonLeftImage from "../../assets/images/vision_home_left.svg";
import img_ from "../../assets/images/img_.svg";

export const Vison = () => {
  return (
    <>
      <div className="vison-section">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="vision-image">
              <img src={visonLeftImage} className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="vision-text-section">
              <h5 className="text-main">MISSION & VISION</h5>
              <h2 className="text-title">Visves Automation</h2>
              <p className="text-base">
                We design and engineer custom – automated control solutions that
                reduce your costs and give your business the competitive edge it
                needs to succeed.
              </p>
              <p className="text-muted">
                From concept to production, we are committed to developing,
                building and maintaining quality automation systems that help
                you reach your goals. Whether your aim is reduced downtime,
                improved quality, increased efficiency and productivity,
                enhanced safety or reduced energy costs, we are here to help
                with professional service and expertise you can rely on.
              </p>
              <button type="button" className="brand-button mt-5">
                About Us
                <img src={img_} alt="Icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// <div className="row container">
// <div className="col-6 vision-image">
//   <img src={visonLeftImage} />
// </div>
// <div className="col-6">
//   <div className="vision-info">
//     <h5 className="title">MISSION & VISION</h5>
//     <h2 className="sub-title">Visves Automation</h2>
//     <p className="para-base">
//       We design and engineer custom – automated control solutions that
//       reduce your costs and give your business the competitive edge it
//       needs to succeed.
//     </p>
//     <p className="para-muted">
//       From concept to production, we are committed to developing,
//       building and maintaining quality automation systems that help
//       you reach your goals. Whether your aim is reduced downtime,
//       improved quality, increased efficiency and productivity,
//       enhanced safety or reduced energy costs, we are here to help
//       with professional service and expertise you can rely on.
//     </p>
//     <button type="button" className="brand-button mt-5">
//       About Us
//       <img src={img_} alt="Icon" />
//     </button>
//   </div>
// </div>
// </div>
