import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import ProjectDetailsHeader from '../../components/Project-details-header'
import ProjectDetailsIntroduction from '../../components/Project-details-introduction'
import LightTheme from '../../layouts/Light'
import ExhibitionsData from '../../data/exhibitions/exhibitions.json'
import ShowcasesFullScreen from '../../components/Showcases-full-screen'
import Footer from '../../components/Footer'

function ActivationsDetails() {
  const router = useRouter()
  const { id } = router.query
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [serviceData, setServiceData] = useState("")
  
  useEffect(() => {
    if (!router.isReady) return
    const data = ExhibitionsData.filter((activation) => activation.id == id);
    setServiceData(data[0])
  }, [id, router.isReady])
  
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
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  
  // console.log(serviceData)
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <ProjectDetailsHeader data={serviceData}/>
      <ProjectDetailsIntroduction data={serviceData}/>
      <ShowcasesFullScreen data={serviceData}/>
      <Footer />
    </LightTheme>
  )
}

export default ActivationsDetails