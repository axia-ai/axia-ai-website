import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/DevOps";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";

function Devops() {
  return (
    <Layout
      subPage={true}
      heroHeading={"DevOps"}
      heroPara={
        "Accelerate Your AI Development Lifecycles with Modern Deployment Strategies"
      }
      DisplayComponent={true}
    >
      <PinkBackgroundWithCardsComponent
        title={"What is DevOps/MLOps?"}
        description={
          "DevOps is a collaborative approach that integrates development and operations teams to streamline software delivery. It emphasizes communication, automation, and continuous improvement. MLOps is a specialized subset of DevOps focused on machine learning models, aiming to streamline their development, deployment, and maintenance."
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

export default Devops;
