import React from "react";
import Layout from "../Layout/Layout";
import { RetailCards } from "../../JsonData/Industries/Retail";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import TargetCard from "../ServicesComponent/TargetCard";
import MessageForm from "../ReusableComponents/MessageForm";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function Retail() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Retail"}
      heroPara={"AI-Driven Retail Solutions for a Better Future"}
    >
      <PinkBackgroundWithCardsComponent
        title={"How Can AI Elevate Retail?"}
        description={
          "AI can revolutionize retail by improving diagnosis, personalizing treatment plans, accelerating drug discovery, automating administrative tasks, enabling remote patient monitoring, and preventing fraud. These advancements lead to better patient outcomes, increased efficiency, and reduced costs in the retail system."
        }
        cards={RetailCards}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default Retail;
