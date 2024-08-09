import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa";

const ContactUsInformation = () => {
  return (
    <div className="bg-darkBlue p-10 rounded-lg text-white text-xs sm:text-sm">
      <div className="mb-20 md:mb-32">
        <h2 className="text-2xl font-bold mb-2">All It Takes is the First Step.<br></br>Revolutionize Your Business With AI.<br></br>Explore How We Can Help You In The Journey.</h2>
       {/* <p className="text-gray-300 mb-6">
          Say something to start a live chat!
        </p> */}
      </div>
      <div className="text-base md:text-lg">
        <div className="mb-9 flex items-center">
          <FaPhoneAlt className="text-white mr-4" />
          <span>+1012 3456 789</span>
        </div>
        <div className="mb-9 flex items-center">
          <FaEnvelope className="text-white mr-4" />
          <span>demo@gmail.com</span>
        </div>
        <div className="mb-9 flex items-center">
          <FaMapMarkerAlt className="text-white mr-4" />
          <span>
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </span>
        </div>
      </div>
      <div className="flex space-x-4 mt-20 md:mt-32">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary p-2 rounded-full cursor-pointer"
        >
          <FaTwitter className="hover:text-white" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 rounded-full cursor-pointer"
        >
          <FaInstagram className="text-gray-400" />
        </a>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary p-2 rounded-full cursor-pointer"
        >
          <FaDiscord className="hover:text-white" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary p-2 rounded-full cursor-pointer"
        >
          <FaLinkedin className="hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default ContactUsInformation;
