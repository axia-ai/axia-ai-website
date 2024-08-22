import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/IOT";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";

function IOT() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Internet of Things (IoT)"}
      heroPara={
        "Innovative IoT Solutions Tailored to Your Needs"
      }
      DisplayComponent={true}
    >
      <PinkBackgroundWithCardsComponent
        title={"What Is Internet Of Things (IoT)?"}
        description={
          "IoT (Internet of Things) refers to a network of interconnected devices that collect and exchange data. AI (Artificial Intelligence) can enhance IoT capabilities by analyzing data, making predictions, optimizing operations, and personalizing experiences. Together, IoT and AI create intelligent systems that deliver value, improve efficiency, and drive innovation."
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
    </Layout>
  );
}

export default IOT;
