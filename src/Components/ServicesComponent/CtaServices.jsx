import React from "react";
import Button from "../ReusableComponents/Button";

const CtaServices = () => {
  return (
    <>
      <div className="flex flex-col p-15 font-poppins justify-center text-center my-5 max-md:p-5">
        <div className="flex justify-center text-center text-sm my-4 max-md:text-xs max-md:my-2">
          <p>UNLOCK YOUR IMMIGRATION POTENTIAL</p>
        </div>
        <div className="flex flex-col text-5xl justify-center items-center my-4 max-md:text-3xl">
          <h1 className="my-1 max-md:my-0">Take The First Step Towards</h1>
          <h1 className="my-1 max-md:my-0">Your Immigariation Goals</h1>
        </div>
        <div className="flex flex-col justify-center text-center text-sm my-3 max-md:text-xs max-md:my-2">
          <p className="my-1 max-md:my-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            viverra justo quis ornare rutrum. In.
          </p>
          <p className="my-1 max-md:my-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex justify-center items-center my-5">
          <Button color={"purple"} children={"Get Started Know"} />
        </div>
      </div>
    </>
  );
};

export default CtaServices;
