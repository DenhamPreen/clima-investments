import React, { Fragment, Component } from "react";
import "./App.css";

import Home from "./components/Home";
import UNBlurb from "./components/UNBlurb";
import InvestForImpact from "./components/InvestForImpact";
import OnboardApp from "./components/OnboardApp";
import TradingBlurb from "./components/TradingBlurb";
import FightClimate from "./components/FightClimate";
import Quote from "./components/Quote";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ToastsContainer, ToastsStore } from "react-toasts";

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <Fragment>
          <Home />
          <UNBlurb />
          <InvestForImpact />
          <OnboardApp />
          <TradingBlurb />
          <FightClimate />
          <Quote />
          <Contact />
          <Footer />
        </Fragment>
        <ToastsContainer store={ToastsStore} />
      </div>
    );
  };
}

export default App;
