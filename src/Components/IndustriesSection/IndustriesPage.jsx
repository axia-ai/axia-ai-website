// src/pages/IndustriesPage.js
import React from "react";
import { IndustryCards } from "../../JsonData/IndustryCards";
import PinkBackgroundWithCardsComponent from "../ReusableComponents/PinkBackgroundWithCardsComponent";
import TestimonialPage from "../TestimonialSection/TestimonialSection";

function IndustriesPage() {
  return (
    <>
      <PinkBackgroundWithCardsComponent
        title={"AI Solutions That Deliver A Glimpse Of The Future"}
        description={
          "We believe that bold actions shape the future. Leading with ambition demands the courage to adapt. While doing what's right is often challenging, it's always worthwhile."
        }
        cards={IndustryCards}
      />
      <TestimonialPage/>
    </>
  );
}

export default IndustriesPage;
