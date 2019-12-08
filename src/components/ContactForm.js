import React, { useState } from "react";
import { sendEmail } from "../utils/SendGridEmail";

const ContactForm = () => {
  const [enquiry, setEnquiry] = useState({
    userName: "",
    userEmail: "",
    userMessage: ""
  });

  const handleChange = event => {
    setEnquiry({
      ...enquiry,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      enquiry.userName != "" ||
      enquiry.userEmail != "" ||
      enquiry.userMobile != ""
    ) {
      sendEmail(enquiry.userName, enquiry.userEmail, enquiry.userMessage);
    }
    setEnquiry({
      userName: "",
      userEmail: "",
      userMobile: "",
      userCountry: ""
    });
  };

  return (
    <div className="contactForm">
      <div>
        <form
          className="feedback-form"
          onSubmit={handleSubmit}
          style={{ textAlign: "left" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-3 mb-md-0">
                <div class="form-group">
                  <input
                    id="name-entry"
                    name="userName"
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    value={enquiry.userName}
                    className="form-control  contact-input"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3 mb-md-0">
                <div class="form-group">
                  <input
                    className="text-input contact-input"
                    id="email-entry"
                    name="userEmail"
                    type="email"
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    value={enquiry.userEmail}
                    className="form-control  contact-input"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3 mb-md-0">
                <div class="form-group">
                  <input
                    className="text-input contact-input"
                    id="mobile-entry"
                    name="userMobile"
                    type="mobile"
                    onChange={handleChange}
                    placeholder="Mobile"
                    required
                    value={enquiry.userMobile}
                    className="form-control  contact-input"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3 mb-md-0">
                <div class="form-group">
                  <input
                    className="text-input contact-input"
                    id="mobile-country"
                    name="userCountry"
                    type="text"
                    onChange={handleChange}
                    placeholder="Country of Residence"
                    required
                    value={enquiry.userCountry}
                    className="form-control  contact-input"
                  />
                </div>
              </div>
              <div className="col-md-12 mb-3 mb-md-0">
                <input
                  type="submit"
                  value="OK"
                  id="sendEmail"
                  className="contact-input contact-button"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
