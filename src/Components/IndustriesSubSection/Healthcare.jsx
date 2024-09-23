import React from "react";
import Layout from "../Layout/Layout";
import { HealthCareCards } from "../../JsonData/Industries/Healthcare";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function HealthCare() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Healthcare"}
      heroPara={"AI-Driven Healthcare Solutions for a Better Future"}
    >
      <PinkBackgroundWithCardsComponent
        title={"How Can AI Elevate Healthcare?"}
        description={
          "AI can revolutionize healthcare by improving diagnosis, personalizing treatment plans, accelerating drug discovery, automating administrative tasks, enabling remote patient monitoring, and preventing fraud. These advancements lead to better patient outcomes, increased efficiency, and reduced costs in the healthcare system."
        }
        cards={HealthCareCards}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default HealthCare;
