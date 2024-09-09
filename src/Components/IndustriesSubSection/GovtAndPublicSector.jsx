import React from "react";
import Layout from "../Layout/Layout";
import { GovtAndPublicSectorCards } from "../../JsonData/Industries/GovtAndPublicSector";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import TargetCard from "../ServicesComponent/TargetCard";
import MessageForm from "../ReusableComponents/MessageForm";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function GovtAndPublicSector() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Govt And PublicSector"}
      heroPara={"AI-Driven Govt And PublicSector Solutions for a Better Future"}
    >
      <PinkBackgroundWithCardsComponent
        title={"How Can AI Elevate Govt And PublicSector?"}
        description={
          "AI can revolutionize education by improving diagnosis, personalizing treatment plans, accelerating drug discovery, automating administrative tasks, enabling remote patient monitoring, and preventing fraud. These advancements lead to better patient outcomes, increased efficiency, and reduced costs in the energy system."
        }
        cards={GovtAndPublicSectorCards}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default GovtAndPublicSector;
