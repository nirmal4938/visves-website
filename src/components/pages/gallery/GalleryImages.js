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
  const allPhotos = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image1 },
    { id: 5, src: image2 },
    { id: 6, src: image3 },
    { id: 7, src: image1 },
    { id: 8, src: image2 },
    { id: 9, src: image3 },
    { id: 10, src: image1 },
    { id: 11, src: image2 },
    { id: 12, src: image3 },
    { id: 13, src: image1 },
    { id: 14, src: image2 },
    { id: 15, src: image3 },
    { id: 16, src: image1 },
    { id: 17, src: image2 },
    { id: 18, src: image3 },
    { id: 19, src: image1 },
    { id: 20, src: image2 },
    { id: 21, src: image3 },
    { id: 22, src: image1 },
    { id: 23, src: image2 },
    { id: 24, src: image3 },
    { id: 25, src: image1 },
    // Add more photos as needed
  ];

  const vivesOfficePhotos = [
    { id: 4, src: image1 },
    // Add more Vives Office photos as needed
  ];

  const productsPhotos = [
    { id: 6, src: image2 },
    // Add more Products photos as needed
  ];

  const itemsPerPage = 24;

  const [activePage, setActivePage] = useState(0);
  const [activeButton, setActiveButton] = useState("all");
  const [dropdownText, setDropdownText] = useState("Select Category");

  const totalPages = Math.ceil(allPhotos.length / itemsPerPage);

  const handleAllPhotosClick = () => {
    setActiveButton("all");
    setActivePage(0);
    setDropdownText("All Photos");
  };

  const handleVivesOfficeClick = () => {
    setActiveButton("vivesOffice");
    setActivePage(0);
    setDropdownText("Vives Office");
  };

  const handleProductsClick = () => {
    setActiveButton("products");
    setActivePage(0);
    setDropdownText("Products");
  };

  const handlePreviousClick = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
    }
  };

  const handleNextClick = () => {
    if (
      activePage < totalPages - 1 &&
      allPhotos.length > (activePage + 1) * itemsPerPage
    ) {
      setActivePage(activePage + 1);
    }
  };

  let displayedPhotos = allPhotos;

  if (activeButton === "vivesOffice") {
    displayedPhotos = vivesOfficePhotos;
  } else if (activeButton === "products") {
    displayedPhotos = productsPhotos;
  }

  return (
    <>
      <div className="gallery-section">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-4 d-none d-md-flex justify-content-center">
              <button
                className={`rounded-pill btn ${
                  activeButton === "all" ? "btn-primary" : "btn-secondary"
                } text-dark me-2`}
                onClick={handleAllPhotosClick}
              >
                All Photos
              </button>
              <button
                className={`rounded-pill btn ${
                  activeButton === "vivesOffice"
                    ? "btn-primary"
                    : "btn-secondary"
                } text-dark me-2`}
                onClick={handleVivesOfficeClick}
              >
                Vives Office
              </button>
              <button
                className={`rounded-pill btn ${
                  activeButton === "products"
                    ? "btn-primary"
                    : "btn-secondary"
                } text-dark me-2`}
                onClick={handleProductsClick}
              >
                Products
              </button>
            </div>
            <div className="col-md-4 d-md-none d-flex justify-content-center">
              <div className="btn-group dropleft">
                <button
                  type="button"
                  className={`rounded-pill btn ${
                    activeButton === "all" ? "btn-primary" : "btn-secondary"
                  } text-dark dropdown-toggle`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {dropdownText}
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
            {displayedPhotos
              .slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage)
              .map((photo) => (
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
              <button
                className="btn btn-primary prev-next-color"
                onClick={handlePreviousClick}
                disabled={activePage === 0}
                style={{ backgroundColor: "#351ee0" }}
              >
                <FontAwesomeIcon className="pe-3"
                  icon={faCircleArrowLeft}
                  style={{
                    "--fa-primary-color": "#351ee0",
                    "--fa-secondary-color": "#f9f9f9",
                  }}
                />
                Previous
              </button>
              <button
                className="btn btn-primary prev-next-color"
                onClick={handleNextClick}
                disabled={
                  activePage === totalPages - 1 ||
                  displayedPhotos.length <= (activePage + 1) * itemsPerPage
                }
                style={{ backgroundColor: "#351ee0" }}
              >
                Next
                <FontAwesomeIcon className="ps-3"
                  icon={faCircleArrowRight}
                  style={{ color: "#351ee0" }}
                />
              </button>
            </div>
            <hr className="mb-5"></hr>
          </div>
        </div>
      </div>
    </>
  );
};
