import React from "react";
import AboutHeader from "../../components/About-header";
import AboutIntro from "../../components/About-intro";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import MinimalArea from "../../components/Minimal-area";
import Navbar from "../../components/Navbar";
import Services4 from "../../components/Services4";
import SkillsCircle from "../../components/Skills-circle";
import Team1 from "../../components/Team1";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import LightTheme from "../../layouts/Light";
import appData from '../../data/app.json'
import AboutIntro1 from "../../components/About-intro1";
import Services5 from "../../components/Services5";
import AboutIntro2 from "../../components/About-intro2";
import Services6 from "../../components/Services6";
import ContactHeader from "../../components/Contact-header";
import Head from "next/head";


const AboutDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (fixedHeader.current) {
      var slidHeight = fixedHeader.current.offsetHeight;
    }
    if (MainContent.current) {
      MainContent.current.style.marginTop = slidHeight + "px";
    }
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
  return (
    <>
      <Head>
        <title>MCA Worldwide - Best Marketing & PR firm in PAN India</title>
        <meta name="description" content="MCA Worldwide specializes in ATL & BTL advertising, tailoring strategies for brands' needs, including direct mail and sponsorships."></meta>
        <meta name="keywords" content="Marketing Agency"></meta>
      </Head>
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      {/* <AboutHeader /> */}
      <AboutHeader sliderRef={fixedHeader} />
      <div className="main-content" ref={MainContent}>
        <AboutIntro />
        <Services4 withPadding withOutTitle />
        <AboutIntro1 />
        <Services5 withPadding withOutTitle />
        <AboutIntro2 />
        <Services6 withPadding withOutTitle />
        <CallToAction theme="light" subBG />
        <Footer />
      </div>
    </LightTheme>
    </>
  );
};

export default AboutDark;
