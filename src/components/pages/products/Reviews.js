import React from "react";
import ReviewImage from "../../assets/images/products/review1.svg";
import { Rating } from "react-simple-star-rating";
export const Reviews = () => {
  return (
    <React.Fragment>
      <div className="review-section">
        <div className="row review-row">
          <div className="col-12 col-md-6">
            <div className="review-image">
              <img src={ReviewImage} className="img-fluid " />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="title">CLIENTS REVIEWS</div>
            <div className="sub-title">Simplify Streamline Succeed IT </div>
            <div className="review-card-group">
              <div className="card review-card">
                <div className="review-card-header">
                  <div>
                    <h5 className="card-title review-card-title">
                      Alex Simmons
                    </h5>
                    <h6 className="card-subtitle review-card-sub-title">
                      President of Sales
                    </h6>
                  </div>
                  <div className="rating">
                    <Rating

                    /* Available Props */
                    />
                  </div>
                </div>
                <div className="card-body review-card-body">
                  <p className="card-text review-card-text">
                    There are many variations of passages Lorem Ipsum thei
                    available, but the desig majority have sufferd alteration in
                    some form.There a are many variations Lorem ispum is most of
                    the ma passages of Lorem ispum is most an valuable are many
                    variations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
