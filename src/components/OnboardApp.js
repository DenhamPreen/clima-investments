import React from "react";
import "./OnboardApp.css";

const OnboardApp = () => {
  return (
    <div className="container-fluid onboard-section">
      <div className="row">
        <div className="col-md-6  col-sm-12  col-xs-12">
          <div className="onboard-details">
            <h3>
              {" "}
              OPEN AN INVESTMENT ACCOUNT IN JUST A FEW MINUTES WITH AS LITTLE AS{" "}
              <strong>£100</strong>
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
                  <strong>Solid targeted returns</strong>{" "}
                  <span className="thin-text">
                    for high impact investments that will contribute to carbon
                    neutrality
                  </span>
                </h5>
              </li>
              <li>
                {" "}
                <h5>
                  <strong>Save frequently</strong>{" "}
                  <span className="thin-text">
                    with subsequent investments as little as GBP 10
                  </span>
                </h5>
              </li>
              <li>
                {" "}
                <h5>
                  <strong>Portfolios designed</strong>{" "}
                  <span className="thin-text">to match your risk profile</span>
                </h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6  col-sm-12  col-xs-12 iphone-screen">
          <img src="/assets/app.png" className="iphones" />
        </div>
      </div>
    </div>
  );
};

export default OnboardApp;
