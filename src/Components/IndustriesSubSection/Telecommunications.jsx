import React from "react";
import Layout from "../Layout/Layout";
import { TelecommunicationsCards } from "../../JsonData/Industries/Telecommunications";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import TargetCard from "../ServicesComponent/TargetCard";
import MessageForm from "../ReusableComponents/MessageForm";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function Telecommunications() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Telecommunications"}
      heroPara={"AI-Driven Telecommunications Solutions for a Better Future"}
    >
      <PinkBackgroundWithCardsComponent
        title={"How Can AI Elevate Telecommunications?"}
        description={
          "AI can revolutionize Telecommunications by improving diagnosis, personalizing treatment plans, accelerating drug discovery, automating administrative tasks, enabling remote patient monitoring, and preventing fraud. These advancements lead to better patient outcomes, increased efficiency, and reduced costs in the Telecommunications system."
        }
        cards={TelecommunicationsCards}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default Telecommunications;
