import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/IOT";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function IOT() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Internet of Things (IoT)"}
      heroPara={"Innovative IoT Solutions Tailored to Your Needs"}
    >
      <PinkBackgroundWithCardsComponent
        title={"What Is Internet Of Things (IoT)?"}
        description={
          "IoT (Internet of Things) refers to a network of interconnected devices that collect and exchange data. AI (Artificial Intelligence) can enhance IoT capabilities by analyzing data, making predictions, optimizing operations, and personalizing experiences. Together, IoT and AI create intelligent systems that deliver value, improve efficiency, and drive innovation."
        }
        cards={FirstDeck}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default IOT;
