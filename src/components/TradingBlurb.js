import React from "react";
import "./TradingBlurb.css";

const TradingBlurb = () => {
  return (
    <div className="container-fluid align-items-center trading-blurb  large-screen-spacing">
      <div className="row">
        <div className="col-md-1 col-sm-12  col-xs-12"></div>
        <div className="col-md-10 col-sm-12  col-xs-12 text-center mx-auto">
          <h5>
            <strong>
              The most thoughtful Green Ed FinTech platform in the world
            </strong>{" "}
            <br /> <i>Entry level subscription free for life</i>
          </h5>
        </div>
        <div className="col-md-1 col-sm-12  col-xs-12"></div>
      </div>
    </div>
  );
};

export default TradingBlurb;
