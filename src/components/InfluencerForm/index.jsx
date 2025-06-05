import React, { useRef } from "react";
import { Formik, Field, Form } from "formik";

const InfluencerForm = () => {
  const messageRef = useRef(null);

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        location: "",
        category: "Lifestyle",
        instagramLink: "",
        instagramFollowers: "",
        instagramCharges: "",
        youtubeLink: "",
        youtubeSubscribers: "",
        youtubeCharges: "",
        twitterLink: "",
        twitterFollowers: "",
        twitterCharges: "",
        snapchatLink: "",
        snapchatFollowers: "",
        snapchatCharges: "",
        message: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form
          action="https://formsubmit.co/activations@mcaworldwide.in"
          method="POST"
          target="_blank"
          
        >
        <div className="influencer-form-wrapper">
          {/* Row 1: Name & Phone */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label>Name *</label>
              <Field name="name" className="form-control" placeholder="Your Full Name" required />
            </div>
            <div className="col-md-6">
              <label>Phone *</label>
              <Field name="phone" className="form-control" placeholder="+91" required type="tel" />
            </div>
          </div>

          {/* Row 2: Email */}
          <div className="mb-3">
            <label>Email *</label>
            <Field name="email" type="email" className="form-control" placeholder="Email" required />
          </div>

          {/* Row 3: Location */}
          <div className="mb-3">
            <label>Location (City) *</label>
            <Field name="location" className="form-control" placeholder="City" required />
          </div>

          {/* Row 4: Category */}
          <div className="mb-3">
            <label>Category *</label>
            <Field as="select" name="category" className="form-control" required>
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
            </Field>
          </div>

          {/* Row 5: Instagram */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Instagram Link</label>
              <Field name="instagramLink" className="form-control" placeholder="https://www." />
            </div>
            <div className="col-md-4">
              <label>Followers</label>
              <Field name="instagramFollowers" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Charges</label>
              <Field name="instagramCharges" className="form-control" placeholder="(per post/reel/story)" />
            </div>
          </div>

          {/* Row 6: YouTube */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label>YouTube Link</label>
              <Field name="youtubeLink" className="form-control" placeholder="https://www." />
            </div>
            <div className="col-md-4">
              <label>Subscribers</label>
              <Field name="youtubeSubscribers" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Charges</label>
              <Field name="youtubeCharges" className="form-control" placeholder="(per video)" />
            </div>
          </div>

          {/* Row 7: Twitter */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Twitter Link</label>
              <Field name="twitterLink" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Followers</label>
              <Field name="twitterFollowers" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Charges</label>
              <Field name="twitterCharges" className="form-control" placeholder="(per video)" />
            </div>
          </div>

          {/* Row 8: Snapchat */}
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Snapchat Link</label>
              <Field name="snapchatLink" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Followers</label>
              <Field name="snapchatFollowers" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Charges</label>
              <Field name="snapchatCharges" className="form-control" placeholder="(per video)" />
            </div>
          </div>

          {/* Row 9: Message
          <div className="mb-3">
            <label>Additional Message</label>
            <Field
              name="message"
              as="textarea"
              className="form-control"
              placeholder="Tell us about you..."
              rows={3}
            />
          </div> */}

          {/* Hidden Fields */}
          <input type="hidden" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" 
          value={typeof window !== 'undefined' ? window.location.href: ''}
          />
          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting} className="btn btn-danger">
            Submit
          </button>
        </div>
        </Form>
      )}
    </Formik>
  );
};

export default InfluencerForm;
