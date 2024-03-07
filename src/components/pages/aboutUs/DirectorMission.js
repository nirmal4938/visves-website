import React from "react";
import invertStart from "../../assets/images/aboutusImages/inverted_comma_start.svg";
import invertStop from "../../assets/images/aboutusImages/inverted_comma_stop.svg";
export const DirectorMission = () => {
  return (
    <React.Fragment>
      <div className="director-mission-section">
        <div className="director">
          <div className="title-main">DIRECTORS'S MISSION</div>
          <div className="card director-mission-card">
            <img
              className="director-card-img-left img-fluid"
              src="https://via.placeholder.com/50"
              alt="Card image cap"
            />
            <div className="director-card-body">
              <div className="director-card-text">
                <div className="inverted-start">
                  {/* <img src={invertStart} className="img-fluid" /> */}
                </div>
                We, Visves believe in giving a customized solution to our client
                & customer satisfaction is our utmost priority. Whenever we are
                assigned any task, our team gets involved Into it with high
                sincerity & they make sure, it is completed within stipulated 
                guidelines. It does not stop them to innovate & come up with
                creative solution , which most of the me, is acceptable
                <div className="inverted-stop">
                  {/* <img src={invertStop} className="img-fluid" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mission mt-4">
          <div className="card mission-card">
            <div className="mission-card-title">Mission</div>
            <div className="mission-card-body">
              Our mission is to improve the quality of life by making the world
              more productive  and sustainable. We are committed  to enabling
              the next generation  of smart manufacturing. We are dedicated to
              deliver value to our customers.
            </div>
          </div>
        </div>

        <div className="vission mt-4">
          <div className="card vission-card">
            <div className="vission-card-title">Vision</div>
            <div className="vission-card-body">
              To become a company with global presence providing best technology
              products and customer focused innovative solutions.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
