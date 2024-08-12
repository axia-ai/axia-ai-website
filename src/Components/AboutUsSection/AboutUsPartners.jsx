import React from "react";
import { FaAirbnb } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaFedex } from "react-icons/fa";
import { FaHubspot } from "react-icons/fa";

const AboutUsPartners = () => {
  return (
    <>
        <div className="w-full flex  justify-center items-center mx-0 my-14  max-md:justify-between max-md:items-center ">
          <div className="flex justify-between items-center w-auto max-md:mx-2">
            <div className="flex justify-center mx-10 items-center max-md:mx-1">
              <FaAirbnb className="size-11 max-md:size-4" />
              <p className="font-poppins font-bold text-2xl mx-1 max-md:text-xs">
                airbnb
              </p>
            </div>
            <div className="flex justify-center mx-10 items-center max-md:mx-1">
              <p className="font-poppins font-bold text-3xl max-md:text-xs ">
                Google
              </p>
            </div>
            <div className="flex justify-center mx-10 items-center max-md:mx-1">
              <FaAmazon className="size-10 max-md:size-4" />
              <p className="font-poppins font-bold text-2xl mx-1 max-md:text-xs">
                amazon
              </p>
            </div>
            <div className="flex justify-center mx-10 items-center max-md:mx-1">
              <FaMicrosoft className="size-11 max-md:size-4" />
              <p className="font-poppins font-bold text-xl text-gray-400 mx-1 max-md:text-xs">
                Microsoft
              </p>
            </div>
            <div className="flex justify-center mx-10  items-center max-md:mx-1">
              <FaFedex className="size-24 max-md:size-8" />
            </div>
            <div className="flex justify-center mx-10  items-center max-md:mx-1">
              <FaHubspot className="size-11 max-md:size-4" />
              <p className="font-poppins font-bold text-2xl mx-1 max-md:text-xs">
                Hubspot
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default AboutUsPartners;
