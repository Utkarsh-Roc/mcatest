import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import CallToAction from '../../components/Call-to-action'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ServiceSectionHeader from '../../components/Service-section-header'
import ServiceSectionIntro from '../../components/Service-section-intro'
import ServiceSectionShowcases from '../../components/Service-section-showcases'
import LightTheme from '../../layouts/Light'
import appData from "../../data/app.json";
import Head from "next/head";

const Services = () => {

    const serviceData = [
        {
            "id": "motor-sports-events",
            "serviceBg": "/img/slid/service4.jpg",
            "serviceTitle": "Motorsports Events (FMSCI Events)",
            "serviceLink": "Motorsports Events (FMSCI Events)",
            "serviceStrokeText": "Motorsports Events",
            "serviceText": "Motor Sports (FMSCI Events)",
            "serviceDetails": "Motorsports Events (FMSCI Events). Concerts, Corporate Events, and Design Concepts are managed and taken care of by Team MCA,  We cover all possible aspects of Planning, Management, Coordination, and Execution We ensure cost-effective service, accountability, and flexibility in all your requirements.",
            "services": [
                {
                    "id": "1",
                    "image": "/img/services/motorsports/1.jpeg"
                },
                {
                    "id": "2",
                    "image": "/img/services/motorsports/2.jpeg"
                },
                {
                    "id": "3",
                    "image": "/img/services/motorsports/3.jpeg"
                },
                {
                    "id": "4",
                    "image": "/img/services/motorsports/4.jpeg"
                }
            ]
        }
    ]

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
        <>
            <Head>
                <title> Motorsports Events (FMSCI Events) | MCA worldwide </title>
                <meta name="description" content="From Motorsports to Concerts & Corporate Events, MCA worldwide ensure seamless planning, design, & execution. "></meta>
                <meta name="keywords" content="Marketing Agency, motorsports, events, services "></meta>
            </Head>
            <LightTheme>
                <Navbar nr={navbarRef} lr={logoRef} />
                {serviceData ? (
                    <>
                        <ServiceSectionHeader data={serviceData} />
                        <ServiceSectionIntro data={serviceData} />
                        <ServiceSectionShowcases data={serviceData} />
                    </>
                ) :
                    <p>Loading</p>
                }
                <CallToAction theme={"light"} />
                <Footer />
            </LightTheme>
        </>
        // <LightTheme>
        //     <Navbar nr={navbarRef} lr={logoRef} />
        //     <ServiceSectionHeader data={serviceData}/>
        //     <ServiceSectionIntro data={serviceData}/>
        //     <ServiceSectionShowcases data={serviceData} />
        //     <CallToAction theme={"light"} />
        //     <Footer />
        // </LightTheme>
    )
}

export default Services