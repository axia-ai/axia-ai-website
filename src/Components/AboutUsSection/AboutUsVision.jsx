import React from "react";
import vision from "../../assets/vision.png";

function AboutUsVision() {
  return (
    <div className="flex flex-col items-center max-w-4xl w-full bg-white rounded-lg md:my-10 my-4 mx-auto p-2 sm:flex-row text-center md:text-left">
      <div className="flex-1 md:mr-10 p-4 m-auto">
        <h1 className="text-4xl font-normal">Who are we?</h1>
        <p className="text-gray-700 mt-4 text-xs md:text-sm">
          <strong>
            We are a dynamic AI and Software Engineering consultancy dedicated
            to propelling businesses forward.{" "}
          </strong>
          With a deep-rooted passion for technology and a sharp focus on
          business outcomes, we partner with clients across diverse industries
          to tackle complex challenges and drive sustainable growth. Our team of
          seasoned experts combines technical brilliance with strategic thinking
          to deliver innovative solutions that exceed expectations. From
          inception to delivery, we provide end-to-end support, ensuring
          seamless integration of AI and software into your business operations.
          <br></br>
          <i>
            Together, we build a future where technology empowers human
            potential.
          </i>
        </p>
        <div className="mt-6">
          <h3 className="text-blue-500 text-lg font-bold">↑ Our Mission</h3>
          <p className="text-gray-700 mt-2 text-xs md:text-sm">
            To empower businesses through cutting-edge AI and software
            solutions, driving innovation and unlocking growth potential. We are
            committed to delivering exceptional value by partnering closely with
            our clients to solve complex challenges and achieve their strategic
            objectives.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-blue-500 text-lg font-bold">↑ Our Vision</h3>
          <p className="text-gray-700 mt-2 text-xs md:text-sm">
            To be the leading AI and software engineering consultancy, shaping
            the future of business through transformative technology. We
            envision a world where AI and software are seamlessly integrated
            into every organization, driving efficiency, productivity, and
            competitive advantage.
          </p>
        </div>
      </div>
      <div className="flex-1 m-auto sm:ml-10 w-1/2 md:w-full">
        <img
          src={vision}
          alt="Woman with megaphone"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default AboutUsVision;
