import React, { Component } from "react";
import "./Home.css";

import NavigationBar from "./NavigationBar";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render = () => {
    return (
      <header className="masthead" id="home">
        <NavigationBar />
        <div className="container d-flex h-100 align-items-center home-content">
          <div className="row">
            <div className="col-md-12  col-sm-12  col-xs-12">
              <div className="mx-auto text-left">
                <h2 className="text-white mt-2 mb-3 above-the-fold-heading">
                  The App-Based Platform for Net-Zero Carbon Emission
                  Investments
                </h2>
                <h4 className="text-white">
                  Making green investments accessible and simple
                </h4>
              </div>
            </div>
            {/* <div className="col-md-6 col-sm-12 col-xs-12">
              <div className="mx-auto text-center">
                <img
                  className="img-fluid mb-3 mb-lg-0 app-image"
                  src="/assets/watermarklogo.png"
                  alt="Clima Investments App"
                />
              </div>
            </div> */}
          </div>
        </div>
      </header>
    );
  };
}

export default Home;
