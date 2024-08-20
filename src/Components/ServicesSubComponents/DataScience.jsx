import React from "react";
import Layout from "../Layout/Layout";
import { ServiceCards } from "../../JsonData/ServiceCards";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import testimonial1 from "../../assets/testimonial-1.png";
import Testimonial from "../TestimonialsComponent/Testimonial";
import CtaServices from "../ServicesComponent/CtaServices";
import TargetCard from "../ServicesComponent/TargetCard";

function DataScience() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Data Science"}
      heroPara={
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 's"
      }
    >
      <PinkBackgroundWithCardsComponent
        title={"Analytics that feels like it’s from the future"}
        description={
          "Analytics that feels like it’s from the future analytics that feels like it’s from the future"
        }
        cards={ServiceCards}
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
      <PinkBackgroundWithCardsComponent
        title={"Analytics that feels like it’s from the future"}
        description={
          "Analytics that feels like it’s from the future analytics that feels like it’s from the future"
        }
        cards={ServiceCards}
      />
      <TargetCard />
      <Testimonial
        image={testimonial1}
        imagePosition={"right"}
        testimonialHeading={"Social Media Mobile App and Website"}
        serviceType={"Mobile App and Website Development"}
        clientName={"Quila Flower LLC/Quick Friends"}
        testimonialPara={
          "Our client wanted to create a way for people, especially those from military families like hers, to create real-life friendships quickly. She wanted to create a social networking custom cross-platform app that integrated events and chat to help people connect with new friends on a deeper, more meaningful basis."
        }
        clientQuote={"They’re one of the best vendors I’ve worked with."}
      />
      <CtaServices />
      <PinkBackgroundWithCardsComponent
        title={"Analytics that feels like it’s from the future"}
        description={
          "Analytics that feels like it’s from the future analytics that feels like it’s from the future"
        }
        cards={ServiceCards}
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
