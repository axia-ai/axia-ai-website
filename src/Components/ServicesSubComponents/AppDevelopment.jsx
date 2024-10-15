import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/AppDevelopment";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
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
          "App development is the process of creating software applications that run on mobile devices, desktops, or web platforms. It involves various stages, from ideation and design to development, testing, deployment, and maintenance. These applications can serve a wide range of purposes, such as entertainment, productivity, e-commerce, social networking, and much more. It’s a dynamic field, constantly evolving to incorporate new technologies and address the changing demands of users and businesses."
        }
        cards={FirstDeck}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default AppDevelopment;
