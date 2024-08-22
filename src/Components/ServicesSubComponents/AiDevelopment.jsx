import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/AIDevelopment";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";

function AIDevelopment() {
  return (
    <Layout
      subPage={true}
      heroHeading={"AI Development"}
      heroPara={
        "Custom AI Solutions for Your Business"
      }
    >
      <PinkBackgroundWithCardsComponent
        title={"What Are AI Development Services?"}
        description={
          "AI development services involve collaborating with specialized providers to create, deploy, and refine artificial intelligence systems, aiming to boost business performance. Instead of developing complex AI solutions internally, organizations can leverage comprehensive services from expert teams. These development experts assist clients in crafting a tailored AI strategy and pinpointing applicable AI technologies across various departments. They then design, integrate, and optimize intelligent algorithms and machine learning models based on prioritized areas to improve operations. This comprehensive approach is essential for the seamless implementation of AI systems, allowing businesses to adopt the technology with reduced risk."
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
      <TargetCard />
    </Layout>
  );
}

export default AIDevelopment;
