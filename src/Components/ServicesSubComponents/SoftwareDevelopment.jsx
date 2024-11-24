import React from "react";
import Layout from "../Layout/Layout";
import { FirstDeck } from "../../JsonData/Services/SoftwareDevelopment";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import OurProcess from "../OurProcess";
import TestimonialSection from "../../Components/TestimonialSection/TestimonialSection";

function SoftwareDevelopment() {
  return (
    <Layout
      subPage={true}
      heroHeading={"Software Development"}
      heroPara={"Software Solutions That Drives Innovation"}
    >
      <PinkBackgroundWithCardsComponent
        title={"What Is Software Development?"}
        description={
          "Beyond cost savings, custom software can revolutionize your operations. By consolidating data, automating tasks, and streamlining workflows, you'll gain deeper insights, enhance productivity, and adapt to changing markets. But the benefits extend beyond efficiency. Custom solutions can improve customer experience, enrich data utility, and foster collaboration across departments. With the right partner guiding strategic alignment, meticulous planning, and skilled engineering, your custom technology will unlock unparalleled competitive advantages."
        }
        cards={FirstDeck}
      />
      <TestimonialSection />
      <OurProcess />
    </Layout>
  );
}

export default SoftwareDevelopment;
