import React from "react";

const InfluencerForm = () => {
  return (
    <form
      action="https://formsubmit.co/activations@mcaworldwide.in"
      method="POST"
    >
      {/* Hidden Inputs */}
      {/* <input type="hidden" name="_captcha" value="false" /> */}

      {/* Name & Phone */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label>Name <span style={{ color: "red" }}>*</span></label>
          <input name="name" className="form-control" placeholder="Your Full Name" required />
        </div>
        <div className="col-md-6">
          <label>Phone <span style={{ color: "red" }}>*</span></label>
          <input name="phone" className="form-control" placeholder="+91" required type="tel" />
        </div>
      </div>

      {/* Email */}
      <div className="mb-3">
        <label>Email <span style={{ color: "red" }}>*</span></label>
        <input name="email" type="email" className="form-control" placeholder="Email" required />
      </div>

      {/* Location */}
      <div className="mb-3">
        <label>Location (City) <span style={{ color: "red" }}>*</span></label>
        <input name="location" className="form-control" placeholder="City" required />
      </div>

      {/* Category */}
      <div className="mb-3 custom-select-wrapper ">
        <label>Category <span style={{ color: "red" }}>*</span></label>
        <div className="custom-select-container">
        <select name="category" className="form-control custom-select" required>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Fashion">Fashion</option>
          <option value="Fitness">Fitness</option>
          <option value="Health">Health</option>
          <option value="Travel">Travel</option>
          <option value="Gaming">Gaming</option>
          <option value="Photography">Photography</option>
          <option value="Education">Education</option>
          <option value="Beauty">Beauty</option>
          <option value="Finance">Finance</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Tech">Tech</option>
          <option value="Food Blogger">Food Blogger</option>
          <option value="Mom Blogger">Mom Blogger</option>
          <option value="Other">Other</option>
        </select>
        </div>
      </div>

      {/* Instagram */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label>Instagram Link</label>
          <input name="instagramLink" className="form-control" />
        </div>
        <div className="col-md-4">
          <label>Followers</label>
          <input name="instagramFollowers" className="form-control" />
        </div>
        <div className="col-md-4">
          <label>Charges</label>
          <input name="instagramCharges" className="form-control" />
        </div>
      </div>

      {/* YouTube */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label>YouTube Link</label>
          <input name="youtubeLink" className="form-control" placeholder="https://www." />
        </div>
        <div className="col-md-4">
          <label>Subscribers</label>
          <input name="youtubeSubscribers" className="form-control" />
        </div>
        <div className="col-md-4">
          <label>Charges</label>
          <input name="youtubeCharges" className="form-control" placeholder="(per video)" />
        </div>
      </div>

      {/* Twitter */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label>Twitter Link</label>
          <input name="twitterLink" className="form-control" />
        </div>
        <div className="col-md-4">
          <label>Followers</label>
          <input name="twitterFollowers" className="form-control" />
        </div>
        <div className="col-md-4">
          <label>Charges</label>
          <input name="twitterCharges" className="form-control" placeholder="(per video)" />
        </div>
      </div>

      {/* Snapchat */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label>Snapchat Link</label>
          <input name="snapchatLink" className="form-control" />
        </div>
        <div className="col-md-4">
          <label>Followers</label>
          <input name="snapchatFollowers" className="form-control" />
        </div>
        <div className="col-md-4">
          <label>Charges</label>
          <input name="snapchatCharges" className="form-control" placeholder="(per video)" />
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-dark">Submit</button>
    </form>
  );
};

export default InfluencerForm;
