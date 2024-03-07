import React from "react";
import image1 from "../../assets/images/hero_page_home_left.png";
import image2 from "../../assets/images/hero_page_home_right.png";
import img_ from "../../assets/images/img_.svg";
import iotModuleImage from "../../assets/images/iot_module_email.svg";
import sensorModuleImage from "../../assets/images/sensor_module.svg";
import miliMachinaryImage from "../../assets/images/mili_machinery.svg";
import intrafcingModuleImage from "../../assets/images/mili_machinery.svg";
import imagex from "../../assets/images/aboutusImages/about_us_hero_right_image.svg";
export const Hero = () => {
  const text = "TECHNICAL SERVICES & SUPPORT"; // Text to be animated
  const delay = 100; // Delay between each letter in milliseconds

  let index = 0;

  function typeText() {
    const heroText = document.getElementById("hero-text");
    heroText.textContent += text[index];
    index++;
    if (index < text.length) {
      setTimeout(typeText, delay);
    }
  }

  // Start the typing animation when the page loads
  window.onload = typeText;
  return (
    <div className="hero-section">
      <div className="row d-flex gap-0 module-row">
        <div className="col-3 cm-3 ">
          <div className="hero-card">
            <div className="hero-card-content">
              <img
                src={iotModuleImage}
                className="hero-card-img-top img-fluid"
                alt="..."
              />
              <div className="hero-card-body">
                <h5 className="hero-card-title">IOT MODULES</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 cm-3">
          <div className="hero-card">
            <div className="hero-card-content">
              <img
                src={sensorModuleImage}
                className="hero-card-img-top img-fluid"
                alt="..."
              />
              <div className="hero-card-body">
                <h5 className="hero-card-title">SENSOR MODULES</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 cm-3">
          <div className="hero-card">
            <div className="hero-card-content">
              <img
                src={miliMachinaryImage}
                className="hero-card-img-top img-fluid"
                alt="..."
              />
              <div className="hero-card-body">
                <h5 className="hero-card-title">MILL MACHINERY PARTS</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3 cm-3">
          <div className="hero-card">
            <div className="hero-card-content">
              <img
                src={intrafcingModuleImage}
                className="hero-card-img-top img-fluid"
                alt="..."
              />
              <div className="hero-card-body">
                <h5 className="hero-card-title">STANDARD INTERFACING MODULE</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-12 col-md-1"></div>
        <div
          className="col-12 col-md-5"
          // style={{ top: "-145px", position: "relative" }}
        >
          <div className="hero-text-section">
            <h3 className="">SMART INNOVATION FOR SMARTER INDIANS</h3>
            <h1 className="hero-text" id="hero-text"></h1>

            <a
              href="#"
              className="opacity-50 text-decoration-none text-white pt-1 pb-1"
            >
              <p className="pt-1 pb-1">
                Control Panel Design/Fabrication: Industrial Electrical |
                Electronic Enclosures | Customized
                <br />
                PLC / SCADA / HMI Programming Services: Application and Program
                Development.
              </p>
            </a>
            <button type="button" className="brand-button">
              Our products
              <img src={img_} alt="Icon" />
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={image2} className="hero-image" />
        </div>
      </div>
    </div>
  );
};
