import React from "react";
import intro from "../../assets/intro.png";

const AboutUsTestimonialsCards = ({ para, head, img }) => {
  return (
    <>
      <div className="flex justify-center items-center my-10 px-40 max-md:flex-col max-md:px-0 ">
        <div className="w-2/3 mx-5 max-md:mx-0 ">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-start justify-center max-md:text-center">
              <h1 className="font-poppins font-bold text-4xl mb-5 max-md:text-2xl">
                {head}
              </h1>
              <div className="flex justify-center">
                <hr className="h-auto w-3 mr-3 bg-blue-600 max-md:h-44" />
                <p className="font-poppins text-base text-start max-md:text-sm">
                  {para}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 max-md:w-auto max-md:m-10 max-md:my-5">
          <img src={intro} alt="" className="rounded-lg w-auto" />
        </div>
      </div>
    </>
  );
};

export default AboutUsTestimonialsCards;
