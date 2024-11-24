import React from "react";
import Testimonial from "./Testimonial";
import testimonialsData from "../../JsonData/testimonialsData.js";

function TestimonialPage() {
  return (
    <>
      {testimonialsData.map((testimonial, index) => (
        <Testimonial
          key={index}
          image={testimonial.image}
          imagePosition={testimonial.imagePosition}
          testimonialHeading={testimonial.testimonialHeading}
          serviceType={testimonial.serviceType}
          clientName={testimonial.clientName}
          industry={testimonial.industry}
          testimonialPara={testimonial.testimonialPara}
          clientQuote={testimonial.clientQuote}
        />
      ))}
    </>
  );
}

export default TestimonialPage;
