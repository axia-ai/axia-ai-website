import React from "react";
import Layout from "../Layout/Layout";
import { EducationCards } from "../../JsonData/Industries/Education";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function Education() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Education"}
      heroPara={"AI-Driven Education Solutions for a Better Future"}
    >
      <PinkBackgroundWithCardsComponent
        title={"How Can AI Elevate Education?"}
        description={
          "AI can revolutionize education by improving diagnosis, personalizing treatment plans, accelerating drug discovery, automating administrative tasks, enabling remote patient monitoring, and preventing fraud. These advancements lead to better patient outcomes, increased efficiency, and reduced costs in the education system."
        }
        cards={EducationCards}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default Education;
