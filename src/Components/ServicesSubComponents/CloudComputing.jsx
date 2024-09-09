import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/CloudComputing";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function CloudComputing() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Cloud Computing"}
      heroPara={
        "Scalable, Flexible, Reliable and Highly-Available Cloud Solutions"
      }
    >
      <PinkBackgroundWithCardsComponent
        title={"What Is Cloud Computing?"}
        description={
          "Cloud computing services provide on-demand access to computing resources over the internet, offering scalability, flexibility, and cost-effectiveness. Businesses can access resources like servers, storage, and databases without significant upfront investment. Common types include Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). By using cloud computing, we help businesses to focus on their core operations while cloud providers manage the infrastructure, leading to increased agility and innovation."
        }
        cards={FirstDeck}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default CloudComputing;
