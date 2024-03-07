import React, { useEffect, useRef } from "react";
import manufacturingIcon from "../../assets/images/manufacturing.svg";
import structureAnimate from "../../assets/images/animate.svg";
import intelligenceIcon from "../../assets/images/intelligence.svg";
import serviceIcon from "../../assets/images/service.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export const HomeValues = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  useEffect(() => {}, []);
  const cards = [
    {
      title: "MANUFACTURING",
      description:
        "We are manufacturing different types of products like Safety and monitoring, IOT modules, Standard Interfacing modules, Electronic Controller, Sensor and Electromechanical zig and fixer.",
      badge: "01",
      image: manufacturingIcon,
    },
    {
      title: "INTELLIGENCE",
      description:
        "Our Intelligence for our products. We are different in market and now a day we are different type of products which is easy to manage all things.",
      badge: "02",
      image: intelligenceIcon,
    },
    {
      title: "SERVICE",
      description:
        "We are providing different type of Service. Its technical, operational, lab equipments, control panels, industrial drives and PLC/SCADA/HMI. Our team is available 24×7 to provide services.",
      badge: "03",
      image: serviceIcon,
    },
    // Add more cards as needed
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="values-section">
      <div className="values-text-section">
        <div className="next-prev">
          <div className="prev" onClick={previous}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "24px" }} />
          </div>
          <div className="next" onClick={next}>
            <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "24px" }} />
          </div>
        </div>

        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef = slider;
          }}
        >
          {cards.map((card, index) => (
            <div key={index} style={{ margin: "0 10px" }}>
              <div className="card values-card">
                <div className="card-body">
                  <div className="card-heading">
                    <div className="">
                      <img src={card.image} alt="Icon" />
                    </div>
                    <div className="widget">
                      <h2 className="card-badge">{card.badge}</h2>
                    </div>
                  </div>
                  <h5
                    className="title"
                    style={{ color: "white", margin: "20px 0px" }}
                  >
                    {card.title}
                  </h5>
                  <p className="text-values">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="values-animate-text">
        <img src={structureAnimate} className="text-image" />
        <img src={structureAnimate} className="text-image duplicate mt-2" />
      </div>
    </div>
  );
};
