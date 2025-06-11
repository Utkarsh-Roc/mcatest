import React from "react";

const BrandForm = () => {
  return (
    <form
      action="https://formsubmit.co/activations@mcaworldwide.in"
      method="POST"
      target="_blank"
    >
      {/* Name and Phone side by side */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label>
            Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Your Full Name"
            required
          />
        </div>
        <div className="col-md-6">
          <label>
            Phone <span style={{ color: "red" }}>*</span>
          </label>
          <input
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
        <label>
          Email <span style={{ color: "red" }}>*</span>
        </label>
        <input
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
          <label>Brand Name</label>
          <input
            name="brandName"
            type="text"
            className="form-control"
            placeholder="Enter your Brand Name"
          />
        </div>
        <div className="col-md-6">
          <label>Brand Website</label>
          <input
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
        <div role="group" aria-labelledby="budget-group" className="d-flex gap-3">
          <label>
            <input type="radio" name="budget" value="1-3 Lac" required /> 1-3 Lac
          </label>
          <label>
            <input type="radio" name="budget" value="3-5 Lac" /> 3-5 Lac
          </label>
          <label>
            <input type="radio" name="budget" value="Above 5 Lac" /> Above 5 Lac
          </label>
        </div>
      </div>

      {/* Requirements textarea */}
      <div className="mb-3">
        <label>
          Requirements <span style={{ color: "red" }}>*</span>
        </label>
        <textarea
          name="requirements"
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

      {/* Submit button */}
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
};

export default BrandForm;
   