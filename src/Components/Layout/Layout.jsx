import React from 'react'
import Navbar from "../Navbar/Navbar"
import HeroSection from "../HeroSection/HeroSection"
import Demo from "../DemoSection/Demo"
import Footer from "../Footer/Footer";

function Layout({ children, heroHeading, heroPara }) {
    return (
        <>
            <Navbar />
            <HeroSection heroHeading={heroHeading}  heroPara={heroPara} />
            {children}
            <Demo />
            <Footer />
        </>
    )
}

export default Layout