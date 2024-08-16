import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Demo from "../DemoSection/Demo";
import Footer from "../Footer/Footer";
import { useState } from "react";

function Layout({ children, heroHeading, heroPara, subPage, DisplayComponent }) {

  //If Demo component is not required then give 'False' or give 'True' in prop DisplayComponent
  const [componentToShow, setComponentToShow] = useState(DisplayComponent || 'True'); // Default to 'True' if no prop is provided
  const renderComponent = () => {
    switch (componentToShow) {
      case 'True':
        return <Demo/>;
      case 'False':
        return null;
    }
  };

  return (
    <>
      <Navbar />
        <HeroSection heroHeading={heroHeading} heroPara={heroPara} subPage={subPage} />
        {children}
        {renderComponent()}
      <Footer />
    </>
  );
}

export default Layout;
