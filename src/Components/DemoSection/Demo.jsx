import React from "react";
import Button from "../ReusableComponents/Button";

const Demo = () => {
  return (
    <div className="py-2 md:py-10 bg-gray-100">
      <div className="bg-primary text-white py-8 md:py-20 rounded-lg text-center">
        <h1 className="text-2xl md:text-3xl mb-4">
          Set Up a Free Consultation
        </h1>
        <Button color={"white"} link={"https://calendly.com/axia-ai/lets-connect"} tab={"_blank"}>
          Schedule a call
        </Button>
      </div>
    </div>
  );
};

export default Demo;
