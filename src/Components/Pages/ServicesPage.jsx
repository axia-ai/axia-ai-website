import React from "react";
import Layout from "../Layout/Layout";
import TrustedField from "../ServicesComponent/TrustedField";

function Services() {
  return (
    <Layout
      heroHeading={"Service"}
      heroPara={
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 's"
      }
    >
      <TrustedField />
    </Layout>
  );
}

export default Services;
