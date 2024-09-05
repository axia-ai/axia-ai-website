import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/CloudComputing";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";
import OurProcess from "../OurProcess";

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
      <OurProcess/>
    </Layout>
  );
}

export default CloudComputing;
