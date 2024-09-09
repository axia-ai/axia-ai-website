import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/AIDevelopment";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function AIDevelopment() {
  return (
    <Layout
      subPage={true}
      heroHeading={"AI Development"}
      heroPara={"Custom AI Solutions for Your Business"}
    >
      <PinkBackgroundWithCardsComponent
        title={"What Are AI Development Services?"}
        description={
          "AI development services involve collaborating with specialized providers to create, deploy, and refine artificial intelligence systems, aiming to boost business performance. Instead of developing complex AI solutions internally, organizations can leverage comprehensive services from expert teams. These development experts assist clients in crafting a tailored AI strategy and pinpointing applicable AI technologies across various departments. They then design, integrate, and optimize intelligent algorithms and machine learning models based on prioritized areas to improve operations. This comprehensive approach is essential for the seamless implementation of AI systems, allowing businesses to adopt the technology with reduced risk."
        }
        cards={FirstDeck}
      />
      <TestimonialSection />
      <TargetCard />
      <OurProcess />
    </Layout>
  );
}

export default AIDevelopment;
