import React from "react";
import "./InvestForImpact.css";

const InvestForImpact = () => {
  return (
    <div className="container-fluid align-items-center invest-for-impact-section">
      <div className="row">
        <div className="col-md-12  col-sm-12  col-xs-12 mx-auto">
          <div className="mx-auto text-center">
            <h3>BE PART OF FUNDING THE GREEN TRANSITION</h3>
            <hr className="underline-heading" />
            <h5 className="impact-subheading">Invest for Impact</h5>
            <div className="container">
              <div className="row">
                <div className="col-md-3  col-sm-12  col-xs-12 mx-auto text-center">
                  <i className="fas fa-money-check-alt mb-4 icons-for-impact"></i>
                  <h5>Massive infrastructure needed</h5>
                  <p>
                    {" "}
                    Up to $120 trillion in global infrastructure investments
                    will be needed before 2050
                  </p>
                </div>
                <div className="col-md-3  col-sm-12  col-xs-12 mx-auto text-center">
                  <i className="fas fa-leaf mb-4 icons-for-impact"></i>
                  <h5>New investment opportunities</h5>
                  <p>
                    {" "}
                    Green bonds could reach $1 trillion in new issuances by the
                    early 2020s{" "}
                  </p>
                </div>
                <div className="col-md-3  col-sm-12  col-xs-12 mx-auto text-center">
                  <i className="fas fa-chart-line mb-4 icons-for-impact"></i>
                  <h5>Gain access to truly sustainable listed securities</h5>
                  <p>
                    {" "}
                    Fully vetted global shares, ETFs, green bonds and investment
                    trusts
                  </p>
                </div>
                <div className="col-md-3  col-sm-12  col-xs-12 mx-auto text-center">
                  <i className="fas fa-user-shield mb-4 icons-for-impact"></i>
                  <h5>Solid assessment required</h5>
                  <p>
                    {" "}
                    Clima will rigorously analyse green investment opportunities
                    for impact and returns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestForImpact;
