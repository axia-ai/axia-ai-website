import React from "react";
import Layout from "../Layout/Layout";
import { SupplyChainCards } from "../../JsonData/Industries/SupplyChainCards";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import TargetCard from "../ServicesComponent/TargetCard";
import MessageForm from "../ReusableComponents/MessageForm";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function SupplyChain() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Supply Chain"}
      heroPara={"AI-Driven Supply Chain Solutions for a Better Future"}
    >
      <PinkBackgroundWithCardsComponent
        title={"How Can AI Elevate Supply Chain?"}
        description={
          "AI can revolutionize Supply Chain by improving diagnosis, personalizing treatment plans, accelerating drug discovery, automating administrative tasks, enabling remote patient monitoring, and preventing fraud. These advancements lead to better patient outcomes, increased efficiency, and reduced costs in the Supply Chain system."
        }
        cards={SupplyChainCards}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default SupplyChain;
