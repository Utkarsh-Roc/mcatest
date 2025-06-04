        // src/pages/artistdetails/index.js
        import React, { useEffect } from "react";
        import Navbar from "../../components/Navbar";
        import Footer from "../../components/Footer";
        import LightTheme from "../../layouts/Light";
        import CallToAction from "../../components/Call-to-action";
        import Team1DetailsSection from "../../components/Team1DetailsSection";
        import appData from "../../data/app.json";
        import Head from "next/head";

        const ArtistDetails = () => {
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
        }, []);

        return (
            <>
            <Head>
                <title>Artist Details | MCA Worldwide</title>
                <meta name="description" content="Detailed profiles of MCA Worldwide's artist." />
            </Head>
            <LightTheme>
                <Navbar nr={navbarRef} lr={logoRef} />
                <section
                className="page-header section-padding bg-img"
                style={{ backgroundImage: `url(/img/slid/service1.jpg)` }}
                >
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="cont text-center">
                        <h6 className="mb-10">Our Artist</h6>
                        <h2>Artist Details</h2>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <Team1DetailsSection />
                <CallToAction theme="light" />
                <Footer />
            </LightTheme>
            </>
        );
        };

        export default ArtistDetails;
