import React from 'react'
import Split from '../Split'

const SocialFeed = () => {
    return (
        <section className="number-sec section-padding sub-bg">
            <div className="container">
                <div className="sec-head custom-font text-center">
                    <h6 className="wow fadeIn" data-wow-delay=".5s">
                        Our Recent Works
                    </h6>
                    <Split>
                        <h3 className="wow words chars splitting" data-splitting>
                            Social Feed
                        </h3>
                    </Split>
                    <span className="tbg">Social Feed</span>
                </div>
                <div className="row">
                    <div
                        loading="lazy"
                        data-mc-src="fb1463d9-51c2-48ed-8954-1b0775345c08#instagram" style={{ width: "100%" }}></div>
                </div>
            </div>
        </section>
    )
}

export default SocialFeed
