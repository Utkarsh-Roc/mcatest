import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import CallToAction from '../../components/Call-to-action';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ServiceSectionHeader from '../../components/Service-section-header';
import ServiceSectionIntro from '../../components/Service-section-intro';
import Team1 from "../../components/Team1";
import ServiceSectionShowcases from '../../components/Service-section-showcases';
import LightTheme from '../../layouts/Light';
import appData from "../../data/app.json";
import Head from "next/head";

const Services = () => {

  const serviceData = [
    {
      "id": "artist-managed",
      "serviceBg": "/img/slid/service1.jpg", // Use a banner image here
      "serviceTitle": "Artist Managed",
      "serviceLink": "Artist-Managed",
      "serviceStrokeText": "Artists",
      "serviceText": "Artist Managed",
      "serviceDetails": "From established icons to emerging talent, MCA Worldwide provides top-tier artist management services. We handle bookings, promotions, event logistics, branding, and career development for artists across music, film, and more. With a focus on growth, exposure, and strategic positioning, we ensure our artists receive the spotlight they deserve.",
      
      "services": [
        { "id": "1", "image": "/img/services/artistmanaged/1.jpeg" },
        { "id": "2", "image": "/img/services/artistmanaged/2.jpeg" },
        { "id": "3", "image": "/img/services/artistmanaged/3.jpeg" },
        { "id": "4", "image": "/img/services/artistmanaged/4.jpeg" }
      ]
    }
  ];

  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;

    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);

  // Scroll to detail section when team member clicked
  const scrollToDetail = (id) => {
  const el = document.getElementById(`team-detail-${id}`);
  if (el) {
    // Replace this with your navbar height in pixels (e.g. 70)
    const navbarHeight = 70;

    // Get element's position relative to the document
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;

    // Calculate scroll position by subtracting navbar height
    const offsetPosition = elementPosition - navbarHeight;

    // Scroll to that position smoothly
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

  return (
    <>
      <Head>
        <title>Artist Management | MCA Worldwide</title>
        <meta
          name="description"
          content="MCA Worldwide offers comprehensive artist management services including bookings, promotions, and career development for artists across entertainment industries."
        />
        <meta
          name="keywords"
          content="Artist Management, MCA Worldwide, Celebrity Booking, Artist Promotion, Event Talent"
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
              <Team1 onMemberClick={scrollToDetail} />
            </div>
            <ServiceSectionShowcases data={serviceData} />
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

export default Services;
