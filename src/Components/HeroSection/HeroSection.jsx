// src/components/HeroSection.js
import React from 'react';
import backgroundImage from '../../assets/colorful-background.png';
import { IoRocketOutline } from "react-icons/io5";
import Button from '../ReusableComponents/Button';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-8 py-8 lg:py-20 font-poppins">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Create Engaging Landing Pages</h1>
        <p className="text-sm lg:text-lg mb-10">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p>
        <div className="flex space-x-4">
          <Button color="purple"><IoRocketOutline className="mr-2" />
            Know More</Button>
          <Button color="white">Talk to Us</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
