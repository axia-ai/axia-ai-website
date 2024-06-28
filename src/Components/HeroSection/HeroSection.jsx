// src/components/HeroSection.js

import React from 'react';
import backgroundImage from '../../assets/colorful-background.png';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-5 text-white px-8 py-8 lg:py-20">
        <h1 className="text-3xl lg:text-5xl font-bold text-introHeadingBlack">Suspendisse vitae</h1>
        <h1 className="text-3xl lg:text-5xl font-bold text-introHeadingBlack">pharetra netus</h1>
        <p className="mt-4 text-sm lg:text-lg text-center max-w-2xl text-introHeadingBlack">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.
        </p>
        <button className="mt-6 px-4 py-2 lg:px-6 lg:py-3 bg-introHeadingBlack text-white font-semibold rounded-md hover:bg-gray-800">
          Talk To Us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
