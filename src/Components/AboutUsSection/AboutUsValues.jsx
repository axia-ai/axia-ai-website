import React from "react";
import aiImage from "../../assets/ai.png";
import { FaRegEye } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";

function AboutUsValues() {
  return (
    <div className="m-10 bg-primary text-white p-8 rounded-xl max-w-full mx-5 sm:mx-10 flex flex-col md:flex-row content-center text-center md:text-left">
      <div className="flex-1 p-4 text-sm md:text-base">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Who Are We?</h1>
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
            <div className="flex justify-start max-md:justify-center">
              <GiBullseye size="30" className=" mr-3" />
              <h3 className="text-white font-semibold text-xl mb-2">
                Our Aim
              </h3>
            </div>

            <p>
              To empower businesses through cutting-edge AI and software
              solutions, driving innovation and unlocking growth potential. We
              are committed to delivering exceptional value by partnering
              closely with our clients to solve complex challenges and achieve
              their strategic objectives.
            </p>
          </div>
          <div>
            <div className="flex justify-start max-md:justify-center">
              <FaRegEye size="25" className=" m-1 mr-3" />
              <h3 className="text-white font-semibold text-xl mb-2">
                Our Vision
              </h3>
            </div>
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
