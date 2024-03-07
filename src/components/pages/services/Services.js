import React from "react";
import controlPanleImage from "../../assets/images/services/amc_for_control_panel.svg";
import Service1 from "../../assets/images/services/programing_services.svg";
import service5 from "../../assets/images/services/programing_services_5.svg";
import amcImage1 from "../../assets//images/services/amc_image1.svg";
export const VServices = () => {
  return (
    <React.Fragment>
      <div className="services-section">
        <div className="row service-row">
          <div className="col-12 col-md-4">
            <div className="card service-card">
              <div className="card-body service-card-body">
                <div className="service-card-image">
                  <img src={amcImage1} className="img-fluid card-img" />
                </div>
                <div className="service-card-text">
                  <div className="text">AMC for Control panel</div>
                  <div className="text-v"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card service-card">
              <div className="card-body service-card-body">
                <div className="service-card-image">
                  <img src={Service1} className="img-fluid card-img" />
                </div>
                <div className="service-card-text">
                  <div className="text">PLC/SCADA/HMI Programming services</div>
                  <div className="text-v">
                    Application and program Development
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card service-card">
              <div className="card-body service-card-body">
                <div className="service-card-image">
                  <img src={amcImage1} className="img-fluid card-img" />
                </div>
                <div className="service-card-text">
                  <div className="text">Industrial consulting </div>
                  <div className="text-v">Provide solution as per need</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card service-card">
              <div className="card-body service-card-body">
                <div className="service-card-image">
                  <img src={amcImage1} className="img-fluid card-img" />
                </div>
                <div className="service-card-text">
                  <div className="text">
                    Customized Control Panels and Fabrication
                  </div>
                  <div className="text-v">
                    for Industrial Electrical and Electronic Enclosures.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card service-card">
              <div className="card-body service-card-body">
                <div className="service-card-image">
                  <img src={service5} className="img-fluid card-img" />
                </div>
                <div className="service-card-text">
                  <div className="text">PLC/SCADA/HMI Programming services</div>
                  <div className="text-v">
                    Application and program Development
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card service-card">
              <div className="card-body service-card-body">
                <div className="service-card-image">
                  <img src={amcImage1} className="img-fluid card-img" />
                </div>
                <div className="service-card-text">
                  <div className="text">
                    Electrical /Instrumentation Troubleshooting
                  </div>
                  <div className="text-v">scheduled /Emergency</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card service-card">
              <div className="card-body service-card-body">
                <div className="service-card-image">
                  <img src={amcImage1} className="img-fluid card-img" />
                </div>
                <div className="service-card-text">
                  <div className="text">
                    Electonic control and printed circuit board design
                  </div>
                  <div className="text-v">Repair and Remanufacturing</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card service-card">
              <div className="card-body service-card-body">
                <div className="service-card-image">
                  <img src={amcImage1} className="img-fluid card-img" />
                </div>
                <div className="service-card-text">
                  <div className="text">CAD layout and design</div>
                  <div className="text-v"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card service-card">
              <div className="card-body service-card-body">
                <div className="service-card-image">
                  <img src={amcImage1} className="img-fluid card-img" />
                </div>
                <div className="service-card-text">
                  <div className="text">Customer Training</div>
                  <div className="text-v"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card service-card">
              <div className="card-body service-card-body">
                <div className="service-card-image">
                  <img src={amcImage1} className="img-fluid card-img" />
                </div>
                <div className="service-card-text">
                  <div className="text">Trunkey Projects consultancy</div>
                  <div className="text-v">on site /off site/customized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
