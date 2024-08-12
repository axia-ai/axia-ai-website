import React from "react";
import AboutUsTestimonialsCards from "./AboutUsTestimonialsCards";
// import {intro} from '../../assets/intro.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const AboutUsTestimonials = () => {
  return (
    <>
      <div className="flex items-center justify-center px-28 max-md:px-0 max-md:w-auto">
        <Swiper modules={[Navigation]} slidesPerView={1} navigation>
          <SwiperSlide>
            <AboutUsTestimonialsCards
              // img = {}
              head="What our client says about our services."
              para=" “This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend! This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!” "
            />
          </SwiperSlide>
          <SwiperSlide>
            <AboutUsTestimonialsCards
              head="What our client says about our services."
              para=" “This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend! This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!” "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default AboutUsTestimonials;
