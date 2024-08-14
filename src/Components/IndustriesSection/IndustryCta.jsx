import Button from "../ReusableComponents/Button";
import React from 'react';

const IndustryCta = () => {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-12 bg-white">
      <div className="text-center mb-10">
        <p className="text-sm sm:text-base font-semibold tracking-wider text-gray-600 uppercase">
          Unlock Your Immigration Potential
        </p>
        <h1 className="mt-2 text-2xl md:text-2xl font-bold text-gray-800">
          Take the First Step Towards Your Immigration Goals
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
          Posuere sed eu proin elementum nulla. Sed non blandit auctor consequat sit orci sem. Ultrices
          adipiscing dictumst purus convallis convallis imperdiet
        </p>
      </div>
      <div>
        <Button color={"purple"}>Get Started Now</Button>
      </div>
    </div>
  );
};

export default IndustryCta;
