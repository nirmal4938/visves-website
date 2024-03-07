import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquarePinterest,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import img_ from "../../assets/images/contact/wire.svg";
export const Hero = () => {
  return (
    <div className="hero-section">
      <div className="wire">
        <img src={img_} alt="Icon" />
      </div>
      <div className="row d-flex">
        <div className="col-12 col-md-4">
          <div className="hero-text-section">
            <h3 className="text-about">we are here for you</h3>
            <h1 className="hero-title">Get in touch</h1>

            <p className="hero-p">
              For your car we will do everything advice, repairs and
              maintenance. We are the some preferred choice by many car owners
              because
            </p>
            <div className="social-contact">
              <FontAwesomeIcon icon={faSquareFacebook} />
              <FontAwesomeIcon icon={faSquareTwitter} />
              <FontAwesomeIcon icon={faSquareInstagram} />
              <FontAwesomeIcon icon={faSquarePinterest} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="form">
            <form>
              <div className="row form-row">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    placeholder="Your name"
                    onChange={(e) => console.log("value", e.target.value)}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="your email"
                    onChange={(e) => console.log("value", e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control form-control-lg"
                    id="exampleFormControlTextarea1"
                    rows="8"
                    placeholder="Your Message"
                  />
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg brand-button"
                  >
                    SUBMIT NOW
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
