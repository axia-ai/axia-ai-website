import React from "react";
import Layout from "../Layout/Layout";
import { EntertainmentAndMediaCards } from "../../JsonData/Industries/EntertainmentAndMedia";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import TargetCard from "../ServicesComponent/TargetCard";
import MessageForm from "../ReusableComponents/MessageForm";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function EntertainmentAndMedia() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Entertainment And Media"}
      heroPara={
        "AI-Driven Entertainment And Media Solutions for a Better Future"
      }
    >
      <PinkBackgroundWithCardsComponent
        title={"How Can AI Elevate Entertainment And Media?"}
        description={
          "AI can revolutionize education by improving diagnosis, personalizing treatment plans, accelerating drug discovery, automating administrative tasks, enabling remote patient monitoring, and preventing fraud. These advancements lead to better patient outcomes, increased efficiency, and reduced costs in the education system."
        }
        cards={EntertainmentAndMediaCards}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default EntertainmentAndMedia;
