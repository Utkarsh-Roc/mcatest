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

const Services = () => {
    const router = useRouter()
    const { id } = router.query
    const [serviceData, setServiceData] = useState("")

    useEffect(() => {
        if (!router.isReady) return 
        const data = ServiceClassicData.filter((service) => service.id === id);
        setServiceData(data[0])
    }, [id, router.isReady])

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
                {serviceData  ? (
                    <>
                    <ServiceSectionHeader data={serviceData}/>
                    <ServiceSectionIntro data={serviceData}/>
                    <ServiceSectionShowcases data={serviceData} />
                    </>
                    ):
                    <p>Loading</p>
                }
                <CallToAction theme={"light"} />
                <Footer />
            </LightTheme>
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