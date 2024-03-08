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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.7153583729423!2d72.1345822743764!3d21.752558062527708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f511df5e75683%3A0x1ff71af254c656c6!2s%F0%9F%8C%BA%20Iscon%20MEGACITY!5e0!3m2!1sen!2sin!4v1709813676844!5m2!1sen!2sin"
                width="800"
                height="660"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
