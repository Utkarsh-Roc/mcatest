import React from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import addParlx from "../../common/addParlx";
import SmallFooter from "../../components/Small-footer";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
import activations from '../../data/activations/activations.json'
import Footer from "../../components/Footer";
import Head from "next/head";

const Works3Light = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    document.querySelector('body').classList.add('menubarblack');
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);
  React.useEffect(() => {
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
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <>
    <Head>
          <title> Elevate Brands with Creative Activations | MCA Worldwide </title>
          <meta name="description" content="Discover how MCA Worldwide do the activations of brands like 5 Star, Burger King, Coca Cola,& others to connect with audiences."></meta>
          <meta name="keywords" content="Marketing Agency, Activations, Brands"></meta>
        </Head>
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">Our amazing works</h2>
                  <p>
                    Creative way to showcase your works at their absolute best.
                  </p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width">Activations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div ref={MainContent} className="main-content">
        <PortfolioCustomColumn column={2} hideFilter hideSectionTitle type={activations}/>
        <Footer />
      </div>
    </LightTheme>
    </>
  );
};

export default Works3Light;
