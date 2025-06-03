import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.css";
// import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="/img/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="http://mcaworldwide.in/"></meta>
        <meta property="og:title" content="MCA"></meta>
        <meta property="og:description" content="Founded in 2011, MCA Worldwide(Music Culture & Art) is a PR & Marketing firm that does Brand-Tieups, ATL & BTL, Brand Activations with events at a PAN India level.The team focuses on delivering tailored ideas as per br and pr requisite.We ensure cost-effective service, accountability and flexibility in all your requirements. What ever your budget maybe, we have solutions you will not find elsewhere."></meta>
        <meta property="og:image" content="http://www.mcaworldwide.in/img/android-icon-192x192.png"></meta>

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="http://mcaworldwide.in/"></meta>
        <meta property="twitter:title" content="MCA"></meta>
        <meta property="twitter:description" content="Founded in 2011, MCA Worldwide(Music Culture & Art) is a PR & Marketing firm that does Brand-Tieups, ATL & BTL, Brand Activations with events at a PAN India level.The team focuses on delivering tailored ideas as per br and pr requisite.We ensure cost-effective service, accountability and flexibility in all your requirements. What ever your budget maybe, we have solutions you will not find elsewhere."></meta>
        <meta property="twitter:image" content="http://www.mcaworldwide.in/img/android-icon-192x192.png"></meta>
      </Head>
      <Cursor />
      {/* <LoadingScreen /> */}
      <ScrollToTop />
      <Component {...pageProps} />

      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="initWow" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
