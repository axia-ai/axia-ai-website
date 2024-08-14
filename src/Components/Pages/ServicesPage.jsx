import React from "react";
import Layout from "../Layout/Layout";
import TrustedField from "../ServicesComponent/TrustedField";
import FeaturesServices from '../ServicesComponent/FeaturesServices'
import TestimonialsServices from '../ServicesComponent/TestimonialsServices'
import CtaServices from '../ServicesComponent/CtaServices'
import ServicesAccordainsection from "../ServicesComponent/ServicesAccordainsection";
import { ServiceCards } from "../../JsonData/ServiceCards";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";


function Services() {
  return (
    <Layout
      heroHeading={"Software Services"}
      heroPara={
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 's"
      }
    >
      <PinkBackgroundWithCardsComponent
        title={"Analytics that feels like it’s from the future"}
        description={
          "Analytics that feels like it’s from the future analytics that feels like it’s from the future"
        }
        cards={ServiceCards}
      />
      <TrustedField />
      <ServicesAccordainsection/>
      <FeaturesServices/>
      <TestimonialsServices/>
      <CtaServices/>
    </Layout>
  );
}

export default Services;
