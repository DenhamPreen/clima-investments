import React from "react";
import "./Quote.css";

const Quote = () => {
  return (
    <div className="container-fluid align-items-center quote-section">
      <div className="row">
        <div className="col-md-12  col-sm-12  col-xs-12 mx-auto">
          <div className="mx-auto text-center">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8  col-sm-12  col-xs-12 mx-auto text-left quote-container">
                  <img
                    src="/assets/opening-quote.png"
                    className="opening-quote"
                  />
                  <div className="quote-text">
                    <h5>
                      Climate change is moving faster than we are. But we don’t
                      give up because we know that climate action is the only
                      path
                    </h5>
                    <br />
                    <p>ANTONIO GUTERRES</p>
                  </div>
                  <img
                    src="/assets/closing-quote.png"
                    className="closing-quote"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
