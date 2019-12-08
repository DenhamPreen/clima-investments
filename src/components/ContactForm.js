import React, { useState } from "react";

const ContactForm = () => {
  const [enquiry, setEnquiry] = useState({
    FNAME: "",
    EMAIL: "",
    PHONE: ""
  });

  const handleChange = event => {
    setEnquiry({
      ...enquiry,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="contactForm">
      <span id="mc_embed_signup">
        <form
          action="https://investments.us4.list-manage.com/subscribe/post?u=1a9dea38242c4c03c1f173d6e&amp;id=dfca79c487"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <input
              type="text"
              value=""
              name="FNAME"
              onChange={handleChange}
              value={enquiry.FNAME}
              id="mce-FNAME"
              placeholder="Name"
              style={{
                display: "block",
                border: "none",
                borderRadius: "0",
                width: "100%",
                padding: "0.3rem",
                height: "40px",
                margin: "1rem"
              }}
            />
            <input
              type="email"
              value={enquiry.EMAIL}
              onChange={handleChange}
              name="EMAIL"
              className="required email"
              placeholder="Email"
              id="mce-EMAIL"
              style={{
                display: "block",
                border: "none",
                borderRadius: "0",
                width: "100%",
                padding: "0.3rem",
                height: "40px",
                margin: "1rem"
              }}
            />
            <input
              type="text"
              value=""
              value={enquiry.PHONE}
              onChange={handleChange}
              name="PHONE"
              placeholder="Mobile"
              id="mce-PHONE"
              style={{
                border: "none",
                borderRadius: "0",
                padding: "0.3rem",
                height: "40px",
                width: "100%",
                boxSizing: "border-box",
                margin: " 0 1rem 1rem 1rem"
              }}
            />
            <div id="mce-responses" class="clear">
              <div
                class="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_1a9dea38242c4c03c1f173d6e_dfca79c487"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="clear" style={{ width: "100%", margin: "0" }}>
              <input
                type="submit"
                value="OK"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="contact-input contact-button"
                style={{
                  border: "none",
                  borderRadius: "0",
                  padding: "0.3rem",
                  height: "40px",
                  width: "40%",
                  margin: "auto",
                  boxSizing: "border-box"
                }}
              />
            </div>
          </div>
        </form>
      </span>
    </div>
  );
};

export default ContactForm;
