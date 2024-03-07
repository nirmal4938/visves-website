import React from "react";
import footerImage1 from "../assets/images/image_group_footer_1.svg";
import footerImage2 from "../assets/images/image_group_footer_2.svg";
import img__19x11 from "../assets/images/img__19x11.png";
import img__19x14 from "../assets/images/img__19x14.png";
import emailIcon from "../assets/images/email_icon_footer.png";
import callIcon from "../assets/images/callicon.png";
import locationIcon from "../assets/images/locationicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/scss/footer.scss";
export const Footer = () => {
  return (
    <React.Fragment>
      {/* <div className="flex">
        <footer className="footer">
          <div className="">
            <div className="row d-flex m-5">
              <div className="col-12 col-md-3 footer-column">
                <img src={footerImage2} />
              </div>
              <div className="col-12 col-md-3 footer-column">
                <div className="footer-column-content">
                  <h4>Useful Links</h4>
                  <ul className="list-unstyled ml-3">
                    <li>
                      <a href="#" className="text-white">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Products
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        News
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-3 footer-column">
                <div className="footer-column-content">
                  <h4>Products</h4>
                  <ul className="list-unstyled ml-3">
                    <li>
                      <a href="#" className="text-white">
                        IOT Modules
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Mill machinery parts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Sensor Modules
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white">
                        Standard Interfacing Module
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-3 footer-column">
                <div className="footer-column-content">
                  <h4>Contact Us</h4>

                  <div className="d-flex mb-1">
                    <img
                      src={img__19x11}
                      alt="image_fourteen"
                      // className="w-100"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <p className="mb-0 mx-3">
                      Plot 446/A, Gate 3, ISCON Megacity, Bhavnagar-364001,
                      Gujarat
                    </p>
                  </div>
                  <div className="d-flex mb-1">
                    <img
                      src={img__19x14}
                      alt="image_fourteen"
                
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div className="d-block mx-2">
                      <p className="mb-0">+91 80003 01086</p>
                      <p className="mb-0">+91 82386 66699</p>
                    </div>
                  </div>

                  <p className="mt-4 mb-0">sales@visves.com</p>
                  <p className="mb-0">info@visves.com</p>
                  <div className="mt-4">
                    <a href="#" className="text-white">
                      support@visves.com
                    </a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div> */}

      <footer className="footer text-white" style={{ width: "100%" }}>

        <div className="flex-md-column">
          <div className="w-75 mb-3 card_section border border-0 mx-auto  position-relative">

            <div className="footer-card-body d-flex flex-lg-row  flex-column flex-sm-column  flex-md-column p-5">
              <img src={emailIcon} alt="Icon" className="img-fluid img_media" />

              <h1 className="footer-card-title pt-3">
                Stay Ahead with a Visves
              </h1>

              <div className="input-group">
                <input
                  type="text"
                  className="form-control input_box"
                  placeholder="Enter your email"
                />

                <button
                  type="button"
                  className="btn btn-light btn-lg rounded end-0 m-1  position-absolute button_function"
                >
                    Subscribe
                      <FontAwesomeIcon
                      icon={faPaperPlane}
                      style={{ color: "#05092b" }}
                      className="icon"/>
                   </button>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-padding">
          <div className="row ms-5">
            <div className="col-md-3 col-md-3">
              <div className="footer__content">
                <img
                  src={footerImage2}
                  alt="Logo"
                  className="footer__logo img-fluid mb-3"
                />

                <p className="footer__desc">
                  We design and engineer custom-automated control solutions that
                  reduce your costs and give your business the competitive edge
                  it needs to succeed.
                </p>

                <div className="d-flex ">
                  
                <a href="#" className="text-decoration-none">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ color: "#f7f7f8" }}
                    className="me-3"
                  />
                  </a>

                  <a href="#" className="text-decoration-none">    
                  <FontAwesomeIcon 
                  icon={faInstagram} 
                  style={{ color: "#f7f7f8" }}
                  className="me-3" />
                  </a>

                  <a href="#" className="text-decoration-none">
                  <FontAwesomeIcon 
                  icon={faTwitter} 
                  style={{ color: "#f7f7f8" }}
                  className="me-3" />
                   </a>

                   <a href="#" className="text-decoration-none">
                  <FontAwesomeIcon 
                  icon={faLinkedin} 
                  style={{ color: "#f7f7f8" }}
                  className="me-3"/>
                   </a>

                </div>
              </div>
            </div>

            <div className="col-md-3 col-md-3 ps-md-5">
              <div className="footer__content">
                <h3 className="footer__title">USEFUL LINKS</h3>

                <ul className="footer__links list-unstyled">
                  <li>
                    <a class="nav-link link-light" href="/">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      Home
                    </a>
                  </li>

                  <li>
                    <a className="nav-link link-light" href="/about">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      About Us
                    </a>
                  </li>

                  <li>
                    <a className="nav-link link-light" href="/products">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      Products
                    </a>
                  </li>

                  <li>
                    <a className="nav-link link-light" href="/services">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      Services
                    </a>
                  </li>

                  <li>
                    <a className="nav-link link-light" href="/news-article">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      News
                    </a>
                  </li>

                  <li>
                    <a className="nav-link link-light" href="/contact-us">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2 col-md-3 ">
              <div className="footer__content">
                <h3 className="footer__title">PRODUCTS</h3>

                <ul className="footer__links list-unstyled">
                  <li>
                    <a class="nav-link link-light" href="/products/iot-module">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      IOT Modules
                    </a>
                  </li>

                  <li>
                    <a className="nav-link link-light" href="/products/machinary-module">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      Mill Machinery Parts
                    </a>
                  </li>

                  <li>
                    <a className="nav-link link-light" href="/products/sensor-module">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      Sensor Modules
                    </a>
                  </li>

                  <li>
                    <a className="nav-link link-light" href="/products/standard-interfacing-module">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      Standard Interfacing Modules
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-md-3">
              <div className="footer__content">
                <h3 className="footer__title">CONTACT US</h3>

                <ul className="footer__links list-unstyled">
                  <li class="d-flex">
                  <a href="#" className="text-decoration-none">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#351ee0" }}
                      className="me-2 mt-1"
                    />
                    </a>
                    <a className="nav-link link-light" href="#">
                      Plot 446/A. Gate 3 ISCON Megacity, Bhavnagar-364001.
                      Gujarat
                    </a>
                  </li>

                  <li className="d-flex contact_media">
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ color: "#351ee0" }}
                      className="me-2 mt-1"
                    />

                    <div>
                      <a className="nav-link link-light " href="#">
                        +01 80003 01096
                      </a>

                      <a className="nav-link link-light" href="#">
                        +91 82300 88089
                      </a>
                    </div>
                  </li>

                  <li className="d-flex contact_media">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: "#351ee0" }}
                      className="me-2 mt-1"
                    />

                    <div>
                      <a className="nav-link link-light" href="#">
                        sales@visves.com
                      </a>

                      <a className="nav-link link-light" href="#">
                        info@visves.com
                      </a>

                      <a className="nav-link link-light" href="#">
                        support@visves.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="container line"></hr>

        <div className="d-flex flex-wrap justify-content-between align-items-center ms-md-5 me-md-5 footer-end">
          <p className="col-md-8 mb-3 mb-md-0">
            © Visves Advance Engineering - 2023. All rights reserved. | Designed
            and Developed by Inbox Technology
          </p>

          <ul className="col-md-4 list-unstyled d-flex flex-row-reverse">
            <li>
              <a className="nav-link link-light p-2" href="#">
                Contact Us
              </a>
            </li>

            <li>
              <a className="nav-link link-light p-2" href="#">
                Privacy Policy
              </a>
            </li>

            <li>
              <a className="nav-link link-light p-2" href="#">
                Terms & Condition
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
};
