import React from "react";
import Split from "../Split";
import Link from "next/link";

const InfluencerCallToAction = ({ theme }) => {
    return (
        <section className="lets-talk section-padding bg-transparent">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center  wow fadeInUp">
                        <h2>Let’s Work Together</h2>
                        <p className="mb-4">We’re here to help your brand collaborate with top influencers.</p>

                        <div className="mt-5">
                            <button
                                className={`btn-curve ${theme === "light" ? "btn-blc" : "btn-lit"} btn-arrow btn-rounded mr-3 btn-width1 wow fadeInUp`}
                                data-wow-delay="0.5s"
                                data-bs-toggle="modal"
                                data-bs-target="#modalBrand"
                            >
                                <span>I am a Brand </span> <span className="btn-arrow-icon">→</span>
                            </button>
                            <button
                                className={`btn-curve ${theme === "light" ? "btn-blc" : "btn-lit"} btn-arrow btn-rounded ml-3 mr-3 btn-width2 wow fadeInUp`}
                                data-wow-delay="0.5s"
                                data-bs-toggle="modal"
                                data-bs-target="#modalInfluencer"
                            >
                                <span>I am an Influencer</span> <span className="btn-arrow-icon">→</span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfluencerCallToAction;
