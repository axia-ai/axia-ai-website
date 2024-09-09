import React from "react";
import Layout from "../Layout/Layout";
import AboutUsValues from "../AboutUsSection/AboutUsValues";
import Teams from "../Teams/Teams";
import OurValues from "../AboutUsSection/OurValues";
import AboutUsPartners from "../AboutUsSection/AboutUsPartners";
import TestimonialPage from "../TestimonialSection/TestimonialSection";

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
      <Teams />
      <AboutUsPartners />
      <TestimonialPage/>
    </Layout>
  );
}

export default AboutUs;
