// TestimonialPage.js

import React from "react";
import Testimonial from "../TestimonialsComponent/Testimonial";
import testimonialsData from "../../JsonData/testimonialsData.js";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function TestimonialPage() {
  return (
    <div className="testimonial-slider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1} // Show only 1 testimonial at a time
        navigation
        pagination={{ clickable: true }}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Testimonial
              image={testimonial.image}
              imagePosition={testimonial.imagePosition}
              testimonialHeading={testimonial.testimonialHeading}
              serviceType={testimonial.serviceType}
              clientName={testimonial.clientName}
              industry={testimonial.industry}
              testimonialPara={testimonial.testimonialPara}
              clientQuote={testimonial.clientQuote}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialPage;
