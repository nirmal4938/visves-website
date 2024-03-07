import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import image1 from "../../assets/images/gallery/image1.png";
import image2 from "../../assets/images/gallery/image2.png";
import image3 from "../../assets/images/gallery/image3.png";
// Import other images as needed

export const GalleryImages = () => {
  const [photos, setPhotos] = useState([
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    // Add more photos as needed
  ]);

  const [vivesOfficePhotos, setVivesOfficePhotos] = useState([
    { id: 4, src: image1 },
    // Add more Vives Office photos as needed
  ]);

  const [productsPhotos, setProductsPhotos] = useState([
    { id: 6, src: image2 },
    // Add more Products photos as needed
  ]);

  const handleAllPhotosClick = () => {
    setPhotos([
      { id: 1, src: image1 },
      { id: 2, src: image2 },
      { id: 3, src: image3 },
      // Add more photos as needed
    ]);
  };

  const handleVivesOfficeClick = () => {
    // Set photos state to Vives Office photos
    setPhotos(vivesOfficePhotos);
  };

  const handleProductsClick = () => {
    // Set photos state to Products photos
    setPhotos(productsPhotos);
  };

  return (
    <>
      <div className="gallery-section">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-4 d-none d-md-flex justify-content-center">
              <button
                className="rounded-pill btn btn-primary text-dark me-2"
                onClick={handleAllPhotosClick}
              >
                All Photos
              </button>
              <button
                className="rounded-pill btn btn-primary text-dark me-2"
                onClick={handleVivesOfficeClick}
              >
                Vives Office
              </button>
              <button
                className="rounded-pill btn btn-primary text-dark me-2"
                onClick={handleProductsClick}
              >
                Products
              </button>
            </div>
            {/* Dropdown for mobile view can be added here if needed */}
            <div className="col-md-4 d-md-none d-flex justify-content-center">
              <div className="btn-group dropleft">
                <button
                  type="button"
                  className="rounded-pill btn btn-primary text-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Category
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAllPhotosClick();
                      }}
                    >
                      All photos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault();
                        handleVivesOfficeClick();
                      }}
                    >
                      Vives Office
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault();
                        handleProductsClick();
                      }}
                    >
                      Products
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {photos.map((photo) => (
              <div key={photo.id} className="col-md-3 col-sm-6">
                <img
                  src={photo.src}
                  className="img-fluid"
                  alt={`Photo ${photo.id}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <hr className="mt-5"></hr>
          <div>
            <div className="d-flex justify-content-between">
              <h3>
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  style={{
                    "--fa-primary-color": "#351ee0",
                    "--fa-secondary-color": "#f9f9f9",
                  }}
                />
                Previous
              </h3>
              <h3>
                Next
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  style={{ color: "#351ee0" }}
                />
              </h3>
            </div>
            <hr className="mb-5"></hr>
          </div>
        </div>
      </div>
    </>
  );
};
