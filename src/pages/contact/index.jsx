import React from "react";
import ContactHeader from "../../components/Contact-header";
import ContactWithMap from "../../components/Contact-with-map";
import Navbar from "../../components/Navbar";
import LightTheme from "../../layouts/Light";
import Footer from "../../components/Footer";
import Head from "next/head";

const Contact = () => {
  const fixedHeader = React.useRef(null);
    const MainContent = React.useRef(null);
    const navbarRef = React.useRef(null);
  React.useEffect(() => {
    document.querySelector('body').classList.add('menubarblack');
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title>Contact us | MCA Worldwide</title>
        <meta name="description" content="Contact us for a Marketing purpose and feel free to ask me any question or let's do to talk about our future collaboration."></meta>
      </Head>
    <LightTheme>
      <Navbar nr={navbarRef} theme="themeL" />
      <ContactHeader sliderRef={fixedHeader} />
      <div className="main-content" ref={MainContent}>
        <ContactWithMap />
      </div>
      {/* <Footer /> */}
    </LightTheme>
    </>
  );
};

export default Contact;
