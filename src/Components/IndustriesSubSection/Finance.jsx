import React from "react";
import Layout from "../Layout/Layout";
import { FinanceCards } from "../../JsonData/Industries/Finance";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import TargetCard from "../ServicesComponent/TargetCard";
import MessageForm from "../ReusableComponents/MessageForm";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

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
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default Finance;
