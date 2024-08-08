import React from "react";
import aiImage from "../../assets/ai.png";

function AboutUsValues() {
  return (
    <div className="m-10 bg-gray-900 text-white p-8 rounded-xl max-w-full mx-5 sm:mx-10 flex flex-col md:flex-row content-center text-center md:text-left">
      <div className="flex-1 p-4 text-sm md:text-base">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Who Are We?
        </h1>
        <p className="mb-6">
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
        <div className="text-sm md:text-base">
          <div className="mb-4">
            <h3 className="text-yellow-400 font-semibold text-xl mb-2">
              <span className="mr-2">🔗</span>Our Mission
            </h3>
            <p>
            To empower businesses through cutting-edge AI and software
            solutions, driving innovation and unlocking growth potential. We are
            committed to delivering exceptional value by partnering closely with
            our clients to solve complex challenges and achieve their strategic
            objectives.
            </p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-semibold text-xl mb-2">
              <span className="mr-2">⚫</span>Our Vision
            </h3>
            <p>
            To be the leading AI and software engineering consultancy, shaping
            the future of business through transformative technology. We
            envision a world where AI and software are seamlessly integrated
            into every organization, driving efficiency, productivity, and
            competitive advantage.
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto">
        <img src={aiImage} alt="" className="mx-auto w-3/4" />
      </div>
    </div>
  );
}

export default AboutUsValues;
