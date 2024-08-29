import React from "react";
import Layout from "../Layout/Layout";
import TestimonialPage from "../TestimonialsComponent/TestimonialPage";

function Testimonials() {
  return (
    <Layout
      heroHeading={"Testimonials"}
      heroPara={
        "Explore the Success Stories from Our Clients"
      }
    >
      <TestimonialPage />
    </Layout>
  );
}

export default Testimonials;
