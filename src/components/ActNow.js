import React from "react";
import "./ActNow.css";

const ActNow = () => {
  return (
    <div className="container-fluid align-items-center fight-climate-section large-screen-spacing ">
      <div className="row">
        <div className="col-md-10  col-sm-12  col-xs-12 mx-auto">
          <div className="mx-auto text-center">
            <h3>WE MUST ACT NOW</h3>
            <hr className="underline-heading" />
            <h5 className="impact-subheading">
              The transition to carbon neutrality will require large-scale
              investments
            </h5>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4  col-sm-12  col-xs-12 mx-auto text-center">
                  <i className="fas fa-question-circle mb-4 icons-for-act"></i>
                  <h5>
                    <strong> Not ready to invest?</strong> But curious to learn
                    more?
                  </h5>
                </div>
                <div className="col-md-4  col-sm-12  col-xs-12 mx-auto text-center">
                  <i className="fas fa-edit mb-4 icons-for-act"></i>
                  <h5>
                    <strong>Open an account with no investment</strong> and for
                    two months experience what we can offer
                  </h5>
                </div>
                <div className="col-md-4  col-sm-12  col-xs-12 mx-auto text-center">
                  <i className="fas fa-coins mb-4 icons-for-act"></i>
                  <h5>
                    <strong>Then transfer funds</strong> once you are happy with
                    how we plan to invest your savings
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActNow;
