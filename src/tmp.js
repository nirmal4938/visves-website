import React from "react";
import logoImage from "../assets/logoImage.png";
import iconImage from "../assets/emailicon.png";
import callIcon from "../assets/callicon.png";
import mailIcon from "../assets/mailicon.png";

import locationImg from "../assets/locationimg.png";
import locationIcon from "../assets/locationicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagramSquare,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/footer.css";

export const Footer = () => {
  return (
    <div>
      <div className="background-container p-5">
        <div className="container">
          <h2 style={{ color: "#351ee0" }}>we are here for you</h2>

          <h1 className="text">Get in touch</h1>

          <p className="">
            For your car we will do everything advice, repairs and maintenance.
            We are the some preferred choice by many car owners because
          </p>

          <div></div>

          <br></br>

          <br></br>

          <br></br>
        </div>
      </div>

      <div className="container body-2">
        <div
          class="card m-4 shadow-lg border border-white"
          style={{ width: "30rem" }}
        >
          <div class="card-body ">
            <li className="d-flex contact_media ms-3 p-3">
              <img
                src={callIcon}
                alt="icon"
                className="me-2 mt-1"
                style={{ width: "50px", height: "50px" }}
              />

              <div>
                <h3 className="footer__title ms-2 mb-1">Contacts</h3>

                <a className="nav-link ms-2" href="#">
                  +91 80003 01096
                </a>

                <a className="nav-link ms-2" href="#">
                  +91 82300 88089
                </a>
              </div>
            </li>
          </div>
        </div>

        <div
          class="card  m-4 shadow-lg border border-white"
          style={{ width: "30rem" }}
        >
          <div class="card-body ">
            <li className="d-flex contact_media ms-3 p-3">
              <img
                src={mailIcon}
                alt="icon"
                className="me-2 mt-1"
                style={{ width: "50px", height: "50px" }}
              />

              <div>
                <h3 className="footer__title ms-2 mb-1">Email</h3>

                <a class="nav-link ms-2" href="#">
                  sales@steves.com
                </a>

                <a class="nav-link ms-2" href="#">
                  info@visves.com
                </a>

                <a class="nav-link ms-2" href="#">
                  support@viaves.com
                </a>
              </div>
            </li>
          </div>
        </div>

        <div
          class="card m-4 shadow-lg border border-white"
          style={{ width: "30rem" }}
        >
          <div class="card-body ">
            <li className="d-flex contact_media ms-3 p-3">
              <img
                src={locationIcon}
                alt="icon"
                className="me-2 mt-1"
                style={{ width: "50px", height: "50px" }}
              />

              <div>
                <h3 className="footer__title ms-2 mb-1">Location</h3>

                <a class="nav-link ms-2" href="#">
                  Plot 446/A. Gate 3 ISCON Megacity, Bhavnagar-364001. Gujarat
                </a>

                <a className="nav-link mt-2 ms-2" href="#">
                  407, 31Five Building, Behind Divya Bhaskar House, Corporate
                  Road, Prahlad Nagar, Ahmedabad, Gujarat – 380015.{" "}
                </a>
              </div>
            </li>
          </div>
        </div>

        <img
          src={locationImg}
          alt="img"
          className="location-img position-relative"
        />
      </div>

      <footer className="footer text-white" style={{ width: "100%" }}>
        <div className="flex-md-column">
          <div class="card w-75 mb-3 card_section border border-0 mx-auto d-block position-relative">
            <div class="card-body d-flex flex-sm-column flex-md-row p-5">
              <img
                variant="top"
                src={iconImage}
                alt="Icon"
                className="p-3 img_media"
              />

              <h1 class="card-title ms-5 pt-3">Stay Ahead with a Visves </h1>

              <div className="input-group mb-4 mt-5 ms-4 ">
                <input
                  type="text"
                  className="form-control input_box"
                  placeholder="Enter your email"
                />

                <button
                  type="button"
                  class="btn btn-light btn-lg rounded end-0 m-1 position-absolute button_function"
                >
                  Subscribe
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    style={{ color: "#05092b" }}
                    className="ms-2 "
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="custom-padding">
          <div className="row ms-5">
            <div className="col-md-3 col-md-3">
              <div className="footer__content">
                <img
                  src={logoImage}
                  alt="Logo"
                  className="footer__logo img-fluid mb-3"
                />

                <p className="footer__desc">
                  We design and engineer custom-automated control solutions that
                  reduce your costs and give your business the competitive edge
                  it needs to succeed.
                </p>

                <div className="d-flex ">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ color: "#f7f7f8" }}
                    className="me-3"
                  />

                  <FontAwesomeIcon icon={faInstagramSquare} className="me-3" />

                  <FontAwesomeIcon icon={faTwitter} className="me-3" />

                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </div>
            </div>

            <div className="col-md-3 col-md-3 ps-md-5">
              <div className="footer__content">
                <h3 className="footer__title">USEFUL LINKS</h3>

                <ul className="footer__links list-unstyled">
                  <li>
                    <a class="nav-link link-light" href="#">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      Home
                    </a>
                  </li>

                  <li>
                    <a class="nav-link link-light" href="#">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      About Us
                    </a>
                  </li>

                  <li>
                    <a class="nav-link link-light" href="#">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      Products
                    </a>
                  </li>

                  <li>
                    <a class="nav-link link-light" href="#">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      Services
                    </a>
                  </li>

                  <li>
                    <a class="nav-link link-light" href="#">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      News
                    </a>
                  </li>

                  <li>
                    <a class="nav-link link-light" href="#">
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
                    <a class="nav-link link-light" href="#">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      IOT Modules
                    </a>
                  </li>

                  <li>
                    <a class="nav-link link-light" href="#">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      Mill Machinery Parts
                    </a>
                  </li>

                  <li>
                    <a class="nav-link link-light" href="#">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        style={{ color: "#351ee0" }}
                        className="me-2"
                      />
                      Sensor Modules
                    </a>
                  </li>

                  <li>
                    <a class="nav-link link-light" href="#">
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
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#351ee0" }}
                      className="me-2 mt-1"
                    />

                    <a class="nav-link link-light" href="#">
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
                      <a class="nav-link link-light" href="#">
                        sales@steves.com
                      </a>

                      <a class="nav-link link-light" href="#">
                        info@visves.com
                      </a>

                      <a class="nav-link link-light" href="#">
                        support@viaves.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr class="container line"></hr>

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
    </div>
  );
};
