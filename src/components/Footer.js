import React from "react";
import "./Footer.css";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-center text-white-50 footer">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-8
           col-lg-8 col-sm-12  col-xs-12 mx-auto"
          >
            <p>
              This website is not an invitation to engage in investment
              activity. Clima.Investments will launch in key English speaking
              countries and will not be a platform to arrange or execute
              investments. If you have any enquiries please contact{" "}
              <a href="mailto:info@clima.investments">
                {" "}
                info@clima.investments
              </a>
            </p>
            <p>
              <SocialIcon url="https://www.facebook.com/climainvestments" />{" "}
              <SocialIcon url="https://www.linkedin.com/company/64253548" />{" "}
              <SocialIcon url="https://www.instagram.com/climainvestments/" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
