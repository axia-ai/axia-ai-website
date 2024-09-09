// src/pages/IndustriesPage.js
import React from "react";
import { IndustryCards } from "../../JsonData/IndustryCards";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import IndustryCta from "./IndustryCta";
import IndustryProjects from "./IndustryProjects";
import testimonialImage1 from "../../assets/Testimonials/image8.png";
import testimonialImage2 from "../../assets/Testimonials/image4.png";

function IndustriesPage() {
  return (
    <>
      <PinkBackgroundWithCardsComponent
        title={"AI Solutions That Deliver A Glimpse Of The Future"}
        description={
          "We believe that bold actions shape the future. Leading with ambition demands the courage to adapt. While doing what's right is often challenging, it's always worthwhile."
        }
        cards={IndustryCards}
      />
      <Testimonial
        image={testimonialImage1}
        imagePosition={"left"}
        testimonialHeading={"AI for Waste Management"}
        serviceType={"AI Consulting and Development "}
        clientName={"Ecosense-Enviro"}
        industry={"Sustainability/ Climate Change"}
        testimonialPara={
          "To address our client's need for automated waste sorting in MRF facilities and dustbins, we developed a custom AI model and deployed it as a service."
        }
        clientQuote={
          "Axia's expert consultation on computer vision enabled us to successfully automate our waste sorting process."
        }
      />
      <IndustryProjects />
      <Testimonial
        image={testimonialImage2}
        imagePosition={"right"}
        testimonialHeading={"Gen-AI Based iOS app"}
        serviceType={"AI Consulting and Development"}
        clientName={"Vivify"}
        industry={"Consumer Tech"}
        testimonialPara={
          "Vivify, a Gen-AI-powered mobile app designed for Japanese Gen Z users, aims to facilitate meaningful connections and foster real-life friendships. Leveraging astrology and AI-driven chat features, Vivify creates a personalized platform for users to connect and build deeper bonds."
        }
        clientQuote={
          "Axia successfully developed a Gen-AI powered mobile app for Japanese users. We're now collaborating on the next phase of this project."
        }
      />
      <IndustryCta />
    </>
  );
}

export default IndustriesPage;
