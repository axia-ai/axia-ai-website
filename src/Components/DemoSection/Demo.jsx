// src/components/Demo.jsx

import React from 'react';

const Demo = () => {
  return (
    <div className="bg-secondaryBackround py-20 flex flex-col items-center text-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-8 font-inter">
        Pellentesque suscipit fringilla libero eu.
      </h1>
      <button className="bg-green-500 text-sm sm:text-base text-white font-semibold py-3 px-8 rounded-md hover:bg-green-600">
        Get a Demo →
      </button>
    </div>
  );
};

export default Demo;
