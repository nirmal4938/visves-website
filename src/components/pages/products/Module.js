import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
export const Module = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="module-section">
        <div className="module-card-group">
          <div className="card module-card active">
            <div className="card-body module-card-body">
              <div className="d-flex">
                <div className="col-10 module-card-text-section">
                  <div className="text-section">
                    <div className="module-title">IOT MODULES</div>
                    <div className="module-sub-title">
                      <p className="m-0 p-0">
                        Cloud based DATA Equitation and logging system
                      </p>
                      <p className="m-0 p-0">
                        Level measurement using GPRS/LoRa
                      </p>
                    </div>
                  </div>
                  <div className="action-action">
                    <button
                      className="btn read-more-btn"
                      onClick={() => navigate("/products/iot-module")}
                    >
                      Read More
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>
                <div className="col-2 module-card-image-section">
                  <img
                    src="https://via.placeholder.com/120x120.png"
                    className="module-image"
                    alt="Placeholder Image"
                    width="120"
                    height="120"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card module-card ">
            <div className="card-body module-card-body">
              <div className="d-flex">
                <div className="col-10 module-card-text-section">
                  <div className="text-section">
                    <div className="module-title">Sensor modules</div>
                    <div className="module-sub-title">
                      <p className="m-0 p-0">
                        Cloud based DATA Equitation and logging system
                      </p>
                      <p className="m-0 p-0">
                        Level measurement using GPRS/LoRa
                      </p>
                    </div>
                  </div>
                  <div className="action-action">
                    <button
                      className="btn read-more-btn"
                      onClick={() => navigate("/products/sensor-module")}
                    >
                      Read More
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>
                <div className="col-2 module-card-image-section">
                  <img
                    src="https://via.placeholder.com/120x120.png"
                    className="module-image"
                    alt="Placeholder Image"
                    width="120"
                    height="120"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card module-card ">
            <div className="card-body module-card-body">
              <div className="d-flex">
                <div className="col-10 module-card-text-section">
                  <div className="text-section">
                    <div className="module-title">
                      Industrial related devices
                    </div>
                    <div className="module-sub-title">
                      <p className="m-0 p-0">
                        Cloud based DATA Equitation and logging system
                      </p>
                      <p className="m-0 p-0">
                        Level measurement using GPRS/LoRa
                      </p>
                    </div>
                  </div>
                  <div className="action-action">
                    <button
                      className="btn read-more-btn"
                      onClick={() => navigate("/products/machinary-module")}
                    >
                      Read More
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>
                <div className="col-2 module-card-image-section">
                  <img
                    src="https://via.placeholder.com/120x120.png"
                    className="module-image"
                    alt="Placeholder Image"
                    width="120"
                    height="120"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card module-card ">
            <div className="card-body module-card-body">
              <div className="d-flex">
                <div className="col-10 module-card-text-section">
                  <div className="text-section">
                    <div className="module-title">
                      Standard Interfacing Module
                    </div>
                    <div className="module-sub-title">
                      <p className="m-0 p-0">
                        Cloud based DATA Equitation and logging system
                      </p>
                      <p className="m-0 p-0">
                        Level measurement using GPRS/LoRa
                      </p>
                    </div>
                  </div>
                  <div className="action-action">
                    <button
                      className="btn read-more-btn"
                      onClick={() =>
                        navigate("/products/standard-interfacing-module")
                      }
                    >
                      Read More
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>
                <div className="col-2 module-card-image-section">
                  <img
                    src="https://via.placeholder.com/120x120.png"
                    className="module-image"
                    alt="Placeholder Image"
                    width="120"
                    height="120"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
