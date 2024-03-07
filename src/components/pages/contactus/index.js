import React from "react";
import { Hero } from "./Hero";
import { ContactUs } from "./Contact";
import "../../styles/scss/contact.scss";
export const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-us-page">
        <Hero />
        <ContactUs />
      </div>
    </React.Fragment>
  );
};
