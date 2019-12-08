import React, { Component } from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="container nav-content">
      <div className="row inner-row">
        <div className="col-md-6  col-sm-12  col-xs-12">
          <img
            className="header-logo-image "
            src="/assets/logotipo.png"
            alt="Clima Investments"
          />
        </div>
        <div className="col-md-6  col-sm-12  col-xs-12">
          <div className="join-waitist-container d-flex align-items-center">
            <span className="mx-auto">
              JOIN OUR WAITLIST{" "}
              <input placeholder="EMAIL ADDRESS" className="email-input" />{" "}
              <button className="ok-button">OK</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
