import React from "react";
import Layout from "../Layout/Layout";
import AboutUsValues from "../AboutUsSection/AboutUsValues";
import Teams from "../Teams/Teams";
import OurValues from "../AboutUsSection/OurValues";
import TestimonialPage from "../TestimonialSection/TestimonialSection";
import OurClients from '../../Components/clients/OurClients'

function AboutUs() {
  return (
    <Layout
      heroHeading={"Our Story"}
      heroPara={
        "We help you to unleash the power of AI to transform your business."
      }
    >
      <AboutUsValues />
      <OurValues />
      <OurClients/>
      <Teams />
      <TestimonialPage/>
    </Layout>
  );
}

export default AboutUs;
