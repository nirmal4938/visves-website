import React from "react";
import "../../styles/scss/about.scss";
import { Hero } from "./AboutUsHero";
import { ModuleDevice } from "./ModuleDevice";
import { DirectorMission } from "./DirectorMission";
import { Teams } from "./Teams";
export const About = () => {
  return (
    <React.Fragment>
      <div className="about-page">
        <Hero />
        <ModuleDevice />
        <DirectorMission />
        <Teams />
      </div>
    </React.Fragment>
  );
};
