import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import CallToAction from '../../components/Call-to-action';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ServiceSectionHeader from '../../components/Service-section-header';
import ServiceSectionIntro from '../../components/Service-section-intro';
import InfluencerTeam from "../../components/InfluencerTeam";
import BrandsMarquee from "../../components/BrandsMarquee";
import NumbersListBox from "../../components/NumbersListBox";
import InfluencerCallToAction from "../../components/InfluencerCall-to-Action";
import BrandForm from "../../components/BrandForm";
import InfluencerForm from "../../components/InfluencerForm";
import ServiceSectionShowcases from '../../components/Service-section-showcases';
import LightTheme from '../../layouts/Light';
import appData from "../../data/app.json";
import Head from "next/head";

const InfluencerMarketing = () => {
  const serviceData = [
    {
      "id": "influencer-marketing",
      "serviceBg": "/img/slid/service2.jpg",
      "serviceTitle": "Influencer Marketing",
      "serviceLink": "Influencer-Marketing",
      "serviceStrokeText": "Influencers",
      "serviceText": "Influencer Marketing",
      "serviceDetails": "Boost your brand visibility with MCA Worldwide’s influencer marketing. We connect brands with the right voices—from nano to macro influencers—across platforms to drive authentic engagement and measurable growth.",
      "services": [
        { "id": "1", "image": "/img/services/influencermarketing/1.jpeg" },
        { "id": "2", "image": "/img/services/influencermarketing/2.jpeg" },
        { "id": "3", "image": "/img/services/influencermarketing/3.jpeg" },
        { "id": "4", "image": "/img/services/influencermarketing/4.jpeg" }
      ]
    }
  ];

  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDetail = (id) => {
    const el = document.getElementById(`team-detail-${id}`);
    if (el) {
      const navbarHeight = 70;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Head>
        <title>Influencer Marketing | MCA Worldwide</title>
        <meta
          name="description"
          content="Connect with influencers to elevate your brand’s reach and reputation. MCA Worldwide offers end-to-end influencer marketing services tailored for impact."
        />
        <meta
          name="keywords"
          content="Influencer Marketing, Brand Promotions, Social Media Influencers, MCA Worldwide"
        />
      </Head>
      <LightTheme>
        <Navbar nr={navbarRef} lr={logoRef} />
        {serviceData ? (
          <>
            <div style={{ marginBottom: "60px" }}>
              <ServiceSectionHeader data={serviceData} />
            </div>
            <ServiceSectionIntro data={serviceData} />
            <div style={{ marginBottom: "60px" }}>
              <InfluencerTeam onMemberClick={scrollToDetail} />
            </div>
            <div style={{ marginBottom: "60px" }}>
              <BrandsMarquee />
            </div>
            <div>
              <NumbersListBox />
            </div>
            <div style={{ marginBottom: "60px" }}>
              <InfluencerCallToAction />
            </div>
            {/*Modals are defined here, separately */}
            <div
              className="modal fade"
              id="modalBrand"
              tabIndex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-4">
                  <div className="modal-header">
                    <h5 className="modal-title">Brand Registration</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <BrandForm />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="modalInfluencer"
              tabIndex="-1"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content p-4">
                  <div className="modal-header">
                    <h5 className="modal-title">Influencer Registration</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <InfluencerForm />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading</p>
        )}
        <CallToAction theme={"light"} />
        <Footer />
      </LightTheme>
    </>
  );
};

export default InfluencerMarketing;
