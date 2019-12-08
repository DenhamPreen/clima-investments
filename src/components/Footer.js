import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-center text-white-50">
      <div className="container">
        <div className="row">
          <div className="col-md-10  col-sm-12  col-xs-12 mx-auto">
            This website is not an invitation to engage in investment activity.
            Clima.Investments will cater to UK residents only and will be
            regulated by the FCA. If you have any enquiries please contact{" "}
            <a href="mailto:info@clima.investments"> info@clima.investments</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
