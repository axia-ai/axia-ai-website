import React from "react";
import vrglass from "../../assets/vr-glass.png";
import Button from "../ReusableComponents/Button";

const Calender = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center  w-auto m-4 max-md:m-3">
        <h1 className="font-poppins font-bold text-5xl max-md:text-3xl my-2">
          Our Story
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center text-black p-5 lg:p-10 my-4 md:my-2">
        <div className="mb-5 sm:mb-0 sm:flex-1">
          <img
            src={vrglass}
            alt="VR Headset"
            className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </div>
        <div className="flex-1 space-y-4 text-left">
          <p className="text-sm sm:text-base md:text-lg">
            Axia was founded by a dedicated team of engineers who share a
            profound belief in the potential of AI and software to reshape
            industries and drive meaningful business growth. Our journey began
            with a vision: to bridge the gap between cutting-edge technology and
            real-world application, providing businesses with tools that not
            only solve today’s challenges but also empower them to stay ahead in
            an ever-evolving landscape.
          </p>
          <hr />
          <p className="text-sm sm:text-base md:text-lg">
            With extensive experience in AI, software engineering, and data
            analytics, our team brings deep technical expertise to every
            project. We are passionate about problem-solving and are committed
            to building transformative solutions that are practical, scalable,
            and aligned with our clients’ strategic goals. Our engineers are not
            just technologists; they’re innovators and strategists who
            understand that true value lies in creating technology that is both
            powerful and purposeful.
          </p>
          <hr />
          <p className="text-sm sm:text-base md:text-lg">
            At Axia, we believe that the best solutions come from collaboration.
            We work side by side with our clients, taking the time to truly
            understand their unique challenges, industry dynamics, and vision
            for the future. Our team approaches each project as a partnership,
            tailoring our approach to meet specific needs and ensure that every
            solution we deliver has a lasting impact. By combining technical
            excellence with a commitment to client success, Axia is dedicated to
            helping organizations harness the full potential of AI and software
            to thrive in a competitive world.
          </p>
          <div className="text-center sm:text-left">
            <Button link={"/aboutUs"} color={"purple"}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
