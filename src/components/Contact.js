import React, { Component } from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";

class Contact extends Component {
  render = () => {
    return (
      <div>
        <section id="signup" className="signup-section large-screen-spacing">
          <div className="container-fluid  ">
            <div className="row  d-flex h-100 align-items-center ">
              <div className="col-md-4 col-lg-4 col-sm-12 mx-auto px-3">
                <div className="">
                  <h2>LAUNCHING SOON</h2>
                  <br />
                  <h4>
                    <strong>Be part of the journey.</strong> Sign up to our
                    waiting list and keep up with our news as we prepare to
                    launch.
                  </h4>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-12 mx-auto text-center">
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
