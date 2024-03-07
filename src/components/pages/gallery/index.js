import React from "react";
import "../../styles/scss/gallery.scss";
import { Hero } from "./Hero";
import { GalleryImages } from "./GalleryImages";

export const Gallery = () => {
  return (
    <React.Fragment>
      <div className="gallery-page">
        <Hero />
        <GalleryImages />
      </div>
    </React.Fragment>
  );
};
