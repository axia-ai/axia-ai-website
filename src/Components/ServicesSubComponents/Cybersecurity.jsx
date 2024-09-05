import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/Cybersecurity";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";
import OurProcess from "../OurProcess";

function Cybersecurity() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Cybersecurity"}
      heroPara={
        "Safeguarding Your Digital World"
      }
    >
      <PinkBackgroundWithCardsComponent
        title={"What Is Cybersecurity?"}
        description={
          "Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access or criminal use. AI can enhance cybersecurity by automating threat detection, analyzing vast datasets for anomalies, and predicting potential attacks. AI-powered tools can also learn and adapt to evolving threats, improving the effectiveness of cybersecurity measures."
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
  )
}

export default Cybersecurity