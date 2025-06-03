/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} style={{ width: "300px" }} alt="Logo"/>
                </a>
              </div>
              <div className="con-info custom-font">
                <p style={{color: "white"}}>Founded in 2011, MCA Worldwide (Music Culture & Art) is a PR & Marketing firm that does Brand-Tie ups, ATL & BTL, Brand Activations with events at a PAN India level. The team focuses on delivering tailored ideas as per brand prerequisite. We ensure cost-effective service, accountability and flexibility in all your requirements. Whatever your budget may be, we have solutions you will not find elsewhere.</p>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="https://www.facebook.com/musicculturearts/" target={"_blank"} rel="noreferrer" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/worldwide_mca/" target={"_blank"} rel="noreferrer" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/music-culture-&-arts" target={"_blank"} rel="noreferrer" className="icon">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  {/* <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newslatter</h6>
              <p>Sign up for subscribe out newsletter!</p>
              <Formik
                initialValues={{
                  subscribe: "",
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <form action="https://formspree.io/f/mpzedzlj" method="post">
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                        required="required"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">Subscribe</button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
            <div className="cont">
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> activations@mcaworldwide.in
                  </li>
                  <li>
                    <span>Address : </span> MCA Worldwide, Business Point, 103 Lohana Colony, Paliram Road,<br /> Andheri West, Mumbai – 400058
                  </li>
                  <li>
                    <span>Phone : </span> +91 8879028513
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="insta">
              <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">
                <a href="#0">
                  <img src="/img/insta/1.jpg" alt="" />
                </a>
                <a href="#0">
                  <img src="/img/insta/2.jpg" alt="" />
                </a>
                <a href="#0">
                  <img src="/img/insta/3.jpg" alt="" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © Copyright {new Date().getFullYear()} MCA Worldwide | Developed by <a target={"_blank"} rel="noreferrer" href="https://vectorart.co/">Vectorart.co</a> .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
