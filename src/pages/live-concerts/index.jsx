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
import ServiceClassicData from '../../data/service/ServiceData.json'
import Head from "next/head";

const Services = () => {

    const serviceData = [
        {
            "id": "live-concerts",
            "serviceBg": "/img/slid/service2.jpg",
            "serviceTitle": "Live Concerts",
            "serviceLink": "Live-Concerts",
            "serviceStrokeText": "Live",
            "serviceText": "Live Concerts",
            "serviceDetails": "MCA Live Concerts & Entertainment Success is an accepted leader in the listicle of PR & Marketing Companies in India. we cover all possible aspects of Planning, Management, Coordination, and Execution We ensure cost-effective service, accountability, and flexibility in all your requirements. Whatever your budget may be, we have solutions you will not find elsewhere.",
            "services": [
                {
                    "id": "1",
                    "image": "/img/services/liveconcerts/1.jpeg"
                },
                {
                    "id": "2",
                    "image": "/img/services/liveconcerts/2.jpeg"
                },
                {
                    "id": "3",
                    "image": "/img/services/liveconcerts/3.jpeg"
                },
                {
                    "id": "4",
                    "image": "/img/services/liveconcerts/4.jpeg"
                },
                {
                    "id": "5",
                    "image": "/img/services/liveconcerts/5.jpeg"
                },
                {
                    "id": "6",
                    "image": "/img/services/liveconcerts/6.jpeg"
                },
                {
                    "id": "7",
                    "image": "/img/services/liveconcerts/7.jpeg"
                },
                {
                    "id": "8",
                    "image": "/img/services/liveconcerts/8.jpeg"
                },
                {
                    "id": "9",
                    "image": "/img/services/liveconcerts/9.jpeg"
                },
                {
                    "id": "10",
                    "image": "/img/services/liveconcerts/10.jpeg"
                },
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
                <title> Live Concerts & Entertainment Success | MCA worldwide </title>
                <meta name="description" content="MCA leads PR & marketing for live concerts in India. Expert in planning, management, & execution with cost-effective solutions."></meta>
                <meta name="keywords" content="Marketing Agency, Live, Concerts, Entertainment, Marketing"></meta>
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