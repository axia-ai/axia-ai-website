import React from "react";
import Layout from "../Layout/Layout";
import TrustedField from "../ServicesComponent/TrustedField";
import FeaturesServices from '../ServicesComponent/FeaturesServices'
import TestimonialsServices from '../ServicesComponent/TestimonialsServices'
import CtaServices from '../ServicesComponent/CtaServices'
import ServicesAccordainsection from "../ServicesComponent/ServicesAccordainsection";


function Services() {
  return (
    <Layout
      heroHeading={"Service"}
      heroPara={
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 's"
      }
    >
      <TrustedField />
      <ServicesAccordainsection/>
      <FeaturesServices/>
      <TestimonialsServices/>
      <CtaServices/>
    </Layout>
  );
}

export default Services;
