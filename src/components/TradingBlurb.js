import React from "react";
import "./TradingBlurb.css";

const TradingBlurb = () => {
  return (
    <div className="container-fluid align-items-center trading-blurb  large-screen-spacing">
      <div className="row">
        <div className="col-md-1 col-sm-12  col-xs-12"></div>
        <div className="col-md-10 col-sm-12  col-xs-12 text-center mx-auto">
          <h5>
            No trading fees, no hidden charges, no commissions <br />
            <small>
              {" "}
              <i>
                <strong>Simple</strong> and <strong>clear flat fee</strong>{" "}
                structure
              </i>
            </small>
          </h5>
        </div>
        <div className="col-md-1 col-sm-12  col-xs-12"></div>
      </div>
    </div>
  );
};

export default TradingBlurb;
