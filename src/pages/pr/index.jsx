import React from 'react'
import addParlx from '../../common/addParlx'
import Footer from '../../components/Footer'
import MinimalArea from '../../components/Minimal-area'
import Navbar from '../../components/Navbar'
import LightTheme from '../../layouts/Light'
import News from '../news/index'
import PRWorkShowcaseGrid from '../../components/PR-work-showcase-grid'
import workDetails from './work-details.json'
import Head from "next/head";

function Index() {
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
      <title>MCA Worldwide(Music Culture & Art) - PR & Marketing firm</title>
      <meta name="description" content="MCA Worldwide offers tailored PR & marketing solutions, delivering cost-effective ATL/BTL activations across India within your budget."></meta>
      <meta name="keywords" content="Marketing Agency, Brands, Marketing "></meta>
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
                <h2 className="custom-font">Public Relationship</h2>
                <p>
                We are a One Stop agency…
                </p>
              </div>

              <div className="bactxt custom-font valign">
                <span className="full-width">PR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div ref={MainContent} className="main-content">
        <PRWorkShowcaseGrid data={workDetails}/>
       {/* <News /> */}
       <MinimalArea />
      <Footer />
    </div>
  </LightTheme>
  </>
  )
}

export default Index