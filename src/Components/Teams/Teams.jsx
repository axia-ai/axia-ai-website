import React from "react";
import Teams_card from "./Teams_card";

const Teams = () => {
  return (
    <>
      <div className="flex flex-col rounded-xl justify-center items-center bg-custom_bg my-5">
        <h1 className="font-poppins text-5xl font-bold my-4 max-md:text-xl">Meet Our Team</h1>
        <p className="font-poppins text-center max-md:text-sm">
          Get to know the faces behind the scences and learn about the values
          that drive us
        </p>
        <div className="flex justify-between items-center my-8 max-md:flex-col max-md:my-3">
          <Teams_card Name="Shreyas Karanjkar" Post="Co-Founder, Marketing & Business Development"/>
          <Teams_card Name="Akash Nagarkar" Post="Co-Founder, AI Services"/>
          <Teams_card Name="Siddharth Khonde" Post="Co-Founder, Software Engineering"/>
        </div>
      </div>
    </>
  );
};

export default Teams;
