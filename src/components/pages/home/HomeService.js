import React from "react";
import visonLeftImage from "../../assets/images/vision_home_left.svg";
import img_ from "../../assets/images/img_.svg";
import { useNavigate } from "react-router-dom";

export const Service = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="service-section">
        <div className="service-text-section">
          <div className="">
            <h5 className="text-main">SERVICES</h5>
            <div className=" d-flex justify-content-between flex-column flex-md-row">
              <h2 className="text-title">We Provide</h2>
              <button
                type="button"
                className="brand-button"
                onClick={() => navigate("/products")}
              >
                Our Products
                <img src={img_} alt="Icon" />
              </button>
            </div>
            <div className="service-info row justify-content-between row-gap-4 mt-4">
              <div className="col-12 col-md-6">
                <div className="card custom-card">
                  <div className="card-body">
                    <h5 className="card-title-text">
                      TECHNICAL SERVICES & SUPPORTS
                    </h5>

                    <p className="card-body-text">
                      Control Panel Design/Fabrication: Industrial Electrical |
                      Electronic Enclosures | Customized. PLC / SCADA / HMI
                      Programming Services: Application and Program Development…
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="card custom-card">
                  <div className="card-body">
                    <h5 className="card-title-text">
                      OPERATIONS AND MAINTENANCE FOR PROJECT
                    </h5>

                    <p className="card-body-text">
                      Our organization provide the best Operations and
                      Maintenance for Project. These service are being rendered
                      on instrumentation projects, automation projects and other
                      concerned projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card custom-card">
                  <div className="card-body">
                    <h5 className="card-title-text">
                      LAB EQUIPMENTS & CALIBRATION
                    </h5>

                    <p className="card-body-text">
                      Our company was engaged in the manufacturing of Lab
                      equipments and Interface Boards. With the efforts from our
                      Research and Development Team, the company has expanded
                      its activities in various areas like …
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="card custom-card">
                  <div className="card-body">
                    <h5 className="card-title-text">
                      TECHNICAL SERVICES & SUPPORTS
                    </h5>

                    <p className="card-body-text">
                      Control Panel Design/Fabrication: Industrial Electrical |
                      Electronic Enclosures | Customized. PLC / SCADA / HMI
                      Programming Services: Application and Program Development…
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card custom-card">
                  <div className="card-body">
                    <h5 className="card-title-text">
                      INDUSTRIAL DRIVES & CONTROL
                    </h5>

                    <p className="card-body-text">
                      With the increasing demand for energy efficiency, safety,
                      reliable connectivity and precise control, industrial
                      drives for factory automation systems are becoming more
                      and more sophisticated, requiring cutting-edge
                      technologies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="card custom-card">
                  <div className="card-body">
                    <h5 className="card-title-text">PLC/SCADA/HMI</h5>

                    <p className="card-body-text">
                      Our core competency is providing solutions for the process
                      with good capability & reliability for the process to
                      control the critical parameters. Our team is capable for
                      the high end automation from design to execution for the
                      industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-md-6 vision-image">
            <img src={visonLeftImage} />
          </div>
          <div className="col-12 col-md-6">
            <div className="service-info">
              <h5 className="title">MISSION & VISION</h5>
              <h2 className="sub-title">Visves Automation</h2>
              <p className="para-base">
                We design and engineer custom – automated control solutions that
                reduce your costs and give your business the competitive edge it
                needs to succeed.
              </p>
              <p className="para-muted">
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
          </div> */}
        </div>
      </div>
    </>
  );
};
