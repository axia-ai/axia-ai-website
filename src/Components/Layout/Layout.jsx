import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Demo from "../DemoSection/Demo";
import Footer from "../Footer/Footer";

function Layout({ children, heroHeading, heroPara, subPage }) {
  return (
    <>
      <Navbar />
        <HeroSection heroHeading={heroHeading} heroPara={heroPara} subPage={subPage} />
        {children}
        <Demo />
      <Footer />
    </>
  );
}

export default Layout;
