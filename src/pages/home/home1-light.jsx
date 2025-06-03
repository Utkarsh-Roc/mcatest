import React from "react";
import AboutUs1 from "../../components/About-us1";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import IntroWithSlider1 from "../../components/Intro-with-slider1";
import Navbar from "../../components/Navbar";
import Numbers1 from "../../components/Numbers";
import Services1 from "../../components/Services1";
import SkillsCircle from "../../components/Skills-circle";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import Works1Slider from "../../components/Works1-slider";
import LightTheme from "../../layouts/Light";
import appData from "../../data/app.json";
import Services2 from "../../components/Services2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SocialFeed from "../../components/Social-feed";
import { useRouter } from "next/router";
import Head from "next/head";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current,
      logo = logoRef.current;
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
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <>
    <Head>
      <title>MCA Worldwide (Music Culture & Art) - PR & Marketing firm</title>
      <meta name="description" content="MCA Worldwide offers tailored PR & marketing solutions, delivering cost-effective ATL/BTL activations across India within your budget."></meta>
      <meta name="keywords" content="Marketing Agency, Brand,Agency,Marketing"></meta>
    </Head>
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider1 sliderRef={fixedSlider} /> 
      <div ref={MainContent} className="main-content">
        <AboutUs1 />
        <Services2 />
        <Numbers1 />
        <Works1Slider />
        <SocialFeed />
        {/* <VideoWithTestimonials /> */}
        {/* <SkillsCircle theme="light" subBG /> */}
        <Clients1 theme="light" />
        <CallToAction theme="light" />
        <Footer />
      </div>
    
    
    </LightTheme>
    </>
  );
};
export default Homepage1;
