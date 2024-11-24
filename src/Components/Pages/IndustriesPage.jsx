import React from "react";
import Layout from "../Layout/Layout";
import IndustriesPage from "../IndustriesSection/IndustriesPage";
import OurProcess from "../OurProcess";

function Industries() {
  return (
    <Layout
      heroHeading={"Industries We Serve"}
      heroPara={
        "Delivering cutting-edge AI solutions to address the unique needs of the world's largest companies"
      }
    >
      <IndustriesPage />
      <OurProcess/>
    </Layout>
  );
}

export default Industries;
