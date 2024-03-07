import React from "react";
import blankImg from "../../../assets/images/products/millmachinary/blank-img.png";
import circuit from "../../../assets/images/products/millmachinary/product-circuit.jpg";
import tick from "../../../assets/images/products/millmachinary/tick-icon.png";
import pdfImage from "../../../assets/images/products/millmachinary/pdfimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/scss/iot_module.scss";

export const IOTModule = () => {
  return (
    <React.Fragment>
      <div className="iot-module-p-page">
        <div className="main_hero d-flex align-items-center mb-5">
          <div className="bg-image"></div>
          <div className="container">
            <h2 className="text-uppercase fs-5 title mt-5">products</h2>
            <h1 className="text-white">IOT Module</h1>
          </div>
        </div>

        <div className="container mt-5 ">
          <img src={circuit} alt="circuit" className="img-fluid" />
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a gall type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries tinto electronic typesetting remaining essentially
            unchanged.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a gall type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries tinto electronic typesetting remaining essentially
            unchanged
          </p>
        </div>

        <div className="enquire bg-image-circuit">
          <div className="container mt-5 col-12">
            <div className="row  mt-5">
              <div className="col-md-6 col-xs-12 mt-5">
                <h4 className="text-enquire">Features</h4>
                <div className="feature-parent mt-5">
                  <div className="feature ">
                    <div className="circle">
                      <img className="tick-icon" src={tick} alt="Tick Icon" />
                    </div>
                    <div>
                      <p className="ms-3  ">
                        Simplify IT for Enhanced Productivity
                      </p>
                    </div>
                  </div>
                  <div className="feature">
                    {" "}
                    <div className="circle">
                      <img className="tick-icon" src={tick} alt="Tick Icon" />
                    </div>
                    <p className="ms-3  ">Experience the Future of IT</p>
                  </div>
                  <div className="feature">
                    {" "}
                    <div className="circle">
                      <img className="tick-icon" src={tick} alt="Tick Icon" />
                    </div>
                    <p className="ms-3  ">Drive Efficiency with IT Expertise</p>
                  </div>
                  <div className="feature ">
                    <div className="circle">
                      <img className="tick-icon" src={tick} alt="Tick Icon" />
                    </div>
                    <div>
                      <p className="ms-3  ">
                        Simplify IT for Enhanced Productivity
                      </p>
                    </div>
                  </div>
                  <div className="feature">
                    {" "}
                    <div className="circle">
                      <img className="tick-icon" src={tick} alt="Tick Icon" />
                    </div>
                    <p className="ms-3  ">Experience the Future of IT</p>
                  </div>
                  <div className="feature">
                    {" "}
                    <div className="circle">
                      <img className="tick-icon" src={tick} alt="Tick Icon" />
                    </div>
                    <p className="ms-3  ">Drive Efficiency with IT Expertise</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12 mt-5">
                <h4 className="text-enquire">Industries</h4>
                <div className="feature-parent mt-5">
                  <div className="feature ">
                    <div className="circle">
                      <img className="tick-icon" src={tick} alt="Tick Icon" />
                    </div>
                    <div>
                      <p className="ms-3  ">
                        Simplify IT for Enhanced Productivity
                      </p>
                    </div>
                  </div>
                  <div className="feature">
                    {" "}
                    <div className="circle">
                      <img className="tick-icon" src={tick} alt="Tick Icon" />
                    </div>
                    <p className="ms-3  ">Experience the Future of IT</p>
                  </div>
                  <div className="feature">
                    {" "}
                    <div className="circle">
                      <img className="tick-icon" src={tick} alt="Tick Icon" />
                    </div>
                    <p className="ms-3  ">Drive Efficiency with IT Expertise</p>
                  </div>
                  <div className="feature ">
                    <div className="circle">
                      <img className="tick-icon" src={tick} alt="Tick Icon" />
                    </div>
                    <div>
                      <p className="ms-3  ">
                        Simplify IT for Enhanced Productivity
                      </p>
                    </div>
                  </div>
                  <div className="feature">
                    {" "}
                    <div className="circle">
                      <img className="tick-icon" src={tick} alt="Tick Icon" />
                    </div>
                    <p className="ms-3  ">Experience the Future of IT</p>
                  </div>
                  <div className="feature">
                    {" "}
                    <div className="circle">
                      <img className="tick-icon" src={tick} alt="Tick Icon" />
                    </div>
                    <p className="ms-3  ">Drive Efficiency with IT Expertise</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <button type="button" className="brand-button mt-5">
                Our products
              </button>
            </div>
          </div>
        </div>

        <div className="container text-center mt-5 ">
          <div class="col-md-12  d-md-block p-4 pb-5">
            <div class="row">
              <div
                className="card card-color align-items-center col-md-3 m-2"
                style={{ width: "245px", height: "236px" }}
              >
                <img
                  src={pdfImage}
                  className="card-img-top img-class"
                  alt="pdfImage"
                  style={{ width: "96px", height: "124px", marginTop: "10px" }}
                />

                <h5 className="card-text card-font">Product catalogue</h5>
              </div>
              <div
                className="card card-color align-items-center col-md-3 m-2"
                style={{ width: "245px", height: "236px" }}
              >
                <img
                  src={pdfImage}
                  className="card-img-top img-class"
                  alt="pdfImage"
                  style={{ width: "96px", height: "124px", marginTop: "10px" }}
                />

                <h5 className="card-text card-font">User Manual</h5>
              </div>
              <div
                className="card card-color align-items-center  col-md-3 m-2"
                style={{ width: "245px", height: "236px" }}
              >
                <img
                  src={pdfImage}
                  className="card-img-top img-class"
                  alt="pdfImage"
                  style={{ width: "96px", height: "124px", marginTop: "10px" }}
                />

                <h5 className="card-text card-font">User Guide</h5>
              </div>

              <div
                className="card card-color align-items-center col-md-3 m-2"
                style={{ width: "245px", height: "236px" }}
              >
                <img
                  src={pdfImage}
                  className="card-img-top img-class"
                  alt="pdfImage"
                  style={{ width: "96px", height: "124px", marginTop: "10px" }}
                />

                <h5 className="card-text card-font">Annexure</h5>
              </div>
            </div>
          </div>
          <hr className="mt-5"></hr>
          <div>
            <div className="d-flex justify-content-between">
              <h3>
                <FontAwesomeIcon
                  className="me-2"
                  icon={faCircleArrowLeft}
                  style={{
                    "--fa-primary-color": "#351ee0",
                    "--fa-secondary-color": "#f9f9f9",
                  }}
                />
                Previous
              </h3>
              <h3>
                Next
                <FontAwesomeIcon
                  className="ms-2"
                  icon={faCircleArrowRight}
                  style={{ color: "#351ee0" }}
                />
              </h3>
            </div>
            <hr className="mb-5"></hr>

            <div className="container p-4 pt-5">
              <h2>Related Products</h2>
            </div>

            <div class="col-md-12  d-md-block pb-5">
              <div class="row">
                <div class="col-md-4">
                  <div class="card m-3 related-products shadow">
                    <img
                      src={blankImg}
                      className="card-img-top"
                      alt="blankImg"
                    />
                    <div class="card-body">
                      <h5 class="card-title ">Safety and Monitoring Device</h5>
                      <p class="card-text mt-5 mb-5">
                        CCTV Night/Day Vision Camera | Digital Door Lock system
                        | VDP System | Access Control system...
                      </p>
                      <div className="d-flex justify-content-end mt-5">
                        <a href="#" class="btn btn-primary end-0">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card m-3 related-products shadow">
                    <img
                      src={blankImg}
                      className="card-img-top"
                      alt="blankImg"
                    />
                    <div class="card-body">
                      <h5 class="card-title ">IOT Modules</h5>
                      <p class="card-text mt-5 mb-5">
                        Cloud based Real time DATA Equitation and logging system
                      </p>
                      <div className="d-flex justify-content-end mt-5">
                        <a href="#" class="btn btn-primary end-0">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card m-3 related-products shadow">
                    <img
                      src={blankImg}
                      className="card-img-top"
                      alt="blankImg"
                    />
                    <div class="card-body">
                      <h5 class="card-title ">Safety and Monitoring Device</h5>
                      <p class="card-text mt-5 mb-5">
                        CCTV Night/Day Vision Camera | Digital Door Lock system
                        | VDP System | Access Control system...
                      </p>
                      <div className="d-flex justify-content-end mt-5">
                        <a href="#" class="btn btn-primary end-0">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
