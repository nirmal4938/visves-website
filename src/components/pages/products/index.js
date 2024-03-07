import React from "react";
import "../../styles/scss/products.scss";
import { Hero } from "./Hero";
import { Blog } from "./Blog";
import { Reviews } from "./Reviews";
import { Module } from "./Module";
import { Clients } from "./Clients";
export const Products = () => {
  return (
    <React.Fragment>
      <div className="products-page">
        <Hero />
        <Blog />
        <Reviews />
        <Module />
        <Clients />
      </div>
    </React.Fragment>
  );
};
