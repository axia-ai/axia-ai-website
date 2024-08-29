import React from 'react';
import Button from "../ReusableComponents/Button";

const SocialMediaComponent = ({ image, imagePosition, testimonialHeading, serviceType, clientName, industry, testimonialPara, clientQuote }) => {
  const isImageRight = imagePosition === 'right';

  return (
    <div className={`flex flex-col ${isImageRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-center my-12 px-4 ${imagePosition === "right" ? 'md:pl-24' : 'md:pr-24' }`}>
      <div className="flex-1">
        <img src={image} alt="Social Media Mobile App and Website" className="w-10/12 sm:w-8/12 md:w-7/12 rounded m-auto" />
      </div>
      <div className="flex-1 p-5 text-center md:text-left">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{testimonialHeading}</h2>
        <blockquote className="italic mb-4">"{clientQuote}"</blockquote>
        <div className="block leading-8">
            <p className="font-semibold mb-1">Service Type: <span className="font-normal">{serviceType}</span></p>
            <p className="font-semibold mb-1">Client: <span className="font-normal">{clientName}</span></p>
            <p className="font-semibold mb-1">Industry: <span className="font-normal">{industry}</span></p>
        </div>
        <p className="mb-4 text-sm sm:text-md">
            {testimonialPara}
        </p>
        {/* <Button color="purple">Read More</Button> */}
      </div>
    </div>
  );
};

export default SocialMediaComponent;
