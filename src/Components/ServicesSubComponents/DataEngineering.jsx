import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/DataEngineering";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";

function DataScience() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Data Engineering"}
      heroPara={
        "Your Data Foundation for AI Success"
      }
    >
      <PinkBackgroundWithCardsComponent
        title={"What is Data Engineering?"}
        description={
          "Data engineering is the practice of designing and building systems to collect, store, and analyze data at scale. It involves extracting, transforming, and loading (ETL) data from various sources, constructing data pipelines, and ensuring data quality and reliability. It plays a crucial role in enabling organizations to make informed decisions based on data-driven insights."
        }
        cards={FirstDeck}
      />
      <Testimonial
        image={testimonial1}
        imagePosition={"left"}
        testimonialHeading={"Social Media Mobile App and Website"}
        serviceType={"Mobile App and Website Development"}
        clientName={"Quila Flower LLC/Quick Friends"}
        testimonialPara={
          "Our client wanted to create a way for people, especially those from military families like hers, to create real-life friendships quickly. She wanted to create a social networking custom cross-platform app that integrated events and chat to help people connect with new friends on a deeper, more meaningful basis."
        }
        clientQuote={"They’re one of the best vendors I’ve worked with."}
      />
    </Layout>
  );
}

export default DataScience;
