import React, { useState } from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [emailInfo, setEmailInfo] = useState({
    EMAIL: ""
  });

  const handleChange = event => {
    setEmailInfo({
      ...emailInfo,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="container-fluid nav-content">
      <div className="row">
        <div className="col-md-6  col-sm-12  col-xs-12">
          <img
            className="header-logo-image"
            src="/assets/logotipo.png"
            alt="Clima Investments"
          />
        </div>
        <div className="col-md-6  col-sm-12  col-xs-12 hiddenOnMobile">
          <div className="join-waitist-container d-flex align-items-center right-float">
            <span className=" background-fade-color">
              JOIN OUR WAITLIST{" "}
              <span id="mc_embed_signup">
                <form
                  action="https://investments.us4.list-manage.com/subscribe/post?u=1a9dea38242c4c03c1f173d6e&amp;id=dfca79c487"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate inline-form"
                  target="_blank"
                  style={{
                    display: "inline"
                  }}
                  novalidate
                >
                  <span id="mc_embed_signup_scroll">
                    <input
                      placeholder="EMAIL ADDRESS"
                      className="email-input"
                      type="email"
                      value={emailInfo.EMAIL}
                      onChange={handleChange}
                      name="EMAIL"
                      id="mce-EMAIL"
                      style={{
                        display: "inline",
                        border: "none",
                        borderRadius: "0",
                        padding: "0.3rem",
                        height: "40px"
                      }}
                      required
                    />
                    <span
                      style={{
                        position: "absolute",
                        left: "-5000px",
                        display: "inline"
                      }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_1a9dea38242c4c03c1f173d6e_dfca79c487"
                        tabindex="-1"
                        value=""
                        style={{
                          display: "inline"
                        }}
                      />
                    </span>{" "}
                    {/* <div class="clear"> */}
                    <input
                      className="ok-button"
                      type="submit"
                      value="OK"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      style={{
                        display: "inline",
                        boxSizing: "content-box",
                        borderRadius: "0"
                      }}
                    />
                    {/* </div> */}
                  </span>
                </form>
              </span>
              {/* <input placeholder="EMAIL ADDRESS" className="email-input" />{" "}
              <button className="ok-button">OK</button> */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
