import React from "react";
import { IoMdPeople } from "react-icons/io";
import Trusted from '../../assets/Trusted.png'
import Trusted_2 from '../../assets/Trusted_2.png'
import Trusted_3 from '../../assets/Trusted_3.png'

const TrustedField = () => {
  return (
    <>
      <div className=" flex items-center justify-center mx-36 my-12 max-md:flex-col max-md:m-10">
        <div className="flex flex-col items-start justify-between w-1/3 max-md:items-center max-md:w-auto">
          <h1 className="font-poppins text-5xl text-start max-md:text-3xl max-md:text-center">
            Most trusted in our field
          </h1>
          <p className="font-poppins text-base text-start text-gray-400 my-3 max-md:text-center max-md:text-sm">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
          <div className="flex my-8 max-md:my-4">
          <IoMdPeople size={30}/>
            <div className="flex flex-col items-start justify-center mx-5">
              <h1 className="text-xl font-poppins max-md:text-lg">
                The quick fox jumps over the lazy dog
              </h1>
              <p className="font-poppins text-base text-start text-gray-400 max-md:text-sm">
              Things on a very small scale ...
              </p>
            </div>
          </div>
          <div className="flex my-8 max-md:my-4">
          <IoMdPeople size={30} />
            <div className="flex flex-col items-start justify-center mx-5 ">
              <h1 className="text-xl font-poppins max-md:text-lg">
                The quick fox jumps over the lazy dog
              </h1>
              <p className="font-poppins text-base text-start text-gray-400 max-md:text-sm">
              Things on a very small scale ...
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/3 flex items-center justify-between max-md:w-auto">
            <div className="w-1/3 rounded-lg mx-5 max-md:mx-2">
                <img src={Trusted_2} alt="" className="" />
            </div>
            <div className="w-1/3 rounded-lg  mt-16 max-md:mt-10">
                <img src={Trusted_3} alt="" className="" />
            </div>
            <div className="w-1/3 rounded-lg mx-5 max-md:mx-2">
                <img src={Trusted} alt="" className="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default TrustedField;
