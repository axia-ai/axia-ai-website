import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/ChatGPTIntegrations";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function SoftwareService() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Chat Integrations"}
      heroPara={"Unleash the Potential of ChatGPT in Your Business"}
    >
      <PinkBackgroundWithCardsComponent
        title={"What is ChatGPT?"}
        description={
          "ChatGPT, a cutting-edge AI chatbot developed by OpenAI, has revolutionized conversational AI with its ability to understand requests, ask clarifying questions, admit mistakes, and refuse inappropriate requests. Our team of AI experts can seamlessly integrate ChatGPT into your business, enabling you to streamline operations and drive long-term success. Whether you need customer service, process automation, or content creation, we provide end-to-end AI solutions, from development to deployment. Our commitment to best practices ensures your AI implementation is effective and aligns with your business goals."
        }
        cards={FirstDeck}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default SoftwareService;
