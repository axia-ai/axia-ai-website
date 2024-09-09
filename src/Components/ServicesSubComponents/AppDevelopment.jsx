import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/AppDevelopment";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function AppDevelopment() {
  return (
    <Layout
      subPage={true}
      heroHeading={"App Development"}
      heroPara={"Elevate Your Business with Mobile Apps"}
    >
      <PinkBackgroundWithCardsComponent
        title={"What is App Development?"}
        description={
          "App development is the process of creating software applications for various devices. AI can significantly enhance app development by automating tasks, personalizing user experiences, and enabling intelligent features. This leads to more efficient development, improved user engagement, and innovative functionalities."
        }
        cards={FirstDeck}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default AppDevelopment;
