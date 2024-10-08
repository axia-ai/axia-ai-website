import React from "react";

const SocialMediaComponent = ({
  image,
  imagePosition,
  testimonialHeading,
  industry,
  clientQuote,
}) => {
  const isImageRight = imagePosition === "right";

  return (
    <div
      className={`flex flex-col ${
        isImageRight ? "md:flex-row-reverse" : "md:flex-row"
      } items-center my-12 px-4 ${
        imagePosition === "right" ? "md:pl-24" : "md:pr-24"
      }`}
    >
      <div className="flex-1">
        <img
          src={image}
          alt="Social Media Mobile App and Website"
          className="w-10/12 sm:w-8/12 md:w-7/12 rounded m-auto"
        />
      </div>
      <div className="flex-1 p-5 text-center md:text-left">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          {testimonialHeading}
        </h2>
        <blockquote className="italic mb-4">"{clientQuote}"</blockquote>
        <div className="block leading-8">
          <p className="font-semibold mb-1">
            Industry: <span className="font-normal">{industry}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaComponent;
