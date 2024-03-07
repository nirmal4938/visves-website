import React from "react";
import "../../styles/scss/services.scss";
import { Hero } from "./Hero";
import { VServices } from "./Services";
export const Services = () => {
  return (
    <React.Fragment>
      <div className="services-page">
        <Hero />
        <VServices />
      </div>
    </React.Fragment>
  );
};
