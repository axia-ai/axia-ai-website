import React from "react";
import Layout from "../Layout/Layout";
import { SupplyChainCards } from "../../JsonData/Industries/SupplyChainCards";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import TargetCard from "../ServicesComponent/TargetCard";
import MessageForm from "../ReusableComponents/MessageForm";

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

export default SupplyChain;
