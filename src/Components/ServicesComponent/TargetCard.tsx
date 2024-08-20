import React from "react";
import testimonial_2 from "./../../assets/testimonial-2.png";

const TargetCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly p-10 bg-white">
      {/* Image Section */}
      <div className="md:w-1/3">
        <img
          src={testimonial_2}
          alt="Project Management"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Manage your projects fast
        </h2>
        <p className="text-gray-500 mt-4">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>

        {/* List of Steps */}
        <ul className="mt-8 space-y-4">
          <li className="flex items-start">
            <span className="text-blue-500 text-lg font-bold mr-4">1</span>
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Create a project
              </h3>
              <p className="text-gray-500">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 text-lg font-bold mr-4">2</span>
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Assign related people
              </h3>
              <p className="text-gray-500">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 text-lg font-bold mr-4">3</span>
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Make it done on-time
              </h3>
              <p className="text-gray-500">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TargetCard;
