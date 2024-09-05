import React from "react";
import Layout from "../Layout/Layout";
import TrustedField from "../ServicesComponent/TrustedField";
import FeaturesServices from '../ServicesComponent/FeaturesServices'
import TestimonialsServices from '../ServicesComponent/TestimonialsServices'
import CtaServices from '../ServicesComponent/CtaServices'
import ServicesAccordainsection from "../ServicesComponent/ServicesAccordainsection";
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
      <TestimonialsServices/>
      <OurProcess/>
    </Layout>
  );
}

export default Services;
