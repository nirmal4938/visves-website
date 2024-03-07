import React from "react";
import contactMob from "../../assets/images/contact/contact.svg";
import contactEmail from "../../assets/images/contact/email.svg";
import contactLoc from "../../assets/images/contact/location.svg";
export const ContactUs = () => {
  return (
    <React.Fragment>
      <div className="contact-section">
        <div className="row d-flex">
          <div className="col-12 col-md-4">
            <div className="contact-mode-section">
              <div className="contact-mobile">
                <div className="card contact-card">
                  <div className="card-body contact-card-body">
                    <div className="contact-img">
                      <img
                        className="c-img img-fluid"
                        src={contactMob}
                        alt="Mobile Contact"
                      />
                    </div>
                    <div className="contact-text">
                      <div className="contact-title">Contact</div>
                      <p className="m-0 p-0">+91 80003 01086</p>
                      <p className="m-0 p-0">+91 82386 66699</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-email">
                <div className="card contact-card">
                  <div className="card-body contact-card-body">
                    <div className="contact-img">
                      <img
                        className="c-img img-fluid"
                        src={contactEmail}
                        alt="Mobile Contact"
                      />
                    </div>
                    <div className="contact-text">
                      <div className="contact-title">Email</div>
                      <p className="m-0 p-0">sales@visves.com</p>
                      <p className="m-0 p-0">info@visves.com</p>
                      <p className="m-0 p-0">support@visves.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-location">
                <div className="card contact-card">
                  <div className="card-body contact-card-body">
                    <div className="contact-img">
                      <img
                        className="c-img img-fluid"
                        src={contactLoc}
                        alt="Mobile Contact"
                      />
                    </div>
                    <div className="contact-text">
                      <div className="contact-title">Location</div>
                      <p className="m-0 p-0">
                        Plot 446/A, Gate 3, ISCON Megacity,
                      </p>
                      <p className="m-0 p-0">Bhavnagar-364001, Gujarat</p>
                      <p className="mt-2 p-0">
                        407, 31Five Building, Behind Divya Bhaskar
                      </p>
                      <p className="m-0 p-0">
                        {" "}
                        House, Corporate Road, Prahlad Nagar
                      </p>
                      <p>Ahmedabad, Gujarat - 380015.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 mt-4">
            <div className="location-section">
              <img
                src="https://via.placeholder.com/895x770"
                className="img-fluid img-location"
                alt="Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
