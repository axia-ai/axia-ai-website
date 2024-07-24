import React from "react";
import Layout from "../Layout/Layout";
import TestimonialPage from "../Testimonials/TestimonialPage";

function Testimonials() {
  return (
    <Layout
      heroHeading={"Testimonials"}
      heroPara={
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 's"
      }
    >
      <TestimonialPage />
    </Layout>
  );
}

export default Testimonials;
