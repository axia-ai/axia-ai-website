// src/pages/IndustriesPage.js
import React from "react";
import { IndustryCards } from "../../JsonData/IndustryCards";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import IndustryCta from "./IndustryCta";
import IndustryProjects from "./IndustryProjects";

function IndustriesPage() {
  return (
    <>
      <PinkBackgroundWithCardsComponent
        title={"Analytics that feels like it’s from the future"}
        description={
          "Analytics that feels like it’s from the future analytics that feels like it’s from the future"
        }
        cards={IndustryCards}
      />
      <Testimonial
        image={testimonial1}
        imagePosition={"left"}
        testimonialHeading={"Social Media Mobile App and Website"}
        serviceType={"Mobile App and Website Development"}
        clientName={"Quila Flower LLC/Quick Friends"}
        testimonialPara={
          "Our client wanted to create a way for people, especially those from military families like hers, to create real-life friendships quickly. She wanted to create a social networking custom cross-platform app that integrated events and chat to help people connect with new friends on a deeper, more meaningful basis."
        }
        clientQuote={"They’re one of the best vendors I’ve worked with."}
      />
      <IndustryProjects />
      <Testimonial
        image={testimonial1}
        imagePosition={"right"}
        testimonialHeading={"Social Media Mobile App and Website"}
        serviceType={"Mobile App and Website Development"}
        clientName={"Quila Flower LLC/Quick Friends"}
        testimonialPara={
          "Our client wanted to create a way for people, especially those from military families like hers, to create real-life friendships quickly. She wanted to create a social networking custom cross-platform app that integrated events and chat to help people connect with new friends on a deeper, more meaningful basis."
        }
        clientQuote={"They’re one of the best vendors I’ve worked with."}
      />
     <IndustryCta />
    </>
  );
}

export default IndustriesPage;
