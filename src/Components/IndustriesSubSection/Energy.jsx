import React from "react";
import Layout from "../Layout/Layout";
import { EnergyCards } from "../../JsonData/Industries/Energy";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import TargetCard from "../ServicesComponent/TargetCard";
import MessageForm from "../ReusableComponents/MessageForm";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function Energy() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Energy"}
      heroPara={"AI-Driven Energy Solutions for a Better Future"}
    >
      <PinkBackgroundWithCardsComponent
        title={"How Can AI Elevate Energy?"}
        description={
          "AI can revolutionize education by improving diagnosis, personalizing treatment plans, accelerating drug discovery, automating administrative tasks, enabling remote patient monitoring, and preventing fraud. These advancements lead to better patient outcomes, increased efficiency, and reduced costs in the energy system."
        }
        cards={EnergyCards}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default Energy;
