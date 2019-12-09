import React from "react";
import "./FightClimate.css";

const FightClimate = () => {
  return (
    <div className="container-fluid align-items-center fight-climate-section">
      <div className="row">
        <div className="col-md-10  col-sm-12  col-xs-12 mx-auto">
          <div className="mx-auto text-center">
            <h3>
              FIGHT CLIMATE CHANGE WHILE LEARNING <br /> ABOUT INVESTING AND
              IMPACT ASSESSMENT
            </h3>
            <hr className="underline-heading" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3  col-sm-12  col-xs-12 mx-auto text-left">
                  <div className="how-point-container  h-100">
                    <h1 className="point-number-1">1</h1>
                    <h5>Use our App</h5>
                    <p>
                      {" "}
                      Get our impact scorecard on each security that will be in
                      your allocated portfolio
                    </p>
                  </div>
                </div>
                <div className="col-md-3  col-sm-12  col-xs-12 mx-auto text-left">
                  <div className="how-point-container  h-100">
                    <h1 className="point-number-2">2</h1>
                    <h5>Learn about investments </h5>
                    <p> Access our tutorials </p>
                  </div>
                </div>
                <div className="col-md-3  col-sm-12  col-xs-12 mx-auto text-left">
                  <div className="how-point-container  h-100">
                    <h1 className="point-number-3">3</h1>
                    <h5>Be part of our community</h5>
                    <p>
                      {" "}
                      Gain access to relevant information on key companies,
                      policies, and global warming research
                    </p>
                  </div>
                </div>
                <div className="col-md-3  col-sm-12  col-xs-12 mx-auto text-left">
                  <div className="how-point-container  h-100">
                    <h1 className="point-number-4">4</h1>
                    <h5>Refer your friends</h5>
                    <p>
                      {" "}
                      For each friend that opens an account 10 trees will be
                      planted on your behalf
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FightClimate;
