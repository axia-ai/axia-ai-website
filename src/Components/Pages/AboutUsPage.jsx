import React from "react";
import Layout from "../Layout/Layout";
import AboutUsValues from "../AboutUsSection/AboutUsValues";
import Teams from "../Teams/Teams";
import Our_Services from "../AboutUsSection/Our_Services";
import AboutUsPartners from "../AboutUsSection/AboutUsPartners";
import AboutUsTestimonials from "../AboutUsSection/AboutUsTestimonials";

function AboutUs() {
  return (
    <Layout
      heroHeading={"Our Story"}
      heroPara={
        "We help you to unleash the power of AI to transform your business."
      }
    >
      <AboutUsValues />
      <Our_Services />
      <Teams />
      <AboutUsPartners />
      <AboutUsTestimonials />
    </Layout>
  );
}

export default AboutUs;
