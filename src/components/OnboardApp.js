import React from "react";
import "./OnboardApp.css";

const OnboardApp = () => {
  return (
    <div className="container-fluid onboard-section">
      <div className="row">
        <div className="col-md-6  col-sm-12  col-xs-12">
          <div className="onboard-details">
            <h3>
              Open a brokerage account in just a few minutes and put your
              savings into truly sustainable investments. Open an account with{" "}
              <strong>GBP 100</strong>
            </h3>
            <br />
            <br />
            <h5>
              <strong>Powerful analytics</strong>
              <span className="thin-text">
                {" "}
                to assess “greenness” of companies and securities
              </span>
            </h5>
            <h5>
              <strong>Solid targeted</strong>{" "}
              <span className="thin-text">
                returns for high impact investments that will contribute to
                carbon neutrality
              </span>
            </h5>
            <h5>
              <strong>Save frequently</strong>{" "}
              <span className="thin-text">
                with subsequent investments as little as GBP 10
              </span>
            </h5>
            <h5>
              <strong>Portfolios designed</strong>{" "}
              <span className="thin-text">to match your risk profile</span>
            </h5>
          </div>
        </div>
        <div className="col-md-6  col-sm-12  col-xs-12 iphone-screen">
          <img src="/assets/iphones.png" className="iphones" />
        </div>
      </div>
    </div>
  );
};

export default OnboardApp;
