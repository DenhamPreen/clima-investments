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
        <div className="container-fluid d-flex h-100 align-items-center home-content">
          <div className="row mx-auto">
            <div className="col-md-12  col-sm-12  col-xs-12  mx-auto">
              <div className="text-center margin-move mx-auto">
                <h2 className="text-white mx-auto ">
                  The App-Based Platform That Makes Net-Zero <br /> Carbon
                  Emission Investments Easy & Accessible
                  {/* The App-Based Platform for <br />
                  Net-Zero Carbon Emission Investments */}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
}

export default Home;
