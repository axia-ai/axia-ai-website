import React from "react";
import Layout from "../Layout/Layout";
import { LegalCards } from "../../JsonData/Industries/Legal";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function Legal() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Legal"}
      heroPara={"AI-Driven Legal Solutions for a Better Future"}
    >
      <PinkBackgroundWithCardsComponent
        title={"How Can AI Elevate Legal?"}
        description={
          "AI can revolutionize Legal by improving diagnosis, personalizing treatment plans, accelerating drug discovery, automating administrative tasks, enabling remote patient monitoring, and preventing fraud. These advancements lead to better patient outcomes, increased efficiency, and reduced costs in the Legal system."
        }
        cards={LegalCards}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default Legal;
