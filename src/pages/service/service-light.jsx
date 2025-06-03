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
import appData from "../../data/app.json";
import AboutIntro1 from "../../components/About-intro1";
import AboutIntro2 from "../../components/About-intro2";
import Services5 from "../../components/Services5";
import Services6 from "../../components/Services6";
import ServiceHeader from "../../components/Service-header";
import ServiceIntro from "../../components/Service-intro";
import ShowcasesOneCenter from "../../components/Showcases-one-center";

const ServiceLight = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  React.useEffect(() => {
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
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ServiceHeader />
      <ServiceIntro />
      <ShowcasesOneCenter />
      <CallToAction theme="light" />
      <Footer />
    </LightTheme>
  );
};

export default ServiceLight;
