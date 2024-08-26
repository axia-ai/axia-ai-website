import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/AppDevelopment";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";

function AppDevelopment() {
  return (
    <Layout
      subPage={true}
      heroHeading={"App Development"}
      heroPara={
        "Elevate Your Business with Mobile Apps"
      }
    >
      <PinkBackgroundWithCardsComponent
        title={"What is App Development?"}
        description={
          "App development is the process of creating software applications for various devices. AI can significantly enhance app development by automating tasks, personalizing user experiences, and enabling intelligent features. This leads to more efficient development, improved user engagement, and innovative functionalities."
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

export default AppDevelopment;
