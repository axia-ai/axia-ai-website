import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/Cybersecurity";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function Cybersecurity() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Cybersecurity"}
      heroPara={"Safeguarding Your Digital World"}
    >
      <PinkBackgroundWithCardsComponent
        title={"What Is Cybersecurity?"}
        description={
          "Cybersecurity is the practice of protecting computer systems, networks, and data from unauthorized access or criminal use. AI can enhance cybersecurity by automating threat detection, analyzing vast datasets for anomalies, and predicting potential attacks. AI-powered tools can also learn and adapt to evolving threats, improving the effectiveness of cybersecurity measures."
        }
        cards={FirstDeck}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default Cybersecurity;