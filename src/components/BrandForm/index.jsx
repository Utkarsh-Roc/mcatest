import React from "react";
import { Formik, Field, Form } from "formik";

const BrandForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        contactEmail: "",
        brandName: "",
        brandWebsite: "",
        budget: "",
        requirements: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        // No need for JS submit handler, form will submit via browser
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form
          action="https://formsubmit.co/activations@mcaworldwide.in"
          method="POST"
          target="_blank"
        >
          {/* Name and Phone side by side */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name">
                Name <span style={{ color: "red" }}>*</span>
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone">
                Phone <span style={{ color: "red" }}>*</span>
              </label>
              <Field
                id="phone"
                name="phone"
                type="tel"
                className="form-control"
                placeholder="+91"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="contactEmail">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <Field
              id="contactEmail"
              name="contactEmail"
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>

          {/* Brand Name and Brand Website side by side */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="brandName">Brand Name</label>
              <Field
                id="brandName"
                name="brandName"
                type="text"
                className="form-control"
                placeholder="Enter your Brand Name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="brandWebsite">Brand Website</label>
              <Field
                id="brandWebsite"
                name="brandWebsite"
                type="url"
                className="form-control"
                placeholder="https://www."
              />
            </div>
          </div>

          {/* Budget radio buttons */}
          <div className="mb-3">
            <label>
              Your Budget <span style={{ color: "red" }}>*</span>
            </label>
            <div
              role="group"
              aria-labelledby="budget-group"
              className="d-flex gap-3"
            >
              <label>
                <Field type="radio" name="budget" value="1-3 Lac" required />
                {"  "}1-3 Lac
              </label>
              <label>
                <Field type="radio" name="budget" value="3-5 Lac" />
                {"  "}3-5 Lac
              </label>
              <label>
                <Field type="radio" name="budget" value="Above 5 Lac" />
                {"  "}Above 5 Lac
              </label>
            </div>
          </div>

          {/* Requirements textarea */}
          <div className="mb-3">
            <label htmlFor="requirements">
              Requirements <span style={{ color: "red" }}>*</span>
            </label>
            <Field
              id="requirements"
              name="requirements"
              as="textarea"
              className="form-control"
              placeholder="Tell us more about your requirements..."
              rows={4}
              required
            />
          </div>

          {/* Hidden fields for spam and redirect */}
          <input
            type="text"
            name="_honey"
            style={{ display: "none" }}
            autoComplete="off"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value={typeof window !== 'undefined' ? window.location.href : ''}
          />

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-dark"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BrandForm;
