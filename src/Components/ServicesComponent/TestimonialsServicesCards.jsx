import React from "react";
import Review from "../../assets/Review.png";

const TestimonialsServicesCards = ({ Img, About, Name, Job }) => {
  return (
    <>
      <div className="flex justify-center items-center p-6 mx-20 max-md:flex-col max-md:mx-0">
        <div className="flex justify-center mb-4 items-center w-1/2 max-md:w-full">
          <img src={Img} alt="" className="h-52 w-auto" />
        </div>
        <div className="flex flex-col items-start mx-4 w-1/2 max-md:items-center  max-md:w-full">
          <img src={Review} alt="" className="my-6" />
          <p className="font-poppins font-bold text-base text-start max-md:text-sm max-md:text-center">
            {About}
          </p>
          <div className="my-4 flex justify-center items-center">
            <p className="font-poppins  text-sm  pr-20 max-md:text-xs max-md:pr-10 ">
              {Name}
            </p>
            <p className="font-poppins text-sm max-md:text-xs text-gray-400">
              {Job}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsServicesCards;
