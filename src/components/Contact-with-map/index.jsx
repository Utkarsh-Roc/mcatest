import React from "react";
import { Formik, Form, Field } from "formik";
import Footer from "../Footer";

const ContactWithMap = () => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form md-mb50">
                <h4 className="extra-title mb-50">Get In Touch.</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  onSubmit={async (values) => {
                    await sendMessage(500);
                    alert(JSON.stringify(values, null, 2));
                    // show message

                    messageRef.current.innerText =
                      "Your Message has been successfully sent. I will contact you soon.";
                    // Reset the values
                    values.name = "";
                    values.email = "";
                    values.message = "";
                    // clear message
                    setTimeout(() => {
                      messageRef.current.innerText = "";
                    }, 2000);
                  }}
                >
                  {({ errors, touched }) => (
                    <form id="contact-form" action="https://formsubmit.co/activations@mcaworldwide.in" method="post">
                      <div className="messages" ref={messageRef}></div>

                      <div className="controls">
                        <div className="form-group">
                          <Field
                            id="form_name"
                            type="text"
                            name="Name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>

                        <div className="form-group">
                          <Field
                            validate={validateEmail}
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                          {errors.email && touched.email && (
                            <div>{errors.email}</div>
                          )}
                        </div>

                        <div className="form-group">
                          <Field
                            type="text"
                            id="form_message"
                            name="phone"
                            placeholder="Phone"
                            required="required"
                          /> 
                        </div>

                        <div className="form-group">
                          <Field
                            as="textarea"
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows="4"
                            required="required"
                          /> 
                        </div>

                        <button type="submit" className="btn-curve btn-blc">
                          <span>Send Message</span>
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="cont-info">
                <h4 className="extra-title mb-50">Contact Info.</h4>
                <h3 className="custom-font wow" data-splitting>
                  Let&apos;s Talk.
                </h3>
                <div className="item mb-40">
                  <h5>
                    <a href="#0">activations@mcaworldwide.in</a>
                  </h5>
                  <h5>+91 8879028513</h5>
                </div>
                <h3 className="custom-font wow" data-splitting>
                  Visit Us.
                </h3>
                <div className="item">
                  <h6>
                  MCA Worldwide, Business Point, 103 Lohana,
                    <br />
                    Colony, Paliram Road, Andheri West, Mumbai –
                    <br />
                    400058
                  </h6>
                </div>
                <div className="social mt-50">
                  <a target={"_blank"} rel="noreferrer" href="https://www.facebook.com/musicculturearts/" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a target={"_blank"} rel="noreferrer" href="https://www.instagram.com/worldwide_mca/" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/company/music-culture-&-arts" className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  {/* <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map" id="ieatmaps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7242789610596!2d72.84168311393063!3d19.119748055566646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9fb823743e1%3A0xa197c2ba10d61be7!2sMusic%2C%20Culture%20%26%20Arts%20(%20MCA%20Worldwide)!5e0!3m2!1sen!2sin!4v1676642531617!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default ContactWithMap;
