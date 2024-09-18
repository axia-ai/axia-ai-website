import React from "react";
import Marquee from "react-fast-marquee";
import image1 from "../../assets/TestimonialsBlackWhiteLogos/1.png";
import image2 from "../../assets/TestimonialsBlackWhiteLogos/11.png";
import image3 from "../../assets/TestimonialsBlackWhiteLogos/3.png";
import image4 from "../../assets/TestimonialsBlackWhiteLogos/4.png";
import image5 from "../../assets/TestimonialsBlackWhiteLogos/5.png";
import image6 from "../../assets/TestimonialsBlackWhiteLogos/6.png";
import image7 from "../../assets/TestimonialsBlackWhiteLogos/7.png";
import image8 from "../../assets/TestimonialsBlackWhiteLogos/8.png";

const Partners = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center items-center  w-auto m-7 max-md:m-3">
          <h1 className="font-poppins font-bold text-6xl max-md:text-3xl">
            Our Partners
          </h1>
        </div>
        <hr className="mb-4 mx-4 " />
        <Marquee loop={0} speed={100}>
          <div className="flex justify-between items-center w-auto max-md:mx-2 ">
            <div className="flex justify-center mx-1 items-center max-md:mx-1 size-60 ">
              <img src={image1} alt="" />
            </div>
            <div className="flex justify-center mx-1 items-center max-md:mx-1 size-60 ">
              <img src={image2} alt="" />
            </div>
            <div className="flex justify-center mx-1 items-center max-md:mx-1 size-60">
              <img src={image3} alt="" />
            </div>
            <div className="flex justify-center mx-1 items-center max-md:mx-1 size-60">
              <img src={image4} alt="" />
            </div>
            <div className="flex justify-center mx-1  items-center max-md:mx-1 size-60">
              <img src={image5} alt="" />
            </div>
            <div className="flex justify-center mx-1  items-center max-md:mx-1 size-60">
              <img src={image6} alt="" />
            </div>
            <div className="flex justify-center mx-1  items-center max-md:mx-1 size-60">
              <img src={image7} alt="" />
            </div>
            <div className="flex justify-center mx-1  items-center max-md:mx-1 size-60">
              <img src={image8} alt="" />
            </div>
          </div>
        </Marquee>

        <hr className="m-4" />
      </div>
    </>
  );
};

export default Partners;
