/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/Pr/1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  Brand Image Management
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  We keep your company profile updated with the latest posts and interesting new creations on social media. We make sure you are always trending on sites like Facebook, Instagram, Twitter, LinkedIn, Tumblr, Pinterest etc..
                </p>
              </Split>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/Pr/2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  Designing
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Whether it’s a brochure, logo, newsletter, poster or product catalogue, we have the professional experience and expertise for the job. Strategic Alliances
                </p>
                <p className="wow txt words chars splitting mt-3" data-splitting>
                The most beneficial alliance you can engage in is, with your customers. We help you gain customers, protect them from predation by competitors, and protect your profit margins.
                </p>
              </Split>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/Pr/3.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  Media Relations & Reputation Management
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Our team ensures that your brand reaches a larger crowd of people along with improving customer perception and loyalty to you. We also organize press conferences to help you with the same.
                </p>
              </Split>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/Pr/4.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  Outdoor campaigns
                </h4>
              </Split>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Our array of services include Hoardings ,Railway boards, Railway panels, Transfer stickers, Cinema slides, Promos, Train Advertisements, Bus panels, Bus Painting, Mobile sign truck, Kiosks, Traffic Booth, Toll Naka, Gantry, Vinyl and TV Advertising spread across the length and breadth of Mumbai. We help you run targeted campaigns in consumer populated areas and all it takes is a fraction of cost to make your presence felt in newspapers, TV, etc.
                </p>
              </Split>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/Pr/5.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  Radio campaigns
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                We help you tie up with top and wide reaching radio agencies only giving you the best we have to offer.
                </p>
              </Split>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
