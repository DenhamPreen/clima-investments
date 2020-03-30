import React from "react";
import "./OnboardApp.css";

const OnboardApp = () => {
  return (
    <div className="container-fluid  onboard-section">
      <div className="row d-flex h-100 align-items-center  mx-auto">
        <div className="col-md-4 col-lg-6 col-sm-12  col-xs-12">
          <div className="onboard-details">
            <h3 style={{ textTransform: "uppercase" }}>
              Join our community and learn about the climate champion companies
              bringing the world to net zero emissions
            </h3>
            <br />
            <br />
            <ul>
              <li>
                {" "}
                <h5>
                  <strong>Powerful analytics</strong>
                  <span className="thin-text">
                    {" "}
                    to assess “greenness” of companies and securities
                  </span>
                </h5>
              </li>
              <li>
                <h5>
                  <strong>Solid universe of vetted securities</strong>{" "}
                  <span className="thin-text">
                    for high impact investments that will contribute to carbon
                    neutrality
                  </span>
                </h5>
              </li>
              <li>
                {" "}
                <h5>
                  <strong>Unique discovery tools</strong>{" "}
                  <span className="thin-text">
                    to help you choose the securities that you would like to
                    invest into
                  </span>
                </h5>
              </li>
              <li>
                {" "}
                <h5>
                  <strong>Learn</strong>{" "}
                  <span className="thin-text">
                    how to build impactful green portfolios{" "}
                  </span>
                </h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 col-sm-12  col-xs-12 iphone-screen">
          <img src="/assets/iphonesn.png" className="iphones" />
        </div>
      </div>
    </div>
  );
};

export default OnboardApp;
