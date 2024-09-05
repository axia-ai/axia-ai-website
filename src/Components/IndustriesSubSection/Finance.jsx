import React from "react";
import Layout from "../Layout/Layout";
import { FinanceCards } from "../../JsonData/Industries/Finance";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import TargetCard from "../ServicesComponent/TargetCard";
import MessageForm from "../ReusableComponents/MessageForm";
import OurProcess from "../OurProcess";

function Finance() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Finance"}
      heroPara={"Custom AI Solutions for Your Business"}
    >
      <PinkBackgroundWithCardsComponent
        title={"How Can AI Elevate Finance?"}
        description={
          "AI can revolutionize finance by automating tasks, improving decision-making, detecting fraud, and personalizing customer experiences. This leads to increased efficiency, reduced costs, and enhanced customer satisfaction."
        }
        cards={FinanceCards}
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

export default Finance;
