import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/DevOps";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function Devops() {
  return (
    <Layout
      subPage={true}
      heroHeading={"DevOps"}
      heroPara={
        "Accelerate Your AI Development Lifecycles with Modern Deployment Strategies"
      }
    >
      <PinkBackgroundWithCardsComponent
        title={"What is DevOps/MLOps?"}
        description={
          "DevOps is a collaborative approach that integrates development and operations teams to streamline software delivery. It emphasizes communication, automation, and continuous improvement. MLOps is a specialized subset of DevOps focused on machine learning models, aiming to streamline their development, deployment, and maintenance."
        }
        cards={FirstDeck}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default Devops;
