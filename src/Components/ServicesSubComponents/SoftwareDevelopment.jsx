import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/SoftwareDevelopment";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";

function SoftwareDevelopment() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Software Development"}
      heroPara={
        "Software Solutions That Drives Innovation"
      }
    >
      <PinkBackgroundWithCardsComponent
        title={"What Is Software Development?"}
        description={
          "Beyond cost savings, custom software can revolutionize your operations. By consolidating data, automating tasks, and streamlining workflows, you'll gain deeper insights, enhance productivity, and adapt to changing markets. But the benefits extend beyond efficiency. Custom solutions can improve customer experience, enrich data utility, and foster collaboration across departments. With the right partner guiding strategic alignment, meticulous planning, and skilled engineering, your custom technology will unlock unparalleled competitive advantages."
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

export default SoftwareDevelopment;
