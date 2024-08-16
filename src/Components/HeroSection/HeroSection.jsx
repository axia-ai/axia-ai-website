// src/components/HeroSection.js
import React from "react";
import backgroundImage from "../../assets/colorful-background.png";
import hero from "../../assets/hero.png";
import { IoRocketOutline } from "react-icons/io5";
import Button from "../ReusableComponents/Button";

const HeroSection = ({ heroHeading, heroPara, subPage }) => {
  const heroBackgroundImage = subPage ? hero : backgroundImage;

  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-8 py-8 lg:py-20 font-poppins">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">{heroHeading}</h1>
        <p className="text-sm lg:text-lg mb-10">{heroPara}</p>
        <div className="flex space-x-4">
          <a href="/contactUs">
            <Button color="purple">
              <IoRocketOutline className="mr-2" />
              Explore With Us
            </Button>
          </a>
          {/* <Button color="white" link="/contactUs">
            Talk to Us
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
