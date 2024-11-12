import About from "./Components/About";
import ContactSection from "./Components/Contact";
import Footer from "./Components/Footer";
import HomeSection from "./Components/Home";
import Navbar from "./Components/Navbar";
import styles from "./page.module.css";

import React from 'react'

const WebPage = () => {
  return (
    <>
    <Navbar />
    <HomeSection />
    <About />
    <ContactSection />
    <Footer /> 
    </>
  )
}

export default WebPage;