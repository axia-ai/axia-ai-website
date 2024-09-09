import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/DataEngineering";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function DataScience() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Data Engineering"}
      heroPara={"Your Data Foundation for AI Success"}
    >
      <PinkBackgroundWithCardsComponent
        title={"What is Data Engineering?"}
        description={
          "Data engineering is the practice of designing and building systems to collect, store, and analyze data at scale. It involves extracting, transforming, and loading (ETL) data from various sources, constructing data pipelines, and ensuring data quality and reliability. It plays a crucial role in enabling organizations to make informed decisions based on data-driven insights."
        }
        cards={FirstDeck}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default DataScience;
