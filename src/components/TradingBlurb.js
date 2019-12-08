import React from "react";
import "./TradingBlurb.css";

const TradingBlurb = () => {
  return (
    <div className="container-fluid d-flex h-100 align-items-center trading-blurb">
      <div className="row">
        <div className="col-md-8  col-sm-12  col-xs-12 mx-auto">
          <div className="mx-auto text-center">
            <h5>
              No trading fees, no hidden charges, no commissions.{" "}
              <strong>Simple</strong> and <strong>clear flat fee</strong>{" "}
              structure
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingBlurb;
