import React from "react";
import Teams_card from "./Teams_card";
import image1 from "../../assets/Shreyas.png"
import image2 from "../../assets/AkashNagarka.png"
import image3 from "../../assets/SiddharthKhonde.png"

const Teams = () => {
  return (
    <>
      <div className="flex flex-col rounded-xl justify-center items-center bg-custom_bg my-5">
        <h1 className="font-poppins text-5xl font-bold my-4 max-md:text-3xl">Meet Our Team</h1>
        <p className="font-poppins text-center max-md:text-sm">
          Get to know the faces behind the scences and learn about the values
          that drive us
        </p>
        <div className="flex justify-between items-center my-8 max-md:flex-col max-md:my-3">
          <Teams_card Name="Shreyas Karanjkar" Post="Director, Head of Growth" Img={image1} Link="https://www.linkedin.com/in/shreyas-karanjkar-ai-consultant/"/>
          <Teams_card Name="Akash Nagarkar" Post="Director, Head of AI & Data" Img={image2} Link="https://www.linkedin.com/in/akash-nagarkar/"/>
          <Teams_card Name="Siddharth Khonde" Post="Director, Head of Software Engineering" Img={image3} Link="https://www.linkedin.com/in/siddharthkhonde/"/>
        </div>
      </div>
    </>
  );
};

export default Teams;
