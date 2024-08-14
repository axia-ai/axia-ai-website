import React from 'react';
import testimonial4 from "../../assets/testimonial-4.png";

const IndustryProjects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10 bg-white text-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Manage your projects fast
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-lg">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="w-full lg:w-1/2">
          <img src={testimonial4} alt="Project" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="w-full lg:w-1/2">
          <ol className="list-decimal list-inside text-gray-800">
            <li className="mb-6">
              <h3 className="text-xl font-semibold">Create a project</h3>
              <p className="text-gray-600 mt-2">
                With lots of unique blocks, you can easily build a page without coding.
              </p>
            </li>
            <li className="mb-6">
              <h3 className="text-xl font-semibold">Assign related people</h3>
              <p className="text-gray-600 mt-2">
                With lots of unique blocks, you can easily build a page without coding.
              </p>
            </li>
            <li className="mb-6">
              <h3 className="text-xl font-semibold">Make it done on-time</h3>
              <p className="text-gray-600 mt-2">
                With lots of unique blocks, you can easily build a page without coding.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default IndustryProjects;
