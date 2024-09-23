import React from "react";
import Layout from "../Layout/Layout";
import { ManufacturingCards } from "../../JsonData/Industries/Manufacturing";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function Manufacturing() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Manufacturing"}
      heroPara={"AI-Driven Manufacturing Solutions for a Better Future"}
    >
      <PinkBackgroundWithCardsComponent
        title={"How Can AI Elevate Manufacturing?"}
        description={
          "AI can revolutionize manufacturing by improving diagnosis, personalizing treatment plans, accelerating drug discovery, automating administrative tasks, enabling remote patient monitoring, and preventing fraud. These advancements lead to better patient outcomes, increased efficiency, and reduced costs in the manufacturing system."
        }
        cards={ManufacturingCards}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default Manufacturing;
