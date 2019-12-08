import React, { Component } from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";

class Contact extends Component {
  render = () => {
    return (
      <div>
        <section id="signup" className="signup-section">
          <div className="container ">
            <div className="row  d-flex h-100 align-items-center ">
              <div className="col-md-6 col-lg-6 col-sm-12 mx-auto">
                <div>
                  <h2>LAUNCHING SOON</h2>
                  <h4>
                    Be part of the journey. Sign up to our waiting list and keep
                    up with our news as we prepare to launch.
                  </h4>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 mx-auto text-center">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
}

export default Contact;
