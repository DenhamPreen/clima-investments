import React from "react";
import "./InvestForImpact.css";

const InvestForImpact = () => {
  return (
    <div className="container-fluid align-items-center invest-for-impact-section">
      <div className="row">
        <div className="col-md-12  col-sm-12  col-xs-12 mx-auto">
          <div className="mx-auto text-center">
            <h3>INVEST FOR IMPACT</h3>
            <hr className="underline-heading" />
            <h5 className="impact-subheading">
              Be part of funding the green transition
            </h5>
            <div className="container">
              <div className="row">
                <div className="col-md-3  col-sm-12  col-xs-12 mx-auto text-left">
                  <i className="fas fa-money-check-alt mb-4 icons-for-impact"></i>
                  <h5>Up to $120 trillion</h5>
                  <p>
                    {" "}
                    in global infrastructure investments will be needed before
                    2050
                  </p>
                </div>
                <div className="col-md-3  col-sm-12  col-xs-12 mx-auto text-left">
                  <i className="fas fa-leaf mb-4 icons-for-impact"></i>
                  <h5>Green bonds</h5>
                  <p>
                    {" "}
                    could reach $1 trillion in new issuances per year by the
                    early 2020s{" "}
                  </p>
                </div>
                <div className="col-md-3  col-sm-12  col-xs-12 mx-auto text-left">
                  <i className="fas fa-chart-line mb-4 icons-for-impact"></i>
                  <h5>Climax</h5>
                  <p>
                    {" "}
                    will rigorously analyse and vet these and other green
                    investment opportunities, for impact and returns
                  </p>
                </div>
                <div className="col-md-3  col-sm-12  col-xs-12 mx-auto text-left">
                  <i className="fas fa-user-shield mb-4 icons-for-impact"></i>
                  <h5>Vetted, truly sustainable</h5>
                  <p>
                    {" "}
                    investment opportunities in listed securities: global
                    shares, ETFs, green bonds and Investment Trusts
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
