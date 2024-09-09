import React from "react";
import Layout from "../Layout/Layout";
import { RealEstateCards } from "../../JsonData/Industries/RealEstate";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import TargetCard from "../ServicesComponent/TargetCard";
import MessageForm from "../ReusableComponents/MessageForm";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function RealEstate() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Real Estate"}
      heroPara={"AI-Driven Real Estate Solutions for a Better Future"}
    >
      <PinkBackgroundWithCardsComponent
        title={"How Can AI Elevate Real Estate?"}
        description={
          "AI can revolutionize RealEstate by improving diagnosis, personalizing treatment plans, accelerating drug discovery, automating administrative tasks, enabling remote patient monitoring, and preventing fraud. These advancements lead to better patient outcomes, increased efficiency, and reduced costs in the Real Estate system."
        }
        cards={RealEstateCards}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default RealEstate;
