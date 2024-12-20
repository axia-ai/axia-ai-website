import React from "react";
import Layout from "../Layout/Layout";
import TestimonialPage from "../TestimonialSection/TestimonialSection";
import { ServiceCards } from "../../JsonData/Services/ServicesHomePageCards";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import OurProcess from "../OurProcess";


function Services() {
  return (
    <Layout
      heroHeading={"Services We Provide"}
      heroPara={
        "Empowering Businesses with Cutting-Edge AI Solutions Tailored for Innovation and Growth"
      }
    >
      <PinkBackgroundWithCardsComponent
        title={"Solutions Tailored to Your Needs"}
        description={
          "Our team of experts will craft tailored solutions to optimize your operations, from new development to legacy system upgrades. Let us fuel your innovation and propel your company forward"
        }
        cards={ServiceCards}
      />
      <TestimonialPage/>
      <OurProcess/>
    </Layout>
  );
}

export default Services;
