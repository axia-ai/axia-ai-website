import React from "react";
import aiImage from "../../assets/ai.png";

function AboutUsValues() {
  return (
    <div className="m-10 bg-gray-900 text-white p-8 rounded-xl max-w-full mx-5 sm:mx-10 flex flex-col md:flex-row content-center text-center md:text-left">
      <div className="flex-1 p-4 text-sm md:text-base">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Unveiling the Vision and Values of ImmiGo
        </h1>
        <p className="mb-6">
          At nullam leo consectetur euismod enim. Orci donec sapien et semper
          fringilla pellentesque in diam mi. Pulvinar ante sed velit ac nibh.
          Amet duis orci nibh nullam. Phasellus suspendisse ornare arcu eu orci
          urna justo.
        </p>
        <div className="text-sm md:text-base">
          <div className="mb-4">
            <h3 className="text-yellow-400 font-semibold text-xl mb-2">
              <span className="mr-2">🔗</span>Our Vision
            </h3>
            <p>
              At nullam leo consectetur euismod enim. Orci donec sapien et
              semper fringilla pellentesque in diam mi. Pulvinar ante sed velit
              ac nibh.
            </p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-semibold text-xl mb-2">
              <span className="mr-2">⚫</span>Our Value
            </h3>
            <p>
              At nullam leo consectetur euismod enim. Orci donec sapien et
              semper fringilla pellentesque in diam mi. Pulvinar ante sed velit
              ac nibh.
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
