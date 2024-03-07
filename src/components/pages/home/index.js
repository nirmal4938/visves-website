import React from "react";
import "../../styles/scss/home.scss";
import { Hero } from "./HomeHero";
import { Vison } from "./HomeVission";
import { Service } from "./HomeService";
import { BottomImage } from "./BottomImage";
import { HomeValues } from "./HomeValues";
import { TestPage } from "../../TestPage";
export const Home = () => {
  return (
    <React.Fragment>
      <div className="home-page">
        <Hero />
        <Vison />
        <HomeValues />
        <Service />
        <BottomImage />
      </div>
    </React.Fragment>
  );
};
