const InfluencerCallToAction = () => {
    return (
        <section className="lets-talk section-padding bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Let’s Work Together</h2>
                        <p>We’re here to help your brand collaborate with top influencers.</p>

                        <div className="mt-4">
                            <button
                                className="btn btn-danger btn-arrow btn-rounded mr-3 btn-width"
                                data-bs-toggle="modal"
                                data-bs-target="#modalBrand"
                            >
                                I am a Brand <span className="btn-arrow-icon">→</span>
                            </button>
                            <button
                                className="btn btn-outline-danger btn-arrow btn-rounded btn-width"
                                data-bs-toggle="modal"
                                data-bs-target="#modalInfluencer"
                            >
                                I am an Influencer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfluencerCallToAction;
